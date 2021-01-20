//CALL FOR THE CLIENT VIA FILE WITHOUT USING MAIN FUNCTION

/// <reference types="cypress" />

describe("New Client Using json library", () =>{

    before("Login", () => {
        cy.login("staging", "lucy.healy@iress.com", "Y");
        cy.wait(16000)


        cy.fixture("../fixtures/Client1_52_Single_Male").as('client');

    })

    it("New Client", () =>{
        cy.get('@client').then((client) => {
        cy.ClientCreate(client.Title, client.Firstname, client.Surname, client.DOB);
    })
            cy.wait(7000);
            cy.get('[style="text-align:right;margin-top:24pt"] > button').dblclick(); 

    }

    )

})