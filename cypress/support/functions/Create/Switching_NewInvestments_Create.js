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

        //if(EntityData.NewInvestmentType == "3"){ //Use a Centralised Investment Proposition (CIP) to set the New Investment
            // cy.get('.CIPGrid tr td', {timeout:Constants.Timeout_Medium}).contains(EntityData.CIPName).then(function ($row) {             
            //     cy.wrap($row.parent().siblings().first().find('.wijmo-checkbox-box')).check({ force: true });
            // }); 
            
            // var rowpos = Cypress.$('.CIPGrid tr:last').position();
            // Cypress.$('.CIPGrid').scrollTop(rowpos.top);

            // rowpos = Cypress.$('.CIPGrid tr:last').position();
            // Cypress.$('.CIPGrid').scrollTop(rowpos.top);

            // rowpos = Cypress.$('.CIPGrid tr:last').position();
            // Cypress.$('.CIPGrid').scrollTop(rowpos.top);

            // rowpos = Cypress.$('.CIPGrid tr:last').position();
            // Cypress.$('.CIPGrid').scrollTop(rowpos.top);
        //}

    }

});
    
Cypress.Commands.add("Switching_NewInvestments_Create_2", (EntityData) => {});
    
Cypress.Commands.add("Switching_NewInvestments_Create_3", (EntityData) => {});
    
Cypress.Commands.add("Switching_NewInvestments_Tidy", (ActionFileNo) => {})