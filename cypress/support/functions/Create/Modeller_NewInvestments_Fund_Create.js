import * as moConstants from "../../constants/modeller_SafeguardedBenefits.js"
import * as cpConstants from "../../constants/modeller_CurrentPlans.js"
import * as Constants from "../../constants/Core.js"

Cypress.Commands.add("Modeller_NewInvestments_Fund_Create_1", (EntityData) => {

    // cy.clickButtonInPopup(".NewInvestmentPopupDialog","Pick funds from shortlist using fund name or ISIN"); no ID for this form
    cy.get(".NewInvestmentPopupDialog").contains("Pick funds from shortlist using fund name or ISIN").click({ force: true });
    cy.Modeller_NewInvestments_Fund_ProcessFund(EntityData);

});

Cypress.Commands.add("Modeller_NewInvestments_Fund_ProcessFund", (EntityData) => {
    cy.wait(1500); //allow control to prime
    var textInput = EntityData.FundID;
    var PopupSelector = "#QuickAddFundPopup";
    if (textInput) {
        cy.wrap(".quickAddFund_ComboBox").as('inputSelector'); //want access to this later in the then
        cy.get(".quickAddFund_ComboBox").clear().type(textInput).type("{enter}").then(function () {
            cy.wait(1000);
            cy.get(".wijmo-wijlist-ul").filter(':visible', { timeout: Constants.Timeout_HoldingSearch }).contains(textInput).first().click();
            cy.get(this.inputSelector).then(function () {
                if (EntityData.Percentage == "100") {
                    cy.clickButtonInPopup(PopupSelector, "Add Selected Fund At 100")
                    cy.wait(1000);
                }
                else {
                    cy.get("[aria-describedby='" + PopupSelector.replace("#", "") + "']").contains(/^Add Selected Fund$/).click(); //need regex here else will click the other at 100% button
                    cy.clickButtonInPopup(PopupSelector, "Close");
                    cy.wait(1000);
                    //then we need to find the fund in the row, double click and add the percentage
                    cy.get('.fundMode tbody tr td', { timeout: Constants.Timeout_HoldingSearch }).contains(EntityData.FundName).then(function ($td) {
                        cy.wrap($td.parent().siblings().first().find('.wijmo-wijgrid-innercell')).dblclick().type(EntityData.Percentage).type('{enter}');
                    })
                }
            })
        });
    }
});

Cypress.Commands.add("Modeller_NewInvestments_Fund_Create_2", (EntityData) => { });

Cypress.Commands.add("Modeller_NewInvestments_Fund_Create_3", (EntityData) => { });

Cypress.Commands.add("Modeller_NewInvestments_Fund_Tidy", (ActionFileNo) => { })