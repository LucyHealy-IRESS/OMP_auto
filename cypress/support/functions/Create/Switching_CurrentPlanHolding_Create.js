import * as CurrentPlanConstants from "../../constants/switching_currentPlans.js"
import * as Constants from "../../constants/Core.js";


Cypress.Commands.add("Switching_CurrentPlanHolding_Create_1", (EntityData) => {
    cy.clickAccordion_PreCheck(".holdings",CurrentPlanConstants.CurrentPlanEditorSelector,"Holdings")    
    cy.wait(2000)
    cy.clickButtonInPopup(CurrentPlanConstants.CurrentPlanEditorSelector,"Pick funds from shortlist using fund name or ISIN");
    cy.wait(2500); //allow control to prime
    var textInput = EntityData.FundID;
     if (textInput) {
     cy.wrap(".QuickAddFundPopup .quickAddFund_ComboBox").as('inputSelector'); //want access to this later in the then
      cy.get(".QuickAddFundPopup .quickAddFund_ComboBox").last().clear().type(textInput).type("{enter}").then(function(){ //.filter(':visible') didn't work
        cy.get(".wijmo-wijlist-ul",{timeout:Constants.Timeout_HoldingSearch}).filter(':visible').contains(textInput).first().click();
        cy.wait(2000);        
        cy.get(this.inputSelector).then(function($SelectedFund){
          var SelectedFund = EntityData.FundName;
          cy.get('[aria-describedby="QuickAddFundPopup"] :nth-child(2) > .ui-button-text').click();
          cy.wait(1000);
          cy.get(".ui-dialog-buttonset > :nth-child(3) > .ui-button-text").click();           
          if(EntityData.Units){
            cy.clickAccordion_PreCheck(".holdings",CurrentPlanConstants.CurrentPlanEditorSelector,"Holdings");
            cy.wait(3000); //Allow for new fund to be added
            cy.get(':nth-child(1) > .wijmo-wijgrid table tbody tr td',{timeout:Constants.Timeout_HoldingSearch}).contains(SelectedFund).then(function($td){ //find the added fund in the holdings table
              cy.wrap($td).closest("tr").find("button").find(".ui-icon-pencil").click().then(function(){ //click the associated edit icon

                var UnitsCalculatorSelctor = "#ui-id-7";
                var Element = Cypress.$(UnitsCalculatorSelctor);
                
                if(Element && Element.length > 0 ){
                  cy.get('#ui-id-7' + " + .ui-dialog-buttonpane .ui-button span").contains("Cancel").click();
                  cy.wait(1000); //allow for save
                }
              
                cy.get('#ui-id-5').then(function() { //check editor is open
                  cy.get('#ui-id-5' + " .RowEditUnits").filter(':visible').type(`{selectall}`).type(EntityData.Units);
                  cy.get('[aria-describedby="ui-id-5"] > .ui-dialog-buttonpane').contains("OK").click();
                  cy.wait(1000);
                })
                })            
            })
          }
        })
    })
}
});
  

Cypress.Commands.add("Switching_CurrentPlanHolding_Create_2", (EntityData) => {});

Cypress.Commands.add("Switching_CurrentPlanHolding_Create_3", (EntityData) => {});

Cypress.Commands.add("Switching_CurrentPlanHolding_Tidy", (EntityData) => {});