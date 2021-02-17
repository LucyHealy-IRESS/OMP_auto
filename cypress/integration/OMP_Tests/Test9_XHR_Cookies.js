//attempt on using XHR, I've managed to intercept the calls, however, most of our calls with data are called ajaxhandler.aspx, so I couldn't pinpoint the exact call to assert data on. also cy.server is deprecated, new is cy.interept

describe('XHR assertions', () =>{
   
   it('Perform login and check xhr returned', () =>{

      //cy.intercept('GET', ('contains', '/ViewModel/UserProfile.js')).as('userprofile');

      cy.request({ //the below should work, but for some reason isn't finding the requests based on the form data, but I think that is how it is, it only get request, responses and general https://docs.cypress.io/guides/guides/network-requests.html#See-also
         method: 'GET',
         url: '/AjaxHandler.aspx',
         body: {model: 'Panels.UserDashboard.Model_Portfolio_Summary_4859532F_E140_4738_9D57_95F688B3F55C'},
         //methodName: 'SetupPanel'
         body: 'Panels.UserDashboard.Model_Portfolio_Summary'       

      }).as('ajx')

      cy.login('live','username1', 'password1' );
      cy.wait(16000)

      cy.getCookie('UserProfileViewModel.ThemeName').should('have.property', 'value', 'Redmond');//GET COOKIE AND VERIFY ITS VALUE< IT WORKS

      // cy.get('@call').then((xhr) => {
      //    expect(xhr.status, 'POST').to.eq(200);
      // })
      //cy.get('@userprofile').then((xhr) => {
       //  expect(xhr.Stat).to.equal(200) //assert didn't work, it did find the request, but in cypress, that didn't have a status code, while of dev tools, it did.

      cy.get("@ajx").then((xhr) => {
         expect(xhr.status).to.eq(200);
         //cy.expect(xhr.response.body.data).to.have.property("PanelTitle", "portfolio summary");

      })

      })
      
      


   })


