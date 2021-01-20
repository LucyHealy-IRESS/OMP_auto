Cypress.Commands.add('RandomDate',(start, end) => { 
    return new Date(start + Math.random() * (end - start)); 
})