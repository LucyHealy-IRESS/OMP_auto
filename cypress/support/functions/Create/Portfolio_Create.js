import * as PortfolioConstants from "../../constants/portfolio.js";

Cypress.Commands.add("Portfolio_Create_1", (EntityData) => {

    //Portfolio Editor simple mode
    cy.clickButtonInPopup(PortfolioConstants.ClientPortfoliosSelector,"Add New Portfolio");
    cy.PopulateEditor(PortfolioConstants.PortfoliosQuickEditorSelector,PortfolioConstants.PortfolioAccordians,EntityData);
    //cy.PopulateEditor(PortfolioConstants.PortfoliosAdvancedEditorSelector,PortfolioConstants.PortfolioAccordioansAdvanced,EntityData); //this will fail as the portfolio popup has a differnet id depending if edit or add, i need to look into that

    
});

Cypress.Commands.add("Portfolio_Create_2", (EntityData) => {
    //Portfolio Editor Advanced mode
    cy.clickButtonInPopup(PortfolioConstants.ClientPortfoliosSelector,"Add New Portfolio");
    cy.get("[aria-describedby='" + PortfolioConstants.PortfoliosQuickEditorSelector.replace("#","") + "'] #btn-advancedDetails-action").click();
    //cy.populate for Advanced Details Editor
});

Cypress.Commands.add("Portfolio_Create_3", (EntityData) => {});