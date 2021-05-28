import * as core from '../../constants/Core.js'
import * as psearchconts from '../../constants/portfolio_Search.js'

Cypress.Commands.add("PortfolioSearch_Assert_1", (EntityData) => {

    cy.get("#ResearchPortfoliosIconMenu").click().then(function(){

        cy.get('[data-bind="text:MainViewModel.Overview_HeaderTitle1"]').contains('Portfolio Research').then(function() {
            cy.get('[data-bind="text:MainViewModel.Overview_HeaderTitle2"]').contains('Matching').then(function() {
                cy.wait(core.Timeout_SearchWait)
                cy.menuClick("Portfolio Research", "#AmendSearch");
            
                cy.get(".TextMatch input").type(EntityData["PortfolioTextCriteria"]);
                cy.get(".OverviewSearchButton").click();;
                cy.wait(5000)
                cy.SetDropdown_ByIndex(".wijmo-wijcombobox-wrapper > .gridSchemasDropDown", "3").then(function() {


                    cy.readFile('cypress/fixtures/ExecutionFolder/Create/PS002_Model.xml').then(function (file) {
                        
                        var col = "<Column";
                        var row = "<Row"
                        var countCol = (file.match(new RegExp(col, 'g')) || []).length; //searh for the column string in the while file, then the row
                        var countRow = (file.match(new RegExp(row, 'g')) || []).length;

                        if (countCol > 0){
                            var id
                            for (id = 1; id <= countCol; id++) {
                                var tableRow = ("Column" + id)
                                var gridParam = EntityData[tableRow]
                                
                                cy.get(psearchconts.PortfolioSearchTable).first("tr").find("td").eq(id).should('contain', gridParam)
                            }
                        }

                        //else if ()
                    })
                })    

            })

        })
    })
});
    
Cypress.Commands.add("PortfolioSearch_Assert_2", (EntityData) => {});
    
Cypress.Commands.add("PortfolioSearch_Assert_3", (EntityData) => {});