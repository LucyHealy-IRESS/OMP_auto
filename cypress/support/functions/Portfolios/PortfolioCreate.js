import * as constants from "../../constantsSelectors.js";

Cypress.Commands.add("PortfolioCreate", (PortfolioID) => {

    //Personal Pension
    if(PortfolioID==1)
    
        {
            cy.wait(16000)
            cy.contains('Add New Portfolio').click();
            cy.wait(6000);
            cy.get(constants.productconst).dblclick();        
            cy.get(constants.productconst).type('{selectAll}Personal Pension');
            //cy.get('.productCombo').select('Personal Pension')
            cy.get('.ui-priority-primary').click();
            cy.get(constants.nameconst).type('PersonalPension1');
            cy.get(constants.currentvalueaccordconst).click();
            cy.get(constants.currentvalueconst).type('100000');
            cy.get(constants.okportfolioeditorconst).click({force: true});
            cy.get(constants.okportfoliogridconst).click({force: true});
            //cy.expect('#headerContainer > div:nth-child(3) > div > span:nth-child(1)').contains('Ted');
        }
    
    //Bank Account
    else if(PortfolioID==2)
    
        {
            cy.wait(16000)
            cy.contains('Add New Portfolio').click();
            cy.wait(6000);
            cy.get(constants.productconst).type('{selectAll}Bank Account');
            //cy.get('.productCombo').select('Personal Pension')
            cy.get('.ui-priority-primary').click();
            cy.get(constants.nameconst).type('BankAccount1');
            cy.get(constants.currentvalueaccordconst).click();
            cy.get(constants.currentvalueconst).type('80000');
            cy.get(constants.okportfolioeditorconst).click({force: true});
            cy.get(constants.okportfoliogridconst).click({force: true});
            //cy.expect('#headerContainer > div:nth-child(3) > div > span:nth-child(1)').contains('Ted');
        }

    else if(PortfolioID==3)
    
        {
            cy.wait(16000)
            cy.contains('Add New Portfolio').click();
            cy.wait(16000);
            cy.get(constants.productconst).type('{selectAll}General Investment Account');
            //cy.get('.productCombo').select('Personal Pension')
            cy.get('.ui-priority-primary').click();
            cy.get(constants.nameconst).type('GIA1');
            cy.get(constants.currentvalueaccordconst).click();
            cy.get(constants.currentvalueconst).type('120000');
            cy.get(constants.okportfolioeditorconst).click({force: true});
            cy.get(constants.okportfoliogridconst).click({force: true});
            //cy.expect('#headerContainer > div:nth-child(3) > div > span:nth-child(1)').contains('Ted');
        }


    else
        {
            cy.PortfolioCreate((Math.floor(Math.random() * 10)))
        }




    
})
