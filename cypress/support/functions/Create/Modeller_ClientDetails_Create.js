import * as moClientConstants from "../../constants/modeller_Client.js"
import * as moConstants from "../../constants/modeller_CurrentPlans.js"
import * as Constants from "../../constants/Core.js";

Cypress.Commands.add("Modeller_ClientDetails_Create_1", (EntityData) => {

    cy.clickButtonInPopup(moConstants.CurrentPlanEditorSelector, "Ok");    //Close the open current plan editor
    cy.wait(7000); //let the current plans save
    cy.clickButtonInPopup(moConstants.CurrentPlanListSelector, " < Client Details ");  //we are currently in current plan popup list

    if (EntityData) {
        cy.get(moClientConstants.ClientEditorSelector, {  //ensure client editor is there and client info section has loaded
            timeout: Constants.Timeout_EditorWait,
        }).then(function () {
            cy.PopulateEditor(moClientConstants.ClientEditorSelector, moClientConstants.AllClientInputs, EntityData, "Modeller Client Details");
            cy.wait(1000);
        });
    }

});

Cypress.Commands.add("Modeller_ClientDetails_Create_2", (EntityData) => { });

Cypress.Commands.add("Modeller_ClientDetails_Create_3", (EntityData) => { });

Cypress.Commands.add("Modeller_ClientDetails_Tidy", (ActionFileNo) => { })