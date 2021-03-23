import * as constantsSelectors from "../../constants/constantsSelectors.js";

Cypress.Commands.add("Client_Assert", (EntityData) => {

    cy.get("#ExistingClientsIconMenu", { timeout: 36000 }).click();

    var SearchCompleteCallback = function(){
        cy.get('#StoryCarousel4 .TypeCompositePanel .tableContainer tbody tr', {timeout:16000}).first().click();
        cy.wait(3000); 

        cy.get('#StoryCarousel4 .TypeCompositePanel .tableContainer tbody td', {timeout:16000}).first().click();
        cy.clickThumbnail('Client Search');
        //cy.get('#StoryCarousel4 .TypeCompositePanel .tableContainer td', {timeout:16000}).find('tr', {timeout:16000}).first("td").dblclick();
        // cy.clickThumbnail('Client Summary');
        // cy.get('#EditClientIconMenu', {timeout:16000}).click();  
        // cy.AssertClient(EntityData);
    }

    var SearchOptions = {
        SearchParam:"Surname",
        ThumbnailName:"Client Search",
        MenuSelector:".JSSORPopUpMenu.DashboardNo_9D8375A5-D2F6-4073-B19D-1F128A6CAED3 .JSSORPopUpMenu_Open",
        SearchCompleteCallbackFunc: SearchCompleteCallback
    }

    cy.RunSearch(SearchOptions,EntityData);

})

Cypress.Commands.add("RunSearch", (SearchOptions, EntityData) => {
  var SearchParam = EntityData[SearchOptions.SearchParam];
  var DefaultSearchCompletedCallback = function() { //This function exectutes only when the default search has finished loading
    var SearchCompletedCallback = function(){ //This function executes only when out client search has finished loading
        cy.wait(3000); //1 second ui catchup to prevent any detatching from async refreshes
        SearchOptions.SearchCompleteCallbackFunc();
    }
    cy.clickThumbnail(SearchOptions.ThumbnailName, {timeout:16000});
    cy.get(SearchOptions.MenuSelector).then(function(){ //wait till client search menu is actually open                                                                                                        //- JSSORPopUpMenu_Open is used by the amend search popup code and crashes if its not present
      cy.get('#AmendClientSearch', {timeout:17000}).click();
      cy.get(".AmendSearchPopup_Container").then(function(){ //check amend search has opened before continuing
        cy.get(constantsSelectors.searchTextMatch).type(SearchParam);
        cy.get('.OverviewSearchButton').click();
        cy.SearchHasCompleted(SearchCompletedCallback);
      })
    })
    
  }
  cy.SearchHasCompleted(DefaultSearchCompletedCallback);
});