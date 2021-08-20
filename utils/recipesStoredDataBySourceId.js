export default function toKeyValueFormat(recipesDocument) {
  const formattedData = recipesDocument.reduce((obj, recipe) => {
    obj[recipe.recipeId] = {
      collection: {
        name: recipe.collections[0]?.name,
        id: recipe.collections[0]?.id
      }
    }

    return obj
  }, {})

  return formattedData
}
