const widthDefaultMaitenanceRadiosResult = {
  macros: [
    { grams: 250, kals: 1000, name: 'carbs', persentage: 50 },
    { grams: 150, kals: 600, name: 'proteins', persentage: 30 },
    { grams: 44, kals: 400, name: 'fats', persentage: 20 }
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
    planName: 'custom plan',
    totalGrams: 444,
    totalKcals: 2000,
    macros: [
      {
        grams: 150,
        kals: 600,
        name: 'carbs',
        persentage: 30
      },
      {
        grams: 250,
        kals: 1000,
        name: 'proteins',
        persentage: 50
      },
      {
        grams: 44,
        kals: 400,
        name: 'fats',
        persentage: 20
      }
    ]
  }
}

const predifinedPlanTest = {
  dataSend: 'vegetarian',
  expectResult: {
    macros: [
      {
        grams: 285,
        kals: 1140,
        name: 'carbs',
        persentage: 57
      },
      {
        grams: 85,
        kals: 340,
        name: 'proteins',
        persentage: 17
      },
      {
        grams: 68,
        kals: 620,
        name: 'fats',
        persentage: 31
      }
    ],
    planName: 'vegetarian',
    totalGrams: 438,
    totalKcals: 2000
  }
}
const caloriesPerGoaldTest = {
  dataSend: 2500,
  expectResult: [
    {
      defaultValue: 2125,
      intencities: [
        { name: 'suggested', porsentage: 15, value: 2125 },
        { name: 'aggressive ', porsentage: 20, value: 2000 },
        { name: 'reckless  ', porsentage: 25, value: 1875 }
      ],
      title: 'fat loss'
    },
    { defaultValue: 2500, title: 'maintain' },
    {
      defaultValue: 2625,
      intencities: [
        { name: 'cautious', porsentage: 5, value: 2625 },
        { name: 'text book', porsentage: 10, value: 2750 },
        { name: 'aggressive', porsentage: 15, value: 2875 }
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
  goaldSection: {
    expectResult: [
      {
        defaultValue: 3556,
        intencities: [
          { name: 'suggested', porsentage: 15, value: 3556 },
          { name: 'aggressive', porsentage: 20, value: 3347 },
          { name: 'reckless', porsentage: 25, value: 3138 }
        ],
        title: 'fat loss'
      },
      { defaultValue: 4184, title: 'maintain' },
      {
        defaultValue: 4393,
        intencities: [
          { name: 'cautious', porsentage: 5, value: 4393 },
          { name: 'text book', porsentage: 10, value: 4602 },
          { name: 'aggressive', porsentage: 15, value: 4811 }
        ],
        title: 'bulking'
      }
    ],
    dataSend: {
      goald: 'fat loss',
      intecity: 'aggressive',
      value: 3347
    }
  },
  nutritionalPlanSection: {
    dataSend: {
      dietType: 'predifined',
      plan: 'mediterranean',
      goaldkals: 3347
    },
    expectResult: {
      macros: [
        {
          grams: 397,
          kcals: 1589,
          name: 'carbs',
          persentage: 38
        },
        {
          grams: 167,
          kcals: 669,
          name: 'proteins',
          persentage: 16
        },
        {
          grams: 213,
          kcals: 1924,
          name: 'fats',
          persentage: 46
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
  predifinedPlanTest,
  caloriesPerGoaldTest,
  fullCalculatorTest
}

export default data
