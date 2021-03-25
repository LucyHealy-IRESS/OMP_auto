import * as constants from "../../support/constants/Core.js";

var filenameArray = Array(8).fill().map((_, i) => i);//creative array of consecutive numbers 0 - n

describe('Engine Iteration', () => {
  filenameArray.forEach((filename) => {
    it(`File No: ${filename+1}`, () => {
     cy.log(filename);
      var ExecutiionFolderLocation = "cypress/fixtures/ExecutionFolder/Create";
      cy.task("ReadFolderDirectory", {path:ExecutiionFolderLocation,fileNo: filename}).then((fileNameToProcess) => {
        if(fileNameToProcess){
          cy.log(fileNameToProcess);
          cy.ProcessFile(ExecutiionFolderLocation,fileNameToProcess);
        }
       });;
    });
  });
});

