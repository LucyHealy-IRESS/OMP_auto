
import * as PortfolioAdvConstants from "../../constants/portfolio_Advanced.js"
import * as Constants from "../../constants/constantsSelectors.js"

Cypress.Commands.add("PortfolioTargetAssetAllocation_Assert_1", (EntityData) => {

});

Cypress.Commands.add("PortfolioTargetAssetAllocation_Assert_2", (EntityData) => {

    var Tier1 = EntityData["Category_Name"];
    var Tier2 = EntityData["Subcategory_Name"];
    var Tier3 = EntityData["Subcategory_Two_Name"];
    var Amount = EntityData["Value"];

    cy.clickAccordion_PreCheck(Constants.PortfolioAdv_ACAssetAllocation,PortfolioAdvConstants.PortfoliosAdvancedEditorSelector,"Asset Allocations")
    cy.get('.AssetAllocation_table').find('tbody')
        .contains(Tier1);

    cy.get('.AssetAllocation_table').find('tbody')
        .contains(Tier2);

    cy.get('.AssetAllocation_table').find('tbody')
        .contains(Tier2);
        
    cy.get('.AssetAllocation_table').find('tbody')
        .contains(Amount);

});

Cypress.Commands.add("PortfolioTargetAssetAllocation_Assert_3", (EntityData) => {});