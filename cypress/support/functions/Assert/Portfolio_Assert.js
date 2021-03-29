import * as PortfolioConstants from "../../constants/portfolio.js";
import * as Constants from "../../constants/Core.js";

Cypress.Commands.add("Portfolio_Assert_1", (EntityData) => {

    cy.get('.btn-viewportfolios-action').click();
    var entity = EntityData["Reference"];
    var ClientPortfolios = function(){
        cy.wait(1000);
        cy.get('#Client_ViewPortfolios > .gridContainer', {timeout:Constants.Timeout_Medium}).find('tr', {timeout:Constants.Timeout_Medium}).find('td').contains(entity).dblclick().then(function () {   
            cy.get("[aria-describedby='" + PortfolioConstants.PortfoliosQuickEditorSelector.replace("#","") + "']",{timeout:Constants.Timeout_Medium}).then(function(){
               cy.AssertEditor(PortfolioConstants.PortfoliosQuickEditorSelector,PortfolioConstants.AllPortfolioSimpleInputs,EntityData);            
            })
        });     
        }
    cy.ClientPortfoliosListReturned(ClientPortfolios);

});

Cypress.Commands.add("Portfolio_Assert_2", (EntityData) => {});

Cypress.Commands.add("Portfolio_Assert_3", (EntityData) => {});



Cypress.Commands.add("ClientPortfoliosListReturned", (callback) => {
    cy.get('.ui-dialog-buttons > .ui-dialog-titlebar').contains('Client Portfolios').then(function(){
      cy.get('#Client_ViewPortfolios > .gridContainer', {timeout:Constants.Timeout_Medium}).then(function(){
        callback();
      })
    })
  })