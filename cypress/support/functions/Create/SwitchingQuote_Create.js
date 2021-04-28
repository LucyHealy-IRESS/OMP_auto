import * as swContants from "../../constants/switching_currentPlans.js"
import * as swClientContants from "../../constants/switching_Client.js"

Cypress.Commands.add("SwitchingQuote_Create_1", (EntityData) => {
    cy.menuClick('Client Summary', '#ClientSummarySwitch') //Open switching workspace from Client
});
    
Cypress.Commands.add("SwitchingQuote_Create_2", (EntityData) => {});
    
Cypress.Commands.add("SwitchingQuote_Create_3", (EntityData) => {});
    
Cypress.Commands.add("SwitchingQuote_Tidy", (ActionFileNo) => {})


