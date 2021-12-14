// ***********************************************

// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('forceClick', { prevSubject: 'element' }, (subject) => {
  cy.wrap(subject).click({ force: true })
})
Cypress.Commands.add('signin', () => {
  cy.clearCookies().then(() => {
    cy.visit('/auth/signin', { timeout: 100000 })

    cy.url().should('contain', '/auth/signin', { timeout: 100000 })
    cy.get('[name="email"]', { timeout: 100000 })
      .type('fixedUser@email.com')
      .blur()

    cy.get('[name="password"]').type('fixeduser').blur()
    cy.get('[type="submit"]').click()
    cy.get('h1').should('have.text', 'Welcome to WikiFit')
  })
})
