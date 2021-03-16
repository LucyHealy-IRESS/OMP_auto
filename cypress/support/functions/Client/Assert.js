import * as clientMapping from "../../../support/constants/client.js";
import * as portfolioMapping from "../../../support/constants/portfolio.js";
import * as constantsSelectors from "../../constants/constantsSelectors.js"

Cypress.Commands.add("ProcessClientFile_Assert", (fileLocation) => { //this is a near duplicate of ProcessClientFile - will refactor later
  cy.login("staging", "username2", "password2");

  cy.readFile(fileLocation).then(function (fileContents) {
      fileContents = fileContents.replace(/[\t\n\r]/gm, ""); //remove new lines and tabs

      var API_Requests = cy.getRequestXML(fileContents); //translates are string of xml into an object we can work with
      var Clients = API_Requests["Clients"]; //get the <Clients> section of the xml
      var Client = null; // this will contain the client we want to process
      var ClientSur = API_Requests["Clients"]["Client"]["Surname"];

      if (Array.isArray(Clients.Client)) {
        //checking if it is an array as an array is dealt with in a different way than a single entity
        //multiple clients to create
        for (var x = 0; x < Clients.Client.length; x++) {
          Client = Clients.Client[x];
          cy.RetrieveClientUsingClientSearch(ClientSur);
          cy.AssertClient(Client);
        }
      } else {
        //One client to create
        Client = API_Requests["Clients"]["Client"]; // same as <root><clients><client>
        cy.RetrieveClientUsingClientSearch(ClientSur);
        cy.AssertClient(Client);
      }
    }); //end readFile
  
});

Cypress.Commands.add("RetrieveClientUsingClientSearch", (SearchParam) => {
  cy.get('#ExistingClientsIconMenu').click();
  //cy.wait(16000);
  cy.clickThumbnail('Client Search', {timeout:16000});

  //cy.wait(16000);
  cy.get('#AmendClientSearch', {timeout:17000}).click({force:true}); //timeout not working here, need to leave wait in for now
  cy.get(constantsSelectors.searchTextMatch).type(SearchParam);

  cy.get('.OverviewSearchButton').click();
  cy.wait(16000);
  
  cy.get('.tableContainer', {timeout:16000}).children().find('tbody').find('tr').first().dblclick();
  cy.clickThumbnail('Client Summary');
  cy.get('#EditClientIconMenu', {timeout:16000}).click();



});


Cypress.Commands.add("AssertClient", (Client) => {

  cy.ProcessAssert_UI(Client, clientMapping.ClientInputs);
  cy.get('"#ContactDetails .client_info_table"').click();
  cy.ProcessAssert_UI(Client, clientMapping.ClientContact);
  

});