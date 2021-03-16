import * as clientMapping from "../../../support/constants/client.js";
import * as portfolioMapping from "../../../support/constants/portfolio.js";


Cypress.Commands.add("ProcessClientFile_Assert", (fileLocation) => { //this is a near duplicate of ProcessClientFile - will refactor later
  cy.login("live", "username1", "password1");

  cy.readFile(fileLocation).then(function (fileContents) {
      fileContents = fileContents.replace(/[\t\n\r]/gm, ""); //remove new lines and tabs

      var API_Requests = cy.getRequestXML(fileContents); //translates are string of xml into an object we can work with
      var Clients = API_Requests["Clients"]; //get the <Clients> section of the xml
      var Client = null; // this will contain the client we want to process

      if (Array.isArray(Clients.Client)) {
        //checking if it is an array as an array is dealt with in a different way than a single entity
        //multiple clients to create
        for (var x = 0; x < Clients.Client.length; x++) {
          Client = Clients.Client[x];
          cy.RetrieveClientUsingClientSearch(Client);
        }
      } else {
        //One client to create
        Client = API_Requests["Clients"]["Client"]; // same as <root><clients><client>
        cy.RetrieveClientUsingClientSearch(Client);
      }
    }); //end readFile
  
});

Cypress.Commands.add("RetrieveClientUsingClientSearch", (Client) => {
  cy.get('#ExistingClientsIconMenu').click();
  cy.wait(16000);
  //cy.clickThumbnail(ClientSearch)
  cy.get('[data-u="thumbnavigator"]').children().contains('Client Search').click({force:true});
  cy.wait(16000);
  cy.get('#AmendClientSearch', {timeout:17000}).click({force:true}); //timeout not working here, need to leave wait in for now
  cy.get('.TextMatch').type('overview');
  cy.get('.OverviewSearchButton').click();
  cy.wait(16000);
  
  cy.get('.tableContainer', {timeout:16000}).children().find('tbody').find('tr').first().dblclick();
  cy.get('[data-u="thumbnavigator"]').children().contains('Client Summary').click({force:true});
  cy.get('#EditClientIconMenu', {timeout:16000}).click();
  cy.ProcessAssert_UI(Client, clientMapping.ClientInputs)
  //cy.ProcessAssert_UI


  // .each( ($el, index) => {
  //   cy.get($el).dblclick(index[0]);
  // })
    
    //'tr', '0').dblclick();

  
  // var tableResults = { cy.get('.tableContainer', {timeout:16000}).children().find('tbody').find('tr')};

  // let topResult = tableResults[0];
  // cy.get(topResult).dblclick();

  // if (Array.isArray(tableResults)) {
  //    {
  //     var topResult = tableResults[0];
  //     //var topResult = topResult[1]
  //     //console.log(tableResults);
  //   }
  //   cy.get(topResult).dblclick();
  // }

  //cy.get('.tableContainer', {timeout:16000}).children().find('tbody').find('tr');

  

});


Cypress.Commands.add("AssertClient", (Client) => {
  //LOG BACK IN ASSET, COMMENTED OUT WHILST STILL BUSY WITH CREATING IT ALL
  //   cy.reload();
  //   cy.login("uat", "username2", "password2");
  //   cy.get("#Continue", { timeout: 36000 }).click({ force: true });

  //   cy.get(
  //     "#StoryCarousel5_Slides .ThumbnailContainer .JssorThumbnailContainer_A141A33F-04B8-4697-8637-9DA2458B2C2B",
  //     { timeout: 36000 }
  //   ).click(); //Client client Summary buttton
  //   cy.wait(5000); //Allow the client workspace some breathing space to load the client in;
  //   cy.get("#EditClientIconMenu", { timeout: 36000 }).click(); //Client Edit Client Icon Button
  //   cy.get("#EditClientPopup .client_info_table").then(function () {
  //     //ensure client editor is there and client info section has loaded
  //     cy.ProcessAssert_UI(Client, clientMapping.ClientInputs);
  //   });
});