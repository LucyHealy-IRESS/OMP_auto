import * as ClientConstants from "../../constants/client.js";
import * as Constants from "../../constants/Core.js";

Cypress.Commands.add("Partner_Create_1", (EntityData) => {
  cy.wait(2000); //allow for client summary menu to auto open
  cy.menuClick('Client Summary', ClientConstants.AddPartnerButtonSelector); //Click Client Summary menu and click edit partner button
  cy.get("#EditClientPopup .client_info_table", {  //ensure client editor is there and client info section has loaded
    timeout: Constants.Timeout_EditorWait,
  }).then(function () {
    var PartnerSearchCriteria = EntityData["Surname"] + ", " + EntityData["Title"] + ' ' + EntityData["Firstname"]
    cy.get('#OverviewClientPartnerCombo').click(); //click the dropdown - we have a click blocker whilst it goes and gets all the clients
    cy.wait(5000); //Wait for search to take place
    cy.get('#OverviewClientPartnerCombo input').clear().type(PartnerSearchCriteria); //Type our client into the partner dropdown
    cy.wait(3000); //Wait for dropdown to filter
    
    var liResultElements = Cypress.$('li:contains("' + PartnerSearchCriteria + '")');//jquery check dom for LI containing partnersearchcriteria
    if (liResultElements && liResultElements.length > 0) { //MATCH!
      cy.log("Match");
      cy.get(".wijmo-wijlist-item ").filter(':visible').contains(PartnerSearchCriteria).first().click(); //Click the selected list element
      cy.wait(4000); //allow for partner details to be bought down
      cy.clickButtonInPopup(ClientConstants.ClientEditorSelector, "Ok");
    } else {
      cy.log("No Match");

      //This segment of code iterates all the client selectors and changed the string input type to string_clear. This is because the partner editor is pre populated and we want to type over not append to. e.g. surnamesuname we dont want
      var AllPartnerInputs = ClientConstants.AllClientInputs;
      var XMLtoArraySub = Object.keys(AllPartnerInputs);
      for (var x = 0; x < XMLtoArraySub.length; x++) {
        var index = XMLtoArraySub[x]
        var xd = AllPartnerInputs[index];
        if (xd && xd.hasOwnProperty("Selector")){ //if it doesnt have the selector property then its not one thats processed on the UI front
          if (xd.inputType == Constants.Input_String) {
            xd.inputType = Constants.Input_String_Clear
          }
        }
      }

      cy.PopulateEditor(ClientConstants.ClientEditorSelector, AllPartnerInputs, EntityData, "Partner"); //Populate the partner editor
      cy.wait(1000);
      cy.clickButtonInPopup(ClientConstants.ClientEditorSelector, "Ok");
    }     
  });
});


Cypress.Commands.add("Partner_Tidy", (ActionFileNo) => { });
