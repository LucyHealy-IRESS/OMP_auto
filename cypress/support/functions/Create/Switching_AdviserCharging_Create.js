
Cypress.Commands.add("Switching_AdviserCharging_Create_1", (EntityData) => {

//we are currently in the new investment editor
cy.get(".NewInvestmentPopupDialog").contains("Adviser Charging").click();


if(EntityData){
//     cy.get(swClientContants.ClientEditorSelector, {  //ensure client editor is there and client info section has loaded
//         timeout: Constants.Timeout_EditorWait,
//       }).then(function () {         
//           cy.PopulateEditor(swClientContants.ClientEditorSelector,swClientContants.AllClientInputs,EntityData,"Switching Client Details");
//           cy.wait(1000);    
//       }); 
}



});
    
Cypress.Commands.add("Switching_AdviserCharging_Create_2", (EntityData) => {});
    
Cypress.Commands.add("Switching_AdviserCharging_Create_3", (EntityData) => {});
    
Cypress.Commands.add("Switching_AdviserCharging_Tidy", (ActionFileNo) => {})