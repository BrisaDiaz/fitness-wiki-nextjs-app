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
  dailyCalories: 2500,
  frecuency: '3 meals and 2 snacks',
  meals: [
    {
      info: {
        carbs: {
          caloriesPerGram: 4,
          grams: 46,
          kals: 187,
          name: 'carbs',
          persentage: 30
        },
        fats: {
          caloriesPerGram: 9,
          grams: 13,
          kals: 125,
          name: 'fats',
          persentage: 20
        },
        proteins: {
          caloriesPerGram: 4,
          grams: 78,
          kals: 312,
          name: 'proteins',
          persentage: 50
        },
        totalGrams: 137,
        totalkcals: 625
      },
      name: 'meal 1'
    },
    {
      info: {
        carbs: {
          caloriesPerGram: 4,
          grams: 23,
          kals: 93,
          name: 'carbs',
          persentage: 30
        },
        fats: {
          caloriesPerGram: 9,
          grams: 6,
          kals: 62,
          name: 'fats',
          persentage: 20
        },
        proteins: {
          caloriesPerGram: 4,
          grams: 39,
          kals: 156,
          name: 'proteins',
          persentage: 50
        },
        totalGrams: 68,
        totalkcals: 312
      },
      name: 'snack 1'
    },
    {
      info: {
        carbs: {
          caloriesPerGram: 4,
          grams: 46,
          kals: 187,
          name: 'carbs',
          persentage: 30
        },
        fats: {
          caloriesPerGram: 9,
          grams: 13,
          kals: 125,
          name: 'fats',
          persentage: 20
        },
        proteins: {
          caloriesPerGram: 4,
          grams: 78,
          kals: 312,
          name: 'proteins',
          persentage: 50
        },
        totalGrams: 137,
        totalkcals: 625
      },
      name: 'meal 2'
    },
    {
      info: {
        carbs: {
          caloriesPerGram: 4,
          grams: 23,
          kals: 93,
          name: 'carbs',
          persentage: 30
        },
        fats: {
          caloriesPerGram: 9,
          grams: 6,
          kals: 62,
          name: 'fats',
          persentage: 20
        },
        proteins: {
          caloriesPerGram: 4,
          grams: 39,
          kals: 156,
          name: 'proteins',
          persentage: 50
        },
        totalGrams: 68,
        totalkcals: 312
      },
      name: 'snack 2'
    },
    {
      info: {
        carbs: {
          caloriesPerGram: 4,
          grams: 46,
          kals: 187,
          name: 'carbs',
          persentage: 30
        },
        fats: {
          caloriesPerGram: 9,
          grams: 13,
          kals: 125,
          name: 'fats',
          persentage: 20
        },
        proteins: {
          caloriesPerGram: 4,
          grams: 78,
          kals: 312,
          name: 'proteins',
          persentage: 50
        },
        totalGrams: 137,
        totalkcals: 625
      },
      name: 'meal 3'
    }
  ],
  totalFiber: 35
}
const with3meals3snacksExpectResults = {
  dailyCalories: 2500,
  frecuency: '3 meals and 3 snacks',
  meals: [
    {
      info: {
        carbs: {
          caloriesPerGram: 4,
          grams: 46,
          kals: 187,
          name: 'carbs',
          persentage: 30
        },
        fats: {
          caloriesPerGram: 9,
          grams: 13,
          kals: 125,
          name: 'fats',
          persentage: 20
        },
        proteins: {
          caloriesPerGram: 4,
          grams: 78,
          kals: 312,
          name: 'proteins',
          persentage: 50
        },
        totalGrams: 137,
        totalkcals: 625
      },
      name: 'meal 1'
    },
    {
      info: {
        carbs: {
          caloriesPerGram: 4,
          grams: 18,
          kals: 75,
          name: 'carbs',
          persentage: 30
        },
        fats: {
          caloriesPerGram: 9,
          grams: 5,
          kals: 50,
          name: 'fats',
          persentage: 20
        },
        proteins: {
          caloriesPerGram: 4,
          grams: 31,
          kals: 125,
          name: 'proteins',
          persentage: 50
        },
        totalGrams: 54,
        totalkcals: 250
      },
      name: 'snack 1'
    },
    {
      info: {
        carbs: {
          caloriesPerGram: 4,
          grams: 46,
          kals: 187,
          name: 'carbs',
          persentage: 30
        },
        fats: {
          caloriesPerGram: 9,
          grams: 13,
          kals: 125,
          name: 'fats',
          persentage: 20
        },
        proteins: {
          caloriesPerGram: 4,
          grams: 78,
          kals: 312,
          name: 'proteins',
          persentage: 50
        },
        totalGrams: 137,
        totalkcals: 625
      },
      name: 'meal 2'
    },
    {
      info: {
        carbs: {
          caloriesPerGram: 4,
          grams: 18,
          kals: 75,
          name: 'carbs',
          persentage: 30
        },
        fats: {
          caloriesPerGram: 9,
          grams: 5,
          kals: 50,
          name: 'fats',
          persentage: 20
        },
        proteins: {
          caloriesPerGram: 4,
          grams: 31,
          kals: 125,
          name: 'proteins',
          persentage: 50
        },
        totalGrams: 54,
        totalkcals: 250
      },
      name: 'snack 2'
    },
    {
      info: {
        carbs: {
          caloriesPerGram: 4,
          grams: 37,
          kals: 150,
          name: 'carbs',
          persentage: 30
        },
        fats: {
          caloriesPerGram: 9,
          grams: 11,
          kals: 100,
          name: 'fats',
          persentage: 20
        },
        proteins: {
          caloriesPerGram: 4,
          grams: 62,
          kals: 250,
          name: 'proteins',
          persentage: 50
        },
        totalGrams: 110,
        totalkcals: 500
      },
      name: 'meal 3'
    },
    {
      info: {
        carbs: {
          caloriesPerGram: 4,
          grams: 18,
          kals: 75,
          name: 'carbs',
          persentage: 30
        },
        fats: {
          caloriesPerGram: 9,
          grams: 5,
          kals: 50,
          name: 'fats',
          persentage: 20
        },
        proteins: {
          caloriesPerGram: 4,
          grams: 31,
          kals: 125,
          name: 'proteins',
          persentage: 50
        },
        totalGrams: 54,
        totalkcals: 250
      },
      name: 'snack 3'
    }
  ],
  totalFiber: 35
}
const with5equalMealsExpectResults = {
  dailyCalories: 2500,
  frecuency: '5 equally split meals',
  meals: [
    {
      info: {
        carbs: {
          caloriesPerGram: 4,
          grams: 37,
          kals: 150,
          name: 'carbs',
          persentage: 30
        },
        fats: {
          caloriesPerGram: 9,
          grams: 11,
          kals: 100,
          name: 'fats',
          persentage: 20
        },
        proteins: {
          caloriesPerGram: 4,
          grams: 62,
          kals: 250,
          name: 'proteins',
          persentage: 50
        },
        totalGrams: 110,
        totalkcals: 500
      },
      name: 'meal 1'
    },
    {
      info: {
        carbs: {
          caloriesPerGram: 4,
          grams: 37,
          kals: 150,
          name: 'carbs',
          persentage: 30
        },
        fats: {
          caloriesPerGram: 9,
          grams: 11,
          kals: 100,
          name: 'fats',
          persentage: 20
        },
        proteins: {
          caloriesPerGram: 4,
          grams: 62,
          kals: 250,
          name: 'proteins',
          persentage: 50
        },
        totalGrams: 110,
        totalkcals: 500
      },
      name: 'meal 2'
    },
    {
      info: {
        carbs: {
          caloriesPerGram: 4,
          grams: 37,
          kals: 150,
          name: 'carbs',
          persentage: 30
        },
        fats: {
          caloriesPerGram: 9,
          grams: 11,
          kals: 100,
          name: 'fats',
          persentage: 20
        },
        proteins: {
          caloriesPerGram: 4,
          grams: 62,
          kals: 250,
          name: 'proteins',
          persentage: 50
        },
        totalGrams: 110,
        totalkcals: 500
      },
      name: 'meal 3'
    },
    {
      info: {
        carbs: {
          caloriesPerGram: 4,
          grams: 37,
          kals: 150,
          name: 'carbs',
          persentage: 30
        },
        fats: {
          caloriesPerGram: 9,
          grams: 11,
          kals: 100,
          name: 'fats',
          persentage: 20
        },
        proteins: {
          caloriesPerGram: 4,
          grams: 62,
          kals: 250,
          name: 'proteins',
          persentage: 50
        },
        totalGrams: 110,
        totalkcals: 500
      },
      name: 'meal 4'
    },
    {
      info: {
        carbs: {
          caloriesPerGram: 4,
          grams: 37,
          kals: 150,
          name: 'carbs',
          persentage: 30
        },
        fats: {
          caloriesPerGram: 9,
          grams: 11,
          kals: 100,
          name: 'fats',
          persentage: 20
        },
        proteins: {
          caloriesPerGram: 4,
          grams: 62,
          kals: 250,
          name: 'proteins',
          persentage: 50
        },
        totalGrams: 110,
        totalkcals: 500
      },
      name: 'meal 5'
    }
  ],
  totalFiber: 35
}
const with6equalMealsExpectResults = {
  dailyCalories: 2500,
  frecuency: '6 equally split meals',
  meals: [
    {
      info: {
        carbs: {
          caloriesPerGram: 4,
          grams: 31,
          kals: 125,
          name: 'carbs',
          persentage: 30
        },
        fats: {
          caloriesPerGram: 9,
          grams: 9,
          kals: 83,
          name: 'fats',
          persentage: 20
        },
        proteins: {
          caloriesPerGram: 4,
          grams: 52,
          kals: 208,
          name: 'proteins',
          persentage: 50
        },
        totalGrams: 92,
        totalkcals: 416
      },
      name: 'meal 1'
    },
    {
      info: {
        carbs: {
          caloriesPerGram: 4,
          grams: 31,
          kals: 125,
          name: 'carbs',
          persentage: 30
        },
        fats: {
          caloriesPerGram: 9,
          grams: 9,
          kals: 83,
          name: 'fats',
          persentage: 20
        },
        proteins: {
          caloriesPerGram: 4,
          grams: 52,
          kals: 208,
          name: 'proteins',
          persentage: 50
        },
        totalGrams: 92,
        totalkcals: 416
      },
      name: 'meal 2'
    },
    {
      info: {
        carbs: {
          caloriesPerGram: 4,
          grams: 31,
          kals: 125,
          name: 'carbs',
          persentage: 30
        },
        fats: {
          caloriesPerGram: 9,
          grams: 9,
          kals: 83,
          name: 'fats',
          persentage: 20
        },
        proteins: {
          caloriesPerGram: 4,
          grams: 52,
          kals: 208,
          name: 'proteins',
          persentage: 50
        },
        totalGrams: 92,
        totalkcals: 416
      },
      name: 'meal 3'
    },
    {
      info: {
        carbs: {
          caloriesPerGram: 4,
          grams: 31,
          kals: 125,
          name: 'carbs',
          persentage: 30
        },
        fats: {
          caloriesPerGram: 9,
          grams: 9,
          kals: 83,
          name: 'fats',
          persentage: 20
        },
        proteins: {
          caloriesPerGram: 4,
          grams: 52,
          kals: 208,
          name: 'proteins',
          persentage: 50
        },
        totalGrams: 92,
        totalkcals: 416
      },
      name: 'meal 4'
    },
    {
      info: {
        carbs: {
          caloriesPerGram: 4,
          grams: 31,
          kals: 125,
          name: 'carbs',
          persentage: 30
        },
        fats: {
          caloriesPerGram: 9,
          grams: 9,
          kals: 83,
          name: 'fats',
          persentage: 20
        },
        proteins: {
          caloriesPerGram: 4,
          grams: 52,
          kals: 208,
          name: 'proteins',
          persentage: 50
        },
        totalGrams: 92,
        totalkcals: 416
      },
      name: 'meal 5'
    },
    {
      info: {
        carbs: {
          caloriesPerGram: 4,
          grams: 31,
          kals: 125,
          name: 'carbs',
          persentage: 30
        },
        fats: {
          caloriesPerGram: 9,
          grams: 9,
          kals: 83,
          name: 'fats',
          persentage: 20
        },
        proteins: {
          caloriesPerGram: 4,
          grams: 52,
          kals: 208,
          name: 'proteins',
          persentage: 50
        },
        totalGrams: 92,
        totalkcals: 416
      },
      name: 'meal 6'
    }
  ],
  totalFiber: 35
}
const with5taperedMealsExpectResults = {
  dailyCalories: 2500,
  frecuency: '5 meals tapering off calories',
  meals: [
    {
      info: {
        carbs: {
          caloriesPerGram: 4,
          grams: 46,
          kals: 187,
          name: 'carbs',
          persentage: 30
        },
        fats: {
          caloriesPerGram: 9,
          grams: 13,
          kals: 125,
          name: 'fats',
          persentage: 20
        },
        proteins: {
          caloriesPerGram: 4,
          grams: 78,
          kals: 312,
          name: 'proteins',
          persentage: 50
        },
        totalGrams: 137,
        totalkcals: 625
      },
      name: 'meal 1'
    },
    {
      info: {
        carbs: {
          caloriesPerGram: 4,
          grams: 46,
          kals: 187,
          name: 'carbs',
          persentage: 30
        },
        fats: {
          caloriesPerGram: 9,
          grams: 13,
          kals: 125,
          name: 'fats',
          persentage: 20
        },
        proteins: {
          caloriesPerGram: 4,
          grams: 78,
          kals: 312,
          name: 'proteins',
          persentage: 50
        },
        totalGrams: 137,
        totalkcals: 625
      },
      name: 'meal 2'
    },
    {
      info: {
        carbs: {
          caloriesPerGram: 4,
          grams: 37,
          kals: 150,
          name: 'carbs',
          persentage: 30
        },
        fats: {
          caloriesPerGram: 9,
          grams: 11,
          kals: 100,
          name: 'fats',
          persentage: 20
        },
        proteins: {
          caloriesPerGram: 4,
          grams: 62,
          kals: 250,
          name: 'proteins',
          persentage: 50
        },
        totalGrams: 110,
        totalkcals: 500
      },
      name: 'meal 3'
    },
    {
      info: {
        carbs: {
          caloriesPerGram: 4,
          grams: 28,
          kals: 112,
          name: 'carbs',
          persentage: 30
        },
        fats: {
          caloriesPerGram: 9,
          grams: 8,
          kals: 75,
          name: 'fats',
          persentage: 20
        },
        proteins: {
          caloriesPerGram: 4,
          grams: 46,
          kals: 187,
          name: 'proteins',
          persentage: 50
        },
        totalGrams: 82,
        totalkcals: 375
      },
      name: 'meal 4'
    },
    {
      info: {
        carbs: {
          caloriesPerGram: 4,
          grams: 28,
          kals: 112,
          name: 'carbs',
          persentage: 30
        },
        fats: {
          caloriesPerGram: 9,
          grams: 8,
          kals: 75,
          name: 'fats',
          persentage: 20
        },
        proteins: {
          caloriesPerGram: 4,
          grams: 46,
          kals: 187,
          name: 'proteins',
          persentage: 50
        },
        totalGrams: 82,
        totalkcals: 375
      },
      name: 'meal 5'
    }
  ],
  totalFiber: 35
}
const with6taperedMealsExpectResults = {
  dailyCalories: 2500,
  frecuency: '6 meals tapering off calories',
  meals: [
    {
      info: {
        carbs: {
          caloriesPerGram: 4,
          grams: 23,
          kals: 93,
          name: 'carbs',
          persentage: 30
        },
        fats: {
          caloriesPerGram: 9,
          grams: 6,
          kals: 62,
          name: 'fats',
          persentage: 20
        },
        proteins: {
          caloriesPerGram: 4,
          grams: 39,
          kals: 156,
          name: 'proteins',
          persentage: 50
        },
        totalGrams: 68,
        totalkcals: 312
      },
      name: 'meal 1'
    },
    {
      info: {
        carbs: {
          caloriesPerGram: 4,
          grams: 50,
          kals: 200,
          name: 'carbs',
          persentage: 30
        },
        fats: {
          caloriesPerGram: 9,
          grams: 14,
          kals: 133,
          name: 'fats',
          persentage: 20
        },
        proteins: {
          caloriesPerGram: 4,
          grams: 83,
          kals: 334,
          name: 'proteins',
          persentage: 50
        },
        totalGrams: 147,
        totalkcals: 669
      },
      name: 'meal 2'
    },
    {
      info: {
        carbs: {
          caloriesPerGram: 4,
          grams: 50,
          kals: 200,
          name: 'carbs',
          persentage: 30
        },
        fats: {
          caloriesPerGram: 9,
          grams: 14,
          kals: 133,
          name: 'fats',
          persentage: 20
        },
        proteins: {
          caloriesPerGram: 4,
          grams: 83,
          kals: 334,
          name: 'proteins',
          persentage: 50
        },
        totalGrams: 147,
        totalkcals: 669
      },
      name: 'meal 3'
    },
    {
      info: {
        carbs: {
          caloriesPerGram: 4,
          grams: 50,
          kals: 200,
          name: 'carbs',
          persentage: 30
        },
        fats: {
          caloriesPerGram: 9,
          grams: 14,
          kals: 133,
          name: 'fats',
          persentage: 20
        },
        proteins: {
          caloriesPerGram: 4,
          grams: 83,
          kals: 334,
          name: 'proteins',
          persentage: 50
        },
        totalGrams: 147,
        totalkcals: 669
      },
      name: 'meal 4'
    },
    {
      info: {
        carbs: {
          caloriesPerGram: 4,
          grams: 50,
          kals: 200,
          name: 'carbs',
          persentage: 30
        },
        fats: {
          caloriesPerGram: 9,
          grams: 14,
          kals: 133,
          name: 'fats',
          persentage: 20
        },
        proteins: {
          caloriesPerGram: 4,
          grams: 83,
          kals: 334,
          name: 'proteins',
          persentage: 50
        },
        totalGrams: 147,
        totalkcals: 669
      },
      name: 'meal 5'
    },
    {
      info: {
        carbs: {
          caloriesPerGram: 4,
          grams: 36,
          kals: 147,
          name: 'carbs',
          persentage: 30
        },
        fats: {
          caloriesPerGram: 9,
          grams: 10,
          kals: 98,
          name: 'fats',
          persentage: 20
        },
        proteins: {
          caloriesPerGram: 4,
          grams: 61,
          kals: 246,
          name: 'proteins',
          persentage: 50
        },
        totalGrams: 107,
        totalkcals: 492
      },
      name: 'meal 6'
    }
  ],
  totalFiber: 35
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
