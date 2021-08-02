const ACTIVITY_LEVELS = [
  { info: 'Little or no excercise', value: '1.2' },
  { info: 'Exercise 1-3 days/week', value: '1.375' },
  { info: 'Exercise 4-5 days/week', value: '1.55' },
  { info: 'Intense exercise 6-7 days/week', value: '1.725' },
  { info: 'Very intense exercise daily, or physical job', value: '1.9' }
]
const METRIC_SYSTEMS = [
  { info: 'Metric', value: 'metric' },
  { info: 'Imperial', value: 'imperial' }
]
const EXERCISE_INTENCITIES = [
  {
    name: 'Exercise',
    definition: '15-30 minutes of elevated heart rate activity.'
  },
  {
    name: 'Intense exercise',
    definition: '45-120 minutes of elevated heart rate activity.'
  },
  {
    name: 'Very intense exercise',
    definition: '2+ hours of elevated heart rate activity.'
  }
]
const EQUATIONS = [
  { info: 'Mifflin St.Jeor', value: 'mifflin' },
  { info: 'Harris Benedicte', value: 'harris' }
]
const GENRES = [
  { info: 'Woman', value: 'woman' },
  { info: 'Man', value: 'man' }
]
const NUTRITIONAL_PLANS = [
  { info: 'Ketogenic', value: 'ketogenic' },
  { info: 'Low carb', value: 'lowCarb' },
  { info: 'Atkins', value: 'atkins' },
  { info: 'Paleo', value: 'paleo' },
  { info: 'Mediterranean', value: 'mediterranean' },
  { info: 'Zone diet', value: 'zoneDiet' },
  { info: 'Vegetarian', value: 'vegetarian' },
  { info: 'Ornish', value: 'ornish' },
  { info: 'American', value: 'american' },
  { info: 'Recomended for weight loss', value: 'weightLoss' },
  { info: 'Recomended for maintenance', value: 'maintenance' },
  { info: 'Recomended for muscle gain', value: 'bulking' }
]
const PLAN_TYPES = [
  { info: 'Pedifined plan', value: 'predifined' },
  { info: 'Your own plan', value: 'custom' }
]
const DEFAULT_MACROS_INPUTS = [
  { info: 'carbs', defaultValue: '50' },
  { info: 'proteins', defaultValue: '30' },
  { info: 'fats', defaultValue: '20' }
]
const MEALS_FRECUENCIES = [
  { info: '3 Meals , 2 snacks', value: '3meals2snacks' },
  { info: '3 Meals , 3 snacks', value: '3meals3snacks' },
  { info: '5 Meals, equally split', value: '5meals' },
  { info: '6 Meals, equally split', value: '6meals' },
  { info: '5 Meals, tampered calories', value: '5taperedMeals' },
  { info: '6 Meals, tampered calories', value: '6taperedMeals' }
]
const DEFAULT_DATA_TABLE = {
  columns: ['Name', 'Total kcals', 'Total grams', 'Carbs', 'Proteins', 'Fats'],
  data: [
    ['meal 1', 500, '110 gr', '37 gr', '62 gr', '11 gr'],
    ['snack 1', 250, '54 gr', '18 gr', '31 gr', '5 gr'],
    ['meal 2', 500, '110 gr', '37 gr', '62 gr', '11 gr'],
    ['snack 2', 250, '54 gr', '18 gr', '31 gr', '5 gr'],
    ['meal 3', 500, '110 gr', '37 gr', '62 gr', '11 gr']
  ],
  title: 'Suggested meals size for 3 meals and 2 snacks a day'
}
const DEFAULT_MACROS_RADIOS = {
  name: 'custom plan',
  macros: {
    carbs: {
      value: 50
    },
    proteins: {
      value: 30
    },
    fats: {
      value: 20
    }
  }
}
const DEFAULT_WATER_INTAKE = {
  cups: 9,
  liters: '2.1',
  onces: 71
}
const DEFAULT_FIBER_INTAKE = 28
const ERRORS = {
  calories: 'The daily caloric intake should be equal or greater than 1200.',
  macroRadios: 'The macros must sum up to 100%'
}
const data = {
  EXERCISE_INTENCITIES,
  METRIC_SYSTEMS,
  ACTIVITY_LEVELS,
  EQUATIONS,
  GENRES,
  ERRORS,
  NUTRITIONAL_PLANS,
  PLAN_TYPES,
  DEFAULT_MACROS_INPUTS,
  MEALS_FRECUENCIES,
  DEFAULT_DATA_TABLE,
  DEFAULT_MACROS_RADIOS,
  DEFAULT_WATER_INTAKE,
  DEFAULT_FIBER_INTAKE
}
export default data
