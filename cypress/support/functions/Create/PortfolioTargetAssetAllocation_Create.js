import * as PortfolioAdvConstants from "../../constants/portfolio_Advanced.js"
import * as Constants from "../../constants/constantsSelectors.js"

Cypress.Commands.add("PortfolioTargetAssetAllocation_Create_1", (EntityData) => {});  

Cypress.Commands.add("PortfolioTargetAssetAllocation_Create_2", (EntityData) => {

    cy.clickAccordion_PreCheck(Constants.PortfolioAdv_ACAssetAllocation,PortfolioAdvConstants.PortfoliosAdvancedEditorSelector,"Asset Allocations")
    cy.PopulateEditor(PortfolioAdvConstants.PortfoliosAdvancedEditorSelector,PortfolioAdvConstants.Portfolio_AssetAllocation_Advanced, EntityData, "Portfolio Advanced");
    cy.get('[style="position: relative; float: left; width: 7%; padding: 0; margin: 0; text-align: center; height: 40px"] > .ui-button > .ui-button-text').click();
    
});

Cypress.Commands.add("PortfolioTargetAssetAllocation_Create_3", (EntityData) => {});

Cypress.Commands.add("PortfolioTargetAssetAllocation_Tidy", (ActionFileNo) => {});