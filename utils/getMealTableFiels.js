export default function getDataFormated(rawData) {
  const dataTable = {
    title: `Suggested meals size for ${rawData.frecuency} a day`,
    columns: [
      'Name',
      'Total kcals',
      'Total grams',
      'Carbs',
      'Proteins',
      'Fats'
    ],
    data: rawData.meals.map((meal) => [
      meal.name,
      meal.info.totalkcals,
      meal.info.totalGrams + ' gr',
      meal.info.carbs.grams + ' gr',
      meal.info.proteins.grams + ' gr',
      meal.info.fats.grams + ' gr'
    ])
  }
  return dataTable
}
