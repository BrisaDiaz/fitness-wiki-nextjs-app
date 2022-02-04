import getCaloriesPerPhysicalGoal from './getCaloriesPerPhysicalGoal'
import mocks from '../mocks/mockMacrosCalculatorData'

it('returns the right caloric radios according to physic goals', () => {
  expect(
    getCaloriesPerPhysicalGoal(mocks.caloriesPerGoalTest.dataSend)
  ).toEqual(mocks.caloriesPerGoalTest.expectResult)
})
