import * as PortfolioConstants from "../../constants/portfolio.js";
import * as Constants from "../../constants/Core.js";

Cypress.Commands.add("PortfolioInvestment_Create_1", (EntityData) => {
    //click Add New Portfolio
    cy.clickButtonInPopup(PortfolioConstants.PortfoliosQuickEditorSelector,"Pick funds from shortlist using fund name or ISIN");
    var buttonsSelector = "[aria-describedby='PortfolioSimpleEditor_QuickAddFundPopup']" + " .ui-dialog-buttonpane .ui-button span";
    var editRowButtonSelector = "[aria-describedby='PortfolioSimpleEditor_editRowPopup']" + " .ui-dialog-buttonpane .ui-button span";
    cy.ProcessAddHoldingQuick(EntityData,buttonsSelector,'#PortfolioSimpleEditor_Holdings','#PortfolioAddPopUp','#PortfolioSimpleEditor_editRowPopup',editRowButtonSelector,1);
});

Cypress.Commands.add("PortfolioInvestment_Create_2", (EntityData) => {
    //From Advanced Editor
    //can only add holdings when holdings accordian is active
    cy.wait(2000);
    cy.clickAccordion_PreCheck(".PA_ClientHoldings_Accordian",PortfolioConstants.PortfoliosAdvancedEditorSelector,"Holdings");
    cy.wait(2000);
    cy.clickButtonInPopup(PortfolioConstants.PortfoliosAdvancedEditorSelector,"Pick funds from shortlist using fund name or ISIN");
    var buttonsSelector = ".QuickAddFundPopup + .ui-dialog-buttonpane .ui-button span";
    var editRowButtonSelector = ".portfolio_Adv_CHoldings_editRowPopup + .ui-dialog-buttonpane .ui-button span";
    cy.ProcessAddHoldingQuick(EntityData,buttonsSelector,'.PA_ClientHoldings_Accordian',PortfolioConstants.PortfoliosAdvancedEditorSelector,
    '.portfolio_Adv_CHoldings_editRowPopup',editRowButtonSelector,2);
});

Cypress.Commands.add("PortfolioInvestment_Create_3", (EntityData) => {});


//Will be moved but here for now due to merging conflicts 
Cypress.Commands.add("ProcessAddHoldingQuick", (Entity, PopupSelector, HoldingsAccordianSelector, editorSelector, editRowSelector,editRowButtonSelector,actionNo) => {
  cy.wait(2500); //allow control to prime
  var textInput = Entity.FundID;
   if (textInput) {
   cy.wrap(".quickAddFund_ComboBox").as('inputSelector'); //want access to this later in the then
    cy.get(".quickAddFund_ComboBox").clear().type(textInput).type("{enter}").then(function(){
      cy.get(".wijmo-wijlist-ul",{timeout:Constants.Timeout_HoldingSearch}).filter(':visible').contains(textInput).first().click();
      cy.wait(2000);        
      cy.get(this.inputSelector).then(function($SelectedFund){
        var SelectedFund = Entity.FundName;
        cy.get(PopupSelector).contains(/^Add Selected Fund$/).click();
        cy.wait(1000);
        cy.get(PopupSelector).contains("Close").click();           
        if(Entity.Units){
          cy.clickAccordion_PreCheck(HoldingsAccordianSelector,editorSelector,"Holdings");
          cy.wait(2000); //Allow for new fund to be added
          cy.get('.CurrentHoldings_table tbody tr td').contains(SelectedFund).then(function($td){ //find the added fund in the holdings table
            cy.wrap($td).closest("tr").find("button").find(".ui-icon-pencil").click().then(function(){ //click the associated edit icon
              if(actionNo == 1){
                cy.ProcessAddHoldingQuick_EditUnit_Simple(Entity, PopupSelector, HoldingsAccordianSelector, editorSelector, editRowSelector,editRowButtonSelector);
              }
              else{
                cy.ProcessAddHoldingQuick_EditUnit_Advanced(Entity, PopupSelector, HoldingsAccordianSelector, editorSelector, editRowSelector,editRowButtonSelector);
              }            
          })
        });
      }
      })
    });
   }
});


Cypress.Commands.add("ProcessAddHoldingQuick_EditUnit_Simple", (Entity, PopupSelector, HoldingsAccordianSelector, editorSelector, editRowSelector,editRowButtonSelector) => {
  cy.get(editRowSelector).then(function(){ //check editor is open
    cy.get(editRowSelector + " .RowEditUnits").type(`{selectall}`).type(Entity.Units);
    cy.get(editRowButtonSelector).contains("OK").click();
    cy.wait(1000);
  })
})

Cypress.Commands.add("ProcessAddHoldingQuick_EditUnit_Advanced", (Entity, PopupSelector, HoldingsAccordianSelector, editorSelector, editRowSelector,editRowButtonSelector) => {
  var UnitsCalculatorSelctor = ".portfolio_Adv_CHoldings_editHoldingUnitPopup";
  var Element = Cypress.$(UnitsCalculatorSelctor);
  
  if(Element && Element.length > 0 ){
    cy.get(UnitsCalculatorSelctor + " + .ui-dialog-buttonpane .ui-button span").contains("OK").click();
    cy.wait(1000); //allow for save
  }

  cy.get(editRowSelector).then(function() { //check editor is open
    cy.get(editRowSelector + " .RowEditUnits").type(`{selectall}`).type(Entity.Units);
    cy.get(editRowButtonSelector).contains("OK").click();
    cy.wait(1000);
  })
})


Cypress.Commands.add("PortfolioInvestment_Tidy", (ActionFileNo) => {});
