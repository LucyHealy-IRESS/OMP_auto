import * as Constants from "../../constants/Core.js";

Cypress.Commands.add("ModellerQuote_Assert_1", (EntityData) => {
    var Reference = EntityData.Modeller_ClientDetails["Reference"];

    cy.menuClick('Client Summary', '#ClientSummaryExistingQuotesMenu');
    cy.wait(2000)
    cy.get('#Client_ViewExistingQuotes table').find('tr', { timeout: Constants.Timeout_Medium }).find('td').contains(Reference).dblclick() //loads the quote ready for assertion
});

Cypress.Commands.add("ModellerQuote_Assert_2", (EntityData) => { });

Cypress.Commands.add("ModellerQuote_Assert_3", (EntityData) => { });
