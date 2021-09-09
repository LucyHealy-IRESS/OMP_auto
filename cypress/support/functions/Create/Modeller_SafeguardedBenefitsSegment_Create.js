import * as moConstants from "../../constants/modeller_SafeguardedBenefits.js"
import * as cpConstants from "../../constants/modeller_CurrentPlans"

Cypress.Commands.add("Modeller_SafeguardedBenefitsSegment_Create_1", (EntityData) => {


    cy.clickAccordion_PreCheck(".DefinedIncomeAccordian", cpConstants.CurrentPlanEditorSelector, "Defined Income"); //Open the accordian
    cy.get('.AddSafeguaredeBenegitsSegments.link').click(); //click the "Add Safeguarded Benfits Segment" button
    cy.PopulateEditor(moConstants.SBS_Editor, moConstants.AllSafeguardedBenefitsSegmentsInputs, EntityData, "Modeller Safeguarged Benefits Segment Editor"); //populate the editor
    cy.wait(1000);
    cy.clickButtonInPopup(swContants.SBS_Editor, 'OK'); //close the editor

});

Cypress.Commands.add("Modeller_SafeguardedBenefitsSegment_Create_2", (EntityData) => { });

Cypress.Commands.add("Modeller_SafeguardedBenefitsSegment_Create_3", (EntityData) => { });

Cypress.Commands.add("Modeller_SafeguardedBenefitsSegment_Tidy", (ActionFileNo) => { })