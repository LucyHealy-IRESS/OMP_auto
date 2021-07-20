import * as ClientConstants from "../../constants/client.js";
import * as Constants from "../../constants/Core.js";

Cypress.Commands.add("Client_Create_1", (EntityData) => {
    //Navigate to New client
  


    cy.get('.contentContent')
      .find('.ui-icon ui-icon-close')
      .its('length')
      .then(listing => {
    const listingCount = Cypress.$(listing).length;

    if (listingCount > 0) {
      cy.log(listingCount)
    
      //expect(listing).to.have.length(listingCount);
    }
    else {



    cy.get("#NewClientIconMenu", { timeout: Constants.Timeout_MenuButtonWait }).click();

    cy.get("#EditClientPopup .client_info_table", {  //ensure client editor is there and client info section has loaded
      timeout: Constants.Timeout_EditorWait,
    }).then(function () {         
        cy.PopulateEditor(ClientConstants.ClientEditorSelector,ClientConstants.AllClientInputs,EntityData,"Client");
        cy.wait(1000);
        cy.clickButtonInPopup(ClientConstants.ClientEditorSelector,"Ok");       
    });
  }
});   
});


Cypress.Commands.add("Client_Create_2", (EntityData) => {
    cy.Client_Create_1(EntityData);
});

Cypress.Commands.add("Client_Create_3", (EntityData) => {});


Cypress.Commands.add("Client_Tidy", (ActionFileNo) => {});


Cypress.Commands.add("Client_Create_API", (Client) => {
    var Portfolios = null;
    if (Client.Portfolios) {
      delete Client.Portfolios; //Portfolios to the API are a seperate call, they API will not accept in the client xml
    }
  
    //xml2js library is going to take our xml object and turn it back into a string for the API to receive
    var xml2js = require("xml2js");
    var builder = new xml2js.Builder({headless: true,explicitRoot: false,rootName: "Client"});
    var xml = builder.buildObject(Client);
    xml = cy.ReplaceAutomationMappingOverrides(ClientConstants.AllClientInputs,xml);
    xml = xml.replace("<Client>", '<Client xmlns="http://api.omsystems.co.uk">'); //Add the namespace back in
    cy.API_Call(xml, Constants.API_Create);
})


