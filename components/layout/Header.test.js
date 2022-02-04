import React from 'react'
import { render, screen, act } from '@testing-library/react'
import Header from './Header'
import userEvent from '@testing-library/user-event'

const signOut = jest.fn()
const Session = {
  expires: '1',
  user: { email: 'a', name: 'Delta', image: 'c' }
}
it('dose not render any link while is still loading', () => {
  render(<Header loading={true} session={false} signOut={signOut} />)
  expect(screen.queryByText('Sign In')).not.toBeInTheDocument()
  expect(screen.queryByText('Sign Up')).not.toBeInTheDocument()
  expect(screen.queryByText('Logout')).not.toBeInTheDocument()
})
it('display signin and signup link when theire is not session', () => {
  render(<Header loading={false} session={false} signOut={signOut} />)
  expect(screen.getByText('Sign In')).toBeInTheDocument()
  expect(screen.getByText('Sign Up')).toBeInTheDocument()
  expect(screen.queryByText('Logout')).not.toBeInTheDocument()
})

it('display Logout link when theire is not session', () => {
  render(<Header loading={false} signOut={signOut} session={Session} />)
  expect(screen.getByText('Logout')).toBeInTheDocument()
  expect(screen.queryByText('Sign In')).not.toBeInTheDocument()
  expect(screen.queryByText('Sign Up')).not.toBeInTheDocument()
})

it('calls logout function when click on signOut', async () => {
  render(<Header loading={false} signOut={signOut} session={Session} />)
  await act(async () => userEvent.click(screen.getByText('Logout')))

  expect(signOut).toHaveBeenCalled()
})
