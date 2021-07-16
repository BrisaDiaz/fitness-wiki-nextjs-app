import React from 'react'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AuthProviderButtons from './AuthProviderButtons'
import { signIn } from 'next-auth/client'

jest.mock('next-auth/client')

it('calls sigin function when click button', async () => {
  const signinMock = signIn.mockReturnValueOnce(() => jest.fn())
  render(<AuthProviderButtons />)
  const googleBtn = screen.getByRole('button', {
    name: /Sign in with Google/i
  })
  const githubBtn = screen.getByRole('button', {
    name: /Sign in with GitHub/i
  })

  await act(async () => userEvent.click(googleBtn))
  await act(async () => userEvent.click(githubBtn))
  expect(signinMock.mock.calls.length).toBe(2)
})
