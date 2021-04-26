import * as ClientConstants from "../../constants/client.js";
import * as Constants from "../../constants/Core.js";

Cypress.Commands.add("Client_Assert_1", (EntityData) => {

    cy.get("#ExistingClientsIconMenu", { timeout:Constants.Timeout_MenuButtonWait }).click();

    var SearchCompleteCallback = function(){
      cy.wait(1000); //1 second ui catchup to prevent any detatching from async refreshes

      cy.get('#StoryCarousel4 .TypeCompositePanel .tableContainer', {timeout:Constants.Timeout_Medium}).find('tr', {timeout:Constants.Timeout_Medium}).first().dblclick();
      cy.clickThumbnail('Client Summary', {timeout: Constants.Timeout_Medium});
      cy.get('#EditClientIconMenu', {timeout:Constants.Timeout_Medium}).click(); 
      cy.get("#EditClientPopup .client_info_table", {  //ensure client editor is there and client info section has loaded
        timeout: Constants.Timeout_EditorWait,
      }).then(function () {        
        cy.AssertEditor(ClientConstants.ClientEditorSelector,ClientConstants.AllClientInputs,EntityData, "Client");   
        cy.get('.btn-viewportfolios-action > .ui-button-text').click(); 
        cy.get('.ui-dialog-buttonset > .ui-button > .ui-button-text').click();//I had to add these two as with just the below line it wouldn't process to the assert, not sure why, but when you click Ok on the client editor, the dashboard doesnt regresh, then the menu doesn load. I think the ui freezes or soemthing like that.
        //cy.clickButtonInPopup(ClientConstants.ClientEditorSelector,"Ok"); //change of flow over the Income/Portfolio grids that handle different plan types
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


Cypress.Commands.add("Client_Assert_API", (EntityData) => {

  var xml_Payload = `<Client xmlns="http://api.omsystems.co.uk">
  <ClientID>[CLIENT_ID]</ClientID>
  </Client>`;
  xml_Payload = xml_Payload.replace("[CLIENT_ID]", EntityData.ClientID);
  
  cy.API_Retreive(xml_Payload).then(function(ResponseXMLString){ 
    var ResponseXMLObject = cy.getResponseXML(ResponseXMLString); //translates are string of xml into an object we can work with
    if(ResponseXMLObject){
      if (EntityData.Portfolios) {
        delete EntityData.Portfolios; //Portfolios to the API are a seperate call, they API will not return portfoliots in the client xml
      }
      cy.ProcessAssert_API(ClientConstants.AllClientInputs,EntityData,ResponseXMLObject.Client, "Client");
    }   
  });
});

