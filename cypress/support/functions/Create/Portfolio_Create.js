import * as PortfolioConstants from "../../constants/portfolio.js";
import * as Portfolio_Adv_Constants from "../../constants/portfolio_Advanced.js";
import * as Constants from "../../constants/Core.js";

Cypress.Commands.add("Portfolio_Create_1", (EntityData) => {

cy.Portfolio_Create_2(EntityData);

    //Portfolio Editor simple mode
    //cy.clickButtonInPopup(PortfolioConstants.ClientPortfoliosSelector,"Add New Portfolio");
    //cy.PopulateEditor(PortfolioConstants.PortfoliosQuickEditorSelector,PortfolioConstants.AllPortfolioSimpleInputs,EntityData);
    //cy.PopulateEditor(PortfolioConstants.PortfoliosAdvancedEditorSelector,PortfolioConstants.PortfolioAccordioansAdvanced,EntityData); //this will fail as the portfolio popup has a differnet id depending if edit or add, i need to look into that

    
});

Cypress.Commands.add("Portfolio_Create_2", (EntityData) => {
    //Portfolio Editor Advanced mode
    cy.clickButtonInPopup(PortfolioConstants.ClientPortfoliosSelector,"Add New Portfolio");
    cy.get("[aria-describedby='" + PortfolioConstants.PortfoliosQuickEditorSelector.replace("#","") + "'] #btn-advancedDetails-action").click();

    cy.get(PortfolioConstants.PortfoliosAdvancedEditorSelector + " .AccordianContainer", {  //ensure portfolio adv editor is there and has loaded
        timeout: Constants.Timeout_EditorWait,
      }).then(function () {         
          cy.PopulateEditor(PortfolioConstants.PortfoliosAdvancedEditorSelector,Portfolio_Adv_Constants.AllPortfolioAdvancedInputs,EntityData);       
      });
    
});

Cypress.Commands.add("Portfolio_Create_3", (EntityData) => {});