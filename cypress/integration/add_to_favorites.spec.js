/* eslint-disable jest/expect-expect */
/// <reference types="cypress" />

describe('layout with session', () => {
  beforeEach(() => {
    cy.signin()
    cy.task('deleteTestingUserCollections', 'fixedUser@email.com', {
      timeout: 100010000
    })
  })

  it('stores recipe in a new collection', () => {
    cy.visit('/search')
    cy.intercept('/api/recipe*', { fixure: 'recipes.json' }).as('getRecipes')
    cy.url().should('contain', '/search', { timeout: 60000 })
    cy.get('[data-testid="recipeCard"]:first', { timeout: 3000, force: true })
      .as('recipeCard')
      .trigger('mouseover', { force: true })
    cy.get('@recipeCard')
      .get('[data-testid="storeRecipeBtn"]')
      .click({ force: true })
    cy.get('[data-testid="storeRecipeModal"]')
      .as('storeModal')
      .find('[data-testid="addANewCollectionBtn"]', { timeout: 60000 })
      .click()
    cy.get('[name="newCollection"]').type('my collection').blur()
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
    cy.get('[data-testid="newCollectionModal"]')
      .find('[name="newCollection"]', { timeout: 3000 })
      .type('anotheir collection')
      .blur()
    cy.get('[type="submit"]').click()

    cy.get('[data-testid="collectionCard"]', { timeout: 60000 })
      .find('h3')
      .should('have.text', 'anotheir collection')

    cy.visit('/search')
    cy.intercept('/api/recipe*', { fixure: 'recipes.json' }).as('getRecipes')
    cy.url().should('contain', '/search', { timeout: 30000 })
    cy.get('[data-testid="recipeCard"]:first', { timeout: 3000 })
      .as('anotheirRecipeCard')
      .trigger('mouseover')
    cy.get('@anotheirRecipeCard').find('[data-testid="storeRecipeBtn"]').click()
    cy.get('[data-testid="storeRecipeModal"]')
      .as('storeModal')
      .find('[data-testid="store-in-anotheir-collection"]')
      .click()

    cy.get('@anotheirRecipeCard', { timeout: 5000 }).trigger('mouseover')
    cy.get('@anotheirRecipeCard')
      .find('[data-testid="anotheir-collection-link"]')
      .click()

    cy.get('h1').should('have.text', 'anotheir collection', { timeout: 20000 })
    cy.get('@anotheirRecipeCard').should('be.visible')
  })
})
