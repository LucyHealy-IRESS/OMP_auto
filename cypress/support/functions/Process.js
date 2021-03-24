import * as constants from "../constants/Core.js";
import * as constantsSelectors from "../constants/constantsSelectors.js";

//Iterate through the recieved folder, taking each file and passing it to the ProcessXMLFile function
Cypress.Commands.add("ProcessFolder", (ExecutiionFolderLocation) => {
  cy.task("ReadFolderDirectory", ExecutiionFolderLocation).then((fileNames) => {
    if (fileNames.length > 0) {

      var NoOfActionFiles = 1;
      for (var ActionFileNo = 1; ActionFileNo < NoOfActionFiles+1; ActionFileNo++) {

      //1 Creation Pass
       for (var C = 0; C < fileNames.length; C++) {
        var fileLocation = ExecutiionFolderLocation + "/" + fileNames[C];
        cy.ProcessXMLFile(fileLocation, constants.RunType_Create, ActionFileNo);
      }
      //2 Assert Pass
      for (var A = 0; A < fileNames.length; A++) {
       var fileLocation = ExecutiionFolderLocation + "/" + fileNames[A];
       cy.wait(3000);
       cy.ProcessXMLFile(fileLocation, constants.RunType_Assert,ActionFileNo);
      }
      //3 Roll off what we have created
      for (var D = 0; D < fileNames.length; D++) {
        var fileLocation = ExecutiionFolderLocation + "/" + fileNames[D];
        cy.wait(3000);
        cy.ProcessXMLFile(fileLocation,constants.RunType_Delete, ActionFileNo);
      }
      
      if(ActionFileNo < NoOfActionFiles-1){ //Dont reload if on last iteration
        cy.reload();
        cy.wait(3000);
      }      
    }
   }
  });
});

//Receiving the filename and decoding it in order to call the correct create/assert/delete functions
//Type = Create or Assert or Delete
Cypress.Commands.add("ProcessXMLFile", (fileLocation, Type,ActionFileNo) => {
  cy.login();

  cy.get("#StoryCarousel1 .additionalInfo").then(function () {
    cy.readFile(fileLocation).then(function (fileContents) {
      fileContents = fileContents.replace(/[\t\n\r]/gm, ""); //remove new lines and tabs

      var API_Requests = cy.getRequestXML(fileContents); //translates are string of xml into an object we can work with
      var XMLtoArray = Object.keys(API_Requests);

      function traverse(XMLtoArray, Data) {
        if (XMLtoArray !== null) {
          //Do We have something to process?
          for (var x = 0; x < XMLtoArray.length; x++) {
            var Entity = XMLtoArray[x]; //e.g. string Clients
            if (constants.EntityTypes[Entity]) {
              //e.g. is Clients one or our tags we have to process or could it Firstname which we dont care about
              var EntityData = Data[Entity]; //Grab Clients from the data
              if (Array.isArray(EntityData)) {
                //We could have multiple clients to create in which case they would be in an array
                for (var x = 0; x < EntityData.length; x++) {
                  // For each client......
                  cy.log(Entity + " " + Type + " Action" + ActionFileNo);
                  eval("cy." + Entity + "_" + Type + "_" + ActionFileNo + "(EntityData[x]);");
                  var XMLtoArraySub = Object.keys(EntityData[x]); //Get the specific client from the array
                  traverse(XMLtoArraySub, EntityData[x]); //and start processing that down...
                }
              } else {
                cy.log(Entity + " " + Type + " Action:" + ActionFileNo);
                eval("cy." + Entity + "_" + Type + "_" + ActionFileNo + "(EntityData);");
                var XMLtoArraySub = Object.keys(EntityData);
                traverse(XMLtoArraySub, EntityData);
              }
            }
          }
        }
      }
      traverse(XMLtoArray, API_Requests); //e,g, clients|| Clients Data
    }); //end readFile
  });
});

Cypress.Commands.add("PopulateEditor",(EditorSelector, AccordianMappings, XMLDataObject) => {

  cy.get(EditorSelector, { timeout: 226000}).then(function () {
    
    var AccordiansArray = Object.entries(AccordianMappings);
      AccordiansArray.forEach(([key, value]) => {
        var Accordian = AccordianMappings[key];
   
        if (key != "NoAccordian") {
          cy.get(Accordian.AccordianSelector).then(function ($AccordianSelector) {
            if($AccordianSelector.hasClass('wijmo-wijaccordion-content-active')){
              cy.ProcessCreate_UI(XMLDataObject,Accordian.AccordianContentMappings);
            }
            else {
              cy.clickAccordion(EditorSelector, Accordian.AccordianName);
              cy.get(Accordian.AccordianSelector + ".wijmo-wijaccordion-content-active").then(function () {
                cy.ProcessCreate_UI(XMLDataObject,Accordian.AccordianContentMappings); //apply the conents of the xml to the inputs
              });
            }          
          });
        } else { 
          cy.ProcessCreate_UI(XMLDataObject,Accordian.AccordianContentMappings); //apply the conents of the xml to the inputs
        }
      });
    });
  }
);

Cypress.Commands.add("AssertEditor",(EditorSelector, AccordianMappings, XMLDataObject) => {

  cy.get(EditorSelector, { timeout: 226000}).then(function () {
    
    var AccordiansArray = Object.entries(AccordianMappings);
      AccordiansArray.forEach(([key, value]) => {
        var Accordian = AccordianMappings[key];
   
        if (key != "NoAccordian") {
          cy.get(Accordian.AccordianSelector).then(function ($AccordianSelector) {
            if($AccordianSelector.hasClass('wijmo-wijaccordion-content-active')){
              cy.ProcessAssert_UI(XMLDataObject,Accordian.AccordianContentMappings);
            }
            else {
              cy.clickAccordion(EditorSelector, Accordian.AccordianName);
              cy.get(Accordian.AccordianSelector + ".wijmo-wijaccordion-content-active").then(function () {
                cy.ProcessAssert_UI(XMLDataObject,Accordian.AccordianContentMappings); //apply the conents of the xml to the inputs
              });
            }          
          });
        } else { 
          cy.ProcessAssert_UI(XMLDataObject,Accordian.AccordianContentMappings); //apply the conents of the xml to the inputs
        }
      });
    });
  }
);

Cypress.Commands.add("RunSearch", (SearchOptions, EntityData) => {
  var SearchParam = EntityData[SearchOptions.SearchParam];
  var DefaultSearchCompletedCallback = function() { //This function exectutes only when the default search has finished loading
    var SearchCompletedCallback = function(){ //This function executes only when out client search has finished loading
        cy.wait(1000); //1 second ui catchup to prevent any detatching from async refreshes
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

Cypress.Commands.add("SearchHasCompleted", (callback) => {
  cy.get(".overviewHeader").find("div").find("span").contains("Matching Client",{timeout:32000}).then(function($span){ //initial search completes as header contains x Matching Clients
    var NoMatchingClients = $span.text();
    var numb = NoMatchingClients.replace(/[^0-9]/g,''); //extract numbers from text only
    if (numb > 0) { 
     cy.get("#StoryCarousel4 .TypeCompositePanel .tableContainer tr",{timeout:32000}).then(function(){     //now we wait for the results grid to finish loading
      callback();
      }) 
    } else {//no clients = 0 matching clients
      cy.get("#StoryCarousel4 .TypeCompositePanel .tableContainer",{timeout:32000}).then(function(){ //no clients so no trs to wait for
        callback();
      }) 
    }    
  })
});