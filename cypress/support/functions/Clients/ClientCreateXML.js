
Cypress.Commands.add('getFile', () =>{

   cy.readFile("cypress/fixtures/Clients/Client001_xyz.xml").then(content => {

      var firstname = content.split('<Firstname>').pop().split('</Firstname>')[0]

      return firstname
   })
      

})
