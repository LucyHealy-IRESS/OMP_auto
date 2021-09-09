import * as moClientConstants from "../../constants/modeller_Client.js"
import * as Constants from "../../constants/Core.js";

Cypress.Commands.add("Partner_Create_1", (EntityData) => {
    cy.wait(2000); //allow for results to calculate
    cy.menuClick('Retirement Modeller', '#EditPartnerIconMenuModeller'); //Click Retirement Modeller menu and click add partner button
    cy.get("#RetirementOptionClientDetailsPopup .client_info_table", {  //ensure client editor is there and client info section has loaded
        timeout: Constants.Timeout_EditorWait,
    }).then(function () {
        var PartnerSearchCriteria = EntityData["Surname"] + ", " + EntityData["Title"] + ' ' + EntityData["Firstname"]
        cy.get('#ModellerOverviewClientCombo').click(); //click the dropdown - we have a click blocker whilst it goes and gets all the clients
        cy.wait(5000); //Wait for search to take place
        cy.get('#ModellerOverviewClientCombo input').clear().type(PartnerSearchCriteria); //Type our client into the partner dropdown
        cy.wait(3000); //Wait for dropdown to filter

        var liResultElements = Cypress.$('li:contains("' + PartnerSearchCriteria + '")');//jquery check dom for LI containing partnersearchcriteria
        if (liResultElements && liResultElements.length > 0) { //MATCH!
            cy.log("Match");
            cy.get(".wijmo-wijlist-item ").filter(':visible').contains(PartnerSearchCriteria).first().click(); //Click the selected list element
            cy.wait(4000); //allow for partner details to be bought down
            cy.clickButtonInPopup(moClientConstants.ClientEditorSelector, "Ok");
        } else {
            cy.log("No Match");
            cy.PopulateEditor(moClientConstants.ClientEditorSelector, moClientConstants.AllClientInputs, EntityData, "Partner"); //Populate the partner editor
            cy.wait(1000);
            cy.clickButtonInPopup(moClientConstants.ClientEditorSelector, "Ok");
        }
    });
});


Cypress.Commands.add("Partner_Tidy", (ActionFileNo) => { });
