import * as constants from "../../support/constantsSelectors.js"

describe("new test", () => {
   it("Create Client via XML", () =>{
      var fileLocation = 'cypress/fixtures/Clients/EmilyTest.xml';

      cy.login('uat', 'username2', 'password2');
      cy.get('#NewClientIconMenu',{ timeout: 16000 }).click()

      cy.get('#EditClientPopup .client_info_table').then(function () { //ensure client editor is there and client info section has loaded

      //get Client Object
      cy.readFile(fileLocation).then(function (fileContents) {
         fileContents = fileContents.replace(/[\t\n\r]/gm, ""); //remove new lines and tabs
     
         var API_Requests = cy.getRequestXML(fileContents); //translates are string of xml into an object we can work with
         var Clients = API_Requests["Clients"]; //get the <Clients> section of the xml
         var Client = null; // this will contain the client we want to process

         var CreateClientCallback = function(Client){
            cy.CreateClient_UI(Client);
            cy.reload();
            cy.login('uat', 'username2', 'password2');
            cy.get('#Continue',{ timeout: 16000 }).click({force:true});

            cy.get('#StoryCarousel5_Slides .ThumbnailContainer .JssorThumbnailContainer_A141A33F-04B8-4697-8637-9DA2458B2C2B',{ timeout: 16000 }).click(); //Client client Summary buttton
            cy.wait(5000); //Allow the client workspace some breathing space to load the client in;
            cy.get('#EditClientIconMenu',{ timeout: 16000 }).click(); //Client Edit Client Icon Button
            cy.get('#EditClientPopup .client_info_table').then(function () { //ensure client editor is there and client info section has loaded
               cy.AssertingClient_UI(Client);
            })

         }//end of CreateClientCallback

         if (Array.isArray(Clients.Client)) {
           //multiple clients to create
           for (var x = 0; x < Clients.Client.length; x++) {
             Client = Clients.Client[x];
             CreateClientCallback(Client);
           }
         } else {
           //One client to create
           Client = API_Requests["Clients"]["Client"]; // same as <root><clients><client>
           CreateClientCallback(Client);
         }
       });

      });
        
   })


})