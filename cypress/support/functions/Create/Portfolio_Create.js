import * as PortfolioConstants from "../../constants/portfolio.js";

Cypress.Commands.add("Portfolio_Create", (EntityData) => {

    //1.Click Access Point
    cy.clickButtonInPopup(PortfolioConstants.ClientPortfoliosSelector,"Add New Portfolio");

    cy.PopulateEditor(PortfolioConstants.PortfoliosQuickEditorSelector,PortfolioConstants.PortfolioAccordians,EntityData);

})