import * as swConstants from "../../constants/switching_currentPlans.js"

Cypress.Commands.add("Switching_CurrentPlan_Assert_1", (EntityData) => {
    debugger;
    var PlanReference = EntityData["CurrentPlanName"]
    debugger;
    cy.get('.CurrentPlansGrid tr td').contains(PlanReference).then(function($td){ //got this frm new investments, it worked
            cy.wrap($td).closest("tr").find("button").find(".ui-icon-pencil").click().then(function(){ 

                cy.AssertEditor(swConstants.CurrentPlanEditorSelector,swConstants.AllCurrentPlanInputs, EntityData, "Current Plan Details");
                cy.clickButtonInPopup(swConstants.CurrentPlanEditorSelector,'Ok')
            })
    })
    

});

Cypress.Commands.add("Switching_CurrentPlan_Assert_2", (EntityData) => {});

Cypress.Commands.add("Switching_CurrentPlan_Assert_3", (EntityData) => {});