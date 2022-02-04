import CaloriesPerGoalCalculator from './CaloriesPerGoalCalculator'
import React from 'react'
import { act, fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import mocks from '../../mocks/mockMacrosCalculatorData'
import getCaloriesPerPhysicalGoal from '../../utils/getCaloriesPerPhysicalGoal'

const dataReturn = mocks.fullCalculatorTest.goalSection.expectResult
const dataReceived = mocks.fullCalculatorTest.AMRSection.expectResult
const setValue = mocks.fullCalculatorTest.goalSection.dataSend
const darkGreen = '#15803d'

jest.mock('../../utils/getCaloriesPerPhysicalGoal', () => jest.fn())
const setGoalKcals = jest.fn()

const InitialProps = {
  setGoalKcals,
  defaultCalories: dataReceived,
  goalKcals: dataReceived
}

beforeEach(() => {
  getCaloriesPerPhysicalGoal.mockImplementation(() => dataReturn)
  render(<CaloriesPerGoalCalculator {...InitialProps} />)
})
it('displays the physic goals with the correct values and allows you to select a one', async () => {
  dataReturn.forEach((goal) =>
    expect(screen.getByText(goal.title).parentNode).toHaveTextContent(
      goal.defaultValue
    )
  )
  expect(screen.getByText('maintain').parentNode).toHaveStyle(
    'border-color:',
    darkGreen
  )
  await act(async () =>
    userEvent.click(screen.getByTestId(dataReturn[0].title + 'Input'))
  )

  expect(setGoalKcals).toHaveBeenLastCalledWith(dataReturn[0].defaultValue)

  dataReturn[0].intensities.forEach((intensity) => {
    expect(
      screen.getByText(intensity.name + ': ' + intensity.percentage + '%')
    ).toBeInTheDocument()
  })
})

it('shows the different intensities of the goal selected allows you to select a one', async () => {
  await act(async () =>
    userEvent.click(screen.getByTestId(setValue.goal + 'Input'))
  )
  await act(async () =>
    userEvent.click(screen.getByTestId(setValue.intecity + 'Input'))
  )

  expect(screen.getByTestId(setValue.goal + 'Input').parentNode).toHaveStyle(
    'border-color:',
    darkGreen
  )
  expect(setGoalKcals).toHaveBeenLastCalledWith(setValue.value)
})

it('allows you to set a custom caloric amount', async () => {
  await act(async () => userEvent.click(screen.getByTestId('customInput')))
  expect(screen.getByTestId('customInput').parentNode).toHaveStyle(
    'border-color:',
    darkGreen
  )
  await act(async () =>
    fireEvent.change(screen.getByRole('spinbutton'), {
      target: { value: 2600 }
    })
  )

  expect(setGoalKcals).toHaveBeenLastCalledWith('2600')
})
