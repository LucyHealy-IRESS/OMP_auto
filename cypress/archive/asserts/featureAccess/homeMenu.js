/// <reference types="cypress" />

describe("Checking menu accessibility", () => {
    it("Withdraw Button Access", () => {
    
        cy.get('#DecumulationIconMenu').children().should('contain', 'Upgrade')
        //return console('passed')
    })



})