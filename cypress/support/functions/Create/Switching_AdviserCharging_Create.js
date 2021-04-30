
import * as Constants from "../../constants/Core.js";
import * as AdvChargesConstants from "../../constants/switching_AdviserCharges.js";

Cypress.Commands.add("Switching_AdviserCharging_Create_1", (EntityData) => {

    if(EntityData){
     cy.get(AdvChargesConstants.AdviserChargesListSelector + " .ac-table", {  //ensure client editor is there and client info section has loaded
       timeout: Constants.Timeout_EditorWait,
      }).then(function () {         
        //get to the correct editor e.g. pension
        var AdviserChargesType = EntityData.Type;
        
        //select correct value in the dropdown
        var TypeToUse = EntityData.ToUseInThisQuote;
        cy.SetDropdown_OpenDropdown(".AdvsierChargesListPopup .ac-table ." +AdviserChargesType + "_AdviserRow .wijmo-wijcombobox",TypeToUse);
        cy.wait(2000); //because selecting from the dropdown refreshes the popup
        cy.get(".AdvsierChargesListPopup .ac-table ." +AdviserChargesType + "_AdviserRow" ).then(function($row){
          cy.wrap($row.find(".ui-icon-pencil")).click();
            cy.PopulateEditor(AdvChargesConstants.AdviserChargesEditorSelector,AdvChargesConstants.AllAdviserChargesInputs,EntityData,"Switching Adviser Charges - " + AdviserChargesType );
            cy.wait(1000);    
            cy.clickButtonInPopup(AdvChargesConstants.AdviserChargesEditorSelector,"OK");    
        })       
       }); 
    }
});
    
Cypress.Commands.add("Switching_AdviserCharging_Create_2", (EntityData) => {});
    
Cypress.Commands.add("Switching_AdviserCharging_Create_3", (EntityData) => {});
    
Cypress.Commands.add("Switching_AdviserCharging_Tidy", (ActionFileNo) => {})