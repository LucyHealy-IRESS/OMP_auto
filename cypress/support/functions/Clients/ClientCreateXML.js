import * as constantsScenarios from "../../constantsScenarios.js"

describe ('readClientFile', () => {

   cy.fixture(constantsScenarios['Client001_xyz.xml']).as('clientfile');
   cy.wait(12000);
       {
  
           cy.get('@clientfile').then((clientfile) => {
               cy.ClientCreate(clcreatemode, clientfile.Title, clientfile.Firstname, clientfile.Surname, clientfile.DOB, clientfile.gender);
                   
           })
           
       }



})

-
import * as constantsScenarios from "../../constantsScenarios.js"

Cypress.Commands.add('Client', (clcreatemode, mode, file) =>{

    cy.fixture(constantsScenarios[file]).as('clientfile');
    cy.wait(12000);
        if (mode=='Create') 
        {
   
            cy.get('@clientfile').then((clientfile) => {
                cy.ClientCreate(clcreatemode, clientfile.Title, clientfile.Firstname, clientfile.Surname, clientfile.DOB, clientfile.gender);
                    
            })
            
        }

        else 
        {
           return console.error('FAILED');
        }

})