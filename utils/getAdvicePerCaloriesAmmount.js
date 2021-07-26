export default function getAdvicePerCaloriesAmmount(
  defaultCalories,
  goaldKcals
) {
  const maxValue = Math.floor(defaultCalories * 1 + defaultCalories * 0.15)
  const minValue = Math.floor(defaultCalories * 1 - defaultCalories * 0.25)
  const maxValueRecomended = Math.floor(
    defaultCalories * 1 + defaultCalories * 0.1
  )
  const minValueRecomended = Math.floor(
    defaultCalories * 1 - defaultCalories * 0.2
  )

  if (goaldKcals <= minValue || goaldKcals >= maxValue) return 'not recommended'
  if (goaldKcals >= maxValueRecomended || goaldKcals <= minValueRecomended)
    return 'moderately recommended'
  return 'recommended'
}
