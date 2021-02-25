import * as constants from "../../constantsSelectors.js";

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
    else if (url=='uat') {
        cy.visit('https://html.omprofiler.uat.aws-wealth-uat-uk.iress.online');
    }

    else {
        Cypress.log({name :'INVALID URL'}).end()
       // return 'error abc'
    }
  

        //cy.visit('html.omprofiler.co.uk');
        cy.get(constants.usernameconst).type(Cypress.env(username));
        cy.get(constants.passwordconst).type(Cypress.env(password));
        cy.get(constants.okconst).click();
        cy.url().should('contain', 'StoryBoardManager/StoryBoardManager_Workspace&d')

})