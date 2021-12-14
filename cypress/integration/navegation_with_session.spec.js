/* eslint-disable jest/expect-expect */
/// <reference types="cypress" />

describe('layout with session', () => {
  it('should display the authenticated layout', () => {
    cy.signin()
    cy.get('[data-testid="logoutBtn"]', { timeout: 10000 }).should('be.visible')
    cy.get('[data-testid="menuBtn"]', { timeout: 10000 })
      .as('menuBtn')
      .should('be.visible')

    cy.get('header').should('not.contain', '[href="/auth/signin"]')
    cy.get('header').should('not.contain', '[href="/auth/signup"]')
    cy.get('@menuBtn').click()
    cy.get('[ data-testid="sidebar"]', { timeout: 10000 })
      .as('asideMenu')
      .should('be.visible')
    cy.get('@asideMenu').contains('a')
  })
})
describe('pages restriction', () => {
  it('restrict signin and signup page', () => {
    cy.signin()
    cy.visit('/auth/signin')

    cy.url().should('contain', '/')
    cy.visit('/auth/signup')

    cy.url().should('contain', '/')
  })
})

describe('access app pages', () => {
  it('display pages that require authentication', () => {
    cy.signin()
    cy.visit('/collections')
    cy.intercept('GET', '/api/auth/*', {}).as('getSession')
    cy.wait('@getSession')
    cy.url().should('contain', '/collections')
    cy.visit('/search')
    cy.intercept('GET', '/api/auth/*', {}).as('getSession')
    cy.wait('@getSession')
    cy.url().should('contain', '/search')
    cy.visit('/meals-size-calculator')
    cy.intercept('GET', '/api/auth/*', {}).as('getSession')
    cy.wait('@getSession')
    cy.url().should('contain', '/meals-size-calculator')
    cy.visit('/calories-calculator')
    cy.intercept('GET', '/api/auth/*', {}).as('getSession')
    cy.wait('@getSession')
    cy.url().should('contain', '/calories-calculator')
    cy.visit('/macros-calculator')
    cy.intercept('GET', '/api/auth/*', {}).as('getSession')
    cy.wait('@getSession')
    cy.url().should('contain', '/macros-calculator')
  })
})
