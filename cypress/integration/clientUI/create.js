import * as clientMapping from "../../support/constants/client.js";
import * as portfolioMapping from "../../support/constants/portfolio.js";

Cypress.Commands.add("CreateClientCallback", (Client) => {
  cy.ProcessCreate_UI(Client, clientMapping.ClientInputs);
  cy.get('.clientdetailseditorOverview').children().contains('Health Details').click();
  cy.ProcessCreate_UI(Client, clientMapping.ClientHealth);
  cy.get('.clientdetailseditorOverview').children().contains('Contact Details').click();
  cy.ProcessCreate_UI(Client, clientMapping.ClientContact);
  cy.get(".btn-viewportfolios-action > .ui-button-text").click(); //Click 'View Portfolios >' in the Client Editor

  cy.get("#Client_ViewPortfolios", { timeout: 226000 }).then(function (fileContents) {   //Portfolio Editor is open
    cy.CreateClientPortfolios(Client);
  });

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
  cy.login("staging", "username2", "password2");
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

describe("Create Client and Client Portfolios", () => {
  it("Create Client and Portfolio via XML", () => {
    var ExecutiionFolderLocation = "cypress/fixtures/ExecutionFolder";
    cy.task("ReadFolderDirectory", ExecutiionFolderLocation).then(
      (fileNames) => {
        if (fileNames.length > 0) {
          for (var x = 0; x < fileNames.length; x++) {
            var fileLocation = ExecutiionFolderLocation + "/" + fileNames[x];
            cy.ProcessClientFile(fileLocation);
          }
        }
      }
    );
  });
});
