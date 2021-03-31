import * as ClientConstants from "../../constants/client.js";
import * as Constants from "../../constants/Core.js";

Cypress.Commands.add("Client_Create_1", (EntityData) => {
    //Navigate to New client
    cy.get("#NewClientIconMenu", { timeout: Constants.Timeout_MenuButtonWait }).click();

    cy.get("#EditClientPopup .client_info_table", {  //ensure client editor is there and client info section has loaded
      timeout: Constants.Timeout_EditorWait,
    }).then(function () {         
        cy.PopulateEditor(ClientConstants.ClientEditorSelector,ClientConstants.AllClientInputs,EntityData,"Client");       
    });
   
});

Cypress.Commands.add("Client_Create_2", (EntityData) => {
    cy.Client_Create_1(EntityData);
});

Cypress.Commands.add("Client_Create_3", (EntityData) => {});


Cypress.Commands.add("Client_Tidy", (ActionFileNo) => {})