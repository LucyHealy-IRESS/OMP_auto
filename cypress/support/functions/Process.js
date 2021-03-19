import * as constants from "../constants/Core.js";

//Iterate through the recieved folder, taking each file and passing it to the ProcessXMLFile function
//Type = Create or Assert
Cypress.Commands.add("ProcessFolder", (ExecutiionFolderLocation, Type) => {
    
    cy.task("ReadFolderDirectory", ExecutiionFolderLocation).then(
        (fileNames) => {
          if (fileNames.length > 0) {
            for (var x = 0; x < fileNames.length; x++) {
              var fileLocation = ExecutiionFolderLocation + "/" + fileNames[x];
              cy.ProcessXMLFile(fileLocation,Type);
            }
          }
        }
      );   
  });

//Receiving the filename and decoding it in order to call the correct create or assert functions
//Type = Create or Assert
Cypress.Commands.add("ProcessXMLFile", (fileLocation,Type) => {
    
    cy.login("Dev", "username5", "password5");
    
    cy.readFile(fileLocation).then(function (fileContents) {
        fileContents = fileContents.replace(/[\t\n\r]/gm, ""); //remove new lines and tabs
  
        var API_Requests = cy.getRequestXML(fileContents); //translates are string of xml into an object we can work with
        var EntityTypeRoot = Object.keys(API_Requests)[0]; //e.g. Clients
        var Entities = API_Requests[EntityTypeRoot]; //Extract clients data from the xml object       
        var subEntityType = Object.keys(Entities)[0]; //e.g. Client       

        var Entity = null; //This will contain each individual entity to process e.g. 1 client
        if (Array.isArray(Entities)) { //there may be multiples clients under <clients>// for (var x = 0; x < Entities.Entity.length; x++) {//     Entity = Entities.Entity[x];//     cy["test"]();//   }
        }
        else{          
          Entity = Entities[subEntityType];
          cy.Process_Create(subEntityType,Entity)
        }
             
      }); //end readFile
    
  });

  Cypress.Commands.add("Close_SubEditor", (SubEditor) => {
    if(SubEditor.NextButtonText){
    cy.get("[aria-describedby='" + SubEditor.Selector.replace("#","") + "']" + " .ui-dialog-buttonpane .ui-button span").contains(SubEditor.NextButtonText).click();    //button on editor to click after entering data 
    }
  })

  Cypress.Commands.add("Process_SubEditor", (PreviousSelector,SubEditor,Entity) => {

   //1.Click Access Point
    cy.get("[aria-describedby='" + PreviousSelector.replace("#","") + "']").contains(SubEditor.AccessPoint).click({force: true});
   
    if(SubEditor.Mappings){
      cy.PopulateEditor(SubEditor.Selector,SubEditor.Mappings,Entity);
    }
    else if (SubEditor.customFunction){
      eval("cy."+ SubEditor.customFunction + "(SubEditor.Selector,SubEditor,Entity);");
    }
    
    cy.wait(2500);
   
    //any more sub editors inside this subeditor? e.g. Add Funds?
    if(SubEditor.SubEditor){
      cy.Process_SubEditorData(SubEditor.Selector,SubEditor.SubEditor,Entity)
    } 

    cy.Close_SubEditor(SubEditor);
 })

  Cypress.Commands.add("Process_SubEditorData", (PreviousSelector,SubEditor,Entity) => {

    var SubEditorData = Entity[SubEditor.DataEntityRoot]; //e.g. portfolios
 
     if (SubEditorData) {
      if (Array.isArray(SubEditorData[SubEditor.DataEntity])) { //e.g. portfolio
        for (var x = 0; x < SubEditorData[SubEditor.DataEntity].length; x++) {
          cy.Process_SubEditor(PreviousSelector,SubEditor,SubEditorData[SubEditor.DataEntity][x]);
        }
      } else {
        cy.Process_SubEditor(PreviousSelector,SubEditor,SubEditorData[SubEditor.DataEntity]);
      }
    }

  })

  Cypress.Commands.add("Process_Create", (subEntityType,Entity) => {
    
    var EntityInfo = constants.EntityTypes[subEntityType];
    cy.ClickButtonOnHomeMenu(EntityInfo.HomeButtonName); //This also opens the initial editor
    var Editors = EntityInfo.Editors;
    for (var x = 0; x < Editors.length; x++) {
      var selector = Editors[x].Selector;
      var mappings = Editors[x].Mappings;
      if(mappings){
        cy.PopulateEditor(selector,mappings,Entity);
      }     
      var SubEditor = Editors[x].SubEditor;
      if(SubEditor){
        cy.Process_SubEditorData(selector,SubEditor,Entity);         
      }
      cy.get("[aria-describedby='" + selector.replace("#","") + "']" + " .ui-dialog-buttonpane .ui-button span").contains(Editors[x].NextButtonText).click();    //button on editor to click after entering data
    }  
  });



  Cypress.Commands.add("PopulateEditor", (EditorSelector,AccordianMappings,XMLDataObject) => {
    cy.get(EditorSelector, {  //ensure editor is there
        timeout: 226000,
      }).then(function () {
        var AccordiansArray = Object.entries(AccordianMappings);
        AccordiansArray.forEach(([key, value]) => {
          var Accordian = AccordianMappings[key];
          if(!key == 'NoAccordian'){           
            cy.clickAccordion(EditorSelector,Accordian.AccordianName)
            cy.get(Accordian.AccordianSelector +".wijmo-wijaccordion-content-active").then(function(){ //ensure accordian is open
                cy.ProcessCreate_UI(XMLDataObject, Accordian.AccordianContentMappings); //apply the conents of the xml to the inputs
            })
          }
          else{
            cy.ProcessCreate_UI(XMLDataObject, Accordian.AccordianContentMappings); //apply the conents of the xml to the inputs
          }
            
          });
      })
});




