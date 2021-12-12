import CaloriesPerGoaldCalculator from './CaloriesPerGoaldCalculator'
import React from 'react'
import { act, fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import mocks from '../../mocks/mockMacrosCalculatorData'
import getCaloriesPerPhysicalGoald from '../../utils/getCaloriesPerPhysicalGoald'

const dataReturn = mocks.fullCalculatorTest.goaldSection.expectResult
const dataResived = mocks.fullCalculatorTest.AMRSection.expectResult
const setValue = mocks.fullCalculatorTest.goaldSection.dataSend
const darkGreen = '#15803d'

jest.mock('../../utils/getCaloriesPerPhysicalGoald', () => jest.fn())
const setGoaldKcals = jest.fn()

const InitialProps = {
  setGoaldKcals,
  defaultCalories: dataResived,
  goaldKcals: dataResived
}

beforeEach(() => {
  getCaloriesPerPhysicalGoald.mockImplementation(() => dataReturn)
  render(<CaloriesPerGoaldCalculator {...InitialProps} />)
})
it('displays the physic goals with the correct values and allows you to select a one', async () => {
  dataReturn.forEach((goald) =>
    expect(screen.getByText(goald.title).parentNode).toHaveTextContent(
      goald.defaultValue
    )
  )
  expect(screen.getByText('maintain').parentNode).toHaveStyle(
    'border-color:',
    darkGreen
  )
  await act(async () =>
    userEvent.click(screen.getByTestId(dataReturn[0].title + 'Input'))
  )

  expect(setGoaldKcals).toHaveBeenLastCalledWith(dataReturn[0].defaultValue)

  dataReturn[0].intencities.forEach((intencity) => {
    expect(
      screen.getByText(intencity.name + ': ' + intencity.porsentage + '%')
    ).toBeInTheDocument()
  })
})

it('shows the differents intencities of the goald selected allows you to select a one', async () => {
  await act(async () =>
    userEvent.click(screen.getByTestId(setValue.goald + 'Input'))
  )
  await act(async () =>
    userEvent.click(screen.getByTestId(setValue.intecity + 'Input'))
  )

  expect(screen.getByTestId(setValue.goald + 'Input').parentNode).toHaveStyle(
    'border-color:',
    darkGreen
  )
  expect(setGoaldKcals).toHaveBeenLastCalledWith(setValue.value)
})

it('allows you to set a custom caloric ammount', async () => {
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

  expect(setGoaldKcals).toHaveBeenLastCalledWith('2600')
})
