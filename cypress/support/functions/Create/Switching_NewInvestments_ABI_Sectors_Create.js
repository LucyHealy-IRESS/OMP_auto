import * as swClientContants from "../../constants/switching_Client.js"
import * as swContants from "../../constants/switching_currentPlans.js"
import * as Constants from "../../constants/Core.js";

Cypress.Commands.add("Switching_NewInvestments_ABI_Sectors_Create_1", (EntityData, iterationNo) => {

    if(iterationNo == 0){
        cy.get("#ClearSectorInvestments a").click();
        cy.wait(1000);
    }

    cy.get('.sectorMode_sectorGroups_Spinner tr td', {timeout:Constants.Timeout_Medium}).contains(EntityData.Name).then(function ($row) {             
        cy.wrap($row).click();
    });   
});
    
Cypress.Commands.add("Switching_NewInvestments_ABI_Sectors_Create_2", (EntityData) => {});
    
Cypress.Commands.add("Switching_NewInvestments_ABI_Sectors_Create_3", (EntityData) => {});
    
Cypress.Commands.add("Switching_NewInvestments_ABI_Sectors_Tidy", (ActionFileNo) => {})