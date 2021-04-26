import * as PortfolioAdvConstants from "../../constants/portfolio_Advanced.js"
import * as PortfolioSmpConstants from "../../constants/portfolio_Simple.js"
import * as Constants from "../../constants/constantsSelectors.js"

Cypress.Commands.add("SafeguardedBenefitsSegment_Create_1", (EntityData) => {
    cy.clickAccordion_PreCheck(Constants.PortfolioSmp_DefinedIncome,PortfolioSmpConstants.PortfoliosQuickEditorSelector,"Defined Income")
    cy.get('td > .link').click();
    cy.PopulateEditor(PortfolioSmpConstants.PortfolioSegmentEditorSelector,PortfolioSmpConstants.Portfolio_BasicDetails_SafeguardedBenefitsSegmentEditor_BasicDetails, EntityData, "Safeguarged Benefits Segment Editor");
    cy.PopulateEditor(PortfolioSmpConstants.PortfolioSegmentEditorSelector,PortfolioSmpConstants.Portfolio_BasicDetails_SafeguardedBenefitsSegmentEditor_IncomeDetails, EntityData, "Safeguarged Benefits Segment Editor");
    cy.PopulateEditor(PortfolioSmpConstants.PortfolioSegmentEditorSelector,PortfolioSmpConstants.Portfolio_BasicDetails_SafeguardedBenefitsSegmentEditor_RevaluationAndEscalation, EntityData, "Safeguarged Benefits Segment Editor");
    cy.get('[aria-describedby="EditSafeguardedBenefitSegmentPopup"] > .ui-dialog-buttonpane > .ui-dialog-buttonset > :nth-child(2) > .ui-button-text').click()
});
    
Cypress.Commands.add("SafeguardedBenefitsSegment_Create_2", (EntityData) => {
    cy.clickAccordion_PreCheck(Constants.PortfolioAdv_DefinedIncome,PortfolioAdvConstants.PortfoliosAdvancedEditorSelector,"Defined Income")
    cy.get('td > .link').click();
    cy.PopulateEditor(PortfolioAdvConstants.PortfolioSegmentEditorSelector,PortfolioAdvConstants.Portfolio_SafeguardedBenefitsSegmentEditor_BasicDetails_Advanced, EntityData, "Safeguarged Benefits Segment Editor");
    cy.PopulateEditor(PortfolioAdvConstants.PortfolioSegmentEditorSelector,PortfolioAdvConstants.Portfolio_SafeguardedBenefitsSegmentEditor_IncomeDetails_Advanced, EntityData, "Safeguarged Benefits Segment Editor");
    cy.PopulateEditor(PortfolioAdvConstants.PortfolioSegmentEditorSelector,PortfolioAdvConstants.Portfolio_SafeguardedBenefitsSegmentEditor_RevaluationAndEscalation_Advanced, EntityData, "Safeguarged Benefits Segment Editor");
    //cy.PopulateEditor(PortfolioAdvConstants.PortfoliosAdvancedEditorSelector,PortfolioAdvConstants.Portfolio_DefinedIncome_Advanced, EntityData, "Safeguarged Benefits Segment Editor");
    cy.get('[aria-describedby="EditSafeguardedBenefitSegmentPopup"] > .ui-dialog-buttonpane > .ui-dialog-buttonset > :nth-child(2) > .ui-button-text').click()
});

Cypress.Commands.add("SafeguardedBenefitsSegment_Create_3", (EntityData) => {});
    
Cypress.Commands.add("SafeguardedBenefitsSegment_Tidy", (ActionFileNo) => {}); //it didn't read the content of this, I must debug later

