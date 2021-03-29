import * as ClientConstants from "../../constants/client.js";

Cypress.Commands.add("Portfolios_Create_1", (EntityData) => {
    //click > Portfolios
    cy.wait(1000);
    cy.clickButtonInPopup(ClientConstants.ClientEditorSelector,"View Portfolios >");
});

Cypress.Commands.add("Portfolios_Create_2", (EntityData) => {
    cy.Portfolios_Create_1(EntityData);
});

Cypress.Commands.add("Portfolios_Create_3", (EntityData) => {});

Cypress.Commands.add("Portfolios_Tidy", (ActionFileNo) => {});