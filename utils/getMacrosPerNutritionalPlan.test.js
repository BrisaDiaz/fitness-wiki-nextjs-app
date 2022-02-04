import getMacrosPerNutritionalPlan from './getMacrosPerNutritionalPlan'
import mocks from '../mocks/mockMacrosCalculatorData'

it('return error message when pass the name of a non supported plan', () => {
  expect(() =>
    getMacrosPerNutritionalPlan(2000, 'not-support-plan', 'predefined')
  ).toThrow("not-support-plan isn't between the nutritional plans supported")
})

it('return error message when their is any parameter lost', () => {
  expect(() => getMacrosPerNutritionalPlan(2000, 'predefined')).toThrow(
    '1:Target calories, 2:plan and 3:type of plan are required, instead was send 1:2000, 2:predefined, 3:undefined'
  )
})
it('return error message when the type of plan is not supported', () => {
  expect(() =>
    getMacrosPerNutritionalPlan(2000, 'not-support-plan', 'customized')
  ).toThrow(
    `"customized" is not a type of plan supported is must be eitheir "predefined" or "custom" `
  )
})

it('use a default maintenance macro radios if not macro was submited yet', () => {
  expect(getMacrosPerNutritionalPlan(2000, {}, 'custom')).toEqual(
    mocks.widthDefaultMaitenanceRadiosResult
  )
})

it('return the correct values when custom macros radios are set', () => {
  expect(
    getMacrosPerNutritionalPlan(
      2000,
      mocks.customMacrosRadiosTest.dataSend,
      'custom'
    )
  ).toEqual(mocks.customMacrosRadiosTest.expectResult)
})
it('return the correct values when a predefined plan is selected', () => {
  expect(
    getMacrosPerNutritionalPlan(
      2000,
      mocks.predefinedPlanTest.dataSend,
      'predefined'
    )
  ).toEqual(mocks.predefinedPlanTest.expectResult)
})
