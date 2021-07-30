export default function getDataFormated(rawData) {
  const dataTable = {
    title: `Suggested meal sizes for ${rawData.frecuency}`,
    columns: [
      'Name',
      'Total kcals',
      'Total grams',
      'Carbs',
      'Proteins',
      'Fats'
    ],
    data: rawData.meals.map((meal) => [
      [
        meal.name,
        meal.info.Totalkcals,
        meal.info.totalGrams,
        meal.info.carbs.grams,
        meal.info.proteins.grams,
        meal.info.fats.grams
      ]
    ])
  }
  return dataTable
}
