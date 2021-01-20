/// <reference types="cypress" />

describe("New Client Using json library", () =>{

    beforeEach("Login", () => {
        cy.login("staging", "lucy.healy@iress.com", "Y");
        //cy.wait(12000)
    })

    it("Client", () => {
        cy.ClientCreate('Mrs', 'Hellen', 'Cypress', cy.invoke(RandomDate) ,'{selectAll}Female');
    
    })

    it("Client", () => {
        cy.Client('Create', 'Clients/Client1_36_Male');
                
    })
    
    it("Client", () => {
        cy.Client('Create', 'Clients/Client1_52_Female');        
    
    })


})





