import * as PortfolioConstants from "../../constants/portfolio.js";
import * as Portfolio_Smp_Constants from "../../constants/portfolio_Simple.js";
import * as Portfolio_Adv_Constants from "../../constants/portfolio_Advanced.js";
import * as Constants from "../../constants/Core.js";

Cypress.Commands.add("Portfolio_Assert_1", (EntityData) => {

    var entity = EntityData["Reference"];
    var ClientPortfolios = function(){
        cy.wait(12000);
        cy.get('#Client_ViewPortfolios > .gridContainer', {timeout:Constants.Timeout_Medium}).find('tr', {timeout:Constants.Timeout_Medium}).find('td').contains(entity).dblclick().then(function () {   
            cy.get("[aria-describedby='" + Portfolio_Smp_Constants.PortfoliosQuickEditorSelector.replace("#","") + "']",{timeout:Constants.Timeout_Medium}).then(function(){
               cy.AssertEditor(Portfolio_Smp_Constants.PortfoliosQuickEditorSelector,Portfolio_Smp_Constants.Portfolio_Simple, EntityData);        
            })
        });     
        }
    cy.ClientPortfoliosListReturned(ClientPortfolios);

});

Cypress.Commands.add("Portfolio_Assert_2", (EntityData) => {;
  var entity = EntityData["Reference"];
  var ClientPortfolios = function(){
      cy.wait(12000);
      cy.get('#Client_ViewPortfolios > .gridContainer', {timeout:Constants.Timeout_Medium}).find('tr', {timeout:Constants.Timeout_Medium}).find('td').contains(entity).dblclick().then(function () {   
          cy.get("[aria-describedby='" + PortfolioConstants.PortfoliosQuickEditorSelector.replace("#","") + "'] #btn-advancedDetails-action").click().then(function(){
            cy.AssertEditor(PortfolioConstants.PortfoliosAdvancedEditorSelector,Portfolio_Adv_Constants.AllPortfolioAdvancedInputs, EntityData);            
          })
      });     
      }
  cy.ClientPortfoliosListReturned(ClientPortfolios);

  });



Cypress.Commands.add("Portfolio_Assert_3", (EntityData) => {});



Cypress.Commands.add("ClientPortfoliosListReturned", (callback) => {
    cy.get('.ui-dialog-buttons > .ui-dialog-titlebar').contains('Client Portfolios').then(function(){
      cy.get('#Client_ViewPortfolios > .gridContainer', {timeout:Constants.Timeout_Medium}).then(function(){
        callback();
      })
    })
  })