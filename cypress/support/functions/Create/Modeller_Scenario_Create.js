import * as moConstants from "../../constants/modeller_CurrentPlans.js"
import * as moClientConstants from "../../constants/modeller_Client.js"
import * as moScenarioConstants from "../../constants/modeller_Scenarios.js"
import * as constants from "../../constants/Core";

//This is the scenario list Modeller Popup

Cypress.Commands.add("Modeller_Scenario_Create_1", (EntityData, ScenarioNo) => {
  cy.log('SCENARIO NO   ' + (ScenarioNo + 1));
  if (ScenarioNo == 0) {
    cy.clickButtonInPopup(moClientConstants.ClientEditorSelector, "Current Plans");
    cy.wait(1500);
    cy.clickButtonInPopup(moConstants.CurrentPlanListSelector, "Scenarios");
    cy.wait(1500);
  }

  cy.get('.scenarios-grid tr').eq(ScenarioNo).then(function ($td) { //will need the above commented out code to deal with more than one scenario
    cy.wrap($td).closest("tr").find("button").find(".ui-icon-pencil").click().then(function () {
      cy.get(moConstants.ScenarioEditorSelector, { timeout: constants.Timeout_GetQuoteResults }).then(function () { //wait for content of editor to load
          cy.PopulateEditor(moScenarioConstants.ModellerScenarioEditorSelector, moScenarioConstants.AllModellerScenarioInputs, EntityData, "Modeller Scenario Editor" +  (ScenarioNo +1));
        cy.wait(2000);
        cy.clickButtonInPopup('#QuickEditQuoteTypePopup', "Ok");    //Close the open current plan editor
        cy.wait(7000);//allow for save
      });
    });
  });
});

Cypress.Commands.add("Modeller_Scenario_Create_2", (EntityData) => { });

Cypress.Commands.add("Modeller_Scenario_Create_3", (EntityData) => { });

Cypress.Commands.add("Modeller_Scenario_Tidy", (ActionFileNo) => { })


