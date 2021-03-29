import * as PortfolioConstants from "../../constants/portfolio.js";

Cypress.Commands.add("Portfolio_Assert_1", (EntityData) => {

    cy.get('.btn-viewportfolios-action').click();
    var entity = EntityData["Reference"];
    var ClientPortfolios = function(){
        cy.wait(1000)
        cy.get('#Client_ViewPortfolios > .gridContainer', {timeout:16000}).find('tr', {timeout:16000}).find('td').contains(entity).dblclick().then(function () {   
            cy.wait(12000);
            cy.AssertEditor(PortfolioConstants.PortfoliosQuickEditorSelector,PortfolioConstants.PortfolioAccordioansSimple,EntityData);   //failing on the mapping portfolioID, not sure why
            debugger;
        });     
        }
    cy.ClientPortfoliosListReturned(ClientPortfolios);

});

Cypress.Commands.add("Portfolio_Assert_2", (EntityData) => {});

Cypress.Commands.add("Portfolio_Assert_3", (EntityData) => {});