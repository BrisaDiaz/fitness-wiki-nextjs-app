/// <reference types="cypress" />

describe('layout', () => {
  beforeEach(() => {
    cy.clearCookies()
    cy.request('/api/auth/session')
    cy.visit('/')
  })
  // eslint-disable-next-line jest/expect-expect
  it('should display the unauthenticated layout', () => {
    cy.get('h1').should('have.text', 'Welcome to WikiFit!!')
    cy.get('[href="/auth/signup"]', { timeout: 10000 }).should('be.visible')
    cy.get('[href="/auth/signin"]', { timeout: 10000 }).should('be.visible')
    cy.get('main').should('not.contain', '[data-testid="menuBtn"]')
    cy.get('header').should('not.contain', '[data-testid="sideBar"]')
  })

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
  it('restrict calories calculator page', () => {
    cy.visit('/calories-calculator')
    cy.intercept('GET', '/api/auth/*', {}).as('getSession')
    cy.wait('@getSession')
    cy.url().should('contain', '/auth/signin')
  })
  it('restrict macros calculator page', () => {
    cy.visit('/macros-calculator')
    cy.intercept('GET', '/api/auth/*', {}).as('getSession')
    cy.wait('@getSession')
    cy.url().should('contain', '/auth/signin')
  })
  it('restrict recipe search page', () => {
    cy.visit('/search')
    cy.intercept('GET', '/api/auth/*', {}).as('getSession')
    cy.wait('@getSession')
    cy.url().should('contain', '/auth/signin')
  })
  it('restrict meals sizes calculator page', () => {
    cy.visit('/meals-size-calculator')
    cy.intercept('GET', '/api/auth/*', {}).as('getSession')
    cy.wait('@getSession')
    cy.url().should('contain', '/auth/signin')
  })
  it('restrict collections page', () => {
    cy.visit('/collections')
    cy.intercept('GET', '/api/auth/*', {}).as('getSession')
    cy.wait('@getSession')
    cy.url().should('contain', '/auth/signin')
  })
  it('restrict collection page', () => {
    cy.visit('/collections/45')
    cy.intercept('GET', '/api/auth/*', {}).as('getSession')
    cy.wait('@getSession')
    cy.url().should('contain', '/auth/signin')
  })
  it('restrict recipe page', () => {
    cy.visit('/recipe/5')
    cy.intercept('GET', '/api/auth/*', {}).as('getSession')
    cy.wait('@getSession')
    cy.url().should('contain', '/auth/signin')
  })
  cy.get('header').should('not.contain', '[href="/auth/signin"]')
  cy.get('header').should('not.contain', '[href="/auth/signup"]')
})
