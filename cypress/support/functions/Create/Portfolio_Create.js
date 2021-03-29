import * as PortfolioConstants from "../../constants/portfolio.js";
import * as Portfolio_Adv_Constants from "../../constants/portfolio_Advanced.js";
import * as Portfolio_Smp_Constants from "../../constants/portfolio_Simple.js";
import * as Constants from "../../constants/Core.js";

//Portfolio Editor simple mode
Cypress.Commands.add("Portfolio_Create_1", (EntityData) => {
    
    var Element = Cypress.$("[aria-describedby='" + PortfolioConstants.PortfoliosQuickEditorSelector.replace("#","") + "']");
    if(Element && Element.length > 0 ){
        cy.get('[aria-describedby="PortfolioAddPopUp"] > .ui-dialog-buttonpane > .ui-dialog-buttonset > .ui-button > .ui-button-text').click();
        cy.wait(1000);
    }
    
    cy.clickButtonInPopup(PortfolioConstants.ClientPortfoliosSelector,"Add New Portfolio");
    cy.PopulateEditor(PortfolioConstants.PortfoliosQuickEditorSelector,PortfolioConstants.AllPortfolioSimpleInputs,EntityData);

    //if we contain investments then dont close 
    //if we have no investments then we can close the editor
});

//Portfolio Editor Advanced mode
Cypress.Commands.add("Portfolio_Create_2", (EntityData) => {
    
    cy.clickButtonInPopup(PortfolioConstants.ClientPortfoliosSelector,"Add New Portfolio");
    cy.get("[aria-describedby='" + PortfolioConstants.PortfoliosQuickEditorSelector.replace("#","") + "'] #btn-advancedDetails-action").click();

    cy.get(PortfolioConstants.PortfoliosAdvancedEditorSelector + " .AccordianContainer", {  //ensure portfolio adv editor is there and has loaded
        timeout: Constants.Timeout_EditorWait,
      }).then(function () {         
          cy.PopulateEditor(PortfolioConstants.PortfoliosAdvancedEditorSelector,Portfolio_Adv_Constants.AllPortfolioAdvancedInputs,EntityData);       
      });
    
});

Cypress.Commands.add("Portfolio_Create_3", (EntityData) => {});