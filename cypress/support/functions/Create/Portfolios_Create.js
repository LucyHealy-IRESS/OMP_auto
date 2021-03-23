import * as ClientConstants from "../../constants/client.js";

Cypress.Commands.add("Portfolios_Create", (EntityData) => {
    //click > Portfolios
    cy.clickButtonInPopup(ClientConstants.ClientEditorSelector,"View Portfolios >");
})