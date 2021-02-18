
context('Testing API', () => {

//--------------------------------------------------------------------------------------------
     /* it("DELETE", () => {
         cy.request({
            method: 'DELETE',
            url: 'https://html.omprofiler.int.aws-wealth-staging-uk.iress.online/AjaxHandlerRW.aspx'          
         }).then((x) => {
            expect(x.body).to.be.empty
         })
      })
      */
//--------------------------------------------------------------------------------------------
      it('GET', ()=>{
         cy.request('https://html.omprofiler.int.aws-wealth-staging-uk.iress.online/AjaxHandlerRW.aspx').its('body').should('have.property', 'Annuity_Quotes_Provider')

      })
//--------------------------------------------------------------------------------------------
      it('POST', () => {
         cy.request({
            method: 'POST',
            url: 'https://html.omprofiler.int.aws-wealth-staging-uk.iress.online/AjaxHandlerRW.aspx',
            body: {
               "AIClickSelect": true,
               "AI_UsersAutoOpenOption": "True",
               "AlwaysShowHowTo": false,
               "AlwaysUseAdvancedPortfolioEditor": false,
               "Annuity_Quotes_Provider": "Exchange"
            }
         }).then((res) => {
            expect(res.body).has.property("Annuity_Quotes_Provider", "Exchange");
         })

      })
//--------------------------------------------------------------------------------------------
      it('POST2', () => {
         cy.request({
            method: 'POST',
            url: 'https://html.omprofiler.int.aws-wealth-staging-uk.iress.online/AjaxHandlerRW.aspx',
            body: {
               "data": '{"Username":"Lucy.Healy@iress.com","Password":"Y","RiskCategoryBasisValue":0,"UserTier":0,"advertExists":false,"HomeAdvert_SRC":"","HomeAdvert_URL":"","HomeAdvert_IsIframe":false,"OptionCanViewMI":false,"OptionCanViewImport":false,"MustChangePassword":false,"FullName":"","UserGuid":null,"StatusMessage":"","ShowAgreedToTOC":false,"GuidCache":null,"ShouldPopulateGuidCache":true,"HTML5_LoginCount":0,"AI_UsersAutoOpenOption":"False","ReasonCode":0,"NoTimeUserHasLoggedIn":0}'
            }
          }).then(($res) => {
             expect($res.body).has.property('data');
         })

      })



})