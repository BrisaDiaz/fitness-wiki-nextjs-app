export default function getCaloriesPerPhysicalGoald(neededCalories) {
  const posibleValues = [
    {
      title: 'fat loss',
      defaultValue: Math.floor(neededCalories - neededCalories * 0.15),
      intencities: [
        {
          name: 'suggested',
          porsentage: 15,
          value: Math.floor(neededCalories - neededCalories * 0.15)
        },
        {
          name: 'aggressive ',
          porsentage: 20,
          value: Math.floor(neededCalories - neededCalories * 0.2)
        },
        {
          name: 'reckless  ',
          porsentage: 25,
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
      intencities: [
        {
          name: 'cautious',
          porsentage: 5,
          value: Math.floor(neededCalories + neededCalories * 0.05)
        },
        {
          name: 'text book',
          porsentage: 10,
          value: Math.floor(neededCalories + neededCalories * 0.1)
        },
        {
          name: 'aggressive',
          porsentage: 15,
          value: Math.floor(neededCalories + neededCalories * 0.15)
        }
      ]
    }
  ]
  return posibleValues
}
