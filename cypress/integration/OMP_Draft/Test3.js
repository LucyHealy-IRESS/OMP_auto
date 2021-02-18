
/// <reference types="cypress" />

describe("Client Search", () => {


        
    it('Search Client', () => {
        
        cy.login('live', 'lucy.healy@iress.com','');
        cy.wait(1200);
        cy.get('#ExistingClientsIconMenu').click();
        cy.wait(20000);
        cy.get('[data-u="thumbnavigator"]').children().contains('Client Search').click({force:true});
        cy.get('#AmendClientSearch').click();

    })

})