import * as moConstants from "../../constants/modeller_CurrentPlans.js"

Cypress.Commands.add("Modeller_CurrentPlan_Assert_1", (EntityData) => {
    debugger;
    var PlanReference = EntityData["CurrentPlanName"]
    debugger;
    cy.get('.CurrentPlansGrid tr td').contains(PlanReference).then(function ($td) { //got this frm new investments, it worked
        cy.wrap($td).closest("tr").find("button").find(".ui-icon-pencil").click().then(function () {

            cy.AssertEditor(moConstants.CurrentPlanEditorSelector, moConstants.AllCurrentPlanInputs, EntityData, "Current Plan Details");
            cy.clickButtonInPopup(moConstants.CurrentPlanEditorSelector, 'Ok')
        })
    })


});

Cypress.Commands.add("Modeller_CurrentPlan_Assert_2", (EntityData) => { });

Cypress.Commands.add("Modeller_CurrentPlan_Assert_3", (EntityData) => { });