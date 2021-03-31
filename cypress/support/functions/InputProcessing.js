import * as constants from "../constants/constantsSelectors.js";

//This function takes the client object and creates it using the UI of the client editor
Cypress.Commands.add("ProcessCreate_UI", (xmlObject, xmlInput, xmlMappings) => {
  var XmlInputObject = xmlMappings[xmlInput]; //match the xml tag with the object in Client Inputs,if that xml tag has been passed in we can go ahead and create it
  if (XmlInputObject) {
    if (XmlInputObject.inputType == "String") {
      var textInput = xmlObject[xmlInput.toString()];
      if (textInput) {
        cy.get(XmlInputObject.Selector).type(textInput);
      }
    } else if (XmlInputObject.inputType == "Integer") {
      var textInput = xmlObject[xmlInput.toString()];
      if (textInput) {
        cy.get(XmlInputObject.Selector).type(`{selectall}`).type(textInput);
      }
    } else if (XmlInputObject.inputType == "Date") {
      cy.SetSimpleDatefromXMLDateFormat(XmlInputObject.ddSelector,XmlInputObject.mmSelector,XmlInputObject.yyyySelector,xmlObject[xmlInput.toString()]);
    } else if (XmlInputObject.inputType == "Dropdown") {
      var textInput = xmlObject[xmlInput.toString()];
      if (textInput) {
        cy.SetDropdown(XmlInputObject.Selector, textInput);
      }
    } else if (XmlInputObject.inputType == "ClickThenValue") {
      cy.get(XmlInputObject.Selector).click();
      cy.wait(100); //Auto gen value is entered
      var textInput = xmlObject[xmlInput.toString()];
      if (textInput) {
        cy.get(XmlInputObject.Selector).clear({ force: true }).type(textInput);
      }
    } else if (XmlInputObject.inputType == "ProductDropdown") {
      cy.TranslateProductID(xmlObject, XmlInputObject);
    } else if (XmlInputObject.inputType == "ProviderDropdown") {
      cy.TranslateProviderID(xmlObject, XmlInputObject);
    } else if (XmlInputObject.inputType == "DropdownIndex") {
      //e.g. value is 1 so select 2nd dropdown input (0 based)
      var textInput = xmlObject[xmlInput.toString()];
      if (textInput) {
        cy.SetDropdown_ByIndex(XmlInputObject.Selector, textInput);
      }
    } else if (XmlInputObject.inputType == "Dropdown_ReadOnly") {
      //e.g. value is 1 so select 2nd dropdown input (0 based)
      var textInput = xmlObject[xmlInput.toString()];
      if (textInput) {
        cy.SetDropdown_OpenDropdown(XmlInputObject.Selector, textInput);
      }
    } else if (XmlInputObject.inputType == "Checkbox") {
      //e.g. value is 1 so select 2nd dropdown input (0 based)
      var textInput = xmlObject[xmlInput.toString()];
      if (textInput) {
        var isTrueSet = textInput == "true" || textInput == "True";
        if (isTrueSet) {
          cy.get(XmlInputObject.Selector).check({ force: true });
        } else {
          cy.get(XmlInputObject.Selector).uncheck({ force: true });
        }
      }
    }
  }
});

cy.ProcessAssert_JqueryValCheck = function (Selector,textInput,InputType,xmlInput) {
  cy.get(Selector).then(function ($input) {
    var value = $input.val();
    if (value == textInput) {
      cy.log("**Assert " + InputType + " :" + xmlInput + " : Pass**");
    } else {
      cy.log("**Assert " + InputType + " :" + xmlInput + " : Fail**");
    }
  });
};

cy.ProcessAssert_JqueryValCheck_bool = function (Selector,textInput,InputType,xmlInput) {
  cy.get(Selector).then(function ($input) {
    var value = $input.val();
    if (Boolean(value) == Boolean(textInput)) {
      cy.log("**Assert " + InputType + " :" + xmlInput + " : Pass**");
    } else {
      cy.log("**Assert " + InputType + " :" + xmlInput + " : Fail**");
    }
  });
};

Cypress.Commands.add("ProcessAssert_UI", (xmlObject, xmlInput, xmlMappings) => {
  var useCypressStictAsserts = Cypress.env("useCypressStrictAsserts");
  var XmlInputObject = xmlMappings[xmlInput]; //match the xml tag with the object in Client Inputs, if that xml tag has been passed in we can go ahead and assert it
  if (XmlInputObject) {
    var InputType = XmlInputObject.inputType;
    if ( InputType == "String" || InputType == "Integer" ||InputType == "Dropdown" || InputType == "ClickThenValue") {
      var textInput = xmlObject[xmlInput.toString()];
      if (textInput) {
        if (useCypressStictAsserts) {
          cy.get(XmlInputObject.Selector).should("have.value", textInput);
        } else {
          cy.ProcessAssert_JqueryValCheck(XmlInputObject.Selector,textInput,InputType,xmlInput);
        }
      }
    } 
    else if (InputType == "Date") {
      var textInput = xmlObject[xmlInput.toString()];
      if (textInput) {
        var date = textInput.split("T");
        var datesplit = date[0].split("-");
        var dd = datesplit[2];
        var mm = datesplit[1];
        var yyyy = datesplit[0];

        if (useCypressStictAsserts) {
          cy.get(XmlInputObject.ddSelector).should("have.value", dd);
          cy.get(XmlInputObject.mmSelector).should("have.value", mm);
          cy.get(XmlInputObject.yyyySelector).should("have.value", yyyy);
        } else {
          cy.ProcessAssert_JqueryValCheck(XmlInputObject.ddSelector,dd,InputType + " Day", xmlInput);
          cy.ProcessAssert_JqueryValCheck( XmlInputObject.mmSelector,mm,InputType + " Month",xmlInput);
          cy.ProcessAssert_JqueryValCheck(XmlInputObject.yyyySelector,yyyy,InputType + " Year",xmlInput);
        }
      }
    } else if (InputType == "Checkbox") {
      var textInput = xmlObject[xmlInput.toString()];
      if (textInput) {
        if (useCypressStictAsserts) {
          if(textInput){
            cy.get(XmlInputObject.Selector).should('be.checked')
          }
          else{
            cy.get(XmlInputObject.Selector).should('not.be.checked')
          }
        }
        else{
          cy.ProcessAssert_JqueryValCheck_bool(XmlInputObject.Selector,textInput,InputType,xmlInput)
        }
        
      }
    }
  }
});
