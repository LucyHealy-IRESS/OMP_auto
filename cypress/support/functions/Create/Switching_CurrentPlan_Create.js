import * as swContants from "../../constants/switching_currentPlans.js"
import * as constants from "../../constants/Core";


Cypress.Commands.add("Switching_CurrentPlan_Create_1", (EntityData,CurrentPlanNo) => {
    cy.log("Add cp no: " + CurrentPlanNo)
    if(CurrentPlanNo > 0){ //this isnt the first current plan (which opens the editor by auto, so need to click "Add Plan first")
        cy.wait(7000); //let previous current plan save
        cy.clickButtonInPopup(swContants.CurrentPlanListSelector, 'Add Plan')
    }

    cy.get(swContants.CurrentPlanEditorSelector,{ timeout: constants.Timeout_GetQuoteResults  }).then(function(){    
         cy.PopulateEditor(swContants.CurrentPlanEditorSelector,swContants.AllCurrentPlanInputs,EntityData,"Switching Current Plan Editor");
         cy.wait(1000);      
         cy.clickButtonInPopup(swContants.CurrentPlanEditorSelector,"Ok");    //Close the open current plan editor
     })
});
    
Cypress.Commands.add("Switching_CurrentPlan_Create_2", (EntityData) => {});
    
Cypress.Commands.add("Switching_CurrentPlan_Create_3", (EntityData) => {});
    
Cypress.Commands.add("Switching_CurrentPlan_Tidy", (ActionFileNo) => {
    cy.clickButtonInPopup(swContants.CurrentPlanEditorSelector,"Ok"); 
})


