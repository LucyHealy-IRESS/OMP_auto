// //-------------------
// //Get Client data from the XML
// Cypress.Commands.add("getXMLData_Client", (location, attribute) => {
//   cy.readFile("cypress/fixtures/Clients/EmilyTest.xml").then((content) => {
//     var retValue = "";

//     var callback = function (err, result) {
//       var clientData = result.Root.Clients.Client;
//       retValue = clientData[attribute];
//     };

//     cy.xml2JS_parseString(content, callback);

//     return retValue.trim();
//   });
// });

// //Get portfolio data

// Cypress.Commands.add("getPortfolios", (file) => {
//   cy.readFile(file).then((contents) => {
    
//     var retValue = "";
//     var callback = function (err, result) {
//       var portfolioData = result.Root.Clients.Client.Portfolios;
//       retValue =  portfolioData;
//     };

//     cy.xml2JS_parseString(contents, callback);

//     return retValue;
//   });
// });
// //---
// Cypress.Commands.add("getXMLData_Portfolios", (attribute) => {
//   cy.getPortfolios("cypress/fixtures/Clients/LucyTest1.xml").then((content) => {
//     debugger;
//     if (content) {
//       if (Array.isArray(content.Portfolio)) {
//         //The API can only create one portfolio at a time, 1 per request
//         for (var x = 0; x < content.Portfolio.length; x++) {
//           var Portfolio = content.Portfolio[x];
//           debugger;
//         }
//       } else {
//         var Portfolio = content.Portfolio;
//         debugger;
//       }
//     }
//   });
// });

// // it('test1', () => {
// //   cy.getXMLData_Client('cypress/fixtures/Clients/EmilyTest.xml', 'Title');
// //   });

it("test2", () => {

  cy.visit('https://html.omprofiler.co.uk');
  cy.getXMLData_Portfolios('cypress/fixtures/Clients/LucyTest1.xml');
});

// it("get Client", () => {
//   cy.getXMLData_Client('cypress/fixtures/Clients/LucyTest1.xml', 'Title')
// })

// import * as constants from "../../support/constantsSelectors.js"

// it('get portfolio attribute', () => {
//   cy.visit('https://html.omprofiler.co.uk');
//   cy.inputXMLPortfolioData('cypress/fixtures/Clients/LucyTest1.xml', constants.usernameconst, 'PortfolioID')

// })


// Cypress.Commands.add("getXMLData_Client", (location, attribute) => {
//   cy.readFile(location).then(content => {
    
//    var retValue = "";
  
//    var callback = function (err, result) {
    
//      var clientData = result.Root.Clients.Client;
//      retValue = clientData[attribute];
//    };
 
//    cy.xml2JS_parseString(content, callback);
   
//    return retValue.trim();
   
//  })

// });

// //Insert data to the UI
// Cypress.Commands.add("inputXMLData", (location, selector, value) => {
  
//   cy.getXMLData_Client(location, value).then(function(inserValue){
//     cy.get(selector).type(inserValue)
//   });

// });

// //Retrieve data from the UI to assert
// Cypress.Commands.add("retrieveAssertUIData", (location, selector, value) => {

//   cy.getXMLData_Client(location, value).then(function(readValue){
//     cy.get(selector).should('have.value', readValue)
//   });

// });
