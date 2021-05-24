import * as swClientContants from "../../constants/switching_Client.js"

Cypress.Commands.add("Switching_ClientDetails_Assert_1", (EntityData) => {
    cy.wait(2000)
    cy.menuClick('Switching Quote', '#EditClientMenu').then(function(){
        cy.AssertEditor(swClientContants.ClientEditorSelector,swClientContants.AllClientInputs, EntityData, "Switching Client Details");
        cy.clickButtonInPopup(swClientContants.ClientEditorSelector,'Ok')
    });
});
    
Cypress.Commands.add("Switching_ClientDetails_Assert_2", (EntityData) => {});
    
Cypress.Commands.add("Switching_ClientDetails_Assert_3", (EntityData) => {});
    
