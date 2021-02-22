Cypress.Commands.add('RandomDate',(start, end) => { 
    return new Date(start + Math.random() * ('10/10/2000' - '01/01/1945')); 
})

//when creating dates and we need months and days to have 2 digits e.g. 2 = 02
cy.fixDigit = function(val) {
    return val.toString().length === 1 ? "0" + val : val;
  }

cy.randomID = function(){
    return "00_" + Math.floor(Math.random() * 10000 + 1);
}