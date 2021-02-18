
/// <reference types="cypress" />

describe("Creating Client and Portfolio", () => {


        
    it('New Client', () => {

        cy.login('staging','lucy.healy@iress.com', '');
        cy.ClientCreate('2');

            cy.wait(7000);
            cy.get('[style="text-align:right;margin-top:24pt"] > button').dblclick();    //skip wijmo popup must add an if to check which environment user is in

        cy.PortfolioCreate('1');

        cy.get('[data-bind="text:MainViewModel.Overview_HeaderTitle1"]').should('contain', 'Tina Cypress')

                
    })
    
})