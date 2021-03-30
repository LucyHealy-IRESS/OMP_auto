import * as constants from "../constants/Core.js";
import * as constantsSelectors from "../constants/constantsSelectors.js";

//Iterate through the recieved folder, taking each file and passing it to the ProcessXMLFile function
Cypress.Commands.add("ProcessFile", (ExecutiionFolderLocation,fileName) => {

      var NoOfActionFiles = 2;
      for (var ActionFileNo = 1; ActionFileNo < NoOfActionFiles+1; ActionFileNo++) {    
      
      var fileLocation = ExecutiionFolderLocation + "/" + fileName;
      //1 Creation Pass
      cy.ProcessXMLFile(fileLocation, constants.RunType_Create, ActionFileNo);

      //2 Assert Pass
      cy.wait(3000);
      cy.ProcessXMLFile(fileLocation, constants.RunType_Assert,ActionFileNo);
      
       //3 Roll off what we have created
      cy.wait(3000);
      cy.ProcessXMLFile(fileLocation,constants.RunType_Delete, ActionFileNo);
      
      if(ActionFileNo < NoOfActionFiles-1){ //Dont reload if on last iteration
        cy.reload();
        cy.wait(3000);
      }      
    }
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
      var ArrayOfFunctionCalls = [];
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
                  ArrayOfFunctionCalls.push(Entity + "_Tidy" );       
                  traverse(XMLtoArraySub, EntityData[x]); //and start processing that down...
                }
                
              } else {
                cy.log(Entity + " " + Type + " Action:" + ActionFileNo);
                eval("cy." + Entity + "_" + Type + "_" + ActionFileNo + "(EntityData);");
                var XMLtoArraySub = Object.keys(EntityData);
                ArrayOfFunctionCalls.push(Entity + "_Tidy" );
                traverse(XMLtoArraySub, EntityData);
              }
            }
          }
        }
      }
      traverse(XMLtoArray, API_Requests); //e,g, clients|| Clients Data
      if(Type==constants.RunType_Create){ //when finished creating we can call tidy up functions to close off any open popups
        var Distinct_ArrayOfFunctionCalls = cy.removeDuplicatesInArray(ArrayOfFunctionCalls);
        for (var x = 0; x < Distinct_ArrayOfFunctionCalls.length; x++) {
          cy.log(Distinct_ArrayOfFunctionCalls[x]);
           eval("cy." + Distinct_ArrayOfFunctionCalls[x] + "(ActionFileNo);");
        }
        //iterte and call
      }
      
    }); //end readFile
  });
});

Cypress.Commands.add("ProcesssInput",(XMLDataObject,xmlInput,mapping, isCreate) => {
  if(isCreate){
    cy.ProcessCreate_UI(XMLDataObject,xmlInput,mapping);
  }
  else{
    cy.ProcessAssert_UI(XMLDataObject,xmlInput,mapping);
  }
})

Cypress.Commands.add("ProcessAccordian",(EditorSelector,mapping,xmlInput,XMLDataObject,InputMappings,isCreate) => {
  cy.get(mapping.AccordianSelector).then(function ($AccordianSelector) {
    if($AccordianSelector.hasClass('wijmo-wijaccordion-content-active')){
      cy.ProcesssInput(XMLDataObject,xmlInput,InputMappings,isCreate);
    }
    else {
      cy.clickAccordion(EditorSelector, mapping.AccordianName);
      cy.get(mapping.AccordianSelector + ".wijmo-wijaccordion-content-active").then(function () {
        cy.ProcesssInput(XMLDataObject,xmlInput,InputMappings,isCreate);
      });
    }          
  });
})

Cypress.Commands.add("EditorProcesssor",(EditorSelector, InputMappings, XMLDataObject, isCreate) => {
  cy.get(EditorSelector, { timeout: constants.Timeout_EditorWait}).then(function () {
    for (let xmlInput in XMLDataObject) { //for each xml tag
      if(InputMappings[xmlInput]) { //if we have a mapping for this input
        var mapping = InputMappings[xmlInput];
        if(mapping.hasOwnProperty('AccordianSelector')){ //if this input is inside an accordian
          cy.ProcessAccordian(EditorSelector,mapping,xmlInput,XMLDataObject,InputMappings,isCreate);
        }
        else{
          cy.ProcesssInput(XMLDataObject,xmlInput,InputMappings,isCreate);
        }
      }
    }
    });
})

Cypress.Commands.add("PopulateEditor",(EditorSelector, InputMappings, XMLDataObject) => {
  cy.EditorProcesssor(EditorSelector, InputMappings, XMLDataObject, true);
});

Cypress.Commands.add("AssertEditor",(EditorSelector, InputMappings, XMLDataObject) => {
  cy.EditorProcesssor(EditorSelector, InputMappings, XMLDataObject,false);
});

Cypress.Commands.add("RunSearch", (SearchOptions, EntityData) => {
  var SearchParam = EntityData[SearchOptions.SearchParam];
  var DefaultSearchCompletedCallback = function() { //This function exectutes only when the default search has finished loading
    var SearchCompletedCallback = function(){ //This function executes only when out client search has finished loading
        cy.wait(1000); //1 second ui catchup to prevent any detatching from async refreshes
        SearchOptions.SearchCompleteCallbackFunc();
    }
    cy.clickThumbnail(SearchOptions.ThumbnailName, {timeout:constants.Timeout_Medium});
    cy.get(SearchOptions.MenuSelector).then(function(){ //wait till client search menu is actually open                                                                                                        //- JSSORPopUpMenu_Open is used by the amend search popup code and crashes if its not present
      cy.get('#AmendClientSearch', {timeout:constants.Timeout_Medium}).click();
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
  cy.get(".overviewHeader").find("div").find("span").contains("Matching Client",{timeout:constants.Timeout_SearchWait}).then(function($span){ //initial search completes as header contains x Matching Clients
    var NoMatchingClients = $span.text();
    var numb = NoMatchingClients.replace(/[^0-9]/g,''); //extract numbers from text only
    if (numb > 0) { 
     cy.get("#StoryCarousel4 .TypeCompositePanel .tableContainer tr",{timeout:constants.Timeout_SearchWait}).then(function(){     //now we wait for the results grid to finish loading
      callback();
      }) 
    } else {//no clients = 0 matching clients
      cy.get("#StoryCarousel4 .TypeCompositePanel .tableContainer",{timeout:constants.Timeout_SearchWait}).then(function(){ //no clients so no trs to wait for
        callback();
      }) 
    }    
  })
});

