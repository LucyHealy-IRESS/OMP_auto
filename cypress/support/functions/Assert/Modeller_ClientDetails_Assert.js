import * as moClientConstants from "../../constants/modeller_Client.js"

Cypress.Commands.add("Modeller_ClientDetails_Assert_1", (EntityData) => {
    cy.wait(2000)
    cy.menuClick('Modeller Quote', '#EditClientMenu').then(function () {
        cy.AssertEditor(moClientConstants.ClientEditorSelector, moClientConstants.AllClientInputs, EntityData, "Modeller Client Details");
        cy.clickButtonInPopup(moClientConstants.ClientEditorSelector, 'Ok')
    });
});

Cypress.Commands.add("Modeller_ClientDetails_Assert_2", (EntityData) => { });

Cypress.Commands.add("Modeller_ClientDetails_Assert_3", (EntityData) => { });

