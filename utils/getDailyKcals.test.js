import getDailyKcals from './getDailyKcals'

const miffin_metric_man_case = {
  age: 30,
  genre: 'man',
  height: 170,
  weight: 70,
  equation: 'mifflin',
  system: 'metric',
  activityLevel: 1.725,
  expectResult: 2790
}
const miffin_metric_woman_case = {
  age: 40,
  genre: 'woman',
  height: 168,
  weight: 75,
  equation: 'mifflin',
  system: 'metric',
  activityLevel: 1.375,
  expectResult: 1978
}
const miffin_imperial_man_case = {
  age: 30,
  genre: 'man',
  height: 70.5,
  weight: 198,
  equation: 'mifflin',
  system: 'imperial',
  activityLevel: 1.9,
  expectResult: 3558
}
const miffin_imperial_woman_case = {
  age: 24,
  genre: 'woman',
  height: 61,
  weight: 110,
  equation: 'mifflin',
  system: 'imperial',
  activityLevel: 1.375,
  expectResult: 1631
}
const harris_metric_man_case = {
  age: 30,
  genre: 'man',
  height: 170,
  weight: 70,
  equation: 'harris',
  system: 'metric',
  activityLevel: 1.725,
  expectResult: 4184
}
const harris_metric_woman_case = {
  age: 40,
  genre: 'woman',
  height: 168,
  weight: 75,
  equation: 'harris',
  system: 'metric',
  activityLevel: 1.375,
  expectResult: 2176
}
const harris_imperial_man_case = {
  age: 30,
  genre: 'man',
  height: 70.5,
  weight: 198,
  equation: 'harris',
  system: 'imperial',
  activityLevel: 1.9,
  expectResult: 3763
}
const harris_imperial_woman_case = {
  age: 24,
  genre: 'woman',
  height: 61,
  weight: 110,
  equation: 'harris',
  system: 'imperial',
  activityLevel: 1.375,
  expectResult: 1797
}
describe('mifflin equation', () => {
  it('return the correct value with system=metric and genre = man', () => {
    expect(getDailyKcals(miffin_metric_man_case)).toBe(
      miffin_metric_man_case.expectResult
    )
  })
  it('return the correct value with system=metric and genre = woman', () => {
    expect(getDailyKcals(miffin_metric_woman_case)).toBe(
      miffin_metric_woman_case.expectResult
    )
  })
  it('return the correct value with system=imperial and genre = man', () => {
    expect(getDailyKcals(miffin_imperial_man_case)).toBe(
      miffin_imperial_man_case.expectResult
    )
  })
  it('return the correct value with system=imperial and genre = woman', () => {
    expect(getDailyKcals(miffin_imperial_woman_case)).toBe(
      miffin_imperial_woman_case.expectResult
    )
  })
})
describe('harris equation', () => {
  it('return the correct value with system=metric and genre = man', () => {
    expect(getDailyKcals(harris_metric_man_case)).toBe(
      harris_metric_man_case.expectResult
    )
  })
  it('return the correct value with system=metric and genre = woman', () => {
    expect(getDailyKcals(harris_metric_woman_case)).toBe(
      harris_metric_woman_case.expectResult
    )
  })
  it('return the correct value with system=imperial and genre = man', () => {
    expect(getDailyKcals(harris_imperial_man_case)).toBe(
      harris_imperial_man_case.expectResult
    )
  })
  it('return the correct value with system=imperial and genre = woman', () => {
    expect(getDailyKcals(harris_imperial_woman_case)).toBe(
      harris_imperial_woman_case.expectResult
    )
  })
})
