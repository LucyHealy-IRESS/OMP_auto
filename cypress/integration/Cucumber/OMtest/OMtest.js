//import * as constantsScenarios from "C:/Users/LEAPTEST/Desktop/AUTOMATION/Cypress/OMP/cypress/support/constantsScenarios.js"

import { Given, And } from "cypress-cucumber-preprocessor/steps"

    Given('Login with {string} and {string}', (username, password) => {

        cy.login("live", username, password);

    })

    And('Via {string} click to {string} New Client {string}', (clcreatemode, mode, Client) => {
        
        cy.Client(clcreatemode, mode, Client);

    })