/* eslint-disable jest/expect-expect */
/// <reference types="cypress" />

describe('layout', () => {
  beforeEach(() => {
    cy.clearCookies()
    cy.request('/api/auth/session')
    cy.visit('/')
  })
  // eslint-disable-next-line jest/expect-expect
  it('should display the unauthenticated layout', () => {
    cy.get('h1').should('have.text', 'Welcome to WikiFit')
    cy.get('[href="/auth/signup"]', { timeout: 10000 }).should('be.visible')
    cy.get('[href="/auth/signin"]', { timeout: 10000 }).should('be.visible')
    cy.get('main').should('not.contain', '[data-testid="menuBtn"]')
    cy.get('header').should('not.contain', '[data-testid="sideBar"]')
  })

  // eslint-disable-next-line jest/expect-expect
  it('signin and signup links works', () => {
    cy.get('[href="/auth/signup"]', { timeout: 10000 }).click()
    cy.url().should('contain', '/auth/signup')
    cy.get('nav [href="/auth/signin"]', { timeout: 10000 }).click()
    cy.url().should('contain', '/auth/signin')
  })
})
describe('pages restriction', () => {
  beforeEach(() => {
    cy.clearCookies()
    cy.request('/api/auth/session')
  })
  it('restrict page that require authentication', () => {
    cy.visit('/calories-calculator', { timeout: 100000 })
    cy.intercept('GET', '/api/auth/*', {}).as('getSession')
    cy.wait('@getSession')
    cy.url().should('contain', '/auth/signin', { timeout: 30000 })
    cy.visit('/macros-calculator', { timeout: 100000 })
    cy.intercept('GET', '/api/auth/*', {}).as('getSession')
    cy.wait('@getSession')
    cy.url().should('contain', '/auth/signin', { timeout: 30000 })
    cy.visit('/search', { timeout: 100000 })
    cy.intercept('GET', '/api/auth/*', {}).as('getSession')
    cy.wait('@getSession')
    cy.url().should('contain', '/auth/signin', { timeout: 30000 })
    cy.visit('/meals-size-calculator', { timeout: 100000 })
    cy.intercept('GET', '/api/auth/*', {}).as('getSession')
    cy.wait('@getSession')
    cy.url().should('contain', '/auth/signin', { timeout: 30000 })
    cy.visit('/collections', { timeout: 100000 })
    cy.intercept('GET', '/api/auth/*', {}).as('getSession')
    cy.wait('@getSession')
    cy.url().should('contain', '/auth/signin', { timeout: 30000 })
    cy.visit('/collections/45', { timeout: 100000 })
    cy.intercept('GET', '/api/auth/*', {}).as('getSession')
    cy.wait('@getSession')
    cy.url().should('contain', '/auth/signin', { timeout: 30000 })
    cy.visit('/recipe/5', { timeout: 100000 })
    cy.intercept('GET', '/api/auth/*', {}).as('getSession')
    cy.wait('@getSession')
    cy.url().should('contain', '/auth/signin', { timeout: 30000 })
    cy.get('header').should('not.contain', '[href="/auth/signin"]')
    cy.get('header').should('not.contain', '[href="/auth/signup"]')
  })
})
