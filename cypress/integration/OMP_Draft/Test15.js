//import * as constants from "../../support/constantsSelectors.js";

   describe("API", () => {
   it("New Client", () =>{
      
      cy.visit('https://html.omprofiler.co.uk');
      
      // let name = cy.getFile();
      // let username = name.firstname;
      cy.getFile().then((username) => {

      cy.get('#loginPrompt-username').type(username);
      })
      })
      })
      // cy.wait(12000);
      // cy.get('@clientfile').then((client) => {
      //    cy.get('#NewClientIconMenu').click();
      //    cy.wait(10000);
      //    cy.get(constants.titleconst).type(client.get(<title></title>).invoke('text'));
         // cy.get(constants.firstnameconst).type(firstname);
         // cy.get(constants.surnameconst).type(surname);
         // cy.get(constants.dobconst).type(dob);
         // cy.get(constants.plannedretirementage).click();
         // //cy.get(constants.genderconst).type(gender);
         // //cy.get('.ui-priority-primary').click();
         // cy.get('.btn-viewportfolios-action > .ui-button-text').click();
           
   //})


 