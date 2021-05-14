import * as swClientContants from "../../constants/switching_Client.js"
import * as swContants from "../../constants/switching_currentPlans.js"
import * as Constants from "../../constants/Core.js";

Cypress.Commands.add("Switching_NewInvestments_Create_1", (EntityData) => {
    //we are currently in the client editor
    cy.clickButtonInPopup(swClientContants.ClientEditorSelector,"Current Plans"); 
    cy.clickButtonInPopup(swContants.CurrentPlanListSelector,"New Investments"); 

    if(EntityData){
        //Set New Investment Type Dropdown
        cy.SetDropdown_ByIndex(".NewInvestmentType", EntityData.NewInvestmentType)

        if(EntityData.NewInvestmentType == "1" ){
            cy.SetDropdown_ByIndex(".SectorInvestments_Q1_tooltip input", EntityData.UsingRule)    ;      
        }
        else if(EntityData.NewInvestmentType == "2"){
            cy.SetDropdown_ByIndex(".FundMode_Q1_tooltip input", EntityData.UsingRule) ;
        }
        else if(EntityData.NewInvestmentType == "3" || EntityData.NewInvestmentType == "4"){ //Use a Centralised Investment Proposition (CIP) to set the New Investment
            cy.wait(2000);
            cy.get('.CIPGrid tbody tr td .wijmo-checkbox input').eq(0).check({ force: true}); //select first checkbox
            cy.wait(1000);
            cy.SetDropdown_ByIndex(".SectorInvestments_Q1_tooltip input", EntityData.UsingRule)
        }      
    }

});
    
Cypress.Commands.add("Switching_NewInvestments_Create_2", (EntityData) => {});
    
Cypress.Commands.add("Switching_NewInvestments_Create_3", (EntityData) => {});
    
Cypress.Commands.add("Switching_NewInvestments_Tidy", (ActionFileNo) => {})