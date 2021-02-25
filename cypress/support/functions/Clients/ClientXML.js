//Get Client data from the XML
Cypress.Commands.add("getXMLData_Client", (location, attribute) => {
  cy.readFile(location).then(content => {
    
   var retValue = "";
  
   var callback = function (err, result) {
    
     var clientData = result.Root.Clients.Client;
     retValue = clientData[attribute];
   };
 
   cy.xml2JS_parseString(content, callback);
   
   return retValue.trim();
   
 })

});

//Insert data to the UI
Cypress.Commands.add("inputXMLData", (location, selector, value) => {
  
  cy.getXMLData_Client(location, value).then(function(inserValue){
    cy.get(selector).type(inserValue)
  });

});

//Retrieve data from the UI to assert
Cypress.Commands.add("retrieveAssertUIData", (location, selector, value) => {

  cy.getXMLData_Client(location, value).then(function(readValue){
    cy.get(selector).should('have.value', readValue)
  });

});

//Get Portfolio data from the XML
Cypress.Commands.add("getXMLData_Portfolios", (location, attribute) => {
  cy.readFile(location).then(content => {
    
   var retValue = "";
  
   var callback = function (err, result) {
    
     var PortfolioData = result.Root.Clients.Portfolios;
     retValue = PortfolioData[attribute];
   };
 
   cy.xml2JS_parseString(content, callback);
   
   return retValue.trim();
   
 })

});