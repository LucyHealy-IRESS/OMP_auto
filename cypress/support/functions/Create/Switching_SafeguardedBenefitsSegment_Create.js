import * as swContants from "../../constants/switching_SafeguardedBenefits.js"
import * as cpContants from "../../constants/switching_currentPlans"

Cypress.Commands.add("Switching_SafeguardedBenefitsSegment_Create_1", (EntityData) => {


    cy.clickAccordion_PreCheck(".DefinedIncomeAccordian",cpContants.CurrentPlanEditorSelector,"Defined Income"); //Open the accordian
    cy.get('.AddSafeguaredeBenegitsSegments.link').click(); //click the "Add Safeguarded Benfits Segment" button
    cy.PopulateEditor(swContants.SBS_Editor,swContants.AllSafeguardedBenefitsSegmentsInputs, EntityData, "Switching Safeguarged Benefits Segment Editor"); //populate the editor
    cy.wait(1000);
    cy.clickButtonInPopup(swContants.SBS_Editor,'OK'); //close the editor

});
    
Cypress.Commands.add("Switching_SafeguardedBenefitsSegment_Create_2", (EntityData) => {});
    
Cypress.Commands.add("Switching_SafeguardedBenefitsSegment_Create_3", (EntityData) => {});
    
Cypress.Commands.add("Switching_SafeguardedBenefitsSegment_Tidy", (ActionFileNo) => {})