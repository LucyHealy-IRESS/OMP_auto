import * as moConstants from "../../constants/modeller_CurrentPlans.js"
import * as moClientConstants from "../../constants/modeller_Client.js"
import * as moScenarioConstants from "../../constants/modeller_Scenarios.js"
import * as constants from "../../constants/Core";

//This is the scenario list Modeller Popup

Cypress.Commands.add("Modeller_Scenario_Create_1", (EntityData) => {
    cy.clickButtonInPopup(moClientConstants.ClientEditorSelector, "Current Plans");
    cy.wait(7000);
    cy.clickButtonInPopup(moConstants.CurrentPlanListSelector, "Scenarios");
    cy.clickButtonInPopup(moScenarioConstants.CurrentPlanListSelector, "New Investments");
});

Cypress.Commands.add("Modeller_Scenario_Create_2", (EntityData) => { });

Cypress.Commands.add("Modeller_Scenario_Create_3", (EntityData) => { });

Cypress.Commands.add("Modeller_Scenario_Tidy", (ActionFileNo) => { })


