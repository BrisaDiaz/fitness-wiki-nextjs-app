import getMealTableFiels from './getMealTableFiels'
import mocks from '../mocks/mockCaloriesPerMealData'

const expectResult = {
  columns: ['Name', 'Total kcals', 'Total grams', 'Carbs', 'Proteins', 'Fats'],
  data: [
    [['meal 1', 625, 137, 46, 78, 13]],
    [['snack 1', 312, 68, 23, 39, 6]],
    [['meal 2', 625, 137, 46, 78, 13]],
    [['snack 2', 312, 68, 23, 39, 6]],
    [['meal 3', 625, 137, 46, 78, 13]]
  ],
  title: 'Suggested meal sizes for 3 meals and 2 snacks'
}

it('return data formated correctly', () => {
  expect(getMealTableFiels(mocks.with3meals2snacksExpectResults)).toEqual(
    expectResult
  )
})
