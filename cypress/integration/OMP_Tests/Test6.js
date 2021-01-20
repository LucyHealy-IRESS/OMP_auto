//LOGIN while using base URL on the config file


import * as constants from "../../support/constants.js";
/// <reference types="cypress" />



describe("logging in using config", () => {
    it("login", () => {

        cy.visit("/");
        cy.get(constants.usernameconst).type(Cypress.env("usernameE"));
        cy.get(constants.passwordconst).type(Cypress.env("passwordE"));
    })



})