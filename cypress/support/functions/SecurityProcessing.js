
import * as constants from '../constants/constantsSelectors.js'
import * as clientConstants from '../constants/client_Security.js'
import * as portfolioConstants from '../../support/constants/portfolio_Security.js'
import * as core from '../constants/Core.js'


Cypress.Commands.add("Security_ClientSearch", (xmlDoc, totalEntity, Access) => {

    cy.get("#ExistingClientsIconMenu", { timeout:core.Timeout_MenuButtonWait }).click();
    cy.get(".overviewHeader").find("div").find("span").contains("Matching",{timeout:constants.Timeout_SearchWait}).then(function($span){ //initial search completes as header contains x Matching Clients 
        cy.get(".TypeCompositePanel tr",{timeout:constants.Timeout_SearchWait}).then(function(){   //will likely need to change this as it is looking for a table row, if no table rows it will fail
            cy.SetResultsSchema(".wijmo-wijcombobox-wrapper > .gridSchemasDropDown", "1") 
            cy.menuClick("Client Search", "#AmendClientSearch"); 
            cy.get(".AmendSearchPopup_Container").then(function(){ 
                cy.wait(2000)
                cy.get(':nth-child(1) > .wijmo-wijtree-header > .wijmo-wijtree-inner > .wijmo-checkbox > .wijmo-checkbox-box > .wijmo-checkbox-icon').dblclick();
                cy.get('.OverviewSearchButton').click().then(function(){

                    if (Access == 1){
                        var SearchType = "contain"
                        cy.get('[data-bind="text:MainViewModel.Overview_HeaderTitle2"]').should("contain", `${totalEntity} Matching Client`); //assert total clients  based on header
                        cy.get(".wijmo-wijgrid-split-area-se tbody tr").should("have.length", totalEntity)
                    }
                    else if (Access == 0){
                        var SearchType = "not.contain"
                    }
                    for (var i = 0; i < totalEntity; i++) {
                        var Clients = xmlDoc.getElementsByTagName("Client")[i];

                        Object.keys(clientConstants.ClientSearchInputs).forEach(key => {          //process objects to walk through assert                          
                            cy.log(key, clientConstants.ClientSearchInputs[key]);
                            var value = Clients.getElementsByTagName(key)[0].childNodes[0].nodeValue; 
                            
                            if (clientConstants.ClientSearchInputs[key]["inputType"] == "Date") { //convert date format to match application output
                                var value = new Date(value);
                                var value = value.toLocaleDateString('en-UK')
                                cy.get(clientConstants.ClientSearchInputs[key]["Selector"]).filter(":visible").should(SearchType, value)
                            }
                            else{
                                cy.get(clientConstants.ClientSearchInputs[key]["Selector"]).filter(":visible").should(SearchType, value)
                            }
                        });    
                    }
                })
            })
        })
    })
})



Cypress.Commands.add("Security_PortfolioSearch", (xmlDoc, totalEntity, Access) => {
    cy.get("#ResearchPortfoliosIconMenu", { timeout:core.Timeout_MenuButtonWait }).click();
    cy.get(".overviewHeader").find("div").find("span").contains("Matching",{timeout:constants.Timeout_SearchWait}).then(function($span){ //initial search completes as header contains x Matching Clients 
        cy.get(".TypeCompositePanel tr",{timeout:constants.Timeout_SearchWait}).then(function(){   //will likely need to change this as it is looking for a table row, if no table rows it will fail
            cy.SetResultsSchema(".wijmo-wijcombobox-wrapper > .gridSchemasDropDown", "1") 
            cy.menuClick("Portfolio Research", "#AmendSearch"); 
            cy.get(".AmendSearchPopup_Container").then(function(){ 
                cy.wait(2000)
                cy.get(':nth-child(3) > .wijmo-wijtree-header > .wijmo-wijtree-inner > .wijmo-checkbox > .wijmo-checkbox-box > .wijmo-checkbox-icon').dblclick();
                //cy.get(':nth-child(4) > .wijmo-wijtree-header > .wijmo-wijtree-inner > .wijmo-checkbox > .wijmo-checkbox-box > .wijmo-checkbox-icon').dblclick();
                cy.get('.OverviewSearchButton').click().then(function(){

                    if (Access == 1){
                        var SearchType = "contain"
                        cy.get('[data-bind="text:MainViewModel.Overview_HeaderTitle2"]').should("contain", `${totalEntity} Matching Portfolio`); //assert total clients  based on header
                        cy.get(".wijmo-wijgrid-split-area-se tbody tr").should("have.length", totalEntity)
                    }
                    else if (Access == 0){
                        var SearchType = "not.contain"
                    }
                    for (var i = 0; i < totalEntity; i++) {
                        var Portfolios = xmlDoc.getElementsByTagName("Portfolio")[i];

                        Object.keys(portfolioConstants.PortfolioSearchInputs).forEach(key => {          //process objects to walk through assert                          
                            cy.log(key, portfolioConstants.PortfolioSearchInputs[key]);
                            var value = Portfolios.getElementsByTagName(key)[0].childNodes[0].nodeValue; 
                            
                            if (portfolioConstants.PortfolioSearchInputs[key]["inputType"] == "Date") { //convert date format to match application output
                                var value = new Date(value);
                                var value = value.toLocaleDateString('en-UK')
                                cy.get(portfolioConstants.PortfolioSearchInputs[key]["Selector"]).filter(":visible").should(SearchType, value)
                            }
                            else{
                                cy.get(portfolioConstants.PortfolioSearchInputs[key]["Selector"]).filter(":visible").should(SearchType, value)
                            }

                        });    
                    }
                })
            })
        })
    })
})

