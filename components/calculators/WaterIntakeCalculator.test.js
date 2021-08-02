import React from 'react'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import WaterIntakeCalculator from './WaterIntakeCalculator'
const setWaterIntake = jest.fn()

beforeEach(() => {
  render(<WaterIntakeCalculator setWaterIntake={setWaterIntake} />)
})

it('initialize with the defaults values', () => {
  expect(screen.getByPlaceholderText('kg')).toBeInTheDocument()
  expect(screen.getByPlaceholderText('kg')).toHaveValue(60)
  expect(screen.getByPlaceholderText('min')).toBeInTheDocument()
  expect(screen.getByPlaceholderText('min')).toHaveValue(0)
})
it('recalculate water intake when weigh or workout minutes change', async () => {
  await act(async () => userEvent.click(screen.getByLabelText('Imperial')))
  await act(async () =>
    userEvent.type(screen.getByPlaceholderText('lbs'), '140')
  )
  expect(setWaterIntake).toHaveBeenCalledWith({
    cups: 4,
    liters: '0.9',
    onces: 32
  })

  await act(async () =>
    userEvent.type(screen.getByPlaceholderText('min'), '45')
  )
  expect(setWaterIntake).toHaveBeenCalledWith({
    cups: 9,
    liters: '2.1',
    onces: 71
  })
})
