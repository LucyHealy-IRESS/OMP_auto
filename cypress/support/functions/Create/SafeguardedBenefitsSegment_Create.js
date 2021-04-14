import * as PortfolioAdvConstants from "../../constants/portfolio_Advanced.js"
import * as Constants from "../../constants/constantsSelectors.js"

Cypress.Commands.add("SafeguardedBenefitsSegment_Create_1", (EntityData) => {
    cy.clickAccordion_PreCheck(Constants.PortfolioAdv_ACAssetAllocation,PortfolioAdvConstants.PortfoliosAdvancedEditorSelector,"Defined Income")
    cy.get('td > .link').click();
    cy.PopulateEditor(PortfolioAdvConstants.PortfoliosAdvancedEditorSelector,PortfolioAdvConstants.Portfolio_DefinedIncome_Advanced, EntityData, "Safeguarged Benefits Segment Editor");
    cy.get('.ui-dialog-buttonset > :nth-child(2) > .ui-button-text').click()
    //cy.clickButtonInPopup('#SafeguardedBenefitsSegmentEditorAccordian', 'OK');
});
    
Cypress.Commands.add("SafeguardedBenefitsSegment_Create_2", (EntityData) => {
    cy.SafeguardedBenefitsSegment_Create_1(EntityData);
});
    
Cypress.Commands.add("SafeguardedBenefitsSegment_Create_3", (EntityData) => {});
    
Cypress.Commands.add("SafeguardedBenefitsSegment_Tidy", (ActionFileNo) => {}); //it didn't read the content of this, I must debug later

