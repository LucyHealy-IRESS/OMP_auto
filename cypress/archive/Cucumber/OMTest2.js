import { Given } from "cypress-cucumber-preprocessor/steps"

    Given(`Login with`, database => {

        const table = database.hashes();
            table.forEach(row => {
                cy.login("staging", row.Husername, row.Hpassword, {log:false});

        }); 
    })

    

