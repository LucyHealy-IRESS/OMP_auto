import * as clientMapping from "../../../support/constants/client.js";
import * as portfolioMapping from "../../../support/constants/portfolio.js";
import * as selectors from "../../../support/constants/constantsSelectors.js";

Cypress.Commands.add("CreateClientCallback", (Client) => {
   cy.ProcessCreate_UI(Client, clientMapping.ClientInputs);
 
  cy.clickAccordion(selectors.clientDetailsPopup,'Family Details');
  cy.get("#FamilyDetails .client_info_table").then(function(){
    cy.ProcessCreate_UI(Client, clientMapping.FamilyDetails);
  })

  cy.clickAccordion(selectors.clientDetailsPopup,'Health Details');
  cy.get("#HealthDetails .client_info_table").then(function(){
    cy.ProcessCreate_UI(Client, clientMapping.ClientHealth);
  })
  
  cy.clickAccordion(selectors.clientDetailsPopup,'Tax and Lifetime Allowance');
  cy.get("#TaxAndLifetimeAllowance .client_info_table").then(function(){
    cy.ProcessCreate_UI(Client, clientMapping.Tax);
  })

  cy.clickAccordion(selectors.clientDetailsPopup,'Contact Details');
  cy.get("#ContactDetails .client_info_table").then(function(){
    cy.ProcessCreate_UI(Client, clientMapping.ClientContact);
  })
 
  cy.clickAccordion(selectors.clientDetailsPopup,'Service Basis');
  cy.get("#ServiceBasis .autoSerServeiceBasisTable").then(function(){
    cy.ProcessCreate_UI(Client, clientMapping.ServiceBasis);
  })

 cy.get(".btn-viewportfolios-action > .ui-button-text").click(); //Click 'View Portfolios >' in the Client Editor

  cy.get("#Client_ViewPortfolios", { timeout: 226000 }).then(function (fileContents) {   //Portfolio Editor is open
    cy.CreateClientPortfolios(Client);
  });
});

Cypress.Commands.add("TranslateProductID", (Portfolio, XmlInputObject) => {
  var ProductID = Portfolio["ProductID"].trim();
  ProductID = ["P", ProductID];
  ProductID = ProductID.join("_");
  cy.SetDropdown(XmlInputObject.Selector, portfolioMapping[ProductID]);
});
//could both of thse be grouped into one function with an if statement?
Cypress.Commands.add("TranslateProviderID", (Portfolio, XmlInputObject) => {
  var ProviderID = Portfolio["ProviderID"].trim();
  ProviderID = ProviderID.replace(/-/g, "");
  cy.SetDropdown(XmlInputObject.Selector, portfolioMapping[ProviderID]);
});


Cypress.Commands.add("CreateClientPortfolios_Investments", (Portfolio) => { 
    var CreateInvestment_Callback = function(){
        //click add add funds e.t.c
    }
  
    //will need a get here to ensure the button has appeared
    if (Portfolio.Investments && Portfolio.Investments.PortfolioInvestment) {
      var PortfolioInvestments = Portfolio.Investments.PortfolioInvestment;
     if (Array.isArray(PortfolioInvestments)) {
       for (var x = 0; x < Portfolios.Portfolio.length; x++) {
        CreateInvestment_Callback(PortfolioInvestments[x]);
       }
     } else {
      CreateInvestment_Callback(PortfolioInvestments);
     }
   }

})

Cypress.Commands.add("CreateClientPortfoliosCallback", (Portfolio) => {
  cy.contains("Add New Portfolio", { timeout: 226000 }).click();

  cy.get("#QuickEditPortfolioContentWrapper", { timeout: 226000 }).then(function(){ //New portfolio editor is on screen
    cy.ProcessCreate_UI(Portfolio,portfolioMapping.Portfolio_BasicDetailsInputs);
    cy.CreateClientPortfolios_Investments(Portfolio);
    cy.get('[aria-describedby="PortfolioAddPopUp"] > .ui-dialog-buttonpane > .ui-dialog-buttonset > .ui-button > .ui-button-text').contains("Ok").click();
  })
});

Cypress.Commands.add("CreateClientPortfolios", (Client) => {
  var Portfolios = null;
  if (Client.Portfolios) {
    Portfolios = Client.Portfolios;
  }

  if (Portfolios && Portfolios.Portfolio) {
    if (Array.isArray(Portfolios.Portfolio)) {
      for (var x = 0; x < Portfolios.Portfolio.length; x++) {
        var Portfolio = Portfolios.Portfolio[x];
        cy.CreateClientPortfoliosCallback(Portfolio);
      }
    } else {
      var Portfolio = Portfolios.Portfolio;
      cy.CreateClientPortfoliosCallback(Portfolio);
    }
  }
});

Cypress.Commands.add("ProcessClientFile", (fileLocation) => {
  cy.login("uat", "username1", "password2");
  cy.get("#NewClientIconMenu", { timeout: 36000 }).click();

  cy.get("#EditClientPopup .client_info_table", {  //ensure client editor is there and client info section has loaded
    timeout: 226000,
  }).then(function () {
    //get Client Object
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
          cy.CreateClientCallback(Client);
        }
      } else {
        //One client to create
        Client = API_Requests["Clients"]["Client"]; // same as <root><clients><client>
        cy.CreateClientCallback(Client);
      }
    }); //end readFile
  }); //end cy get EditClientPopup
});


