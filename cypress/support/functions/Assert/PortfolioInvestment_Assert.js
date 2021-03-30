import * as Constants from "../../constants/Core.js";
import * as Portfolio_Smp_Constants from "../../constants/portfolio_Simple.js";
import * as PortfolioConstants from "../../constants/portfolio.js";

Cypress.Commands.add("PortfolioInvestment_Assert_1", (EntityData) => {

    var FundName = EntityData["FundName"];

        cy.clickAccordion_PreCheck("#PortfolioSimpleEditor_Holdings","#PortfolioAddPopUp","Holdings");
        cy.wait(2000);
        cy.get('.CurrentHoldings_table').find('tr', {timeout:Constants.Timeout_Medium}).find('td').contains(FundName).dblclick().then(function () {   
            cy.get("[aria-describedby='" + Portfolio_Smp_Constants.PortfoliosQuickEditorSelector.replace("#","") + "']",{timeout:Constants.Timeout_Medium}).then(function(){
               cy.AssertEditor(Portfolio_Smp_Constants.PortfoliosQuickEditorSelector,Portfolio_Smp_Constants.Portfolio_Holdings_Editor, EntityData);    
               var editRowButtonSelector = "[aria-describedby='PortfolioSimpleEditor_editRowPopup']" + " .ui-dialog-buttonpane .ui-button span";
               cy.get(editRowButtonSelector).contains("OK").click();      
            })
        });     
        
});


Cypress.Commands.add("PortfolioInvestment_Assert_2", (EntityData) => {

    // var UnitsCalculatorSelctor = ".portfolio_Adv_CHoldings_editHoldingUnitPopup";
    // var Element = Cypress.$(UnitsCalculatorSelctor);
    
    // if(Element && Element.length > 0 ){
    //   cy.get(UnitsCalculatorSelctor + " + .ui-dialog-buttonpane .ui-button span").contains("OK").click();
    //   cy.wait(1000); //allow for save
    // }

    // var FundName = EntityData["FundName"];

    // cy.clickAccordion_PreCheck(".PA_ClientHoldings_Accordian",PortfolioConstants.PortfoliosAdvancedEditorSelector,"Holdings");
    // cy.wait(2000);
    // cy.get('.CurrentHoldings_table').find('tr', {timeout:Constants.Timeout_Medium}).find('td').contains(FundName).dblclick().then(function () {   
    //     cy.get("[aria-describedby='" + PortfolioConstants.PortfoliosAdvancedEditorSelector.replace("#","") + "']",{timeout:Constants.Timeout_Medium}).then(function(){
    //        cy.AssertEditor(PortfolioConstants.PortfoliosAdvancedEditorSelector,Portfolio_Smp_Constants.Portfolio_Holdings_Editor, EntityData);    
    //        var editRowButtonSelector = ".portfolio_Adv_CHoldings_editRowPopup + .ui-dialog-buttonpane .ui-button span";
    //        cy.get(editRowButtonSelector).contains("OK").click();      
    //     })
    // });     
    
});

Cypress.Commands.add("PortfolioInvestment_Assert_3", (EntityData) => {});