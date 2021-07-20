import React from 'react'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Sidebar from './Sidebar'
const setIsNavOpen = jest.fn()
jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
      replace: jest.fn(),
      push: jest.fn()
    }
  }
}))
it('close nav when click on a navLink', async () => {
  render(<Sidebar setIsNavOpen={setIsNavOpen} isNavOpen={true} />)
  await act(async () => userEvent.click(screen.getByText('Search')))
  expect(setIsNavOpen).toHaveBeenCalled()
  expect(setIsNavOpen).toHaveBeenCalledWith(false)
})

it('is not visible when nav is close', async () => {
  render(<Sidebar setIsNavOpen={setIsNavOpen} isNavOpen={false} />)
  expect(screen.getByTestId('sidebar')).toHaveStyle('left:', '-60rem')
})
it('is visible when nav is open', async () => {
  render(<Sidebar setIsNavOpen={setIsNavOpen} isNavOpen={true} />)
  expect(screen.getByTestId('sidebar')).toHaveStyle('left:', '0')
})
