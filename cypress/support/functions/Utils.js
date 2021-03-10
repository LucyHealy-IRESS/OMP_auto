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


//Convert ISO date to a short date (non simple mode)
Cypress.Commands.add('shortDate',(ISODate) => { 
    var date = ISODate.split('T');
    var datesplit = date[0].split('-')

    var newDOB = (datesplit[2] + "/" + datesplit[1] + "/" + datesplit[0]);
    return newDOB
    //cy.get('#DateOfBirthInput').type(newDOB)
})

//Convert ISO date to a short date (simple mode)
Cypress.Commands.add('simpleDate',(ISODate) => { 
    var date = ISODate.split('T');
    var datesplit = date[0].split('-')
    
    var dd = (datesplit[2]);
    var mm = (datesplit[1]);
    var yyyy = (datesplit[0]);
    return dd, mm, yyyy
})