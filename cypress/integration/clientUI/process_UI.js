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

 describe("Assert Client and Client Portfolios", () => {
   it("Assert Client and Portfolio via XML", () => {
     var ExecutiionFolderLocation = "cypress/fixtures/ExecutionFolder/Assert";
     cy.task("ReadFolderDirectory", ExecutiionFolderLocation).then(
       (fileNames) => {
         if (fileNames.length > 0) {
           for (var x = 0; x < fileNames.length; x++) {
             var fileLocation = ExecutiionFolderLocation + "/" + fileNames[x];
             cy.ProcessClientFile_Assert(fileLocation);
           }
         }
       }
     );
   });
 });

