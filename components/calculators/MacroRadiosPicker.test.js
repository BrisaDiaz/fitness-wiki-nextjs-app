import React from 'react'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import mocks from '../../mocks/mockMacrosCalculatorData'
import MacroRadiosPicker from './MacroRadiosPicker'
import getMacrosPerNutritionalPlan from '../../utils/getMacrosPerNutritionalPlan'

jest.mock('../../utils/getMacrosPerNutritionalPlan', () => jest.fn())

const initialPlanResults =
  mocks.fullCalculatorTest.nutritionalPlanSection.expectResult
const darkGreen = '#0595569'
const lightGreen = '#6EE7B7'
const setPlanType = jest.fn(),
  setNutritionalPlan = jest.fn(),
  setCustomPlan = jest.fn(),
  setErrors = jest.fn()

const predefinedPlanProps = {
  setPlanType,
  setNutritionalPlan,
  planType: 'predefined',
  errors: [],
  planResults: initialPlanResults
}
const customMacroRadiosProps = {
  setPlanType,
  setCustomPlan,
  setErrors,
  planType: 'custom',
  errors: [],
  planResults: {}
}

describe('component on predefined mode', () => {
  beforeEach(() => {
    getMacrosPerNutritionalPlan.mockImplementation(() => initialPlanResults)
    render(<MacroRadiosPicker {...predefinedPlanProps} />)
  })
  it('renderize the resived macro radios', () => {
    initialPlanResults.macros.forEach((macro) => {
      expect(screen.getByText(macro.name).parentNode).toHaveTextContent(
        macro.percentage
      )
    })
  })
  it('swith the component mode between predefined and custom', async () => {
    expect(screen.getByText('Predefined plan').parentNode).toHaveStyle(
      'background-color:',
      darkGreen
    )
    expect(screen.getByText('Your own plan').parentNode).toHaveStyle(
      'background-color:',
      lightGreen
    )
    await act(async () => userEvent.click(screen.getByTestId('custom')))

    expect(setPlanType).toHaveBeenLastCalledWith('custom')
  })
  it('set a predefined plan', async () => {
    await act(async () =>
      userEvent.selectOptions(screen.getByRole('combobox'), ['vegetarian'])
    )
    expect(setNutritionalPlan).toHaveBeenLastCalledWith('vegetarian')
  })
})

describe('component on custom mode', () => {
  beforeEach(() => {
    getMacrosPerNutritionalPlan.mockImplementation(() => initialPlanResults)
    render(<MacroRadiosPicker {...customMacroRadiosProps} />)
  })
  it('has the maintenance macro radios as defaults values', () => {
    const protsInput = screen.getByTestId('proteinsRadio')
    const carbsInput = screen.getByTestId('carbsRadio')
    const fatsInput = screen.getByTestId('fatsRadio')
    expect(protsInput).toHaveValue(30)
    expect(carbsInput).toHaveValue(50)
    expect(fatsInput).toHaveValue(20)
  })
  it('set error when the macros dont sum up to 100', async () => {
    const protsInput = screen.getByTestId('proteinsRadio')
    const carbsInput = screen.getByTestId('carbsRadio')
    const fatsInput = screen.getByTestId('fatsRadio')
    await act(async () => userEvent.clear(carbsInput))
    await act(async () => userEvent.clear(protsInput))
    await act(async () => userEvent.clear(fatsInput))
    await act(async () => userEvent.type(carbsInput, '45'))
    await act(async () => userEvent.type(protsInput, '45'))
    await act(async () => userEvent.type(fatsInput, '45'))

    await act(async () =>
      userEvent.click(screen.getByRole('button', 'Calculate'))
    )

    expect(setErrors).toHaveBeenLastCalledWith([
      'The macros must sum up to 100%'
    ])
    await act(async () => userEvent.clear(carbsInput))
    await act(async () => userEvent.clear(protsInput))
    await act(async () => userEvent.clear(fatsInput))
    await act(async () => userEvent.type(carbsInput, '15'))
    await act(async () => userEvent.type(protsInput, '50'))
    await act(async () => userEvent.type(fatsInput, '20'))
    await act(async () =>
      userEvent.click(screen.getByRole('button', 'Calculate'))
    )

    expect(setErrors).toHaveBeenLastCalledWith([
      'The macros must sum up to 100%'
    ])
  })
  it('set a custom macro radio when the sum is up to 100', async () => {
    const protsInput = screen.getByTestId('proteinsRadio')
    const carbsInput = screen.getByTestId('carbsRadio')
    const fatsInput = screen.getByTestId('fatsRadio')
    await act(async () => userEvent.clear(carbsInput))
    await act(async () => userEvent.clear(protsInput))
    await act(async () => userEvent.clear(fatsInput))
    await act(async () => userEvent.type(carbsInput, '30'))
    await act(async () => userEvent.type(protsInput, '50'))
    await act(async () => userEvent.type(fatsInput, '20'))

    await act(async () =>
      userEvent.click(screen.getByRole('button', 'Calculate'))
    )

    expect(setCustomPlan).toHaveBeenLastCalledWith({
      name: 'custom plan',
      macros: {
        carbs: {
          value: 30
        },
        proteins: {
          value: 50
        },
        fats: {
          value: 20
        }
      }
    })
  })
})
