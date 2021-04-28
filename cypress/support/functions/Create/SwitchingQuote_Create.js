import * as swContants from "../../constants/switching.js"

Cypress.Commands.add("SwitchingQuote_Create_1", (EntityData) => {

    cy.menuClick('Client Summary', '#ClientSummarySwitch')
    cy.get(swContants.CurrentPlanListSelector).then(function(){
        cy.clickButtonInPopup(swContants.CurrentPlanListSelector, 'Add Plan')
    })

});
    
Cypress.Commands.add("SwitchingQuote_Create_2", (EntityData) => {});
    
Cypress.Commands.add("SwitchingQuote_Create_3", (EntityData) => {});
    
Cypress.Commands.add("SwitchingQuote_Tidy", (ActionFileNo) => {})


