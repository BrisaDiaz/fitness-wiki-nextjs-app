/* eslint-disable jest/expect-expect */
/// <reference types="cypress" />

describe('layout with session', () => {
  before(() => {
    cy.signin()
  })
  beforeEach(() => {
    cy.task('deleteTestingUserCollections', 'fixedUser@email.com', {
      timeout: 100010000
    })
  })
  after(() => {
    cy.clearCookies()
  })
  it('stores recipe in a new collection', () => {
    cy.visit('/search')
    cy.intercept('/api/recipe*', { fixure: 'recipes.json' }).as('getRecipes')
    cy.url().should('contain', '/search', { timeout: 60000 })
    cy.get('[data-testid="recipeCard"]:first', { timeout: 3000, force: true })
      .as('recipeCard')
      .trigger('mouseover', { force: true })
    cy.get('[data-testid="storeRecipeBtn"]').click({ force: true })
    cy.get('[data-testid="addANewCollectionBtn"]', { timeout: 3000 }).click()
    cy.get('[name="newCollection"]').type('my collection')
    cy.get('[name="newCollectionForm"]').find('[type="submit"]').click()
    cy.get('@recipeCard').trigger('mouseover')
    cy.get('@recipeCard').find('[data-testid="my-collection-link"]').click()

    cy.get('h1').should('have.text', 'my collection', { timeout: 60000 })
    cy.get('@recipeCard').should('be.visible')
  })

  it('store a recipe in an already existent collection', () => {
    cy.visit('/collections')
    cy.url().should('contain', '/collections', { timeout: 60000 })
    cy.get('[data-testid="createAnewCollectionBtn"]', { timeout: 3000 }).click()
    cy.get('[name="newCollection"]').type('another collection')
    cy.get('[type="submit"]').click()

    cy.get('[data-testid="collectionCard"]', { timeout: 60000 })
      .find('h3')
      .should('have.text', 'another collection')

    cy.visit('/search')
    cy.intercept('/api/recipe*', { fixure: 'recipes.json' }).as('getRecipes')
    cy.url().should('contain', '/search', { timeout: 30000 })
    cy.get('[data-testid="recipeCard"]:first', { timeout: 3000 })
      .as('anotherRecipeCard')
      .trigger('mouseover')
    cy.get('@anotherRecipeCard').find('[data-testid="storeRecipeBtn"]').click()
    cy.get('[data-testid="storeRecipeModal"]')
      .as('storeModal')
      .find('[data-testid="store-in-another-collection"]')
      .click()

    cy.get('@anotherRecipeCard', { timeout: 5000 }).trigger('mouseover')
    cy.get('@anotherRecipeCard')
      .find('[data-testid="another-collection-link"]')
      .click()

    cy.get('h1').should('have.text', 'another collection', { timeout: 20000 })
    cy.get('@anotherRecipeCard').should('be.visible')
  })
})
