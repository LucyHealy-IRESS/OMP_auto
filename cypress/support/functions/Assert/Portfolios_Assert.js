import * as PortfolioConstants from "../../constants/portfolio.js";

Cypress.Commands.add("Portfolios_Assert_1", (EntityData) => {

    cy.get('.btn-viewportfolios-action').click();
    var entity = EntityData["Portfolio"]["PortfolioID"];
    var ClientPortfolios = function(){
        cy.wait(1000)
        cy.get('#Client_ViewPortfolios > .gridContainer', {timeout:16000}).find('tr', {timeout:16000}).find('td').contains(entity).dblclick().then(function () {   

            cy.AssertEditor(PortfolioConstants.PortfoliosQuickEditorSelector,PortfolioConstants.PortfolioAccordioansSimple,EntityData);   
            debugger;
        });     
        }
    cy.ClientPortfoliosListReturned(ClientPortfolios);


});

Cypress.Commands.add("Portfolios_Assert_2", (EntityData) => {});

Cypress.Commands.add("Portfolios_Assert_3", (EntityData) => {});