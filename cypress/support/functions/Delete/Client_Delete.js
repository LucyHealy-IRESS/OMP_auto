import * as Constants from "../../constants/Core.js";

Cypress.Commands.add("Client_Delete_1", (EntityData) => {

  cy.get("#ExistingClientsIconMenu", { timeout: Constants.Timeout_MenuButtonWait }).click();

  var SearchCompleteCallback = function () {
    cy.wait(1000); //1 second ui catchup to prevent any detatching from async refreshes
    cy.get('#StoryCarousel4 .TypeCompositePanel .tableContainer', { timeout: Constants.Timeout_Medium }).find('tr', { timeout: Constants.Timeout_Medium }).first().dblclick();
    cy.wait(1000);
    cy.menuClick('Client Summary', '#EditClientIconMenu');
    cy.get("#EditClientPopup .client_info_table", {  //ensure client editor is there and client info section has loaded
      timeout: Constants.Timeout_EditorWait,
    }).then(function () {
      cy.get("#DeleteMenu a").click({ force: true }); //Click delete button  
      cy.get("[aria-describedby='Client_Delete_Confirm']").then(function ($Container) {
        cy.wrap($Container).find("button").contains("Yes").click();
        cy.wait(4000);
      })
    });
  }

  var SearchOptions = {
    SearchParam: "Surname",
    ThumbnailName: "Client Search",
   // MenuSelector: ".JSSORPopUpMenu.DashboardNo_9D8375A5-D2F6-4073-B19D-1F128A6CAED3 .JSSORPopUpMenu_Open",
    SearchCompleteCallbackFunc: SearchCompleteCallback
  }

  cy.RunSearch(SearchOptions, EntityData);

});

Cypress.Commands.add("Client_Delete_2", (EntityData) => {
  cy.Client_Delete_1(EntityData);
});

Cypress.Commands.add("Client_Delete_3", (EntityData) => { });


Cypress.Commands.add("Client_Delete_API", (Client) => {

  var xml_Payload = `<Client xmlns="http://api.omsystems.co.uk">
      <ClientID>[CLIENT_ID]</ClientID>
      </Client>`;
  xml_Payload = xml_Payload.replace("[CLIENT_ID]", Client.ClientID);

  cy.API_Call(xml_Payload, Constants.API_Delete);
})