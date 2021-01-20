import * as constants from "../../constants.js";

Cypress.Commands.add("ClientCreate", (title, firstname, surname, dob, gender) => {

    //cy.wait(6000)
    cy.get('#NewClientIconMenu').click();  
    cy.wait(1000)
    cy.get(constants.titleconst).type(title);
    cy.get(constants.firstnameconst).type(firstname);
    cy.get(constants.surnameconst).type(surname);
    cy.get(constants.dobconst).type(dob);
    cy.get('#ClientDetailsPopup_PlannedRetirementAge').click();
    //cy.get(constants.genderconst).type(gender);
    //cy.get('.ui-priority-primary').click();
    cy.get('.btn-viewportfolios-action > .ui-button-text').click();



    
})
