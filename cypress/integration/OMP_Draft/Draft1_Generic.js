
/// <reference types="cypress" />

describe("Client Search", () => {


        
    it('Search Client', () => {
        
        cy.login('live', 'lucy.healy@iress.com','');
        cy.wait(1200);
        cy.get('#ExistingClientsIconMenu').click();
        cy.wait(20000);
        cy.get('[data-u="thumbnavigator"]').children().contains('Client Search').click({force:true});
        cy.get('#AmendClientSearch').click();

    })

})


//-----------------------------------------

//create portfolio by id
/// <reference types="cypress" />

describe("Creating Client and Portfolio", () => {


        
    it('New Client', () => {

        cy.login('staging','lucy.healy@iress.com', '');
        cy.ClientCreate('2');

            cy.wait(7000);
            cy.get('[style="text-align:right;margin-top:24pt"] > button').dblclick();    //skip wijmo popup must add an if to check which environment user is in

        cy.PortfolioCreate('1');

        cy.get('[data-bind="text:MainViewModel.Overview_HeaderTitle1"]').should('contain', 'Tina Cypress')

                
    })
    
})
//----------------------------------
//CALL FOR THE CLIENT VIA FILE WITHOUT USING MAIN FUNCTION

/// <reference types="cypress" />

describe("New Client Using json library", () =>{

    before("Login", () => {
        cy.login("staging", "lucy.healy@iress.com", "");
        cy.wait(16000)


        cy.fixture("../fixtures/Client1_52_Single_Male").as('client');

    })

    it("New Client", () =>{
        cy.get('@client').then((client) => {
        cy.ClientCreate(client.Title, client.Firstname, client.Surname, client.DOB);
    })
            cy.wait(7000);
            cy.get('[style="text-align:right;margin-top:24pt"] > button').dblclick(); 

    }

    )

})

//------------------------------------------
//create client via json file

describe("New Clients", () =>{

    beforeEach("Login", () => {
        cy.login("live", "username1", "password1");
        cy.wait(12000)
    })
/*
    it("Client", () => {
        cy.ClientCreate('Mrs', 'Hellen', 'Cypress', cy.invoke(RandomDate) ,'{selectAll}Female');
    
    })
*/
    it("Client", () => {
        cy.Client('Home', 'Create', 'const_Cl0001');
                
    })

    it("Client", () => {
        cy.Client('Client Search', 'Create', 'const_Cl0003');
                
    })


})
//---------------------------------------------------
//chec menu accessibility
describe("Checking menu accessibility", () => {

    beforeEach("Login", () => {
        cy.login("live", "usernameE", "passwordE");
        cy.wait(12000)
    })

    it("Withdraw Button Access", () => {
        cy.get('#DecumulationIconMenu').children().should('not.contain','Upgrade')
        cy.get('#NewDecumulation_Ellipsis_overview').should('be.visible')
            

    })



})

//---------------------------------------------------

//XHR and cookie assert
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

 //----------------------------------------------
 //API
 
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

    //---------------------------------
    //INTERCEPT
    

describe('Intercept', () =>{

    it('Intercept usage', () => {
       cy.request('GET','UserProfile.js*').as('login');
 
       cy.login('staging','username1', 'password1' );
       cy.wait(16000)
       
       //cy.wait('@login').its('status').to.eq(200) //NOT WORKING< NOT SURE WHY
       cy.get('@login').then((xhr) =>{ 
          expect(xhr.status).to.eq(200)
          // cy.get('@login').then((req) => {
          //    expect(req.body).to.include("Username")
 
           })   
 
 
          // cy.get('@login').should($login => {//DOESNT WORK
          // expect($login.get(0)).to.have.property('status', '200');
          // });
       })
    let message = 'ERROR 404'
    it('interact', () => {
       cy.intercept({
          method: 'PUT',
          url: '/View/Panels/TipOfTheDay.html*',
        }, {
          statusCode: 200,
          body: { data: message },
          //headers: { 'data': 'error' },
          delayMs: 500,
        }).as('putComment')
        
        // we have code that puts a comment when
        // the button is clicked in scripts.js
        cy.get('#omprofiler').click()
        
        //cy.wait('@putComment')
       
 
 
    })
    
 
 })
 /////////////////////////////
describe('intercept', () => {
    it('test using cypress.io example', () => {
 
 
 
 cy.visit('https://example.cypress.io/commands/network-requests');
 
 let message = 'whoa, this comment does not exist'
 
 // Listen to GET to comments/1
 cy.intercept('GET', '**/comments/*').as('getComment')
 
 // we have code that gets a comment when
 // the button is clicked in scripts.js
 cy.get('.network-btn').click()
 
 // https://on.cypress.io/wait
 cy.wait('@getComment').its('response.statusCode').should('be.oneOf', [200, 304])
 
 // Listen to POST to comments
 cy.intercept('POST', '**/comments').as('postComment')
 
 // we have code that posts a comment when
 // the button is clicked in scripts.js
 cy.get('.network-post').click()
 cy.wait('@postComment').should(({ request, response }) => {
   expect(request.body).to.include('name', 'id labore ex et quam laborum')
   expect(request.body).to.include('email', 'Eliseo@gardner.biz')
   expect(request.headers).to.have.property('content-type')
   expect(response && response.body).to.have.property('name', 'Using POST in cy.intercept()')
 })
 
 // Stub a response to PUT comments/ ****
 cy.intercept({
   method: 'PUT',
   url: '**/comments/*',
 }, {
   statusCode: 404,
   body: { error: message },
   headers: { 'access-control-allow-origin': '*' },
   delayMs: 500,
 }).as('putComment')
 
 // we have code that puts a comment when
 // the button is clicked in scripts.js
 cy.get('.network-put').click()
 
 cy.wait('@putComment')
 
 // our 404 statusCode logic in scripts.js executed
 cy.get('.network-put-comment').should('contain', message)
 
 })
 
 })
 
 
 