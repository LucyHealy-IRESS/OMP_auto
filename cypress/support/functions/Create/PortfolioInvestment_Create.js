import * as PortfolioConstants from "../../constants/portfolio.js";
import * as Constants from "../../constants/Core.js";

Cypress.Commands.add("PortfolioInvestment_Create_1", (EntityData) => {
    //click Add New Portfolio
    cy.clickButtonInPopup(PortfolioConstants.PortfoliosQuickEditorSelector,"Pick funds from shortlist using fund name or ISIN");
    cy.ProcessAddHoldingQuick(EntityData);
});

Cypress.Commands.add("PortfolioInvestment_Create_2", (EntityData) => {
    //From Advanced Editor
});

Cypress.Commands.add("PortfolioInvestment_Create_3", (EntityData) => {});


//Will be moved but here for now due to merging conflicts 
Cypress.Commands.add("ProcessAddHoldingQuick", (Entity) => {
  cy.wait(2500); //allow control to prime
  var textInput = Entity.FundID;
   if (textInput) {
   cy.wrap(".quickAddFund_ComboBox").as('inputSelector'); //want access to this later in the then
    cy.get(".quickAddFund_ComboBox").clear().type(textInput).type("{enter}").then(function(){
      cy.get(".wijmo-wijlist-ul",{timeout:Constants.Timeout_HoldingSearch}).filter(':visible').contains(textInput).first().click();
      cy.wait(2500);        
      cy.get(this.inputSelector).then(function($SelectedFund){
        var SelectedFund = $SelectedFund[0].value;
        SelectedFund = SelectedFund.split("-")[0].trim();
        cy.get("[aria-describedby='PortfolioSimpleEditor_QuickAddFundPopup']" + " .ui-dialog-buttonpane .ui-button span").contains(/^Add Selected Fund$/).click();
        cy.wait(1000);
        cy.get("[aria-describedby='PortfolioSimpleEditor_QuickAddFundPopup']" + " .ui-dialog-buttonpane .ui-button span").contains("Close").click();           
    //     if(Entity.Units){
    //       cy.clickAccordion("#PortfolioAddPopUp","Holdings");
    //       cy.get('.CurrentHoldings_table tbody tr td').contains(SelectedFund).then(function($td){ //find the added fund in the holdings table
    //         cy.wrap($td).closest("tr").find("button").find(".ui-icon-pencil").click().then(function(){ //click the associated edit icon
    //           cy.get("#PortfolioSimpleEditor_editRowPopup").then(function(){ //check editor is open
    //             cy.get("#PortfolioSimpleEditor_editRowPopup .RowEditUnits").type(`{selectall}`).type(Entity.Units);
    //             cy.get("[aria-describedby='PortfolioSimpleEditor_editRowPopup']" + " .ui-dialog-buttonpane .ui-button span").contains("OK").click();
    //         })
    //       })
    //     });
    //   } - is working but selector not availbale outside dev and need to ensure holdings accordian is open
      })
    });
   }
});



Cypress.Commands.add("PortfolioInvestment_Tidy", (ActionFileNo) => {});
