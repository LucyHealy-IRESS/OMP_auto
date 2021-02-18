/// <reference types="cypress" />

describe("New Clients", () =>{

    beforeEach("Login", () => {
        cy.login("live", "username1", "password1");
        cy.wait(12000)
    })
/*
    it("Client", () => {
        cy.ClientCreate('Mrs', 'Hellen', 'Cypress', cy.invoke(RandomDate) ,'{selectAll}Female');
    
    })
*/
    it("Client", () => {
        cy.Client('Home', 'Create', 'const_Cl0001');
                
    })

    it("Client", () => {
        cy.Client('Client Search', 'Create', 'const_Cl0003');
                
    })


})





