
import * as PortfolioAdvConstants from "../../constants/portfolio_Advanced.js"
import * as Constants from "../../constants/constantsSelectors.js"

Cypress.Commands.add("PortfolioTargetAssetAllocation_Assert_1", (EntityData) => {

});

Cypress.Commands.add("PortfolioTargetAssetAllocation_Assert_2", (EntityData) => {

    const AssetOutput = [EntityData["Tier1ID"], EntityData["Tier2ID"], EntityData["Tier3ID"], EntityData["Value"]];
    const process = AssetOutput.values();

    for (const value of process) {
    cy.clickAccordion_PreCheck(Constants.PortfolioAdv_ACAssetAllocation,PortfolioAdvConstants.PortfoliosAdvancedEditorSelector,"Asset Allocations")
    cy.get('.AssetAllocation_table').find('tbody')
        .contains(value);
    }
});

Cypress.Commands.add("PortfolioTargetAssetAllocation_Assert_3", (EntityData) => {});