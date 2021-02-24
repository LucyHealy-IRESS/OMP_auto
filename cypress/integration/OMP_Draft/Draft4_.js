import * as constants from "../../support/constantsSelectors.js"

describe("new test", () => {
   it("Create Client via XML", () =>{

      var fileLocation = 'cypress/fixtures/Clients/EmilyTest.xml';

      cy.login('live', 'username1', 'password1');

      cy.wait(16000);
      cy.get('#NewClientIconMenu').click()

         cy.inputXMLData(fileLocation, constants.titleconst, "Title");
         cy.inputXMLData(fileLocation, constants.firstnameconst, "Firstname");
         cy.inputXMLData(fileLocation, constants.surnameconst, "Surname");
         //cy.inputXMLData(fileLocation, constants.dobconst, "DateOfBirth");

         
         cy.getXMLData_Client(fileLocation,"DateOfBirth").then(function(DOB){
               var date = DOB.split('T');
               var datesplit = date[0].split('-')
               var dd = (datesplit[2]);
               var mm = (datesplit[1]);
               var yyyy = (datesplit[0]);
            cy.get(constants.dobDD).type(dd)
            cy.get(constants.dobMM).type(mm)
            cy.get(constants.dobYYYY).type(yyyy)
         });
            
         cy.get(constants.genderconst).clear();
         cy.inputXMLData(fileLocation, constants.genderconst, "Gender").blur();
         //cy.get('.ui-priority-primary').click();
         cy.get(constants.plannedretirementage).click();


        cy.get('.btn-viewportfolios-action > .ui-button-text').click();

     
         //var location = 'cypress/fixtures/Clients/EmilyTest.xml';

         // cy.wait(12000);
         // cy.get('@clientfile').then((client) => {
         // cy.get('#NewClientIconMenu').click(); 
         // cy.get(constants.titleconst).type(client.get(<title></title>).invoke('text'));
         // cy.get(constants.firstnameconst).type(firstname);

                  //cy.getXMLData_Client(location,"Firstname").then(function(firstname){cy.get('#loginPrompt-username').type(firstname)});
      
      })
      })
      // cy.wait(12000);
      // cy.get('@clientfile').then((client) => {
      //    cy.get('#NewClientIconMenu').click(); 
      //    cy.get(constants.titleconst).type(client.get(<title></title>).invoke('text'));
         // cy.get(constants.firstnameconst).type(firstname);
         // cy.get(constants.surnameconst).type(surname);
         // cy.get(constants.dobconst).type(dob);
         // cy.get(constants.plannedretirementage).click();
         // //cy.get(constants.genderconst).type(gender);
         // //cy.get('.ui-priority-primary').click();
         // cy.get('.btn-viewportfolios-action > .ui-button-text').click();
           
   //})