import * as moClientConstants from "../../constants/modeller_Client.js"
import * as moConstants from "../../constants/modeller_CurrentPlans.js"
import * as Constants from "../../constants/Core.js";

Cypress.Commands.add("Modeller_NewInvestments_ABI_Sectors_Create_1", (EntityData, iterationNo) => {

    if (iterationNo == 0) {
        cy.get("#ClearSectorInvestments a").click();
        cy.wait(1000);
    }

    cy.get('.sectorMode_sectorGroups_Spinner tr td', { timeout: Constants.Timeout_Medium }).contains(EntityData.Name).then(function ($row) {
        cy.wrap($row).click();
    });
});

Cypress.Commands.add("Modeller_NewInvestments_ABI_Sectors_Create_2", (EntityData) => { });

Cypress.Commands.add("Modeller_NewInvestments_ABI_Sectors_Create_3", (EntityData) => { });

Cypress.Commands.add("Modeller_NewInvestments_ABI_Sectors_Tidy", (ActionFileNo) => { })