import * as constants from "../../constants.js";

Cypress.Commands.add("ClientCreate", (ClientID) => {


    //CLIENT #1 - Male 1981
    if(ClientID == 1)
        { 
        cy.wait(16000)
        cy.get('#NewClientIconMenu').click({force: true});  
        cy.wait(12000)
        cy.get(constants.titleconst).type('Mr');
        cy.get(constants.firstnameconst).type('Ted');
        cy.get(constants.surnameconst).type('Cypress');
        cy.get(constants.dobconst).type('10/09/1981');
        cy.get('#ClientDetailsPopup_PlannedRetirementAge').click();
        //cy.get(constansts.genderconst).type('Male');
        //cy.get('.ui-priority-primary').click();
        cy.get('.btn-viewportfolios-action > .ui-button-text').click();

        }

    //CLIENT #2 - Female 1967
    else if(ClientID == 2)
        { 
        cy.wait(16000)
        cy.get('#NewClientIconMenu').click({force: true});  
        cy.wait(16000)
        cy.get(constants.titleconst).type('Mrs');
        cy.get(constants.firstnameconst).type('Tina');
        cy.get(constants.surnameconst).type('Cypress');
        cy.get(constants.dobconst).type('30/12/1967');
        cy.get('#ClientDetailsPopup_PlannedRetirementAge').click();
        //cy.get(constansts.genderconst).type('Male');
        //cy.get('.ui-priority-primary').click();
        cy.get('.btn-viewportfolios-action > .ui-button-text').click();

        }
    //CLIENT #3 - Dr Female 1967
    else if(ClientID == 3)
        { 
        cy.wait(16000)
        cy.get('#NewClientIconMenu').click({force: true});  
        cy.wait(10000)
        cy.get(constants.titleconst).type('Dr');
        cy.get(constants.firstnameconst).type('Cecilia');
        cy.get(constants.surnameconst).type('Cypress');
        cy.get(constants.dobconst).type('30/12/1967');
        cy.get('#ClientDetailsPopup_PlannedRetirementAge').click();
        cy.get(constants.genderconst).type('female');
        cy.get('.ui-priority-primary').click();
        cy.get('.btn-viewportfolios-action > .ui-button-text').click();

        }
    //CLIENT #4 - Male 1952
    else if(ClientID == 4)
        { 
        cy.wait(16000)
        cy.get('#NewClientIconMenu').click({force: true});  
        cy.wait(10000)
        cy.get(constants.titleconst).type('Mr');
        cy.get(constants.firstnameconst).type('George');
        cy.get(constants.surnameconst).type('Cypress');
        cy.get(constants.dobconst).type('30/12/1952');
        cy.get('#ClientDetailsPopup_PlannedRetirementAge').click();
        //cy.get(constansts.genderconst).type('female');
        //cy.get('.ui-priority-primary').click();
        cy.get('.btn-viewportfolios-action > .ui-button-text').click();

        }

    //CLIENT #5 - Male 1957
    else if(ClientID == 5)
        { 
        cy.wait(16000)
        cy.get('#NewClientIconMenu').click({force: true});  
        cy.wait(10000)
        cy.get(constants.titleconst).type('Mr');
        cy.get(constants.firstnameconst).type('Gary');
        cy.get(constants.surnameconst).type('Cypress');
        cy.get(constants.dobconst).type('22/02/1957');
        cy.get('#ClientDetailsPopup_PlannedRetirementAge').click();
        //cy.get(constansts.genderconst).type('female');
        //cy.get('.ui-priority-primary').click();
        cy.get('.btn-viewportfolios-action > .ui-button-text').click();

        }
        
    //CLIENT #6 - Female 1991
    else if(ClientID == 6)
        { 
        cy.wait(16000)
        cy.get('#NewClientIconMenu').click({force: true});  
        cy.wait(10000)
        cy.get(constants.titleconst).type('Miss');
        cy.get(constants.firstnameconst).type('Karen');
        cy.get(constants.surnameconst).type('Cypress');
        cy.get(constants.dobconst).type('12/08/1991');
        cy.get('#ClientDetailsPopup_PlannedRetirementAge').click();
        //cy.get(constansts.genderconst).type('female');
        //cy.get('.ui-priority-primary').click();
        cy.get('.btn-viewportfolios-action > .ui-button-text').click();

        }    

   
    else
        {
            cy.ClientCreate((Math.floor(Math.random() * 10)))
        }


    
    
})