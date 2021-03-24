Cypress.Commands.add("Client_Delete_1", (EntityData) => {

  cy.get("#ExistingClientsIconMenu", { timeout: 36000 }).click();

  var SearchCompleteCallback = function(){
    cy.wait(1000); //1 second ui catchup to prevent any detatching from async refreshes
      cy.get('#StoryCarousel4 .TypeCompositePanel .tableContainer', {timeout:16000}).find('tr', {timeout:16000}).first().dblclick();
      cy.wait(1000); 
      cy.clickThumbnail('Client Summary');
      cy.get("#EditClientIconMenu", { timeout: 36000 }).click({force:true});
      cy.get("#EditClientPopup .client_info_table", {  //ensure client editor is there and client info section has loaded
        timeout: 226000,
      }).then(function () {         
        cy.get("#DeleteMenu a").click({force:true}); //Click delete button  
        cy.get("[aria-describedby='Client_Delete_Confirm']").then(function($Container){
          cy.wrap($Container).find("button").contains("Yes").click();
          cy.wait(2000);
        })
      });
  }

  var SearchOptions = {
      SearchParam:"Surname",
      ThumbnailName:"Client Search",
      MenuSelector:".JSSORPopUpMenu.DashboardNo_9D8375A5-D2F6-4073-B19D-1F128A6CAED3 .JSSORPopUpMenu_Open",
      SearchCompleteCallbackFunc: SearchCompleteCallback
  }

  cy.RunSearch(SearchOptions,EntityData);

});

Cypress.Commands.add("Client_Delete_2", (EntityData) => {
  cy.Client_Delete_1(EntityData);
});

Cypress.Commands.add("Client_Delete_3", (EntityData) => {});