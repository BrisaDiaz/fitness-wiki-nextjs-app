import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from './Header'
import client from 'next-auth/client'

jest.mock('next-auth/client')

it('display signin and signup link when there is not session', () => {
  client.useSession.mockReturnValueOnce([false, false])
  render(<Header />)
  expect(screen.getByText('Signin')).toBeInTheDocument()
  expect(screen.getByText('Signup')).toBeInTheDocument()
})

it('display Logout link when there is not session', () => {
  const Session = {
    expires: '1',
    user: { email: 'a', name: 'Delta', image: 'c' }
  }

  client.useSession.mockReturnValueOnce([Session, false])
  render(<Header />)
  expect(screen.getByText('Logout')).toBeInTheDocument()
})
