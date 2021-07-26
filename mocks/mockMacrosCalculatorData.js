const widthDefaultMaitenanceRadiosResult = {
  macros: [
    { grams: 250, kals: 1000, name: 'carbs', persentage: '50%', value: 0.5 },
    { grams: 150, kals: 600, name: 'proteins', persentage: '30%', value: 0.3 },
    { grams: 44, kals: 400, name: 'fats', persentage: '20%', value: 0.2 }
  ],
  name: 'maintenance',
  totalGrams: 444,
  totalKcals: 2000
}
const customMacrosRadiosTest = {
  dataSend: {
    name: 'custom plan',
    macros: {
      carbs: {
        persentage: '30%',
        value: 0.3
      },
      proteins: {
        persentage: '50%',
        value: 0.5
      },
      fats: {
        persentage: '20%',
        value: 0.2
      }
    }
  },
  expectResult: {
    name: 'custom plan',
    totalGrams: 444,
    totalKcals: 2000,
    macros: [
      {
        grams: 150,
        kals: 600,
        name: 'carbs',
        persentage: '30%',
        value: 0.3
      },
      {
        grams: 250,
        kals: 1000,
        name: 'proteins',
        persentage: '50%',
        value: 0.5
      },
      {
        grams: 44,
        kals: 400,
        name: 'fats',
        persentage: '20%',
        value: 0.2
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
        persentage: '57%',
        value: 0.57
      },
      {
        grams: 85,
        kals: 340,
        name: 'proteins',
        persentage: '17%',
        value: 0.17
      },
      {
        grams: 68,
        kals: 620,
        name: 'fats',
        persentage: '31%',
        value: 0.31
      }
    ],
    name: 'vegetarian',
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
        { name: 'suggested', porsentage: '15%', value: 2125 },
        { name: 'aggressive ', porsentage: '20%', value: 2000 },
        { name: 'reckless  ', porsentage: '25%', value: 1875 }
      ],
      title: 'fat loss'
    },
    { defaultValue: 2500, title: 'maintain' },
    {
      defaultValue: 2625,
      intencities: [
        { name: 'cautious', porsentage: '5%', value: 2625 },
        { name: 'text book', porsentage: '10%', value: 2750 },
        { name: 'aggressive', porsentage: '15%', value: 2875 }
      ],
      title: 'bulking'
    }
  ]
}
const data = {
  widthDefaultMaitenanceRadiosResult,
  customMacrosRadiosTest,
  predifinedPlanTest,
  caloriesPerGoaldTest
}
export default data
