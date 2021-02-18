

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

