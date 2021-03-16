describe("Create Client and Client Portfolios", () => {
    it("Create Client and Portfolio via XML", () => {
      var ExecutiionFolderLocation = "cypress/fixtures/ExecutionFolder/Create";
      cy.task("ReadFolderDirectory", ExecutiionFolderLocation).then(
        (fileNames) => {
          if (fileNames.length > 0) {
            for (var x = 0; x < fileNames.length; x++) {
              var fileLocation = ExecutiionFolderLocation + "/" + fileNames[x];
              cy.ProcessClientFile(fileLocation);
            }
          }
        }
      );
    });
  });

// describe("retreive",() => {
//     it("retreive",() => {
//        // cy.login("staging", "username2", "password2");
//        cy.RetreiveClient_API('d9d65f4c-8b71-4427-ae0e-25196cc1fe27').then(function(response){
//         cy.getResponseXMLData(response.body).then(function(clientxml){});
//        });
//     })

// })