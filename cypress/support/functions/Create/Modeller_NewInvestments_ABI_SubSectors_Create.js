import * as moClientConstants from "../../constants/modeller_Client.js"
import * as moConstants from "../../constants/modeller_CurrentPlans.js"
import * as Constants from "../../constants/Core.js";

Cypress.Commands.add("Modeller_NewInvestments_ABI_SubSectors_Create_1", (EntityData) => {

    cy.get('.sectorMode_sectors_Spinner tr td', { timeout: Constants.Timeout_Medium }).contains(EntityData.Name).then(function ($row) {
        cy.wrap($row.parent().siblings().first().find('.wijmo-wijgrid-innercell')).dblclick().type(EntityData.Amount).type('{enter}');
    });

});

Cypress.Commands.add("Modeller_NewInvestments_ABI_SubSectors_Create_2", (EntityData) => { });

Cypress.Commands.add("Modeller_NewInvestments_ABI_SubSectors_Create_3", (EntityData) => { });

Cypress.Commands.add("Modeller_NewInvestments_ABI_SubSectors_Tidy", (ActionFileNo) => { })