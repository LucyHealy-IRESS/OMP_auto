//Function to define what CRUD and file it is being called

Cypress.Commands.add('Client', (mode, file) =>{

    cy.fixture(file).as('clientfile');

        if (mode=='Create') 
        {
   
            cy.get('@clientfile').then((clientfile) => {
                cy.ClientCreate(clientfile.Title, clientfile.Firstname, clientfile.Surname, clientfile.DOB, clientfile.gender);
                    
            })
            
        }

        else 
        {
           return console.error('FAILED');
        }

})
