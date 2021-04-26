import * as PortfolioConstants from "../../constants/portfolio.js";
import * as Portfolio_Smp_Constants from "../../constants/portfolio_Simple.js";
import * as Portfolio_Adv_Constants from "../../constants/portfolio_Advanced.js";
import * as Constants from "../../constants/Core.js";

Cypress.Commands.add("Portfolio_Assert_1", (EntityData) => {
    var ProductID = EntityData["ProductID"].trim();
    ProductID = ["PD", ProductID];
    ProductID = ProductID.join("_");

    var entity = EntityData["Reference"];
    //var ClientPortfolios = function(){
      cy.ClosePortfolioEditor(Portfolio_Smp_Constants.PortfoliosQuickEditorSelector).then(function(){
        cy.wait(2000); //2 second ui catchup to prevent any detatching from async refreshes 

        if (PortfolioConstants.ProductIDs[ProductID].pType == 'Income'){
          cy.menuClick('Client Summary', '#ClientSummaryIncomes');
          cy.wait(2000)
          cy.get('#Client_ViewIncomes > .gridContainer tr td', {timeout:Constants.Timeout_Medium}).contains(entity).dblclick().then(function () {             
            cy.get("[aria-describedby='" + Portfolio_Smp_Constants.PortfoliosQuickEditorSelector.replace("#","") + "']",{timeout:Constants.Timeout_Medium})
          })
        }

        else {
          cy.menuClick('Client Summary', '#ClientSummaryPortfolios')
          cy.wait(2000)
          cy.get('#Client_ViewPortfolios > .gridContainer tr td', {timeout:Constants.Timeout_Medium}).contains(entity).dblclick().then(function () {             
            cy.get("[aria-describedby='" + Portfolio_Smp_Constants.PortfoliosQuickEditorSelector.replace("#","") + "']",{timeout:Constants.Timeout_Medium})
          });     
        }
      }).then(function(){
      cy.AssertEditor(Portfolio_Smp_Constants.PortfoliosQuickEditorSelector,Portfolio_Smp_Constants.Portfolio_Simple, EntityData, "Portfolio Simple");
      })
    // }
    // cy.ClientPortfoliosListReturned(ClientPortfolios);
});

Cypress.Commands.add("Portfolio_Assert_2", (EntityData) => {
  var ProductID = EntityData["ProductID"].trim();
  ProductID = ["PD", ProductID];
  ProductID = ProductID.join("_");
  
  var entity = EntityData["Reference"];

  cy.wait(2000).then(function(){  //2 second ui catchup to prevent any detatching from async refreshes 

      //if (cy.ProductIdType() == 'Income'){
      if (PortfolioConstants.ProductIDs[ProductID].pType == 'Income'){
        cy.menuClick('Client Summary', '#ClientSummaryIncomes');
        cy.wait(2000)
        cy.get('#Client_ViewIncomes > .gridContainer tr td', {timeout:Constants.Timeout_Medium}).contains(entity).dblclick().then(function () {      
          cy.get('.QuickEditPortfolioSuperpanel').then(function(){ //function to correct assyncronous call
            cy.contains('Advanced Details').click() 
          })
        })
      }

      else {
        cy.menuClick('Client Summary', '#ClientSummaryPortfolios')
        cy.wait(2000)
        cy.get('#Client_ViewPortfolios > .gridContainer', {timeout:Constants.Timeout_Medium}).find('tr', {timeout:Constants.Timeout_Medium}).find('td').contains(entity).dblclick().then(function () {   
            cy.get("[aria-describedby='" + PortfolioConstants.PortfoliosQuickEditorSelector.replace("#","") + "'] #btn-advancedDetails-action").click();  
        })
      }     
    }).then(function(){
      cy.AssertEditor(PortfolioConstants.PortfoliosAdvancedEditorSelector,Portfolio_Adv_Constants.AllPortfolioAdvancedInputs, EntityData, "Portfolio Advanced");
    })
  });


Cypress.Commands.add("Portfolio_Assert_3", (EntityData) => {});



Cypress.Commands.add("ClientPortfoliosListReturned", (callback) => {
    cy.get('.ui-dialog-buttons > .ui-dialog-titlebar').contains('Client Portfolios').then(function(){
      cy.get('#Client_ViewPortfolios > .gridContainer', {timeout:Constants.Timeout_Medium}).then(function(){
        callback();
      })
    })
  })



  Cypress.Commands.add("Portfolio_Assert_API", (EntityData) => {

    var xml_Payload = `<ClientPortfolio xmlns="http://api.omsystems.co.uk">
    <PortfolioID>[PF_ID]</PortfolioID>
    <ClientID>[CLIENT_ID]</ClientID>
    </ClientPortfolio>`;
    xml_Payload = xml_Payload.replace("[CLIENT_ID]", EntityData.ClientID).replace("[PF_ID]", EntityData.PortfolioID);
    cy.API_Retreive(xml_Payload).then(function(ResponseXMLString){ 
      var ResponseXMLObject = cy.getResponseXML(ResponseXMLString); //translates are string of xml into an object we can work with
      if(ResponseXMLObject){
        var EntityDataInvestments = EntityData.Investments;
          if(EntityDataInvestments){                    
            var Investments = EntityDataInvestments.PortfolioInvestment;              
            if (Array.isArray(Investments)) {
              if(Investments.length == ResponseXMLObject.ClientPortfolio.Investments.PortfolioInvestment.length){
                Investments = Investments.sort(InvestmentCompare);
                var responseInvestments = ResponseXMLObject.ClientPortfolio.Investments.PortfolioInvestment.sort(InvestmentCompare);
                for (var x = 0; x < Investments.length; x++) {
                  cy.PortfolioInvestment_Assert_API(Investments[x],responseInvestments[x]);
                }
              }
              else{
                cy.PushToLogArray("Fail - Different no. of holdings", "","","","","");
              }
            } else {
              cy.PortfolioInvestment_Assert_API(Investments,ResponseXMLObject.ClientPortfolio.Investments.PortfolioInvestment);
            }
           delete EntityData.Investments; //Portfolios to the API are a seperate call, they API will not return portfoliots in the client xml
          }
        cy.ProcessAssert_API(Portfolio_Adv_Constants.AllPortfolioAdvancedInputs,EntityData,ResponseXMLObject.ClientPortfolio,"Portfolio");
      }   
    });
  });


  function InvestmentCompare(a, b) {
    // Use toUpperCase() to ignore character casing
    var FundId_A = a.FundID.toUpperCase();
    var FundId_B = b.FundID.toUpperCase();
  
    let comparison = 0;
    if (FundId_A > FundId_B) {
      comparison = 1;
    } else if (FundId_A < FundId_B) {
      comparison = -1;
    }
    return comparison;
  }