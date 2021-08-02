import getWaterIntake from './getWaterIntake'

const withoutWorkoutResults = {
  cups: 9,
  liters: '2.1',
  onces: 71
}
const withWorkoutResults = {
  cups: 12,
  liters: '2.8',
  onces: 95
}
const withWorkoutAndImerialSystemResults = {
  cups: 13,
  liters: '2.9',
  onces: 99
}
it('return de correct value without workout time', () => {
  expect(getWaterIntake('metric', 60)).toEqual(withoutWorkoutResults)
})
it('return de correct value with workout time', () => {
  expect(getWaterIntake('metric', 60, 45)).toEqual(withWorkoutResults)
})
it('return de correct value with workout time in imoerial system', () => {
  expect(getWaterIntake('imperial', 140, 45)).toEqual(
    withWorkoutAndImerialSystemResults
  )
})
