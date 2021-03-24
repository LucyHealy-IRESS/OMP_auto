import * as PortfolioConstants from "../../constants/portfolio.js";

Cypress.Commands.add("Portfolio_Create", (EntityData) => {

    //First time in simple mode
    cy.clickButtonInPopup(PortfolioConstants.ClientPortfoliosSelector,"Add New Portfolio");
    cy.PopulateEditor(PortfolioConstants.PortfoliosQuickEditorSelector,PortfolioConstants.PortfolioAccordians,EntityData);
    //cy.PopulateEditor(PortfolioConstants.PortfoliosAdvancedEditorSelector,PortfolioConstants.PortfolioAccordioansAdvanced,EntityData); //this will fail as the portfolio popup has a differnet id depending if edit or add, i need to look into that

    
})