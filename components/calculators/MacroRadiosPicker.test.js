import React from 'react'
import { render, screen, act, fireEvent } from '@testing-library/react'
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
  setError = jest.fn()

const predifinedPlanProps = {
  setPlanType,
  setNutritionalPlan,
  planType: 'predifined',
  planResults: initialPlanResults
}
const customMacroRadiosProps = {
  setPlanType,
  setCustomPlan,
  setError,
  planType: 'custom',
  planResults: {}
}

describe('component on predifined mode', () => {
  beforeEach(() => {
    getMacrosPerNutritionalPlan.mockImplementation(() => initialPlanResults)
    render(<MacroRadiosPicker {...predifinedPlanProps} />)
  })
  it('renderize the resived macro radios', () => {
    initialPlanResults.macros.forEach((macro) => {
      expect(screen.getByText(macro.name).parentNode).toHaveTextContent(
        macro.persentage
      )
    })
  })
  it('swith the component mode between predifined and custom', async () => {
    expect(screen.getByText('Pedifined plan').parentNode).toHaveStyle(
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
  it('set a predifined plan', async () => {
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
    await act(async () =>
      fireEvent.change(carbsInput, {
        target: { value: 45 }
      })
    )
    await act(async () =>
      fireEvent.change(protsInput, {
        target: { value: 45 }
      })
    )
    await act(async () =>
      fireEvent.change(fatsInput, {
        target: { value: 45 }
      })
    )

    await act(async () =>
      userEvent.click(screen.getByRole('button', 'Calculate'))
    )

    expect(setError).toHaveBeenNthCalledWith(1, null)
    expect(setError).toHaveBeenNthCalledWith(
      2,
      'The macros must sum up to 100%'
    )
    await act(async () =>
      fireEvent.change(carbsInput, {
        target: { value: 15 }
      })
    )
    await act(async () =>
      fireEvent.change(protsInput, {
        target: { value: 30 }
      })
    )
    await act(async () =>
      fireEvent.change(fatsInput, {
        target: { value: 45 }
      })
    )
    await act(async () =>
      userEvent.click(screen.getByRole('button', 'Calculate'))
    )

    expect(setError).toHaveBeenNthCalledWith(3, null)
    expect(setError).toHaveBeenNthCalledWith(
      4,
      'The macros must sum up to 100%'
    )
  })
  it('set a custom macro radio when the sum is up to 100', async () => {
    const protsInput = screen.getByTestId('proteinsRadio')
    const carbsInput = screen.getByTestId('carbsRadio')
    const fatsInput = screen.getByTestId('fatsRadio')
    await act(async () =>
      fireEvent.change(carbsInput, {
        target: { value: 30 }
      })
    )
    await act(async () =>
      fireEvent.change(protsInput, {
        target: { value: 50 }
      })
    )
    await act(async () =>
      fireEvent.change(fatsInput, {
        target: { value: 20 }
      })
    )

    await act(async () =>
      userEvent.click(screen.getByRole('button', 'Calculate'))
    )
    expect(setCustomPlan.mock.calls.length).toBe(1)

    expect(setCustomPlan).toHaveBeenCalledWith({
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
