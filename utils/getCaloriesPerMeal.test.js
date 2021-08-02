import mocks from '../mocks/mockCaloriesPerMealData'
import getCaloriesPerMeal from './getCaloriesPerMeal'
const { totalKcals, macrosRadios } = mocks

it('return correct value with 3 meals and 2 snacks case', () => {
  expect(getCaloriesPerMeal(totalKcals, macrosRadios, '3meals2snacks')).toEqual(
    mocks.with3meals2snacksExpectResults
  )
})
it('return correct value with 3 meals and 3 snacks case', () => {
  expect(getCaloriesPerMeal(totalKcals, macrosRadios, '3meals3snacks')).toEqual(
    mocks.with3meals3snacksExpectResults
  )
})
it('return correct value with 5 equalsMeals', () => {
  expect(getCaloriesPerMeal(totalKcals, macrosRadios, '5meals')).toEqual(
    mocks.with5equalMealsExpectResults
  )
})
it('return correct value with 6 equalsMeals', () => {
  expect(getCaloriesPerMeal(totalKcals, macrosRadios, '6meals')).toEqual(
    mocks.with6equalMealsExpectResults
  )
})
it('return correct value with 5 tapered calories meals', () => {
  expect(getCaloriesPerMeal(totalKcals, macrosRadios, '5taperedMeals')).toEqual(
    mocks.with5taperedMealsExpectResults
  )
})
it('return correct value with 6 tapered calories meals', () => {
  expect(getCaloriesPerMeal(totalKcals, macrosRadios, '6taperedMeals')).toEqual(
    mocks.with6taperedMealsExpectResults
  )
})
