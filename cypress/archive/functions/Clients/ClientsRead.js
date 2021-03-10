//import * as constants from "../../constants.js";

Cypress.Commands.add("ClientRead", (Name) => {

    cy.get('#ExistingClientsIconMenu').click();
    cy.wait(20000);
    cy.get('[data-u="thumbnavigator"]').children().contains('Client Search').click({force:true});
    cy.get('#AmendClientSearch').click();




})
