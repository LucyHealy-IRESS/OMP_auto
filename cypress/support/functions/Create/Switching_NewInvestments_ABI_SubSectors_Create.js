import * as swClientContants from "../../constants/switching_Client.js"
import * as swContants from "../../constants/switching_currentPlans.js"
import * as Constants from "../../constants/Core.js";

Cypress.Commands.add("Switching_NewInvestments_ABI_SubSectors_Create_1", (EntityData) => {

    cy.get('.sectorMode_sectors_Spinner tr td', {timeout:Constants.Timeout_Medium}).contains(EntityData.Name).then(function ($row) {             
        cy.wrap($row.parent().siblings().first().find('.wijmo-wijgrid-innercell')).dblclick().type(EntityData.Amount).type('{enter}');
    });   

});
    
Cypress.Commands.add("Switching_NewInvestments_ABI_SubSectors_Create_2", (EntityData) => {});
    
Cypress.Commands.add("Switching_NewInvestments_ABI_SubSectors_Create_3", (EntityData) => {});
    
Cypress.Commands.add("Switching_NewInvestments_ABI_SubSectors_Tidy", (ActionFileNo) => {})