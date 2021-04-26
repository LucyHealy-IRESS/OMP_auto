import * as PortfolioConstants from "../../constants/constantsSelectors.js";
import * as PortfolioSmpConstants from "../../constants/portfolio_Simple.js";
import * as PortfolioAdvConstants from "../../constants/portfolio_Advanced.js";
import * as Constants from "../../constants/Core.js";

Cypress.Commands.add("SafeguardedBenefitsSegment_Assert_1", (EntityData) => {
    var SegmentName = EntityData["Name"];

    cy.clickAccordion_PreCheck(PortfolioConstants.PortfolioSmp_DefinedIncome,PortfolioSmpConstants.PortfoliosQuickEditorSelector,"Defined Income")
    cy.wait(2000); //needs a callback
    cy.get('.safeguarded-benefits-segment-table tr td',{timeout:Constants.Timeout_Medium}).contains(SegmentName).then(function($td){ //got this frm new investments, it worked
        cy.wrap($td).closest("tr").find("button").find(".ui-icon-pencil").click().then(function(){ 

    //cy.get('.ui-button-icon-primary.ui-icon.ui-icon-pencil').parentsUntil('.safeguarded-benefits-segment-table tr td',{timeout:Constants.Timeout_Medium}).contains(SegmentName).click().then(function(){ 
    //cy.get('.safeguarded-benefits-segment-table tr td',{timeout:Constants.Timeout_Medium}).contains(SegmentName)..dblclick().then(function () {   //no double click functionality.
        cy.get("[aria-describedby='" + PortfolioAdvConstants.PortfolioSegmentEditorSelector.replace("#","") + "']",{timeout:Constants.Timeout_Medium}).then(function(){
            cy.wait(2000)
            cy.AssertEditor(PortfolioSmpConstants.PortfolioSegmentEditorSelector,PortfolioSmpConstants.Portfolio_BasicDetails_SafeguardedBenefitsSegmentEditor_BasicDetails, EntityData, "Safeguarged Benefits Segment Editor");
            cy.AssertEditor(PortfolioSmpConstants.PortfolioSegmentEditorSelector,PortfolioSmpConstants.Portfolio_BasicDetails_SafeguardedBenefitsSegmentEditor_IncomeDetails, EntityData, "Safeguarged Benefits Segment Editor");
            cy.AssertEditor(PortfolioSmpConstants.PortfolioSegmentEditorSelector,PortfolioSmpConstants.Portfolio_BasicDetails_SafeguardedBenefitsSegmentEditor_RevaluationAndEscalation, EntityData, "Safeguarged Benefits Segment Editor");
            cy.get('[aria-describedby="EditSafeguardedBenefitSegmentPopup"] > .ui-dialog-buttonpane > .ui-dialog-buttonset > :nth-child(2) > .ui-button-text').click()
        })
    })
    })
});


    
Cypress.Commands.add("SafeguardedBenefitsSegment_Assert_2", (EntityData) => {
    var SegmentName = EntityData["Name"];

    cy.clickAccordion_PreCheck(PortfolioConstants.PortfolioAdv_DefinedIncome,PortfolioAdvConstants.PortfoliosAdvancedEditorSelector,"Defined Income");
    cy.wait(2000);
    cy.get('.safeguarded-benefits-segment-table tr td',{timeout:Constants.Timeout_Medium}).contains(SegmentName).then(function($td){ //got this frm new investments, it worked
        cy.wrap($td).closest("tr").find("button").find(".ui-icon-pencil").click({force:true}).then(function(){ 

        cy.get("[aria-describedby='" + PortfolioAdvConstants.PortfolioSegmentEditorSelector.replace("#","") + "']",{timeout:Constants.Timeout_Medium}).then(function(){
            cy.AssertEditor(PortfolioAdvConstants.PortfolioSegmentEditorSelector,PortfolioAdvConstants.Portfolio_SafeguardedBenefitsSegmentEditor_BasicDetails_Advanced, EntityData, "Safeguarged Benefits Segment Editor");
            cy.AssertEditor(PortfolioAdvConstants.PortfolioSegmentEditorSelector,PortfolioAdvConstants.Portfolio_SafeguardedBenefitsSegmentEditor_IncomeDetails_Advanced, EntityData, "Safeguarged Benefits Segment Editor");
            cy.AssertEditor(PortfolioAdvConstants.PortfolioSegmentEditorSelector,PortfolioAdvConstants.Portfolio_SafeguardedBenefitsSegmentEditor_RevaluationAndEscalation_Advanced, EntityData, "Safeguarged Benefits Segment Editor");
            cy.get('.ui-dialog-buttonset > :nth-child(2) > .ui-button-text').click()    
        })
    })
    }) 
});
    
Cypress.Commands.add("SafeguardedBenefitsSegment_Assert_3", (EntityData) => {});
    
Cypress.Commands.add("SafeguardedBenefitsSegment_Tidy", (ActionFileNo) => {});  