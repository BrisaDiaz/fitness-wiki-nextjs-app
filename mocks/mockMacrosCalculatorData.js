const widthDefaultMaitenanceRadiosResult = {
  macros: [
    {
      caloriesPerGram: 4,
      grams: 150,
      kals: 600,
      name: 'proteins',
      percentage: 30
    },
    {
      caloriesPerGram: 4,
      grams: 250,
      kals: 1000,
      name: 'carbs',
      percentage: 50
    },
    { caloriesPerGram: 9, grams: 44, kals: 400, name: 'fats', percentage: 20 }
  ],
  planName: 'custom plan',
  totalGrams: 444,
  totalKcals: 2000
}
const customMacrosRadiosTest = {
  dataSend: {
    name: 'custom plan',
    macros: {
      carbs: {
        value: 30
      },
      proteins: {
        value: 50
      },
      fats: {
        value: 20
      }
    }
  },
  expectResult: {
    macros: [
      {
        caloriesPerGram: 4,
        grams: 250,
        kals: 1000,
        name: 'proteins',
        percentage: 50
      },
      {
        caloriesPerGram: 4,
        grams: 150,
        kals: 600,
        name: 'carbs',
        percentage: 30
      },
      { caloriesPerGram: 9, grams: 44, kals: 400, name: 'fats', percentage: 20 }
    ],
    planName: 'custom plan',
    totalGrams: 444,
    totalKcals: 2000
  }
}

const predefinedPlanTest = {
  dataSend: 'vegetarian',
  expectResult: {
    macros: [
      {
        caloriesPerGram: 4,
        grams: 85,
        kals: 340,
        name: 'proteins',
        percentage: 17
      },
      {
        caloriesPerGram: 4,
        grams: 285,
        kals: 1140,
        name: 'carbs',
        percentage: 57
      },
      { caloriesPerGram: 9, grams: 68, kals: 620, name: 'fats', percentage: 31 }
    ],
    planName: 'vegetarian',
    totalGrams: 438,
    totalKcals: 2000
  }
}
const caloriesPerGoalTest = {
  dataSend: 2500,
  expectResult: [
    {
      defaultValue: 2125,
      intensities: [
        { name: 'suggested', percentage: 15, value: 2125 },
        { name: 'aggressive ', percentage: 20, value: 2000 },
        { name: 'reckless  ', percentage: 25, value: 1875 }
      ],
      title: 'fat loss'
    },
    { defaultValue: 2500, title: 'maintain' },
    {
      defaultValue: 2625,
      intensities: [
        { name: 'cautious', percentage: 5, value: 2625 },
        { name: 'text book', percentage: 10, value: 2750 },
        { name: 'aggressive', percentage: 15, value: 2875 }
      ],
      title: 'bulking'
    }
  ]
}
const fullCalculatorTest = {
  AMRSection: {
    dataSend: {
      age: 30,
      genre: 'man',
      height: 170,
      weight: 70,
      equation: 'harris',
      system: 'metric',
      activityLevel: 'Intense exercise 6-7 days/week'
    },
    expectResult: 4184
  },
  goalSection: {
    expectResult: [
      {
        defaultValue: 3556,
        intensities: [
          { name: 'suggested', percentage: 15, value: 3556 },
          { name: 'aggressive', percentage: 20, value: 3347 },
          { name: 'reckless', percentage: 25, value: 3138 }
        ],
        title: 'fat loss'
      },
      { defaultValue: 4184, title: 'maintain' },
      {
        defaultValue: 4393,
        intensities: [
          { name: 'cautious', percentage: 5, value: 4393 },
          { name: 'text book', percentage: 10, value: 4602 },
          { name: 'aggressive', percentage: 15, value: 4811 }
        ],
        title: 'bulking'
      }
    ],
    dataSend: {
      goal: 'fat loss',
      intecity: 'aggressive',
      value: 3347
    }
  },
  nutritionalPlanSection: {
    dataSend: {
      dietType: 'predefined',
      plan: 'mediterranean',
      goalkals: 3347
    },
    expectResult: {
      macros: [
        {
          grams: 397,
          kcals: 1589,
          name: 'carbs',
          percentage: 38
        },
        {
          grams: 167,
          kcals: 669,
          name: 'proteins',
          percentage: 16
        },
        {
          grams: 213,
          kcals: 1924,
          name: 'fats',
          percentage: 46
        }
      ],
      planName: 'mediterranean',
      totalGrams: 777,
      totalKcals: 4184
    }
  },
  colorResults: [
    {
      title: 'proteins',
      color: '#fbbf24'
    },
    {
      title: 'carbs',
      color: '#fbbf24'
    },
    {
      title: 'fats',
      color: '#ef4444'
    },
    {
      title: 'Kcals',
      color: '#fbbf24'
    }
  ]
}
const data = {
  widthDefaultMaitenanceRadiosResult,
  customMacrosRadiosTest,
  predefinedPlanTest,
  caloriesPerGoalTest,
  fullCalculatorTest
}

export default data
