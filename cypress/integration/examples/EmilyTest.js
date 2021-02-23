/// <reference types="cypress" />

describe('Emilys Testing', () =>{

    it('Create Client with Portfolios', () =>{
    
        cy.Create_Client_API("cypress/fixtures/Clients/EmilyTest.xml");
    })
 
 })