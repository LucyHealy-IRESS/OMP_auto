import * as constants from "../../support/constants/Core.js";

var filenameArray = Array(8).fill().map((_, i) => i); //creative array of consecutive numbers 0 - n

describe('Engine Iteration', () => {

  var filenames;
  var ExecutiionFolderLocation = "cypress/fixtures/ExecutionFolder/Create";

  before(() => {   
    cy.task("ReadFolderDirectory", {path:ExecutiionFolderLocation,fileNo: 1}).then((filenamesArray) => {
      filenames = filenamesArray;
    })
  })

  filenameArray.forEach((filenameNo) => { //A for() doest work here
    it(`File No: ${filenameNo}`, () => {
      if(filenameNo < filenames.length ){
        var fileNameToProcess = filenames[filenameNo];
        cy.log(fileNameToProcess);
        cy.ProcessFile(ExecutiionFolderLocation,fileNameToProcess);
      }      
    });
  });
});

