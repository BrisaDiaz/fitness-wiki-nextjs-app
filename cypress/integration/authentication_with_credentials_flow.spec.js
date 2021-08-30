/// <reference types="cypress" />
describe('auth flow', () => {
  beforeEach(() => {
    cy.clearCookies()
    cy.task('deleteTestingUser', 'testing@email.com')
  })

  it('singup correctly', () => {
    cy.visit('/auth/signup')
    cy.url().should('contain', '/auth/signup')
    cy.get('[name="name"]', { timeout: 30000 }).type('testing')
    cy.get('[name="lastname"]', { timeout: 30000 }).type('user')
    cy.get('[name="email"]', { timeout: 30000 }).type('testing@email.com')
    cy.get('[name="password"]', { timeout: 30000 }).type('testingPassword')
    cy.get('[type="submit"]').click()
    cy.get('[data-testid="spinner"]').should('be.visible')
    cy.should('not.have', '[data-testid="spinner"]')
    cy.url().should('contain', '/auth/signin')
    cy.get('[name="email"]', { timeout: 30000 }).type('testing@email.com')
    cy.get('[name="password"]', { timeout: 30000 }).type('testingPassword')
    cy.get('[type="submit"]').click()
    cy.should('not.have', '[data-testid="spinner"]')

    cy.url().should('contain', '/')
    cy.get('[data-testid="logoutBtn"]', { timeout: 30000 }).should('be.visible')
  })
})
