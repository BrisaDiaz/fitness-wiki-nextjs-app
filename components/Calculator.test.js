import React from 'react'
import { render, screen, act, fireEvent } from '@testing-library/react'
import Calculator from './Calculator'
import userEvent from '@testing-library/user-event'
import getDailyKcals from '../utils/getDailyKcals'

const darkGreen = '#0595569'
const lightGreen = '#6EE7B7'
const redBorderColor = 'rgb(209, 213, 219)'

const mockInputs = {
  age: 20,
  weight: 58,
  height: 165,
  genre: { name: 'Woman', value: 'woman' },
  equation: { name: 'Mifflin St.Jeor', value: 'mifflin' },
  activity: { name: 'Little or no excercise', value: '1.2' },
  result: 1605
}

jest.mock('../utils/getDailyKcals', () => jest.fn())

beforeEach(() => {
  getDailyKcals.mockImplementation(() => mockInputs.result)
  render(<Calculator />)
})
it('initialize with corrects values', () => {
  expect(screen.getByText('0 kcals', { exact: false })).toBeInTheDocument()
  expect(
    screen.getByPlaceholderText('cm', { exact: false })
  ).toBeInTheDocument()
  expect(
    screen.getByPlaceholderText('kg', { exact: false })
  ).toBeInTheDocument()

  expect(screen.getByText('imperial', { exact: false })).toHaveStyle(
    'background-color:',
    darkGreen
  )
  expect(screen.getByText('metric', { exact: false })).toHaveStyle(
    'background-color:',
    lightGreen
  )
})
it('toggle metrick system when click on options', async () => {
  await act(async () =>
    userEvent.click(screen.getByText('imperial', { exact: false }))
  )
  expect(screen.getByText('metric', { exact: false })).toHaveStyle(
    'background-color:',
    darkGreen
  )
  expect(screen.getByText('imperial', { exact: false })).toHaveStyle(
    'background-color:',
    lightGreen
  )
  expect(screen.getByText('0 kcals', { exact: false })).toBeInTheDocument()
  expect(
    screen.getByPlaceholderText('lbs', { exact: false })
  ).toBeInTheDocument()
  expect(
    screen.getByPlaceholderText('in', { exact: false })
  ).toBeInTheDocument()
  await act(async () =>
    userEvent.click(screen.getByText('metric', { exact: false }))
  )
  expect(screen.getByText('metric', { exact: false })).toHaveStyle(
    'background-color:',
    darkGreen
  )
  expect(screen.getByText('imperial', { exact: false })).toHaveStyle(
    'background-color:',
    lightGreen
  )
  expect(screen.getByText('0 kcals', { exact: false })).toBeInTheDocument()
  expect(
    screen.getByPlaceholderText('cm', { exact: false })
  ).toBeInTheDocument()
  expect(
    screen.getByPlaceholderText('kg', { exact: false })
  ).toBeInTheDocument()
})
it('render inputs with red borders when left empty', async () => {
  await act(async () =>
    userEvent.click(screen.getByRole('button', { name: 'Calculate' }))
  )
  const inputs = screen.getAllByRole('spinbutton')
  inputs.forEach((input) =>
    expect(input).toHaveStyle('border-color:', redBorderColor)
  )
})
describe('calculator logic', () => {
  it('return correct value with metric system', async () => {
    await act(async () =>
      fireEvent.focus(screen.getByPlaceholderText('years', { exact: false }))
    )
    await act(async () =>
      fireEvent.change(screen.getByPlaceholderText('years', { exact: false }), {
        target: { value: mockInputs.age }
      })
    )
    await act(async () =>
      fireEvent.focus(screen.getByPlaceholderText('cm', { exact: false }))
    )
    await act(async () =>
      fireEvent.change(screen.getByPlaceholderText('cm', { exact: false }), {
        target: { value: mockInputs.height }
      })
    )
    await act(async () =>
      fireEvent.focus(screen.getByPlaceholderText('kg', { exact: false }))
    )
    await act(async () =>
      fireEvent.change(screen.getByPlaceholderText('kg', { exact: false }), {
        target: { value: mockInputs.weight }
      })
    )
    expect(screen.getByPlaceholderText('kg')).toHaveValue(
      mockInputs.weight.value
    )
    expect(screen.getByPlaceholderText('cm')).toHaveValue(
      mockInputs.height.value
    )
    expect(screen.getByPlaceholderText('years')).toHaveValue(
      mockInputs.age.value
    )

    await act(async () =>
      userEvent.click(screen.getByText(mockInputs.activity.name))
    )
    await act(async () =>
      userEvent.click(screen.getByText(mockInputs.equation.name))
    )
    await act(async () =>
      userEvent.click(screen.getByText(mockInputs.genre.name))
    )

    expect(screen.getByTestId('activitySelect')).toHaveValue(
      mockInputs.activity.value
    )
    expect(screen.getByTestId('genreSelect')).toHaveValue(
      mockInputs.genre.value
    )
    expect(screen.getByTestId('equationSelect')).toHaveValue(
      mockInputs.equation.value
    )

    await act(async () =>
      userEvent.click(screen.getByRole('button', { name: 'Calculate' }))
    )

    expect(screen.getByTestId('calculator-result')).toHaveTextContent(
      mockInputs.result
    )
  })
})
