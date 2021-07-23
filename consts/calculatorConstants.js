const ACTIVITY_LEVELS = [
  { info: 'Little or no excercise', value: '1.2' },
  { info: 'Exercise 1-3 days/week', value: '1.375' },
  { info: 'Exercise 4-5 days/week', value: '1.55' },
  { info: 'Intense exercise 6-7 days/week', value: '1.725' },
  { info: 'Very intense exercise daily, or physical job', value: '1.9' }
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

const data = { EXERCISE_INTENCITIES, ACTIVITY_LEVELS, EQUATIONS, GENRES }
export default data
