import * as constants from "../constants/Core.js";

//Iterate through the recieved folder, taking each file and passing it to the ProcessXMLFile function
//Type = Create or Assert
Cypress.Commands.add("ProcessFolder", (ExecutiionFolderLocation) => {
  cy.task("ReadFolderDirectory", ExecutiionFolderLocation).then((fileNames) => {
    if (fileNames.length > 0) {
      //2 Passes - 1 = Create, 2 = Assert
      for (var x = 0; x < fileNames.length; x++) {
        var fileLocation = ExecutiionFolderLocation + "/" + fileNames[x];
        cy.ProcessXMLFile(fileLocation, constants.RunType_Create);
      }
      for (var x = 0; x < fileNames.length; x++) {
        var fileLocation = ExecutiionFolderLocation + "/" + fileNames[x];
        cy.ProcessXMLFile(fileLocation, constants.RunType_Assert);
      }
    }
  });
});

//Receiving the filename and decoding it in order to call the correct create or assert functions
//Type = Create or Assert
Cypress.Commands.add("ProcessXMLFile", (fileLocation, Type) => {
  //cy.login("Dev", "username5", "password5");

  // cy.get("#StoryCarousel1 .additionalInfo").then(function(){
  cy.readFile(fileLocation).then(function (fileContents) {
    fileContents = fileContents.replace(/[\t\n\r]/gm, ""); //remove new lines and tabs

    var API_Requests = cy.getRequestXML(fileContents); //translates are string of xml into an object we can work with
    var XMLtoArray = Object.keys(API_Requests);

    function traverse(XMLtoArray, Data) {
      if (XMLtoArray !== null) {//Do We have something to process?       
        for (var x = 0; x < XMLtoArray.length; x++) {
          var Entity = XMLtoArray[x]; //e.g. string Clients
          if (constants.EntityTypes[Entity]) { //e.g. is Clients one or our tags we have to process or could it Firstname which we dont care about
            var EntityData = Data[Entity]; //Grab Clients from the data
            if (Array.isArray(EntityData)) { //We could have multiple clients to create in which case they would be in an array
              for (var x = 0; x < EntityData.length; x++) { // For each client......
                console.log(Entity + " " + Type);
                eval("cy."+Entity+"_"+Type+"(EntityData[x]);");
                var XMLtoArraySub = Object.keys(EntityData[x]); //Get the specific client from the array
                traverse(XMLtoArraySub, EntityData[x]); //and start processing that down...
              }
            } else {
              console.log(Entity + " " + Type);
              eval("cy."+Entity+"_"+Type+"(EntityData);");
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
