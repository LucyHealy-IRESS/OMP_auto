
/// <reference types="cypress" />

describe("Creating Client and Portfolio", () => {


        
    it('New Client', () => {

        cy.login('staging','lucy.healy@iress.com', 'Y');
        cy.ClientCreate('2');

            cy.wait(7000);
            cy.get('[style="text-align:right;margin-top:24pt"] > button').dblclick();    //skip wijmo popup must add an if to check which environment user is in

        cy.PortfolioCreate('1');

        //cy.get('[data-bind="text:MainViewModel.Overview_HeaderTitle1"]').should('contain', 'Tina Cypress')
        cy.get('[data-bind="text:MainViewModel.Overview_HeaderTitle1"]').then(($header) => {

            return $header.text();
        }).as('header')


        /*
        //it('New Quote via client'), () => {
            cy.contains('Client Summary').click({force:true})
            cy.get('#ClientSummaryRM').click();
            cy.get('div.tableContainer > div > div.wijmo-wijgrid-fixedview > div.wijmo-wijgrid-scroller.wijmo-wijsuperpanel.ui-widget.ui-widget-content.ui-corner-all').find('tr')
                .contains('Drawdown Product').parent()
                .contains('All%20Plans%20Maturity%20Value').should('contain.value','£224,000')
        //}
        */
        
        })
    
    })
