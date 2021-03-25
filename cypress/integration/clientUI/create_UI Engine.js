import * as constants from "../../support/constants/Core.js";

var filenameArray = Array(8).fill().map((_, i) => i); //Due to Cypress limitations we can get the files in the folder and iterate that number of times. 
//Instead we put a number here we know is greater than the number of xml files. Only tests will run that have an associated xml file, it wont crash!

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
      if(filenameNo < filenames.length ){ //index check
        var fileNameToProcess = filenames[filenameNo];
        cy.log(fileNameToProcess);
        cy.ProcessFile(ExecutiionFolderLocation,fileNameToProcess);
      }      
    });
  });
});

