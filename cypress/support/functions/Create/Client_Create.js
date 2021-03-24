import * as ClientConstants from "../../constants/client.js";

Cypress.Commands.add("Client_Create_1", (EntityData) => {
    //Navigate to New client
    cy.get("#NewClientIconMenu", { timeout: 36000 }).click();

    cy.get("#EditClientPopup .client_info_table", {  //ensure client editor is there and client info section has loaded
      timeout: 226000,
    }).then(function () {         
        cy.PopulateEditor(ClientConstants.ClientEditorSelector,ClientConstants.ClientAccordians,EntityData);       
    });
   
});

Cypress.Commands.add("Client_Create_2", (EntityData) => {
    cy.Client_Create_1(EntityData);
});

Cypress.Commands.add("Client_Create_3", (EntityData) => {});