import React from 'react'
import { render, screen, act } from '@testing-library/react'
import Header from './Header'
import { useSession, signOut } from 'next-auth/client'
import userEvent from '@testing-library/user-event'

jest.mock('next-auth/client')

it('dose not render any link while is still loading', () => {
  useSession.mockReturnValueOnce([false, true])
  render(<Header />)
  expect(screen.queryByText('Sign In')).not.toBeInTheDocument()
  expect(screen.queryByText('Sign Up')).not.toBeInTheDocument()
  expect(screen.queryByText('Logout')).not.toBeInTheDocument()
})
it('display signin and signup link when there is not session', () => {
  useSession.mockReturnValueOnce([false, false])
  render(<Header />)
  expect(screen.getByText('Sign In')).toBeInTheDocument()
  expect(screen.getByText('Sign Up')).toBeInTheDocument()
  expect(screen.queryByText('Logout')).not.toBeInTheDocument()
})

it('display Logout link when there is not session', () => {
  const Session = {
    expires: '1',
    user: { email: 'a', name: 'Delta', image: 'c' }
  }

  useSession.mockReturnValueOnce([Session, false])
  render(<Header />)
  expect(screen.getByText('Logout')).toBeInTheDocument()
  expect(screen.queryByText('Sign In')).not.toBeInTheDocument()
  expect(screen.queryByText('Sign Up')).not.toBeInTheDocument()
})

it('calls logout function when click on signOut', async () => {
  const Session = {
    expires: '1',
    user: { email: 'a', name: 'Delta', image: 'c' }
  }
  const signOutMock = signOut.mockReturnValueOnce(() => jest.fn())
  useSession.mockReturnValueOnce([Session, false])
  render(<Header />)
  await act(async () => userEvent.click(screen.getByText('Logout')))

  expect(signOutMock).toHaveBeenCalled()
})
