import * as constants from "../../support/constantsSelectors.js"

describe("new test", () => {
   it("Create Client via XML", () =>{
      var fileLocation = 'cypress/fixtures/Clients/LucyTest1.xml';

      cy.login('live', 'username1', 'password1');
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
         cy.inputXMLData(fileLocation, constants.genderconst, "Gender").type(`{enter}`).type(`{enter}`);
         cy.get(constants.plannedretirementage).click();
         //cy.get('.ui-dialog-buttonset > .ui-button > .ui-button-text').click(); //OK button in the Client Editor

         cy.get('.btn-viewportfolios-action > .ui-button-text').click(); //Next to Portfolios in the Client Editor 
         
     
            cy.getXMLData_Portfolios(fileLocation);
            cy.wait(16000)

            



//------------------------

         RETRIEVE
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

//----------------------
//----------------------
/*
import * as constants from "../../constantsSelectors.js"

//Get Client data from the XML
Cypress.Commands.add("getXMLData_Client", (location, attribute) => {
  cy.readFile(location).then(content => {
    
   var retValue = "";
  
   var callback = function (err, result) {
    //debugger;
     var clientData = result.Root.Clients.Client;
     retValue = clientData[attribute];
   };
 
   cy.xml2JS_parseString(content, callback);
   //debugger;
   return retValue.trim();
   
 })

});

//Insert data to the UI
Cypress.Commands.add("inputXMLData", (location, selector, attribute) => {
  
  cy.getXMLData_Client(location, attribute).then(function(inserValue){
    cy.get(selector).type(inserValue)
  });

});

//Retrieve data from the UI to assert
Cypress.Commands.add("retrieveAssertUIData", (location, selector, attribute) => {

  cy.getXMLData_Client(location, attribute).then(function(readValue){
    cy.get(selector).should('have.value', readValue)
  });

});


//--------------------------------------------------------------------------------------------------------------------------


//Get Portfolio data from the XML
//Get portfolio data

Cypress.Commands.add("getPortfolios", (file) => {
  cy.readFile(file).then((contents) => {
    
    var retValue = "";
    var callback = function (err, result) {
      var portfolioData = result.Root.Clients.Client.Portfolios;
      retValue =  portfolioData;
    };

    cy.xml2JS_parseString(contents, callback);

    return retValue;
  });
});

//---
Cypress.Commands.add("getXMLData_Portfolios", (file, attribute) => {
  cy.getPortfolios('cypress/fixtures/Clients/LucyTest1.xml').then((content) => {
    debugger;
    if (content) {
      if (Array.isArray(content.Portfolio)) {
        //The API can only create one portfolio at a time, 1 per request
        for (var x = 0; x < content.Portfolio.length; x++) {
          var Portfolio = content.Portfolio[x];  //GET EACH PORTFOLIO THEN DO STUFF BELLOW:

//////////
          
            //Cypress.Commands.add('Get Portfolio attribute', (attribute) =>
              cy.get(Portfolio).then(content => {
                debugger;
                var retValue = "";
              
                var callback = function (err, result) {
                
                  var portfolioData = Portfolio;
                  retValue = portfolioData[attribute];
                  debugger;
                };
              
                cy.xml2JS_parseString(content, callback);
                debugger;
                return retValue.trim();
              
            })

              
              cy.inputXMLPortfolioData(file, constants.usernameconst, "Title")
              cy.inputXMLPortfolioData(file, constants.passwordconst, "Reference")
            
           
           //);

          




//////////

          debugger;
        }
      } else {
        var Portfolio = content.Portfolio;
        debugger;
      }
    }
  });
});


//Insert data to the UI
Cypress.Commands.add("inputXMLPortfolioData", (location, selector, attribute) => {
  
  cy.getXMLData_Portfolios(location, attribute).then(function(inserValue){
    cy.get(selector).type(inserValue)
  });

});

*/