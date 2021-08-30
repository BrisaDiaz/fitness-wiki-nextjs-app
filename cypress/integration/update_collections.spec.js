/// <reference types="cypress" />

describe('collection operations', () => {
  beforeEach(() => {
    cy.clearCookies()
    cy.setAuthCookies()
    cy.task('deleteTestingUserCollections', 'fixedUser@email.com')
    cy.task('createTestingCollections', 'fixedUser@email.com')

    cy.visit('/collections', { timeout: 100000 })
  })

  it('renames and delete collections', () => {
    cy.get('[data-testid="collectionCard"]', { timeoute: 3000 }).should(
      'have.length',
      2
    )
    cy.get('[data-testid="collectionCard"]:first')
      .as('collection')
      .trigger('mouseover')
    cy.get('@collection').find('[data-testid="editBtn"]').click()
    cy.get('[name="newName"]').clear().type('rename collection')
    cy.get('[type="submit"]').click()
    cy.get('@collection', { timeoute: 3000 })
      .find('h3')
      .should('have.text', 'rename collection')
    cy.get('@collection').trigger('mouseover')
    cy.get('@collection').find('[data-testid="deleteBtn"]').click()
    cy.get('[data-testid="collectionCard"]', { timeoute: 3000 }).should(
      'have.length',
      1
    )
  })
  it('delete and moves recipes to another collection', () => {
    cy.get('[alt="populated collection"]', {
      timeoute: 3000
    }).click()
    cy.wait(20000)
    cy.get('h1').should('have.text', 'populated collection')
    cy.get('section').find('h5', '3 recipes')

    cy.get('section')
      .find('[data-testid="recipeCard"]')
      .should('have.length', 3)
    cy.get('section')
      .find('[data-testid="recipeCard"]:first')
      .trigger('mouseover')
    cy.get('[data-testid="editBtn"]').click()
    cy.get('[data-testid="storeRecipeModal"]')
      .find('[data-testid="store-in-empty-collection"]')
      .click()
    cy.get('section')
      .find('[data-testid="recipeCard"]')
      .should('have.length', 2)
    cy.get('section').find('h5', '2 recipes')
    cy.get('section')
      .find('[data-testid="recipeCard"]:first')
      .trigger('mouseover')
    cy.get('[data-testid="deleteBtn"]').click()
    cy.get('section').find('h5', '1 recipes')
    cy.get('section')
      .find('[data-testid="recipeCard"]')
      .should('have.length', 1)
    cy.visit('/collections')

    cy.get('[alt="empty collection"]').click()
    cy.wait(20000)
    cy.get('h1').should('have.text', 'empty collection')
    cy.get('section').find('h5', '1 recipes')
    cy.get('section')
      .find('[data-testid="recipeCard"]')
      .should('have.length', 1)
  })
})
