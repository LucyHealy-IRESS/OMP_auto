import * as Constants from "../../constants/Core.js";
import * as Portfolio_Smp_Constants from "../../constants/portfolio_Simple.js";

Cypress.Commands.add("PortfolioInvestment_Assert_1", (EntityData) => {

    var entity = EntityData["FundName"];
 
        cy.wait(12000);
        cy.clickAccordion("#PortfolioAddPopUp", "Holdings").click();
        cy.get('.tableContainer > .wijmo-wijgrid > .wijmo-wijgrid-fixedview > .wijmo-wijgrid-scroller > .wijmo-wijsuperpanel-statecontainer > .wijmo-wijsuperpanel-contentwrapper').find('tr', {timeout:Constants.Timeout_Medium}).find('td').contains(entity).dblclick().then(function () {   
            cy.get("[aria-describedby='" + Portfolio_Smp_Constants.PortfoliosQuickEditorSelector.replace("#","") + "']",{timeout:Constants.Timeout_Medium}).then(function(){
               cy.AssertEditor(Portfolio_Smp_Constants.PortfoliosQuickEditorSelector,Portfolio_Smp_Constants.Portfolio_Simple, EntityData);
               cy.get('[aria-describedby="PortfolioAddPopUp"] > .ui-dialog-buttonpane > .ui-dialog-buttonset > .ui-button > .ui-button-text').click();            
            })
        });     
        
});


Cypress.Commands.add("PortfolioInvestment_Assert_2", (EntityData) => {});

Cypress.Commands.add("PortfolioInvestment_Assert_3", (EntityData) => {});