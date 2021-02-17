import * as constants from "../../support/constantsSelectors.js";

/// <reference types="cypress" />

describe("login env using user as a object", () => {
   it("login", () => {
        cy.visit('html.omprofiler.co.uk');
        cy.get(constants.usernameconst).type(Cypress.env.Essentials(username)); //attempt to use an object as an environment variable, but it didn't work, it didnt recognise the 'username'
        cy.get(constants.passwordconst).type(Cypress.env(Essentials.password));
        cy.get(constants.okconst).click();
        cy.url().should('contain', 'StoryBoardManager/StoryBoardManager_Workspace&d')
   })

})
