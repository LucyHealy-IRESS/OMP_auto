
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


Cypress.Commands.add("inputXMLData", (location, selector, value) => {
  
  cy.getXMLData_Client(location,value).then(function(inserValue){
    cy.get(selector).type(inserValue)
  });

  

})