import getCaloriesPerPhysicalGoald from './getCaloriesPerPhysicalGoald'
import mocks from '../mocks/mockMacrosCalculatorData'

it('returns the right caloric radios acording to physic goals', () => {
  expect(
    getCaloriesPerPhysicalGoald(mocks.caloriesPerGoaldTest.dataSend)
  ).toEqual(mocks.caloriesPerGoaldTest.expectResult)
})
