Cypress.Commands.add("getPortfolios", (file) => {

      cy.readFile(file).then(contents => {
      
      var callback = function (err, result) {
      var portfolioData = result.Root.Clients.Client.Portfolios;
      //portfolios = portfolioData;
      debugger;
      return portfolioData;
      }
      cy.xml2JS_parseString(contents, callback);
      debugger;
})
});

Cypress.Commands.add("getXMLData_Portfolios", (attribute) => {
   cy.getPortfolios('cypress/fixtures/Clients/EmilyTest.xml').then(content => {
      debugger;
      if (content) {
         if (Array.isArray(content.Portfolio)) { //The API can only create one portfolio at a time, 1 per request
           for (var x = 0; x < content.Portfolio.length; x++) {
            var Portfolio = content.Portfolio[x];
            debugger;
           }
         } else {
           var Portfolio = content.Portfolio;
           debugger;
         }
       }
     })
});

it('test', () => {
cy.getXMLData_Portfolios('PortfolioID');
});