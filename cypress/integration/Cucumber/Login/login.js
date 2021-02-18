import { Given, And } from "cypress-cucumber-preprocessor/steps"

    Given('Login with a {string} user via {string}', (user, tech) => {

      Cypress.Commands.add("loginMode", (tech) => {
    
         if (tech=='API') {
             cy.loginAPI();
         }
     
         else if (tech == 'UI') {
            if (user == )
             cy.login('staging', '');
         }
     
         else {
             Cypress.log({name :'INVALID'}).end()
         }

     

    })
