import * as PortfolioConstants from "../../constants/portfolio.js";

Cypress.Commands.add("Portfolio_Create", (EntityData) => {

    //First time in simple mode
    cy.clickButtonInPopup(PortfolioConstants.ClientPortfoliosSelector,"Add New Portfolio");
<<<<<<< HEAD

    cy.PopulateEditor(PortfolioConstants.PortfoliosQuickEditorSelector,PortfolioConstants.PortfolioAccordioansSimple,EntityData);
    //cy.PopulateEditor(PortfolioConstants.PortfoliosAdvancedEditorSelector,PortfolioConstants.PortfolioAccordioansAdvanced,EntityData); //this will fail as the portfolio popup has a differnet id depending if edit or add, i need to look into that



=======
    cy.PopulateEditor(PortfolioConstants.PortfoliosQuickEditorSelector,PortfolioConstants.PortfolioAccordians,EntityData);
    
>>>>>>> 79fef7ad78a659378f73529ab141e448de545588
})