import * as swClientContants from "../../constants/switching_Client.js"
import * as swContants from "../../constants/switching_currentPlans.js"
import * as Constants from "../../constants/Core.js";

Cypress.Commands.add("Switching_NewInvestments_Create_1", (EntityData) => {
    //we are currently in the client editor
    cy.clickButtonInPopup(swClientContants.ClientEditorSelector,"Current Plans"); 
    cy.clickButtonInPopup(swContants.CurrentPlanListSelector,"New Investments"); 


    if(EntityData){
//     cy.get(swClientContants.ClientEditorSelector, {  //ensure client editor is there and client info section has loaded
//         timeout: Constants.Timeout_EditorWait,
//       }).then(function () {         
//           cy.PopulateEditor(swClientContants.ClientEditorSelector,swClientContants.AllClientInputs,EntityData,"Switching Client Details");
//           cy.wait(1000);    
//       }); 
    }

});
    
Cypress.Commands.add("Switching_NewInvestments_Create_2", (EntityData) => {});
    
Cypress.Commands.add("Switching_NewInvestments_Create_3", (EntityData) => {});
    
Cypress.Commands.add("Switching_NewInvestments_Tidy", (ActionFileNo) => {})