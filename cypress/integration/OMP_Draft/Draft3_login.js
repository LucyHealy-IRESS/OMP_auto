
/// <reference types="cypress" />

describe('login', () =>{

   it('live', () =>{

   cy.visit('https://html.omprofiler.co.uk');
   cy.get('#loginPrompt-username').type('test_lucy9');
   cy.get('#loginPrompt-password').type('');
   cy.get('.ui-button-text').click();
   cy.url().should('contain', 'StoryBoardManager/StoryBoardManager_Workspace&d');
   //chai.Assertion.should('contain', 'StoryBoardManager/StoryBoardManager_Workspace&d');

    })

})

