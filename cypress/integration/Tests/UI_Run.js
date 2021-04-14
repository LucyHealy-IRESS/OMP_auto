import * as constants from "../../support/constants/Core.js";

var NoOfActionFiles = Array(2).fill().map((_, i) => i);// Array(2).fill().map((_, i) => i);
var filenameArray = Array(1).fill().map((_, i) => i); //Due to Cypress limitations we can get the files in the folder and iterate that number of times. 
//Instead we put a number here we know is greater than the number of xml files. Only tests will run that have an associated xml file, it wont crash!

describe('Engine Iteration', () => {

  var filenames;
  var ExecutiionFolderLocation = "cypress/fixtures/ExecutionFolder/Create";

  before(() => {   
    cy.task("ReadFolderDirectory", {path:ExecutiionFolderLocation}).then((filenamesArray) => {
      filenames = filenamesArray;
    })
  })

  filenameArray.forEach((filenameNo) => { //A for() doest work here      
    NoOfActionFiles.forEach((ActionFileNo) => {
      ActionFileNo +=1;
      var reloadBetweenTests = false;
      if(ActionFileNo < NoOfActionFiles.length-1){ //Dont reload if on last iteration
        reloadBetweenTests = true;
      }    
      it(`File No: ${filenameNo} Action ${ActionFileNo}`, () => { //cant have filename as filenames are worked out on the before function so arent available outside the IT
        if(filenameNo < filenames.length ){ //index check
         var fileNameToProcess = filenames[filenameNo];
          cy.log(fileNameToProcess);
          cy.ProcessFile(ExecutiionFolderLocation,fileNameToProcess,ActionFileNo,reloadBetweenTests);
        }      
      });
    });
  });
});

