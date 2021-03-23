import * as clientMapping from "../../../support/constants/client.js";
import * as portfolioMapping from "../../../support/constants/portfolio.js";
import * as constantsSelectors from "../../constants/constantsSelectors.js"

Cypress.Commands.add("ProcessClientFile_Assert", (fileLocation) => { //this is a near duplicate of ProcessClientFile - will refactor later
  cy.login("live", "username1", "password1");

  cy.readFile(fileLocation).then(function (fileContents) {
      fileContents = fileContents.replace(/[\t\n\r]/gm, ""); //remove new lines and tabs

      var API_Requests = cy.getRequestXML(fileContents); //translates are string of xml into an object we can work with
      var Clients = API_Requests["Clients"]; //get the <Clients> section of the xml
      var Client = null; // this will contain the client we want to process
      var ClientSur = API_Requests["Clients"]["Client"]["Surname"];

      if (Array.isArray(Clients.Client)) {
        //checking if it is an array as an array is dealt with in a different way than a single entity
        //multiple clients to create
        for (var x = 0; x < Clients.Client.length; x++) {
          Client = Clients.Client[x];
          cy.RetrieveClientUsingClientSearch(ClientSur);
          cy.AssertClient(Client);
          cy.RetrieveClientPortfolios();
        }
      } else {
        //One client to create
        Client = API_Requests["Clients"]["Client"]; // same as <root><clients><client>
        cy.RetrieveClientUsingClientSearch(ClientSur);
        cy.AssertClient(Client);
        cy.RetrieveClientPortfolios();
      }
    }); //end readFile
  
});


Cypress.Commands.add("SearchHasCompleted", (callback) => {
  cy.get(".overviewHeader").find("div").find("span").contains("Matching Client",{timeout:32000}).then(function($span){ //initial search completes as header contains x Matching Clients
    var NoMatchingClients = $span.text();
    var numb = NoMatchingClients.replace(/[^0-9]/g,''); //extract numbers from text only
    if (numb > 0) { 
     cy.get("#StoryCarousel4 .TypeCompositePanel .tableContainer tr",{timeout:32000}).then(function(){     //now we wait for the results grid to finish loading
      debugger;
      callback();
      }) 
    } else {//no clients = 0 matching clients
      cy.get("#StoryCarousel4 .TypeCompositePanel .tableContainer",{timeout:32000}).then(function(){ //no clients so no trs to wait for
        debugger;
        callback();
      }) 
    }    
  })
})

Cypress.Commands.add("RetrieveClientUsingClientSearch", (SearchParam) => {
  cy.get('#ExistingClientsIconMenu').click();
  cy.clickThumbnail('Client Search', {timeout:16000});
  var DefaultSearchCompletedCallback = function() { //This function exectutes only when the default search has finished loading
    var SearchCompletedCallback = function(){ //This function executes only when out client search has finished loading
        cy.wait(1000); //1 second ui catchup to prevent any detatching from async refreshes
        cy.get('#StoryCarousel4 .TypeCompositePanel .tableContainer', {timeout:16000}).find('tr', {timeout:16000}).first().dblclick();
        cy.clickThumbnail('Client Summary');
        cy.get('#EditClientIconMenu', {timeout:16000}).click();  
    }
    cy.clickThumbnail('Client Search', {timeout:16000});
    cy.get(".JSSORPopUpMenu.DashboardNo_9D8375A5-D2F6-4073-B19D-1F128A6CAED3 .JSSORPopUpMenu_Open").then(function(){ //wait till client search menu is actually open                                                                                                        //- JSSORPopUpMenu_Open is used by the amend search popup code and crashes if its not present
      cy.get('#AmendClientSearch', {timeout:17000}).click();
      cy.get(".AmendSearchPopup_Container").then(function(){ //check amend search has opened before continuing
        cy.get(constantsSelectors.searchTextMatch).type(SearchParam);
        cy.get('.OverviewSearchButton').click();
        cy.SearchHasCompleted(SearchCompletedCallback);
      })
    })
    
  }
  cy.SearchHasCompleted(DefaultSearchCompletedCallback);
});


Cypress.Commands.add("AssertClient", (Client) => {

  cy.ProcessAssert_UI(Client, clientMapping.ClientInputs);

  cy.clickAccordion(constantsSelectors.clientDetailsPopup,'Family Details');
  cy.get("#FamilyDetails .client_info_table").then(function(){
    cy.ProcessAssert_UI(Client, clientMapping.FamilyDetails);
  })

  cy.clickAccordion(constantsSelectors.clientDetailsPopup,'Health Details');
  cy.get("#HealthDetails .client_info_table").then(function(){
    cy.ProcessAssert_UI(Client, clientMapping.ClientHealth);
  })
  
  cy.clickAccordion(constantsSelectors.clientDetailsPopup,'Tax and Lifetime Allowance');
  cy.get("#TaxAndLifetimeAllowance .client_info_table").then(function(){
    cy.ProcessAssert_UI(Client, clientMapping.Tax);
  })

  cy.clickAccordion(constantsSelectors.clientDetailsPopup,'Contact Details');
  cy.get("#ContactDetails .client_info_table").then(function(){
    cy.ProcessAssert_UI(Client, clientMapping.ClientContact);
  })
 
  cy.clickAccordion(constantsSelectors.clientDetailsPopup,'Service Basis');
  cy.get("#ServiceBasis .autoSerServeiceBasisTable").then(function(){
    cy.ProcessAssert_UI(Client, clientMapping.ServiceBasis);
  })
  

});

//without the callbacks
// Cypress.Commands.add("RetrieveClientPortfolios", () => {
//   cy.get(".btn-viewportfolios-action > .ui-button-text").click({force:true});
//   cy.wait(1000);
//   var SearchCompletedCallback = function(){
//   cy.get('#GridMenu_b3301c9c-a043-4ef5-a42e-0c3902b6a6c1').then(function(){ //wait for popup menu to be present
//   cy.get('#Client_ViewPortfolios > div.gridContainer > div > div.wijmo-wijgrid-fixedview > div.wijmo-wijgrid-scroller.wijmo-wijsuperpanel.ui-widget.ui-widget-content.ui-corner-all > div > div > div > div > table', {timeout:16000})
//     .wait(1000)
//     .children().find('tr').should('be.visible')
//     // .then(function(){
//     .each( ($el, index) => {
//       cy.get($el).dblclick(index);
//       cy.AssertClientPortfolios();
//     })
//     })
//   }
//   })



Cypress.Commands.add("AssertClientPortfolios", () => {
  cy.ProcessAssert_UI(Portfolios, portfolioMapping.Portfolio_BasicDetailsInputs);

})

// var SearchCompletedCallback = function(){
//   cy.wait(1000); //1 second ui catchup to prevent any detatching from async refreshes
//   cy.get('#StoryCarousel4 .TypeCompositePanel .tableContainer', {timeout:16000}).find('tr', {timeout:16000}).first().dblclick();
//   cy.clickThumbnail('Client Summary');
//   cy.get('#EditClientIconMenu', {timeout:16000}).click();  
// }

Cypress.Commands.add("PortfolioSearchHasCompleted", (callback) => {

  cy.get('#Client_ViewPortfolios > div.gridContainer > div > div.wijmo-wijgrid-fixedview > div.wijmo-wijgrid-scroller.wijmo-wijsuperpanel.ui-widget.ui-widget-content.ui-corner-all > div > div > div > div > table',{timeout:32000}).then(function(tr){     //now we wait for the results grid to finish loading
     var rows = tr.children().find('tr');
    if (rows > 0) { 
     cy.get('#Client_ViewPortfolios > div.gridContainer > div > div.wijmo-wijgrid-fixedview > div.wijmo-wijgrid-scroller.wijmo-wijsuperpanel.ui-widget.ui-widget-content.ui-corner-all > div > div > div > div > table',{timeout:32000}).then(function(){     //now we wait for the results grid to finish loading
      callback();
      }) 
    } else {//no clients = 0 matching clients
      cy.get("'#Client_ViewPortfolios > div.gridContainer > div > div.wijmo-wijgrid-fixedview > div.wijmo-wijgrid-scroller.wijmo-wijsuperpanel.ui-widget.ui-widget-content.ui-corner-all > div > div > div > div",{timeout:32000}).then(function(){ //no clients so no trs to wait for
       callback();
      }) 
    }    
  })
})


  // cy.get(".overviewHeader").find("div").find("span").contains("Matching Client",{timeout:32000}).then(function($span){ //initial search completes as header contains x Matching Clients
  //   var NoMatchingClients = $span.text();
  //   var numb = NoMatchingClients.replace(/[^0-9]/g,''); //extract numbers from text only
  //   if (numb > 0) { 
  
Cypress.Commands.add("RetrieveClientPortfolios", () => {
  cy.get(".btn-viewportfolios-action > .ui-button-text").click({force:true});
  cy.wait(1000);
  var SearchCompletedCallback = function(){
  cy.get('#GridMenu_b3301c9c-a043-4ef5-a42e-0c3902b6a6c1').then(function(){ //wait for popup menu to be present
  cy.get('#Client_ViewPortfolios > div.gridContainer > div > div.wijmo-wijgrid-fixedview > div.wijmo-wijgrid-scroller.wijmo-wijsuperpanel.ui-widget.ui-widget-content.ui-corner-all > div > div > div > div > table', {timeout:16000})
    .wait(1000)
    .children().find('tr').should('be.visible')
    // .then(function(){
    .each( ($el, index) => {
      cy.get($el).dblclick(index);
      cy.AssertClientPortfolios();
    })
    })
  }
  cy.PortfolioSearchHasCompleted(SearchCompletedCallback);
  })