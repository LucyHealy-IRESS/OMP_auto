import * as constants from "../../support/constantsSelectors.js"

describe("new test", () => {
   it("Create Client via XML", () =>{
      var fileLocation = 'cypress/fixtures/Clients/EmilyTest.xml';

      cy.login('uat', 'username2', 'password2');
      cy.wait(16000);
      cy.get('#NewClientIconMenu').click()
      cy.wait(16000)
         cy.inputXMLData(fileLocation, constants.titleconst, "Title");
         cy.inputXMLData(fileLocation, constants.firstnameconst, "Firstname");
         cy.inputXMLData(fileLocation, constants.surnameconst, "Surname");
         
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
         cy.inputXMLData(fileLocation, constants.genderconst, "Gender").type(`{enter}`).type(`{enter}`).tab();
         cy.get(constants.plannedretirementage).click();
         //cy.get('.ui-dialog-buttonset > .ui-button > .ui-button-text').click(); //OK button in the Client Editor

         cy.get('.btn-viewportfolios-action > .ui-button-text').click(); //Next to Portfolios in the Client Editor 
// //------------------------
// cy
//          if (Portfolios && Portfolios.Portfolio) {
//             if (Array.isArray(Portfolios.Portfolio)) { //The API can only create one portfolio at a time, 1 per request
//             for (var x = 0; x < Portfolios.Portfolio.length; x++) {
//                var Portfolio = Portfolios.Portfolio[x];
//                cy.ProcessClientPortfolio_API(Portfolio);
//             }
//             } else {
//             var Portfolio = Portfolios.Portfolio;
//             cy.ProcessClientPortfolio_API(Portfolio);
//             }
//          }
// });

//------------------------

         //RETRIEVE
         cy.reload();
         cy.login('uat', 'username2', 'password2');
         cy.wait(16000);
         cy.get('#Continue').click({force:true});
         cy.wait(16000)
         cy.get('[style="text-align:right;margin-top:24pt"] > button').click({force:true});
         cy.get('[data-u="thumbnavigator"]').children().contains('Client Summary').click({force:true});
         cy.get('#EditClientIconMenu').click();

         cy.retrieveAssertUIData(fileLocation, constants.titleconst, "Title");
         cy.retrieveAssertUIData(fileLocation, constants.firstnameconst, "Firstname");
         cy.retrieveAssertUIData(fileLocation, constants.surnameconst, "Surname");
         cy.retrieveAssertUIData(fileLocation, constants.genderconst, "Gender");


        




   })

   // it("Retrive Client", () => {
   //    var fileLocation = 'cypress/fixtures/Clients/EmilyTest.xml';

   //    cy.login('live', 'username1', 'password1');




   // })

})