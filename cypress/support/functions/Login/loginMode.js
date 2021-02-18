Cypress.Commands.add("loginMode", (mode) => {
    
     if (mode=='API') {
         cy.loginAPI();
     }
 
     else if (mode=='UI') {
         cy.login();
     }
 
     
     else {
         Cypress.log({name :'INVALID'}).end()
     }
   
