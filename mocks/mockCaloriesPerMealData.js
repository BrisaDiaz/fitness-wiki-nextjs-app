const totalKcals = 2500

const macrosRadios = {
  proteins: {
    value: 50
  },
  carbs: {
    value: 30
  },
  fats: {
    value: 20
  }
}

const with3meals2snacksExpectResults = {
  frecuency: '3 meals and 2 snacks',
  dailyCalories: 2500,
  totalFiber: 35,
  meals: [
    {
      info: {
        Totalkcals: 625,
        carbs: { grams: 46, kals: 187 },
        fats: { grams: 13, kals: 125 },
        proteins: { grams: 78, kals: 312 },
        totalGrams: 137
      },
      name: 'meal 1'
    },
    {
      info: {
        Totalkcals: 312,
        carbs: { grams: 23, kals: 93 },
        fats: { grams: 6, kals: 62 },
        proteins: { grams: 39, kals: 156 },
        totalGrams: 68
      },
      name: 'snack 1'
    },
    {
      info: {
        Totalkcals: 625,
        carbs: { grams: 46, kals: 187 },
        fats: { grams: 13, kals: 125 },
        proteins: { grams: 78, kals: 312 },
        totalGrams: 137
      },
      name: 'meal 2'
    },
    {
      info: {
        Totalkcals: 312,
        carbs: { grams: 23, kals: 93 },
        fats: { grams: 6, kals: 62 },
        proteins: { grams: 39, kals: 156 },
        totalGrams: 68
      },
      name: 'snack 2'
    },
    {
      info: {
        Totalkcals: 625,
        carbs: { grams: 46, kals: 187 },
        fats: { grams: 13, kals: 125 },
        proteins: { grams: 78, kals: 312 },
        totalGrams: 137
      },
      name: 'meal 3'
    }
  ]
}
const with3meals3snacksExpectResults = {
  frecuency: '3 meals and 3 snacks',
  dailyCalories: 2500,
  totalFiber: 35,
  meals: [
    {
      info: {
        Totalkcals: 625,
        carbs: { grams: 46, kals: 187 },
        fats: { grams: 13, kals: 125 },
        proteins: { grams: 78, kals: 312 },
        totalGrams: 137
      },
      name: 'meal 1'
    },
    {
      info: {
        Totalkcals: 250,
        carbs: { grams: 18, kals: 75 },
        fats: { grams: 5, kals: 50 },
        proteins: { grams: 31, kals: 125 },
        totalGrams: 54
      },
      name: 'snack 1'
    },
    {
      info: {
        Totalkcals: 625,
        carbs: { grams: 46, kals: 187 },
        fats: { grams: 13, kals: 125 },
        proteins: { grams: 78, kals: 312 },
        totalGrams: 137
      },
      name: 'meal 2'
    },
    {
      info: {
        Totalkcals: 250,
        carbs: { grams: 18, kals: 75 },
        fats: { grams: 5, kals: 50 },
        proteins: { grams: 31, kals: 125 },
        totalGrams: 54
      },
      name: 'snack 2'
    },
    {
      info: {
        Totalkcals: 500,
        carbs: { grams: 37, kals: 150 },
        fats: { grams: 11, kals: 100 },
        proteins: { grams: 62, kals: 250 },
        totalGrams: 110
      },
      name: 'meal 3'
    },
    {
      info: {
        Totalkcals: 250,
        carbs: { grams: 18, kals: 75 },
        fats: { grams: 5, kals: 50 },
        proteins: { grams: 31, kals: 125 },
        totalGrams: 54
      },
      name: 'snack 3'
    }
  ]
}
const with5equalMealsExpectResults = {
  frecuency: '5 equally split meals',
  dailyCalories: 2500,
  totalFiber: 35,
  meals: [
    {
      info: {
        Totalkcals: 500,
        carbs: { grams: 37, kals: 150 },
        fats: { grams: 11, kals: 100 },
        proteins: { grams: 62, kals: 250 },
        totalGrams: 110
      },
      name: 'meal 1'
    },
    {
      info: {
        Totalkcals: 500,
        carbs: { grams: 37, kals: 150 },
        fats: { grams: 11, kals: 100 },
        proteins: { grams: 62, kals: 250 },
        totalGrams: 110
      },
      name: 'meal 2'
    },
    {
      info: {
        Totalkcals: 500,
        carbs: { grams: 37, kals: 150 },
        fats: { grams: 11, kals: 100 },
        proteins: { grams: 62, kals: 250 },
        totalGrams: 110
      },
      name: 'meal 3'
    },
    {
      info: {
        Totalkcals: 500,
        carbs: { grams: 37, kals: 150 },
        fats: { grams: 11, kals: 100 },
        proteins: { grams: 62, kals: 250 },
        totalGrams: 110
      },
      name: 'meal 4'
    },
    {
      info: {
        Totalkcals: 500,
        carbs: { grams: 37, kals: 150 },
        fats: { grams: 11, kals: 100 },
        proteins: { grams: 62, kals: 250 },
        totalGrams: 110
      },
      name: 'meal 5'
    }
  ]
}
const with6equalMealsExpectResults = {
  frecuency: '6 equally split meals',
  dailyCalories: 2500,
  totalFiber: 35,
  meals: [
    {
      info: {
        Totalkcals: 416,
        carbs: { grams: 31, kals: 125 },
        fats: { grams: 9, kals: 83 },
        proteins: { grams: 52, kals: 208 },
        totalGrams: 92
      },
      name: 'meal 1'
    },
    {
      info: {
        Totalkcals: 416,
        carbs: { grams: 31, kals: 125 },
        fats: { grams: 9, kals: 83 },
        proteins: { grams: 52, kals: 208 },
        totalGrams: 92
      },
      name: 'meal 2'
    },
    {
      info: {
        Totalkcals: 416,
        carbs: { grams: 31, kals: 125 },
        fats: { grams: 9, kals: 83 },
        proteins: { grams: 52, kals: 208 },
        totalGrams: 92
      },
      name: 'meal 3'
    },
    {
      info: {
        Totalkcals: 416,
        carbs: { grams: 31, kals: 125 },
        fats: { grams: 9, kals: 83 },
        proteins: { grams: 52, kals: 208 },
        totalGrams: 92
      },
      name: 'meal 4'
    },
    {
      info: {
        Totalkcals: 416,
        carbs: { grams: 31, kals: 125 },
        fats: { grams: 9, kals: 83 },
        proteins: { grams: 52, kals: 208 },
        totalGrams: 92
      },
      name: 'meal 5'
    },
    {
      info: {
        Totalkcals: 416,
        carbs: { grams: 31, kals: 125 },
        fats: { grams: 9, kals: 83 },
        proteins: { grams: 52, kals: 208 },
        totalGrams: 92
      },
      name: 'meal 6'
    }
  ]
}
const with5taperedMealsExpectResults = {
  frecuency: '5 meals tapering off calories',
  dailyCalories: 2500,
  totalFiber: 35,
  meals: [
    {
      info: {
        Totalkcals: 625,
        carbs: { grams: 46, kals: 187 },
        fats: { grams: 13, kals: 125 },
        proteins: { grams: 78, kals: 312 },
        totalGrams: 137
      },
      name: 'meal 1'
    },
    {
      info: {
        Totalkcals: 625,
        carbs: { grams: 46, kals: 187 },
        fats: { grams: 13, kals: 125 },
        proteins: { grams: 78, kals: 312 },
        totalGrams: 137
      },
      name: 'meal 2'
    },
    {
      info: {
        Totalkcals: 500,
        carbs: { grams: 37, kals: 150 },
        fats: { grams: 11, kals: 100 },
        proteins: { grams: 62, kals: 250 },
        totalGrams: 110
      },
      name: 'meal 3'
    },
    {
      info: {
        Totalkcals: 375,
        carbs: { grams: 28, kals: 112 },
        fats: { grams: 8, kals: 75 },
        proteins: { grams: 46, kals: 187 },
        totalGrams: 82
      },
      name: 'meal 4'
    },
    {
      info: {
        Totalkcals: 375,
        carbs: { grams: 28, kals: 112 },
        fats: { grams: 8, kals: 75 },
        proteins: { grams: 46, kals: 187 },
        totalGrams: 82
      },
      name: 'meal 5'
    }
  ]
}
const with6taperedMealsExpectResults = {
  frecuency: '6 meals tapering off calories',
  dailyCalories: 2500,
  totalFiber: 35,
  meals: [
    {
      info: {
        Totalkcals: 312,
        carbs: { grams: 23, kals: 93 },
        fats: { grams: 6, kals: 62 },
        proteins: { grams: 39, kals: 156 },
        totalGrams: 68
      },
      name: 'meal 1'
    },
    {
      info: {
        Totalkcals: 669,
        carbs: { grams: 50, kals: 200 },
        fats: { grams: 14, kals: 133 },
        proteins: { grams: 83, kals: 334 },
        totalGrams: 147
      },
      name: 'meal 2'
    },
    {
      info: {
        Totalkcals: 669,
        carbs: { grams: 50, kals: 200 },
        fats: { grams: 14, kals: 133 },
        proteins: { grams: 83, kals: 334 },
        totalGrams: 147
      },
      name: 'meal 3'
    },
    {
      info: {
        Totalkcals: 669,
        carbs: { grams: 50, kals: 200 },
        fats: { grams: 14, kals: 133 },
        proteins: { grams: 83, kals: 334 },
        totalGrams: 147
      },
      name: 'meal 4'
    },
    {
      info: {
        Totalkcals: 669,
        carbs: { grams: 50, kals: 200 },
        fats: { grams: 14, kals: 133 },
        proteins: { grams: 83, kals: 334 },
        totalGrams: 147
      },
      name: 'meal 5'
    },
    {
      info: {
        Totalkcals: 492,
        carbs: { grams: 36, kals: 147 },
        fats: { grams: 10, kals: 98 },
        proteins: { grams: 61, kals: 246 },
        totalGrams: 107
      },
      name: 'meal 6'
    }
  ]
}
const data = {
  totalKcals,
  macrosRadios,
  with3meals2snacksExpectResults,
  with3meals3snacksExpectResults,
  with5equalMealsExpectResults,
  with6equalMealsExpectResults,
  with5taperedMealsExpectResults,
  with6taperedMealsExpectResults
}

export default data
