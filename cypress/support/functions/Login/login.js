import * as constants from "../../constants.js";

Cypress.Commands.add("login", (url,username, password) => {
  cy.clearCookies()

    if (url=='test') {
        cy.visit('http://uat.omprofiler.co.uk');
    }

    else if (url=='live') {
        cy.visit('https://html.omprofiler.co.uk');
    }

    else if (url=='staging') {
        cy.visit('https://html.omprofiler.int.aws-wealth-staging-uk.iress.online');
    }

    else {
        Cypress.log({name :'INVALID URL'}).end()
       // return 'error abc'
    }
  

        //cy.visit('html.omprofiler.co.uk');
        cy.get(constants.usernameconst).type(username);
        cy.get(constants.passwordconst).type(password);
        cy.get(constants.okconst).click();
        cy.url().should('contain', 'StoryBoardManager/StoryBoardManager_Workspace&d')

})