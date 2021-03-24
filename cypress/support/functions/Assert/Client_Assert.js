import * as constantsSelectors from "../../constants/constantsSelectors.js";
import * as ClientConstants from "../../constants/client.js";

Cypress.Commands.add("Client_Assert_1", (EntityData) => {

    cy.get("#ExistingClientsIconMenu", { timeout: 36000 }).click();

    var SearchCompleteCallback = function(){
      cy.wait(1000); //1 second ui catchup to prevent any detatching from async refreshes

      cy.get('#StoryCarousel4 .TypeCompositePanel .tableContainer', {timeout:16000}).find('tr', {timeout:16000}).first().dblclick();
      cy.clickThumbnail('Client Summary', {timeout:16000});
      cy.get('#EditClientIconMenu', {timeout:16000}).click(); 
      cy.get("#EditClientPopup .client_info_table", {  //ensure client editor is there and client info section has loaded
        timeout: 226000,
      }).then(function () {        
        cy.AssertEditor(ClientConstants.ClientEditorSelector,ClientConstants.ClientAccordians,EntityData);   
      });     
    }

    var SearchOptions = {
        SearchParam:"Surname",
        ThumbnailName:"Client Search",
        MenuSelector:".JSSORPopUpMenu.DashboardNo_9D8375A5-D2F6-4073-B19D-1F128A6CAED3 .JSSORPopUpMenu_Open",
        SearchCompleteCallbackFunc: SearchCompleteCallback
    }

    cy.RunSearch(SearchOptions,EntityData);

})

Cypress.Commands.add("Client_Assert_2", (EntityData) => {
  cy.Client_Assert_1(EntityData);
});

Cypress.Commands.add("Client_Assert_3", (EntityData) => {});

