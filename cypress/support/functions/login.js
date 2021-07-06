import * as constantSelectors from "../constants/constantsSelectors.js";
import * as constants from "../constants/Core";

Cypress.Commands.add("login", (type) => {
    cy.clearCookies()
    cy.environment().then(function(){
        if (type == "SecurityAccess") {
            var username = "SecurityLoginA_Username";
            var password = "SecurityLoginA_Password";

        }
        else if (type == "SecurityNoAccess") {
            var username = "SecurityLoginB_Username";
            var password = "SecurityLoginB_Password";
        }
        else {
            var username = "LoginUsername";
            var password = "LoginPassword";
        }
        cy.get(constantSelectors.Login_Username).type(Cypress.env(username));
        cy.get(constantSelectors.Login_Password).type(Cypress.env(password));
        cy.get(constantSelectors.Login_ok).click();
        cy.url().should('contain', 'StoryBoardManager/StoryBoardManager_Workspace&d')
  })
})


Cypress.Commands.add("environment", (url) => {
    var url = Cypress.env("LoginEnvironment");

    if (url=='Dev') {
        cy.visit('index.html',{ timeout: constants.Timeout_Login });
    }
    else if (url=='testProfiler') {
        cy.visit('http://testomprofiler/',{ timeout: constants.Timeout_Login });
    }
    else if (url=='test') {
        cy.visit('http://uat.omprofiler.co.uk',{ timeout: constants.Timeout_Login });
    }
    else if (url=='live') {
        cy.visit('https://html.omprofiler.co.uk',{ timeout: constants.Timeout_Login });
    }
    else if (url=='staging') {
        cy.visit('https://html.omprofiler.int.aws-wealth-staging-uk.iress.online',{ timeout: constants.Timeout_Login });
    }
    else if (url=='uat') {
        cy.visit('https://html.omprofiler.uat.aws-wealth-uat-uk.iress.online',{ timeout: constants.Timeout_Login });
    }
    else {
        Cypress.log({name :'INVALID URL'}).end()
    }
})