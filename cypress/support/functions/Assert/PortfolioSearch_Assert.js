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

                    
                    // var temp = EntityData["Column1"];
                    // var count = (temp.match(/is/g) || []).length;
                    // console.log(count);

                    // var id
                    // var nColumn = EntityData["Column" + id]

                    // for (id = 0; id < ; id++) {

                    // cy.get(psearchconts.PortfolioSearchTable).first("tr").find("td").eq(id).should('contain', nColumn)
                    cy.get(psearchconts.PortfolioSearchTable).first("tr").find("td").eq(1).should('contain', EntityData["Column1"])
                    cy.get(psearchconts.PortfolioSearchTable).first("tr").find("td").eq(2).should('contain', EntityData["Column2"])
                    cy.get(psearchconts.PortfolioSearchTable).first("tr").find("td").eq(3).should('contain', EntityData["Column3"])
                    cy.get(psearchconts.PortfolioSearchTable).first("tr").find("td").eq(4).should('contain', EntityData["Column4"])
                    cy.get(psearchconts.PortfolioSearchTable).first("tr").find("td").eq(5).should('contain', EntityData["Column5"])
                    cy.get(psearchconts.PortfolioSearchTable).first("tr").find("td").eq(6).should('contain', EntityData["Column6"])
                    

                })    

            })

        })
    })
});
    
Cypress.Commands.add("PortfolioSearch_Assert_2", (EntityData) => {});
    
Cypress.Commands.add("PortfolioSearch_Assert_3", (EntityData) => {});