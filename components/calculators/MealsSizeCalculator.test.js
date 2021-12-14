import React from 'react'
import { render, screen, act } from '@testing-library/react'
import MealsSizeCalculator from './MealsSizeCalculator'
import consts from '../../consts/calculatorConstants'
import userEvent from '@testing-library/user-event'
beforeEach(() => {
  render(<MealsSizeCalculator />)
})

it('initialize with the corrects defaults values', () => {
  expect(screen.getByLabelText('Calories:')).toHaveValue(2000)
  expect(screen.getByPlaceholderText('kg')).toHaveValue(60)
  expect(screen.getByPlaceholderText('min')).toHaveValue(0)
  expect(screen.getByTestId('proteinsRadio')).toHaveValue(30)
  expect(screen.getByTestId('carbsRadio')).toHaveValue(50)
  expect(screen.getByTestId('fatsRadio')).toHaveValue(20)
  expect(
    screen.getByRole('radio', { name: '3 Meals , 2 snacks.' })
  ).toBeChecked()
  expect(screen.getByText('Fiber').parentNode).toHaveTextContent(
    consts.DEFAULT_FIBER_INTAKE
  )
  expect(screen.getByText('Water').parentNode).toHaveTextContent(
    consts.DEFAULT_WATER_INTAKE.cups
  )
  consts.DEFAULT_DATA_TABLE.data.forEach((row) =>
    row.forEach((cellData) =>
      expect(
        screen.getAllByText(cellData, { exact: false }).length
      ).toBeGreaterThan(0)
    )
  )
  expect(
    screen.getByText(consts.DEFAULT_DATA_TABLE.title, { exact: false })
  ).toBeInTheDocument()
})

describe('results changes', () => {
  it('recalculate results when the meal frecuency change', async () => {
    await act(async () =>
      userEvent.click(
        screen.getByRole('radio', { name: '5 Meals, equally split.' })
      )
    )
    expect(
      screen.getByRole('radio', { name: '5 Meals, equally split.' })
    ).toBeChecked()

    expect(
      screen.queryByText(consts.DEFAULT_DATA_TABLE.title, { exact: false })
    ).not.toBeInTheDocument()

    expect(
      screen.getByText('Suggested meals size for 5 equally split meals a day', {
        exact: false
      })
    ).toBeInTheDocument()
  })
  it('change fiber intake when caloric itake change', async () => {
    await act(async () => userEvent.click(screen.getByLabelText('Imperial')))
    await act(async () => userEvent.clear(screen.getByPlaceholderText('lbs')))
    await act(async () =>
      userEvent.type(screen.getByPlaceholderText('lbs'), '140')
    )

    expect(screen.getByText('Water').parentNode).toHaveTextContent(10)

    await act(async () => userEvent.clear(screen.getByPlaceholderText('min')))
    await act(async () =>
      userEvent.type(screen.getByPlaceholderText('min'), '45')
    )
    expect(screen.getByText('Water').parentNode).toHaveTextContent(13)
  })
  it('change water intake when workout time or weight change', async () => {
    await act(async () => userEvent.clear(screen.getByLabelText('Calories:')))
    await act(async () =>
      userEvent.type(screen.getByLabelText('Calories:'), '3000')
    )
    expect(screen.getByLabelText('Calories:')).toHaveValue(3000)
    expect(screen.getByText('Fiber').parentNode).toHaveTextContent(42)
  })
})
describe('error messages', () => {
  it('toggle error message when calories are below 1200', async () => {
    await act(async () => userEvent.clear(screen.getByLabelText('Calories:')))
    await act(async () =>
      userEvent.type(screen.getByLabelText('Calories:'), '1000')
    )
    expect(screen.getByLabelText('Calories:')).toHaveValue(1000)
    expect(
      await screen.findByText(
        'The daily caloric intake should be equal or greater than 1200.'
      )
    ).toBeInTheDocument()
    await act(async () => userEvent.clear(screen.getByLabelText('Calories:')))
    await act(async () =>
      userEvent.type(screen.getByLabelText('Calories:'), '1250')
    )
    expect(screen.getByLabelText('Calories:')).toHaveValue(1250)
    expect(
      screen.queryByText(
        'The daily caloric intake should be equal or greater than 1200.'
      )
    ).not.toBeInTheDocument()
  })
  it('toggle error message when radios dont sum up to 100', async () => {
    await act(async () => userEvent.clear(screen.getByLabelText('proteins')))
    await act(async () =>
      userEvent.type(screen.getByLabelText('proteins'), '10')
    )
    await act(async () =>
      userEvent.click(screen.getByRole('button', { name: 'Calculate' }))
    )
    expect(
      await screen.findByText('The macros must sum up to 100%')
    ).toBeInTheDocument()
    await act(async () => userEvent.clear(screen.getByLabelText('proteins')))
    await act(async () =>
      userEvent.type(screen.getByLabelText('proteins'), '30')
    )
    await act(async () =>
      userEvent.click(screen.getByRole('button', { name: 'Calculate' }))
    )
    expect(screen.getByLabelText('proteins')).toHaveValue(30)

    expect(
      screen.queryByText('The macros must sum up to 100%')
    ).not.toBeInTheDocument()
  })
})
