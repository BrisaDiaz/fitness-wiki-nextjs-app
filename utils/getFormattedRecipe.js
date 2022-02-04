export default function getFormattedRecipe(recipe) {
  return {
    id: recipe.id,
    image: recipe.image,
    title: recipe.title,
    servings: `${recipe?.servings} (${recipe?.nutrition?.weightPerServing?.amount} ${recipe?.nutrition?.weightPerServing?.unit})`,
    diets: recipe?.diets?.join(' - ') || 'unspecified',
    readyInMinutes: recipe?.readyInMinutes,
    calories: `${recipe?.nutrition?.nutrients[0]?.amount} ${recipe?.nutrition?.nutrients[0]?.unit}`,
    stored: recipe?.stored,
    collection: recipe?.collection,
    updatedAt: recipe.updatedAt
  }
}
