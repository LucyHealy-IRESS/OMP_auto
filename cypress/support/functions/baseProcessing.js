import * as constants from "../../support/constants/constantsSelectors.js"

//This function takes the client object and creates it using the UI of the client editor
Cypress.Commands.add("CreateClient_UI", (clientObject, xmlMappings) => {
  
   for (let xmlInput in clientObject) { //iterate each tag of the xml object for the client
 
     var XmlInputObject = xmlMappings[xmlInput]; //match the xml tag with the object in Client Inputs,if that xml tag has been passed in we can go ahead and create it
     if (XmlInputObject) {
       if (XmlInputObject.inputType == "String") {
         var textInput = clientObject[xmlInput.toString()];
         if (textInput) {
           cy.get(XmlInputObject.Selector).type(textInput);
         }
       } else if (XmlInputObject.inputType == "Date") {
         var textInput = clientObject[xmlInput.toString()];
         if (textInput) {
           var date = textInput.split("T");
           var datesplit = date[0].split("-");
           var dd = datesplit[2];
           var mm = datesplit[1];
           var yyyy = datesplit[0];
           cy.get(constants.dobDD).type(dd);
           cy.get(constants.dobMM).type(mm);
           cy.get(constants.dobYYYY).type(yyyy);
         }
       } else if (XmlInputObject.inputType == "Dropdown") {
         var textInput = clientObject[xmlInput.toString()];
         if (textInput) {
           cy.get(XmlInputObject.Selector)
             .type(textInput)
             .type(`{enter}`)
             .type(`{enter}`)
             .tab();
         }
       } else if (XmlInputObject.inputType == "ValueOrClick") {
         cy.get(XmlInputObject.Selector).click();
         var textInput = clientObject[xmlInput.toString()];
         if (textInput) {
           cy.get(XmlInputObject.Selector).type(textInput);
         }
       }
     }
   }
 
   cy.get('.btn-viewportfolios-action > .ui-button-text').click(); //Next to Portfolios in the Client Editor 
 });
 
 
 Cypress.Commands.add("AssertingClient_UI", (clientObject, xmlMappings) => {
   
     for (let xmlInput in clientObject) { //iterate each tag of the xml object for the client
   
       var XmlInputObject = xmlMappings[xmlInput]; //match the xml tag with the object in Client Inputs, if that xml tag has been passed in we can go ahead and assert it
       if (XmlInputObject) {
         if (XmlInputObject.inputType == "String") {
           var textInput = clientObject[xmlInput.toString()];
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
   
 