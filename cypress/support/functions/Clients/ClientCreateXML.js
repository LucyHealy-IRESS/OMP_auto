
Cypress.Commands.add('getFile', (input) =>{

   cy.readFile("cypress/fixtures/Clients/Client001_xyz.xml").then(content => {


      var output = content.split(`<${input}>`).pop().split(`</${input}>`)[0]

      //var surnamne = content.split('<Surname>').pop().split('</Surname>')[0]
      // return { firstname: (content.split('<Firstname>').pop().split('</Firstname>')[0]), 
      // surnamne: (content.split('<Surname>').pop().split('</Surname>')[0])}
      return  output
   })
      

})
