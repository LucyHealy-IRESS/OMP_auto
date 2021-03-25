import * as constants from "../constants/constantsSelectors.js";

Cypress.Commands.add("login", () => {
  cy.clearCookies()

    var url = Cypress.env("LoginEnvironment");
    var username = "LoginUsername";
    var password = "LoginPassword";

    if (url=='Dev') {
        cy.visit('http://localhost:57204/index.html',{ timeout: 16000 });
    }
    else if (url=='testProfiler') {
        cy.visit('http://testomprofiler/',{ timeout: 16000 });
    }
    else if (url=='test') {
        cy.visit('http://uat.omprofiler.co.uk',{ timeout: 16000 });
    }

    else if (url=='live') {
        cy.visit('https://html.omprofiler.co.uk',{ timeout: 16000 });
    }

    else if (url=='staging') {
        cy.visit('https://html.omprofiler.int.aws-wealth-staging-uk.iress.online',{ timeout: 16000 });
    }
    else if (url=='uat') {
        cy.visit('https://html.omprofiler.uat.aws-wealth-uat-uk.iress.online',{ timeout: 16000 });
    }

    else {
        Cypress.log({name :'INVALID URL'}).end()
    }
  
    cy.get(constants.Login_Username).type(Cypress.env(username));
    cy.get(constants.Login_Password).type(Cypress.env(password));
    cy.get(constants.Login_ok).click();
    cy.url().should('contain', 'StoryBoardManager/StoryBoardManager_Workspace&d')

})