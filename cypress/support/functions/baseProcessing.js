import * as constants from "../../support/constants/constantsSelectors.js"

//This function takes the client object and creates it using the UI of the client editor
Cypress.Commands.add("ProcessCreate_UI", (xmlObject, xmlMappings) => {
  
  for (let xmlInput in xmlObject) { //iterate each tag of the xml object for the client

     var XmlInputObject = xmlMappings[xmlInput]; //match the xml tag with the object in Client Inputs,if that xml tag has been passed in we can go ahead and create it
     if (XmlInputObject) {
       if (XmlInputObject.inputType == "String") {
         var textInput = xmlObject[xmlInput.toString()];
         if (textInput) {
           cy.get(XmlInputObject.Selector).type(textInput);
         }
       } 
       else if (XmlInputObject.inputType == "Currency") {
        var textInput = xmlObject[xmlInput.toString()];
        if (textInput) {
          //cy.get(XmlInputObject.Selector).focus().type(textInput +"{rightarrow}").type(textInput).blur();   //puts in one digit     
          cy.get(XmlInputObject.Selector).click().focus().type(textInput).blur();     
        }
      } 
       else if (XmlInputObject.inputType == "Date") {
          cy.SetSimpleDatefromXMLDateFormat(constants.dobDD,constants.dobMM,constants.dobYYYY,xmlObject[xmlInput.toString()])         
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
            cy.get(XmlInputObject.Selector).clear().type(textInput);
          }      
       }
       else if (XmlInputObject.inputType == "ProductDropdown") {         
          cy.TranslateProductID(xmlObject,XmlInputObject)  ; 
       }
       else if (XmlInputObject.inputType == "ProviderDropdown") {         
        cy.TranslateProviderID(xmlObject,XmlInputObject)  ; 
       }
       
     }
  }

 });
 
 
 Cypress.Commands.add("ProcessAssert_UI", (xmlObject, xmlMappings) => {
   
     for (let xmlInput in xmlObject) { //iterate each tag of the xml object for the client
   
       var XmlInputObject = xmlMappings[xmlInput]; //match the xml tag with the object in Client Inputs, if that xml tag has been passed in we can go ahead and assert it
       if (XmlInputObject) {
         if (XmlInputObject.inputType == "String") {
           var textInput = xmlObject[xmlInput.toString()];
           if (textInput) {
             cy.get(XmlInputObject.Selector).should('have.value', textInput)
           }
         } else if (XmlInputObject.inputType == "Date") {
 
         } else if (XmlInputObject.inputType == "Dropdown") {
 
         } else if (XmlInputObject.inputType == "ValueOrClick") {
 
         }
       }
     }
   });
   
 