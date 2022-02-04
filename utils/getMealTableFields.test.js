import getMealTableFields from './getMealTableFields'
import mocks from '../mocks/mockCaloriesPerMealData'

const expectResult = {
  columns: ['Name', 'Total kcals', 'Total grams', 'Carbs', 'Proteins', 'Fats'],
  data: [
    ['meal 1', 625, '137 gr', '46 gr', '78 gr', '13 gr'],
    ['snack 1', 312, '68 gr', '23 gr', '39 gr', '6 gr'],
    ['meal 2', 625, '137 gr', '46 gr', '78 gr', '13 gr'],
    ['snack 2', 312, '68 gr', '23 gr', '39 gr', '6 gr'],
    ['meal 3', 625, '137 gr', '46 gr', '78 gr', '13 gr']
  ],
  title: 'Suggested meals size for 3 meals and 2 snacks a day'
}

it('return data formatted correctly', () => {
  expect(getMealTableFields(mocks.with3meals2snacksExpectResults)).toEqual(
    expectResult
  )
})
