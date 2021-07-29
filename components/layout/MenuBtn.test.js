import React from 'react'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import MenuBtn from './MenuBtn'

const setIsNavOpen = jest.fn()

it('open menu nav when this is close', async () => {
  render(<MenuBtn setIsNavOpen={setIsNavOpen} isNavOpen={false} />)
  await act(async () => userEvent.click(screen.getByTestId('menuBtn')))
  expect(setIsNavOpen).toHaveBeenCalled()
  expect(setIsNavOpen).toHaveBeenCalledWith(true)
})
it('close menu nav when this is open', async () => {
  render(<MenuBtn setIsNavOpen={setIsNavOpen} isNavOpen={true} />)
  await act(async () => userEvent.click(screen.getByTestId('menuBtn')))
  expect(setIsNavOpen).toHaveBeenCalled()
  expect(setIsNavOpen).toHaveBeenCalledWith(false)
})
