export default function getAdvicePerCaloriesAmmount(
  defaultCalories,
  goalKcals
) {
  const maxValue = Math.floor(defaultCalories * 1 + defaultCalories * 0.15)
  const minValue = Math.floor(defaultCalories * 1 - defaultCalories * 0.25)
  const maxValueRecommended = Math.floor(
    defaultCalories * 1 + defaultCalories * 0.1
  )
  const minValueRecommended = Math.floor(
    defaultCalories * 1 - defaultCalories * 0.2
  )

  if (goalKcals <= minValue || goalKcals >= maxValue) return 'not recommended'
  if (goalKcals >= maxValueRecommended || goalKcals <= minValueRecommended)
    return 'moderately recommended'
  return 'recommended'
}
