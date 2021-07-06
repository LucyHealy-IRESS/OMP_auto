//Assumptions about security: 1. Search workspaces should not contain too many items on the results grid as assert is filtered by :visible, so if item is not in view, it might fail.
//security accounts should have at least 1 item returns on the grid to run the contin and not contain assert.

import * as core from "../../support/constants/Core"

Cypress.Commands.add("SecurityProcessing", function(fileLocation) {
       
    cy.readFile(fileLocation).then((text) => {
        var parser, xmlDoc
        parser = new DOMParser();
        xmlDoc = parser.parseFromString(text,"text/xml"); //parse xml to extract client data
        // var Clients = xmlDoc.getElementsByTagName("Client");
        // var totalEntity = Clients.length
        var Entities = []
        var SecurityEntities = ["Client", "Portfolio"];

         for (var y = 0; y < SecurityEntities.length; y++) {

            var CountEntities = cy.countEntities(xmlDoc, SecurityEntities[y])

            if (CountEntities > 0 ) {
                Entities.push(SecurityEntities[y])
            }
        }

        if(Entities.length == 0){
            cy.log("File doesn't contain Security supported Entities")
        }
        else{
            cy.log("Entities to be Processed from file " + Entities);

            for (var x = 0; x < Entities.length; x++) {

                var EntityType = Entities[x];
                var totalEntity = cy.countEntities(xmlDoc, EntityType);

                cy.login("SecurityAccess")
                cy.log("cy." + EntityType + "_Security_Access" + "(" + "xmlDoc" + "," + "totalEntity" + ")"); //call correct function based on the entity type
                eval("cy." + EntityType + "_Security_Access" + "(" + "xmlDoc" + "," + "totalEntity" + ")");

                cy.login("SecurityNoAccess")
                cy.log("cy." + EntityType + "_Security_NoAccess" + "(" + "xmlDoc" + "," + "totalEntity" + ")"); //call correct function based on the entity type
                eval("cy." + EntityType + "_Security_NoAccess" + "(" + "xmlDoc" + "," + "totalEntity" + ")");
            }
        }
    })
})



cy.countEntities = function(file, type){
  var entityType = file.getElementsByTagName(type);
  var totalEntity = entityType.length

  return totalEntity
}




