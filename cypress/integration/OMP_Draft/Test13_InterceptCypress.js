
describe('intercept', () => {
   it('test using cypress.io example', () => {



cy.visit('https://example.cypress.io/commands/network-requests');

let message = 'whoa, this comment does not exist'

// Listen to GET to comments/1
cy.intercept('GET', '**/comments/*').as('getComment')

// we have code that gets a comment when
// the button is clicked in scripts.js
cy.get('.network-btn').click()

// https://on.cypress.io/wait
cy.wait('@getComment').its('response.statusCode').should('be.oneOf', [200, 304])

// Listen to POST to comments
cy.intercept('POST', '**/comments').as('postComment')

// we have code that posts a comment when
// the button is clicked in scripts.js
cy.get('.network-post').click()
cy.wait('@postComment').should(({ request, response }) => {
  expect(request.body).to.include('name', 'id labore ex et quam laborum')
  expect(request.body).to.include('email', 'Eliseo@gardner.biz')
  expect(request.headers).to.have.property('content-type')
  expect(response && response.body).to.have.property('name', 'Using POST in cy.intercept()')
})

// Stub a response to PUT comments/ ****
cy.intercept({
  method: 'PUT',
  url: '**/comments/*',
}, {
  statusCode: 404,
  body: { error: message },
  headers: { 'access-control-allow-origin': '*' },
  delayMs: 500,
}).as('putComment')

// we have code that puts a comment when
// the button is clicked in scripts.js
cy.get('.network-put').click()

cy.wait('@putComment')

// our 404 statusCode logic in scripts.js executed
cy.get('.network-put-comment').should('contain', message)

})

})