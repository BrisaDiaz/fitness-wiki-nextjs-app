/// <reference types="cypress" />

// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars

// in plugins/index.js
module.exports = (on) => {
  on('task', {
    async deleteTestingUser(email) {
      const fetch = require('node-fetch')
      const result = await fetch(
        `http://localhost:3000/api/tests/user/${email}`,
        {
          method: 'DELETE'
        }
      )
      return result
    },
    async deleteTestingUserCollections(email) {
      const fetch = require('node-fetch')
      const result = await fetch(
        `http://localhost:3000/api/tests/collections/${email}`,
        {
          method: 'DELETE'
        }
      )

      return result
    },
    async createTestingCollections(email) {
      const recipes = [
        {
          id: 715424,
          image: 'https://spoonacular.com/recipeImages/715424-312x231.jpg',
          title: 'The Best Chili',
          servings: '8 491 g',
          diets: 'gluten free - dairy free',
          readyInMinutes: 130,
          calories: '322.83 kcal'
        },
        {
          id: 776505,
          image: 'https://spoonacular.com/recipeImages/776505-312x231.jpg',
          title: 'Sausage & Pepperoni Stromboli',
          servings: '6 289 g',
          diets: 'unspecified',
          readyInMinutes: 28,
          calories: '689.39 kcal'
        },
        {
          id: 715449,
          image: 'https://spoonacular.com/recipeImages/715449-312x231.jpg',
          title: 'How to Make OREO Turkeys for Thanksgiving',
          servings: '48 25 g',
          diets: 'unspecified',
          readyInMinutes: 40,
          calories: '121.58 kcal'
        }
      ]
      const fetch = require('node-fetch')
      const result = await fetch(
        `http://localhost:3000/api/tests/collections/${email}`,
        {
          method: 'POST',
          body: JSON.stringify({ recipes }),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      return result
    }
  })
}
