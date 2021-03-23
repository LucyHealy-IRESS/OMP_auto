import * as constants from "../constants/Core.js";

//Iterate through the recieved folder, taking each file and passing it to the ProcessXMLFile function
//Type = Create or Assert
Cypress.Commands.add("ProcessFolder", (ExecutiionFolderLocation, Type) => {
  cy.task("ReadFolderDirectory", ExecutiionFolderLocation).then((fileNames) => {
    if (fileNames.length > 0) {
      for (var x = 0; x < fileNames.length; x++) {
        var fileLocation = ExecutiionFolderLocation + "/" + fileNames[x];
        cy.ProcessXMLFile(fileLocation, Type);
      }
    }
  });
});

//Receiving the filename and decoding it in order to call the correct create or assert functions
//Type = Create or Assert
Cypress.Commands.add("ProcessXMLFile", (fileLocation, Type) => {
  cy.login("Dev", "username5", "password5");

  cy.get("#StoryCarousel1 .additionalInfo").then(function(){
    cy.readFile(fileLocation).then(function (fileContents) {
      fileContents = fileContents.replace(/[\t\n\r]/gm, ""); //remove new lines and tabs
      var API_Requests = cy.getRequestXML(fileContents); //translates are string of xml into an object we can work with
      var XMLtoArray = Object.keys(API_Requests);

      function traverse(XMLtoArray, Data) {
       if (XMLtoArray !== null) {
          for (var x = 0; x < XMLtoArray.length; x++) {
           var Entity = XMLtoArray[x]; //e.g. string C
            if (Array.isArray(XMLtoArray)) {
             for (var x = 0; x < XMLtoArray.length; x++) {
                var Entity = XMLtoArray[x]; //e.g. string Clients
                if (constants.EntityTypes[Entity]) {
                  var EntityData = Data[Entity]; //Array containing clients
                  cy.Process_Entity(Entity, Data); //ProcessClients x1
                  var XMLtoArraySub = Object.keys(EntityData);
                  traverse(XMLtoArraySub, EntityData);
              }
            }
          }
        }
      }
    }
    traverse(XMLtoArray, API_Requests); //e,g, clients|| Clients Data
  }); //end readFile
})
});

Cypress.Commands.add("Navigate", (Path) => { 
  cy.get(Path).click();
})

Cypress.Commands.add("Process_Entity", (Entity, EntityData) => { 

  var EntityInfo = constants.EntityTypes[Entity];
  var CurrentLocation = cy.WhereAmI();
  cy.log(CurrentLocation + " " +EntityInfo.Name);

  var Paths = EntityInfo.Paths;
  for (var x = 0; x < Paths.length; x++) {
    if(Paths[x].CurrentLocation == CurrentLocation){
      var PathClicks = Paths[x].Path;
      for (var a = 0; a < PathClicks.length; a++) {
        cy.Navigate(PathClicks[a].Click)
      }
    }
  }
  //PerformTask
  eval("cy."+EntityInfo.Task + "(Entity, EntityData)");
});

//wWork out current location - careful when callings, DOM needs to be stable - not an aSync function
cy.WhereAmI = function() {
  var location = "None";

  var x = Cypress.$('#StoryCarousel1');
  if (x.length > 0) {
      location=  'Home'
  }

  return location;
}


Cypress.Commands.add("RunSearch", (Entity, EntityData) => {
  var SearchParam = EntityData[Entity.SearchParam];
  var DefaultSearchCompletedCallback = function() { //This function exectutes only when the default search has finished loading
    var SearchCompletedCallback = function(){ //This function executes only when out client search has finished loading
        cy.wait(1000); //1 second ui catchup to prevent any detatching from async refreshes
        // cy.get('#StoryCarousel4 .TypeCompositePanel .tableContainer', {timeout:16000}).find('tr', {timeout:16000}).first().dblclick();
        // cy.clickThumbnail('Client Summary');
        // cy.get('#EditClientIconMenu', {timeout:16000}).click();  
    }
    cy.clickThumbnail(Entity.ThumbnailName, {timeout:16000});
    cy.get(Entity.MenuSelector).then(function(){ //wait till client search menu is actually open                                                                                                        //- JSSORPopUpMenu_Open is used by the amend search popup code and crashes if its not present
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