import * as moConstants from "../../constants/modeller_CurrentPlans.js"
import * as constants from "../../constants/Core";


Cypress.Commands.add("Modeller_CurrentPlan_Create_1", (EntityData, CurrentPlanNo) => {

    cy.log("Add cp no: " + (CurrentPlanNo + 1))
    if (CurrentPlanNo > 0) { //this isnt the first current plan (which opens the editor by auto, so need to click "Add Plan first")
        cy.wait(1000);
        var CurrentPlanEditorSelector = Cypress.$(moConstants.CurrentPlanEditorSelector); //close the previously opened CP editor
        if (CurrentPlanEditorSelector && CurrentPlanEditorSelector.length > 0) {
            cy.clickButtonInPopup(moConstants.CurrentPlanEditorSelector, "Ok");
            cy.wait(7000); //allow for save and close
        }
        cy.clickButtonInPopup(moConstants.CurrentPlanListSelector, 'Add Plan')
    }

    cy.get(moConstants.CurrentPlanEditorSelector, { timeout: constants.Timeout_GetQuoteResults }).then(function () {
      cy.PopulateEditor(moConstants.CurrentPlanEditorSelector, moConstants.AllCurrentPlanInputs, EntityData, "Modeller Current Plan Editor");
      cy.wait(1000);
    })
});

Cypress.Commands.add("Modeller_CurrentPlan_Create_2", (EntityData) => { });

Cypress.Commands.add("Modeller_CurrentPlan_Create_3", (EntityData) => { });

Cypress.Commands.add("Modeller_CurrentPlan_Tidy", (ActionFileNo) => { })


