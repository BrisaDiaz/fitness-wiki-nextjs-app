import { Meal } from './factories'

function with3meals2snacksFrequency(calories, radios) {
  const mealInfo = new Meal((calories * 0.75) / 3, radios)
  const snacklInfo = new Meal((calories * 0.25) / 2, radios)
  const results = {
    frequency: '3 meals and 2 snacks',
    meals: [
      {
        name: 'meal 1',
        info: mealInfo
      },
      {
        name: 'snack 1',
        info: snacklInfo
      },
      {
        name: 'meal 2',
        info: mealInfo
      },
      {
        name: 'snack 2',
        info: snacklInfo
      },
      {
        name: 'meal 3',
        info: mealInfo
      }
    ]
  }
  return results
}
function with3meals3snacksFrequency(calories, radios) {
  const meal1and2Info = new Meal((calories * 0.5) / 2, radios)
  const meal3Info = new Meal(calories * 0.2, radios)
  const snackInfo = new Meal((calories * 0.3) / 3, radios)

  const results = {
    frequency: '3 meals and 3 snacks',
    meals: [
      {
        name: 'meal 1',
        info: meal1and2Info
      },
      {
        name: 'snack 1',
        info: snackInfo
      },
      {
        name: 'meal 2',
        info: meal1and2Info
      },
      {
        name: 'snack 2',
        info: snackInfo
      },
      {
        name: 'meal 3',
        info: meal3Info
      },

      {
        name: 'snack 3',
        info: snackInfo
      }
    ]
  }
  return results
}
function withEqualMeals(mealsNumber, calories, radios) {
  const mealInfo = new Meal(calories / mealsNumber, radios)

  let meals = []

  for (let i = 1; i < mealsNumber + 1; i++) {
    meals.push({
      name: `meal ${i}`,
      info: mealInfo
    })
  }
  const results = {
    frequency: `${mealsNumber} equally split meals`,
    meals
  }
  return results
}

function with5taperedMealsFrequency(calories, radios) {
  const meal1and2Info = new Meal((calories * 0.5) / 2, radios)
  const meal3Info = new Meal(calories * 0.2, radios)
  const meal4and5Info = new Meal((calories * 0.3) / 2, radios)
  const results = {
    frequency: '5 meals tapering off calories',
    meals: [
      {
        name: 'meal 1',
        info: meal1and2Info
      },
      {
        name: 'meal 2',
        info: meal1and2Info
      },
      {
        name: 'meal 3',
        info: meal3Info
      },
      {
        name: 'meal 4',
        info: meal4and5Info
      },
      {
        name: 'meal 5',
        info: meal4and5Info
      }
    ]
  }
  return results
}
function with6taperedMealsFrequency(calories, radios) {
  const meal1Info = new Meal(calories * 0.125, radios)
  const rest = calories - calories * 0.125
  const meal6Info = new Meal(rest * 0.225, radios)
  const rest2 = calories - rest * 0.225
  const meal3and4and5Info = new Meal(rest2 / 3, radios)

  const results = {
    frequency: '6 meals tapering off calories',
    meals: [
      {
        name: 'meal 1',
        info: meal1Info
      },
      {
        name: 'meal 2',
        info: meal3and4and5Info
      },
      {
        name: 'meal 3',
        info: meal3and4and5Info
      },
      {
        name: 'meal 4',
        info: meal3and4and5Info
      },
      {
        name: 'meal 5',
        info: meal3and4and5Info
      },
      {
        name: 'meal 6',
        info: meal6Info
      }
    ]
  }
  return results
}

export default function getCaloriesPerMeal(calories, radios, frequency) {
  let results

  if (frequency === '3meals2snacks') {
    results = with3meals2snacksFrequency(calories, radios)
  }
  if (frequency === '3meals3snacks') {
    results = with3meals3snacksFrequency(calories, radios)
  }
  if (frequency === '5meals') {
    results = withEqualMeals(5, calories, radios)
  }
  if (frequency === '6meals') {
    results = withEqualMeals(6, calories, radios)
  }
  if (frequency === '5taperedMeals') {
    results = with5taperedMealsFrequency(calories, radios)
  }
  if (frequency === '6taperedMeals') {
    results = with6taperedMealsFrequency(calories, radios)
  }

  results.dailyCalories = calories
  results.totalFiber = Math.floor((calories / 1000) * 14)

  return results
}
