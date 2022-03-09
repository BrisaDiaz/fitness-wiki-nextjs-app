export default function attachStoredDataToRecipe(storedRecipes, recipes) {
  const actualizeRecipes = recipes.map((recipe) => {
    if (storedRecipes[recipe.id] && storedRecipes[recipe.id]?.collection?.id) {
      recipe.stored = true
      recipe.collection = {
        name: storedRecipes[recipe.id]?.collection?.name,
        id: storedRecipes[recipe.id]?.collection.id
      }
    }
    recipe.recipeId = recipe.id
    return recipe
  })

  return actualizeRecipes
}
