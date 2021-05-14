import * as swClientContants from "../../constants/switching_Client.js"
import * as swContants from "../../constants/switching_currentPlans.js"
import * as Constants from "../../constants/Core.js";

Cypress.Commands.add("Switching_ClientDetails_Create_1", (EntityData) => {
// cy.clickButtonInPopup(swContants.CurrentPlanEditorSelector,"Ok");    //Close the open current plan editor
cy.wait(7000); //let the current plans save
cy.clickButtonInPopup(swContants.CurrentPlanListSelector," < Client Details ");  //we are currently in current plan popup list

if(EntityData){
    cy.get(swClientContants.ClientEditorSelector, {  //ensure client editor is there and client info section has loaded
        timeout: Constants.Timeout_EditorWait,
      }).then(function () {         
          cy.PopulateEditor(swClientContants.ClientEditorSelector,swClientContants.AllClientInputs,EntityData,"Switching Client Details");
          cy.wait(1000);    
      }); 
}

});
    
Cypress.Commands.add("Switching_ClientDetails_Create_2", (EntityData) => {});
    
Cypress.Commands.add("Switching_ClientDetails_Create_3", (EntityData) => {});
    
Cypress.Commands.add("Switching_ClientDetails_Tidy", (ActionFileNo) => {})