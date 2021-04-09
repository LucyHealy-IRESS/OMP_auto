import * as constants from "../constants/constantsSelectors.js";

cy.GetTextInput = function(xmlObject,xmlInput) {
  var retValue = null;
  var textInput =xmlObject[xmlInput.toString()];
  if (textInput) {
    retValue = textInput.trim();    
  }
  return retValue;
};


cy.GetTextInput_mapping = function(xmlObject,xmlInput,mapping) {
  var inputName = xmlInput.toString();
  if(mapping.hasOwnProperty("XMLOverride")){
    inputName = mapping.XMLOverride;
  }
  return cy.GetTextInput(xmlObject,inputName);
};

//This function takes the client object and creates it using the UI of the client editor
Cypress.Commands.add("ProcessCreate_UI", (xmlObject, xmlInput, xmlMappings,EditorName) => {
  var XmlInputObject = xmlMappings[xmlInput]; //match the xml tag with the object in Client Inputs,if that xml tag has been passed in we can go ahead and create it
  if (XmlInputObject && XmlInputObject.hasOwnProperty("Selector")) { //if we dont have a selector then we dont need to use as part of the UI testing
    if (XmlInputObject.inputType == "String") {
      var textInput = cy.GetTextInput(xmlObject,xmlInput);
      if (textInput) {
        cy.get(XmlInputObject.Selector).type(textInput);
      }
    } else if (XmlInputObject.inputType == "Integer") {
      var textInput = cy.GetTextInput(xmlObject,xmlInput);
      if (textInput) {
        cy.get(XmlInputObject.Selector).type(`{selectall}`).type(textInput);
      }
    } else if (XmlInputObject.inputType == "Date") {
      cy.SetSimpleDatefromXMLDateFormat(XmlInputObject.ddSelector,XmlInputObject.mmSelector,XmlInputObject.yyyySelector,cy.GetTextInput(xmlObject,xmlInput));
    } else if (XmlInputObject.inputType == "Dropdown") {
      var textInput = cy.GetTextInput(xmlObject,xmlInput);
      if (textInput) {
        cy.SetDropdown(XmlInputObject.Selector, textInput);
      }
    } else if (XmlInputObject.inputType == "ClickThenValue") {
      cy.get(XmlInputObject.Selector).click();
      cy.wait(100); //Auto gen value is entered
      var textInput = cy.GetTextInput(xmlObject,xmlInput);
      if (textInput) {
        cy.get(XmlInputObject.Selector).clear({ force: true }).type(textInput);
      }
    } else if (XmlInputObject.inputType == "ProductDropdown") {
      cy.TranslateProductID(xmlObject, XmlInputObject);
    } else if (XmlInputObject.inputType == "ProviderDropdown") {
      cy.TranslateProviderID(xmlObject, XmlInputObject);
    } else if (XmlInputObject.inputType == "DropdownIndex") {
      //e.g. value is 1 so select 2nd dropdown input (0 based)
      var textInput = cy.GetTextInput(xmlObject,xmlInput);
      if (textInput) {
        cy.SetDropdown_ByIndex(XmlInputObject.Selector, textInput);
      }
    } else if (XmlInputObject.inputType == "Dropdown_ReadOnly") {
      //e.g. value is 1 so select 2nd dropdown input (0 based)
      var textInput = cy.GetTextInput(xmlObject,xmlInput);
      if (textInput) {
        cy.SetDropdown_OpenDropdown(XmlInputObject.Selector, textInput);
      }
    } else if (XmlInputObject.inputType == "Checkbox") {
      //e.g. value is 1 so select 2nd dropdown input (0 based)
      var textInput = cy.GetTextInput(xmlObject,xmlInput);
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

Cypress.Commands.add("PushToLogArray",function(attributeType,attributeName,Pass,EditorName,textInput,value) { //needs to be a cypress command to access this
  var WorkingLogArray = this.LogArray;
  WorkingLogArray.push({AttributeType: attributeType, AttributeName:attributeName, Location:EditorName, Pass: Pass.toString(), xmlValue:textInput, uiValue:value});
  cy.wrap(WorkingLogArray).as('LogArray');
})

cy.ProcessAssert_JqueryValCheck = function (Selector,textInput,InputType,xmlInput,EditorName) {
  cy.get(Selector).then(function ($input) {  
    var value = $input.val();
    if(InputType == "Integer"){
      value =value.replace("£","").replace("%",""); //remove pound sign from jQuery get
    }
    if (value == textInput) {
      cy.log("**Assert " + InputType + " :" + xmlInput + " : Pass**");
      cy.PushToLogArray(InputType, xmlInput,true,EditorName,textInput,value);
    } else {
      cy.log("**Assert " + InputType + " :" + xmlInput + " : Fail**");
      cy.PushToLogArray(InputType, xmlInput,false,EditorName,textInput,value);
    }
  });
};


cy.ProcessAssert_JqueryValCheck_bool = function (Selector,textInput,InputType,xmlInput,EditorName) {
  cy.get(Selector).then(function ($input) {
    var value = $input.val();
    if (Boolean(value) == Boolean(textInput)) {
      cy.log("**Assert " + InputType + " :" + xmlInput + " : Pass**");
      cy.PushToLogArray(InputType, xmlInput,true,EditorName,textInput,value);
    } else {
      cy.log("**Assert " + InputType + " :" + xmlInput + " : Fail**");
      cy.PushToLogArray(InputType, xmlInput,false,EditorName,textInput,value);
    }
  });
};

Cypress.Commands.add("ProcessAssert_UI", (xmlObject, xmlInput, xmlMappings,EditorName) => {
  var useCypressStictAsserts = Cypress.env("useCypressStrictAsserts");
  var XmlInputObject = xmlMappings[xmlInput]; //match the xml tag with the object in Client Inputs, if that xml tag has been passed in we can go ahead and assert it
  if (XmlInputObject && XmlInputObject.hasOwnProperty("Selector")) {//if we dont have a selector then we dont need to use as part of the UI testing
    var InputType = XmlInputObject.inputType;
    if ( InputType == "String" || InputType == "Integer" ||InputType == "Dropdown" || InputType == "ClickThenValue") {
      var textInput = cy.GetTextInput(xmlObject,xmlInput);
      if (textInput) {
        if (useCypressStictAsserts) {
          cy.get(XmlInputObject.Selector).should("have.value", textInput);
        } else {
          cy.ProcessAssert_JqueryValCheck(XmlInputObject.Selector,textInput,InputType,xmlInput,EditorName);
        }
      }
    } 
    else if (InputType == "Date") {
      var textInput = cy.GetTextInput(xmlObject,xmlInput);
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
          cy.ProcessAssert_JqueryValCheck(XmlInputObject.ddSelector,dd,InputType + " Day", xmlInput,EditorName);
          cy.ProcessAssert_JqueryValCheck( XmlInputObject.mmSelector,mm,InputType + " Month",xmlInput,EditorName);
          cy.ProcessAssert_JqueryValCheck(XmlInputObject.yyyySelector,yyyy,InputType + " Year",xmlInput,EditorName);
        }
      }
    } else if (InputType == "Checkbox") {
      var textInput = cy.GetTextInput(xmlObject,xmlInput);
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
          cy.ProcessAssert_JqueryValCheck_bool(XmlInputObject.Selector,textInput,InputType,xmlInput,EditorName)
        }
        
      }
    }
  }
});


Cypress.Commands.add("ProcessAssert_API", (xmlMappings, originalXML, ResponseXML,EntityType) => {
  cy.PushToLogArray(EntityType, "","","","","");
  for (let xmlInput in originalXML) { //for each xml tag
    var mapping = xmlMappings[xmlInput];
      if(mapping){
        var InputType = mapping.inputType;
        var originalXMLValue = cy.GetTextInput(originalXML,xmlInput,mapping);
        var ResponseXMLValue = cy.GetTextInput_mapping(ResponseXML,xmlInput,mapping); //we may need to use the XMLOverride value to get the data from the response e.g. GrowthRateLow_Nominal is just GrowthRateLow to the api
        if(originalXMLValue && ResponseXMLValue && originalXMLValue == ResponseXMLValue){ //match!         
          cy.PushToLogArray(InputType, xmlInput,true,"",originalXMLValue,ResponseXMLValue);
        }
        else{
          cy.PushToLogArray(InputType, xmlInput,false,"",originalXMLValue,ResponseXMLValue);
        }
      }
      else{
        var responseXML = ResponseXML[xmlInput.toString()];
        if(!responseXML){
          responseXML = "Not Returned from API";
        }
        cy.PushToLogArray("", xmlInput,false,"","Automation Mapping Doesnt Exist",responseXML);
      }
    } 
    cy.PushToLogArray("", "","","","","");
    cy.PushToLogArray("XML returned from Response", "","","","","");
    for (let xmlInput in ResponseXML) {
      cy.PushToLogArray("", xmlInput,ResponseXML[xmlInput.toString()],"","","");
    }
    cy.PushToLogArray("", "","","","","");

});
