import * as PortfolioConstants from "../../constants/portfolio.js";
import * as Portfolio_Adv_Constants from "../../constants/portfolio_Advanced.js";
import * as Portfolio_Smp_Constants from "../../constants/portfolio_Simple.js";
import * as Constants from "../../constants/Core.js";

//Portfolio Editor simple mode
Cypress.Commands.add("Portfolio_Create_1", (EntityData) => {
    
    cy.ClosePortfolioEditor(Portfolio_Smp_Constants.PortfoliosQuickEditorSelector);
        
    cy.clickButtonInPopup(Portfolio_Smp_Constants.ClientPortfoliosSelector,"Add New Portfolio");
    cy.PopulateEditor(Portfolio_Smp_Constants.PortfoliosQuickEditorSelector,Portfolio_Smp_Constants.Portfolio_Simple,EntityData, "Portfolio Simple");

});

//Portfolio Editor Advanced mode
Cypress.Commands.add("Portfolio_Create_2", (EntityData) => {

    cy.ClosePortfolioEditor(PortfolioConstants.PortfoliosAdvancedEditorSelector);
    
    cy.clickButtonInPopup(PortfolioConstants.ClientPortfoliosSelector,"Add New Portfolio");
    cy.get("[aria-describedby='" + PortfolioConstants.PortfoliosQuickEditorSelector.replace("#","") + "'] #btn-advancedDetails-action").click();

    cy.get(PortfolioConstants.PortfoliosAdvancedEditorSelector + " .AccordianContainer", {  //ensure portfolio adv editor is there and has loaded
        timeout: Constants.Timeout_EditorWait,
      }).then(function () {         
          cy.PopulateEditor(PortfolioConstants.PortfoliosAdvancedEditorSelector,Portfolio_Adv_Constants.AllPortfolioAdvancedInputs,EntityData, "Portfolio Advanced");     
      });
    
});

Cypress.Commands.add("Portfolio_Create_3", (EntityData) => {});

Cypress.Commands.add("Portfolio_Tidy", (ActionFileNo) => {
    //close an outstanding portfolio editor
    if(ActionFileNo == 1){
        cy.ClosePortfolioEditor(Portfolio_Smp_Constants.PortfoliosQuickEditorSelector,"Ok");
    } else if(ActionFileNo == 2){
        cy.ClosePortfolioEditor(PortfolioConstants.PortfoliosAdvancedEditorSelector, "OK");
    }
});

Cypress.Commands.add("ClosePortfolioEditor", (PortfolioEditorID, ButtonText) => {
    var Element = Cypress.$("[aria-describedby='" + PortfolioEditorID.replace("#","") + "']");
    if(Element && Element.length > 0 ){
        cy.clickButtonInPopup(PortfolioEditorID,ButtonText);
        cy.wait(1000); //allow for save
    }
});


Cypress.Commands.add("Portfolio_Create_API", (Portfolio) => {  
       
    //xml2js library is going to take our xml object and turn it back into a string for the API to receive
    var xml2js = require("xml2js");
    var builder = new xml2js.Builder({headless: true,explicitRoot: false,rootName: "ClientPortfolio"}); //replace <Portfolio> with <ClientPortfolio> - required by the Web service
    var xml = builder.buildObject(Portfolio);
    xml = cy.ReplaceAutomationMappingOverrides(Portfolio_Adv_Constants.AllPortfolioAdvancedInputs,xml);
    xml = xml.replace(
      "<ClientPortfolio>",
      '<ClientPortfolio xmlns="http://api.omsystems.co.uk">'
    ); //Adding back in the namespace
  
    cy.API_Call(xml, Constants.API_Create);
});