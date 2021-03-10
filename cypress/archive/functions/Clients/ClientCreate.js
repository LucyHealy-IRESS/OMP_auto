import * as constants from "../../constantsSelectors.js";

Cypress.Commands.add("ClientCreate", (clcreatemode, title, firstname, surname, dob) => {

    if(clcreatemode == 'Home'){
        //cy.get('[data-u="thumb"]').children().contains('Home').click({force:true});
        cy.get('#NewClientIconMenu').click();

    }

    else if(clcreatemode == 'Client Search'){
        //cy.get('[data-u="thumb"]').children().contains('Home').click({force:true});
        cy.get('#ExistingClientsIconMenu').click();
        cy.wait(16000)
        cy.get('[data-u="thumbnavigator"]').children().contains('Client Search').click({force:true});
        cy.wait(6000)
        cy.get('a > #NewClient').click();
    }


    
        cy.wait(10000)
        cy.get(constants.titleconst).type(title);
        cy.get(constants.firstnameconst).type(firstname);
        cy.get(constants.surnameconst).type(surname);
        cy.get(constants.dobconst).type(dob);
        cy.get(constants.plannedretirementage).click();
        //cy.get(constants.genderconst).type(gender);
        //cy.get('.ui-priority-primary').click();
        cy.get('.btn-viewportfolios-action > .ui-button-text').click();



    
})
