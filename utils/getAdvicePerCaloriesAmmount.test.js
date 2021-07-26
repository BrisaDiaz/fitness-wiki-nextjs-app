import getAdvicePerCaloriesAmmount from './getAdvicePerCaloriesAmmount'

it('return "not recommended" if the surplus  is equal or greater than 15% of the AMR value', () => {
  expect(getAdvicePerCaloriesAmmount(2000, 2500)).toBe('not recommended')
})
it('return "not recommended" if the deficit  is equal or greater than 25% of  the AMR value', () => {
  expect(getAdvicePerCaloriesAmmount(2000, 1400)).toBe('not recommended')
})

it('return "moderately recommended" if target kcals is between the "recommended" and "not remomended"', () => {
  expect(getAdvicePerCaloriesAmmount(2000, 1600)).toBe('moderately recommended')
  expect(getAdvicePerCaloriesAmmount(2000, 2250)).toBe('moderately recommended')
})
it('return "recommended" if the deficit  is equal or inferior than 15% of the AMR value', () => {
  expect(getAdvicePerCaloriesAmmount(2000, 1900)).toBe('recommended')
})
it('return "recommended" if the surplus  is equal or inferior than 5% of the AMR value', () => {
  expect(getAdvicePerCaloriesAmmount(2000, 2150)).toBe('recommended')
})
