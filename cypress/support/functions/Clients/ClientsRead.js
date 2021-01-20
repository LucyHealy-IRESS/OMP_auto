//import * as constants from "../../constants.js";

Cypress.Commands.add("ClientRead", (ClientID) => {

    cy.get('#ExistingClientsIconMenu').click;
    cy.contains('Dob-two').dblclick();




})
