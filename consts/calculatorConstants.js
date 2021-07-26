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
const data = {
  EXERCISE_INTENCITIES,
  METRIC_SYSTEMS,
  ACTIVITY_LEVELS,
  EQUATIONS,
  GENRES,
  NUTRITIONAL_PLANS,
  PLAN_TYPES,
  DEFAULT_MACROS_INPUTS
}
export default data
