import React from 'react'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AuthProviderButtons from './AuthProviderButtons'
jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '',
      pathname: '',
      query: '',
      asPath: ''
    }
  }
}))
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const setServerMessage = jest.fn()
const signIn = jest.fn()

it('calls sigin function when click button', async () => {
  useRouter.mockImplementation(() => ({
    route: '/auth/signIn',
    pathname: '',
    query: '',
    asPath: '',
    replace: jest.fn(),
    push: jest.fn()
  }))
  render(
    <AuthProviderButtons signIn={signIn} setServerMessage={setServerMessage} />
  )
  const googleBtn = screen.getByRole('button', {
    name: /Sign in with Google/i
  })
  const githubBtn = screen.getByRole('button', {
    name: /Sign in with GitHub/i
  })

  await act(async () => userEvent.click(googleBtn))
  await act(async () => userEvent.click(githubBtn))
  expect(signIn.mock.calls.length).toBe(2)
  expect(setServerMessage.mock.calls.length).toBe(2)
})
