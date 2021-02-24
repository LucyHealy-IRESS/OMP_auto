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
            // var x = new Date(DOB);
            //    var datetimeNow =
            //    cy.fixDigit(x.getDate() + "/" + cy.fixDigit(x.getMonth() + 1) + "/" + x.getFullYear()) 
            //newDOB.toDateString()

            //var DOB = datespit[2] + "/" + datespit[1] + "/" datesplit[0]; 

            var date = DOB.split('T');
            var datesplit = date[0].split('-')

            var newDOB = (datesplit[2] + "/" + datesplit[1] + "/" + datesplit[0]);
            cy.get('#DateOfBirthInput').type(newDOB)
         });
            debugger;
         

         

         cy.inputXMLData(fileLocation, constants.genderconst, "Gender")
         cy.get('.ui-priority-primary').click();
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