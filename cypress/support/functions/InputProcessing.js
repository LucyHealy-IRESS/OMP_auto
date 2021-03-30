import * as constants from "../constants/constantsSelectors.js"

//This function takes the client object and creates it using the UI of the client editor
Cypress.Commands.add("ProcessCreate_UI", (xmlObject, xmlInput, xmlMappings) => {

  var XmlInputObject = xmlMappings[xmlInput]; //match the xml tag with the object in Client Inputs,if that xml tag has been passed in we can go ahead and create it
     if (XmlInputObject) {
       if (XmlInputObject.inputType == "String") {
         var textInput = xmlObject[xmlInput.toString()];
         if (textInput) {
           cy.get(XmlInputObject.Selector).type(textInput);
         }
       } 
       else if (XmlInputObject.inputType == "Integer") {
        var textInput = xmlObject[xmlInput.toString()];
        if (textInput) {
          cy.get(XmlInputObject.Selector).type(`{selectall}`).type(textInput);
        }
      } 
       else if (XmlInputObject.inputType == "Date") {
          cy.SetSimpleDatefromXMLDateFormat(XmlInputObject.ddSelector,XmlInputObject.mmSelector,XmlInputObject.yyyySelector,xmlObject[xmlInput.toString()])         
       } else if (XmlInputObject.inputType == "Dropdown") {
         var textInput = xmlObject[xmlInput.toString()];
         if (textInput) {
          cy.SetDropdown(XmlInputObject.Selector,textInput);
         }
       } else if (XmlInputObject.inputType == "ValueOrClick") {
         cy.get(XmlInputObject.Selector).click();
         cy.wait(100); //Auto gen value is entered
          var textInput = xmlObject[xmlInput.toString()];
          if (textInput) {
            cy.get(XmlInputObject.Selector).clear({force: true}).type(textInput);
          }      
       }
       else if (XmlInputObject.inputType == "ProductDropdown") {         
          cy.TranslateProductID(xmlObject,XmlInputObject)  ; 
       }
       else if (XmlInputObject.inputType == "ProviderDropdown") {         
        cy.TranslateProviderID(xmlObject,XmlInputObject)  ; 
       }
       else if (XmlInputObject.inputType == "DropdownIndex") {      //e.g. value is 1 so select 2nd dropdown input (0 based)    
        var textInput = xmlObject[xmlInput.toString()];
         if (textInput) {
          cy.SetDropdown_ByIndex(XmlInputObject.Selector,textInput);
         }
       }
       else if (XmlInputObject.inputType == "Checkbox") {      //e.g. value is 1 so select 2nd dropdown input (0 based)    
        var textInput = xmlObject[xmlInput.toString()];
        if (textInput) {
          var isTrueSet = (textInput == 'true' || textInput == 'True');
          if(isTrueSet){
            cy.get(XmlInputObject.Selector).check({ force: true });
          }
          else{
            cy.get(XmlInputObject.Selector).uncheck({ force: true });
          }         
         }
       }
     }

 });
 
 
 Cypress.Commands.add("ProcessAssert_UI", (xmlObject, xmlInput, xmlMappings) => {
   
       var XmlInputObject = xmlMappings[xmlInput]; //match the xml tag with the object in Client Inputs, if that xml tag has been passed in we can go ahead and assert it
       if (XmlInputObject) {
         if (XmlInputObject.inputType == "String") {
           var textInput = xmlObject[xmlInput.toString()];
           if (textInput) {
             cy.get(XmlInputObject.Selector).should('have.value', textInput);
           }
         } else if (XmlInputObject.inputType == "Integer") {
           var textInput = xmlObject[xmlInput];
           var textInput = Number(textInput);
           if (textInput) {
             cy.get(XmlInputObject.Selector).should('contain.value', textInput);
           }
         } else if (XmlInputObject.inputType == "Dropdown") {
          var textInput = xmlObject[xmlInput.toString()];
          if (textInput) {
           cy.get(XmlInputObject.Selector).should('have.value', textInput);
          }
        } else if (XmlInputObject.inputType == "Date") {
 
         } else if (XmlInputObject.inputType == "Dropdown") {
 
         } else if (XmlInputObject.inputType == "ValueOrClick") {
 
         }
       }
   });
   
 