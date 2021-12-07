/* eslint-disable jest/expect-expect */
/// <reference types="cypress" />

describe('layout with session', () => {
  before(() => {
    cy.signin()
  })
  beforeEach(() => {
    cy.visit('/', { timeout: 10000 })
    cy.request('/api/auth/session')
  })
  after(() => {
    cy.clearCookies()
  })
  it('should display the authenticated layout', () => {
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
  before(() => {
    cy.signin()
  })
  after(() => {
    cy.clearCookies()
  })
  it('restrict signin page', () => {
    cy.visit('/auth/signin')

    cy.url().should('contain', '/')
  })
  it('restrict signup page', () => {
    cy.visit('/auth/signup')

    cy.url().should('contain', '/')
  })
})

describe('access app pages', () => {
  before(() => {
    cy.setAuthCookies()
    cy.request('/api/auth/session')
  })
  it('display collection page', () => {
    cy.visit('/collections')
    cy.url().should('contain', '/collections')
  })
  it('display search recipe page', () => {
    cy.visit('/search')
    cy.url().should('contain', '/search')
  })
  it('display meals size calculator page', () => {
    cy.visit('/meals-size-calculator')
    cy.url().should('contain', '/meals-size-calculator')
  })
  it('display calories calculator page', () => {
    cy.visit('/calories-calculator')
    cy.url().should('contain', '/calories-calculator')
  })
  it('display  macros calculator page', () => {
    cy.visit('/macros-calculator')
    cy.url().should('contain', '/macros-calculator')
  })
})
