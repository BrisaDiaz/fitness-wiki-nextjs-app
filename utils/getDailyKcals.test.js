import getDailyKcals from './getDailyKcals'
import mocks from '../mocks/mockAMRcalculatorData'

describe('mifflin equation', () => {
  it('return the correct value with system=metric and genre = man', () => {
    expect(getDailyKcals(mocks.miffin_metric_man_case)).toBe(
      mocks.miffin_metric_man_case.expectResult
    )
  })
  it('return the correct value with system=metric and genre = woman', () => {
    expect(getDailyKcals(mocks.miffin_metric_woman_case)).toBe(
      mocks.miffin_metric_woman_case.expectResult
    )
  })
  it('return the correct value with system=imperial and genre = man', () => {
    expect(getDailyKcals(mocks.miffin_imperial_man_case)).toBe(
      mocks.miffin_imperial_man_case.expectResult
    )
  })
  it('return the correct value with system=imperial and genre = woman', () => {
    expect(getDailyKcals(mocks.miffin_imperial_woman_case)).toBe(
      mocks.miffin_imperial_woman_case.expectResult
    )
  })
})
describe('harris equation', () => {
  it('return the correct value with system=metric and genre = man', () => {
    expect(getDailyKcals(mocks.harris_metric_man_case)).toBe(
      mocks.harris_metric_man_case.expectResult
    )
  })
  it('return the correct value with system=metric and genre = woman', () => {
    expect(getDailyKcals(mocks.harris_metric_woman_case)).toBe(
      mocks.harris_metric_woman_case.expectResult
    )
  })
  it('return the correct value with system=imperial and genre = man', () => {
    expect(getDailyKcals(mocks.harris_imperial_man_case)).toBe(
      mocks.harris_imperial_man_case.expectResult
    )
  })
  it('return the correct value with system=imperial and genre = woman', () => {
    expect(getDailyKcals(mocks.harris_imperial_woman_case)).toBe(
      mocks.harris_imperial_woman_case.expectResult
    )
  })
})
