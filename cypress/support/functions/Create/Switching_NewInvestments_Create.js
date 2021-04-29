import * as swClientContants from "../../constants/switching_Client.js"
import * as swContants from "../../constants/switching_currentPlans.js"
import * as Constants from "../../constants/Core.js";

Cypress.Commands.add("Switching_NewInvestments_Create_1", (EntityData) => {
    //we are currently in the client editor
    cy.clickButtonInPopup(swClientContants.ClientEditorSelector,"Current Plans"); 
    cy.clickButtonInPopup(swContants.CurrentPlanListSelector,"New Investments"); 

    if(EntityData){
        //Set New Investment Type Dropdown
        cy.SetDropdown_OpenDropdown(".NewInvestmentType", EntityData.NewInvestmentType)
    }

});
    
Cypress.Commands.add("Switching_NewInvestments_Create_2", (EntityData) => {});
    
Cypress.Commands.add("Switching_NewInvestments_Create_3", (EntityData) => {});
    
Cypress.Commands.add("Switching_NewInvestments_Tidy", (ActionFileNo) => {})