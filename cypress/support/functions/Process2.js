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
  //cy.login("Dev", "username5", "password5");

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
});

Cypress.Commands.add("Process_Entity", (Entity, EntityData) => {
  var EntityInfo = constants.EntityTypes[Entity];
  cy.log(Entity);
});
