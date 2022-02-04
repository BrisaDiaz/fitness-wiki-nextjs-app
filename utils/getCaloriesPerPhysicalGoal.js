export default function getCaloriesPerPhysicalGoal(neededCalories) {
  const possibleValues = [
    {
      title: 'fat loss',
      defaultValue: Math.floor(neededCalories - neededCalories * 0.15),
      intensities: [
        {
          name: 'suggested',
          percentage: 15,
          value: Math.floor(neededCalories - neededCalories * 0.15)
        },
        {
          name: 'aggressive ',
          percentage: 20,
          value: Math.floor(neededCalories - neededCalories * 0.2)
        },
        {
          name: 'reckless  ',
          percentage: 25,
          value: Math.floor(neededCalories - neededCalories * 0.25)
        }
      ]
    },
    {
      title: 'maintain',
      defaultValue: neededCalories
    },
    {
      title: 'bulking',
      defaultValue: Math.floor(neededCalories + neededCalories * 0.05),
      intensities: [
        {
          name: 'cautious',
          percentage: 5,
          value: Math.floor(neededCalories + neededCalories * 0.05)
        },
        {
          name: 'text book',
          percentage: 10,
          value: Math.floor(neededCalories + neededCalories * 0.1)
        },
        {
          name: 'aggressive',
          percentage: 15,
          value: Math.floor(neededCalories + neededCalories * 0.15)
        }
      ]
    }
  ]
  return possibleValues
}
