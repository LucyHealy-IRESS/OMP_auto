import * as moConstants from "../../constants/modeller_CurrentPlans.js"
import * as moClientConstants from "../../constants/modeller_Client.js"

Cypress.Commands.add("ModellerQuote_Create_1", (EntityData) => {
    cy.menuClick('Client Summary', '#ClientSummaryRM') //Open modeller workspace from Client
});

Cypress.Commands.add("ModellerQuote_Create_2", (EntityData) => { });

Cypress.Commands.add("ModellerQuote_Create_3", (EntityData) => { });

Cypress.Commands.add("ModellerQuote_Tidy", (ActionFileNo) => { })


