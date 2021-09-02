import * as ClientConstants from "../../constants/client.js";
import * as Constants from "../../constants/Core.js";

Cypress.Commands.add("Partner_Assert_1", (EntityData) => {
  cy.menuClick('Client Summary', ClientConstants.AddPartnerButtonSelector); //Click Client Summary menu and click edit partner button
  cy.get("#EditClientPopup .client_info_table", {  //ensure client editor is there and client info section has loaded
    timeout: Constants.Timeout_EditorWait,
  }).then(function () {
    cy.AssertEditor(ClientConstants.ClientEditorSelector, ClientConstants.AllClientInputs, EntityData, "Partner");
    cy.clickButtonInPopup(ClientConstants.ClientEditorSelector, "Ok");
  });

})
