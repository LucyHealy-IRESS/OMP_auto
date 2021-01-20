/// <reference types="cypress" />

describe('Create Modeller Quote', () => {

    it('New Quote via client'), () => {
        cy.contains('#JssorThumbnailContainer > div.t.thumbNailTitleText.thumbnail_title_').click('336','0')
        cy.get('#ClientSummaryRM').click();
        cy.get('div.tableContainer > div > div.wijmo-wijgrid-fixedview > div.wijmo-wijgrid-scroller.wijmo-wijsuperpanel.ui-widget.ui-widget-content.ui-corner-all').find('tr')
            .contains('Drawdown Product').parent()
            .contains('All%20Plans%20Maturity%20Value').should('contain.value','£224,000')
//}



})