Cypress.Commands.add('RandomDate',(start, end) => { 
    return new Date(start + Math.random() * ('10/10/2000' - '01/01/1945')); 
})