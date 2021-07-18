import React from 'react'
import { render, screen, act, fireEvent, waitFor } from '@testing-library/react'
import AuthSection from './AuthSection.jsx'
import SignupForm from './SignupForm.jsx'
import SigninForm from './SigninForm.jsx'
import AuthProviderButtons from './AuthProviderButtons.jsx'
import { signIn } from 'next-auth/client'

jest.mock('next-auth/client')
jest.mock('next/config', () => () => ({ publicRuntimeConfig: { HOST } }))

const HOST = 'http://localehost:3000'

afterEach(() => {
  jest.clearAllMocks()
})

const signupProps = {
  Form: SignupForm,
  linkText: 'Did you already have an account? Sign In',
  linkURL: '/auth/signIn',
  title: 'Sign Up'
}
const signinProps = {
  Form: SigninForm,
  linkText: 'You have not an account yet? Sign Up',
  linkURL: '/auth/signUp',
  title: 'Sign In',
  AuthProviderButtons: AuthProviderButtons
}
const authProviders = {
  github: 'Sign in with GitHub',
  google: 'Sign in with Google'
}
jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/auth/signIn',
      pathname: '',
      query: '',
      asPath: '',
      replace: jest.fn(),
      push: jest.fn()
    }
  }
}))
describe('signup form section', () => {
  beforeEach(() => {
    render(<AuthSection {...signupProps} />)
  })
  it('initialy renders props correctly', () => {
    const link = screen.getByText(signupProps.linkText)
    expect(screen.getByText(signupProps.title)).toBeInTheDocument()

    expect(link).toHaveAttribute('href', signupProps.linkURL)
  })

  it('diplay error messages  and  delete those who input is valid', async () => {
    const passwordInput = screen.getByPlaceholderText('Password*')
    const nameInput = screen.getByPlaceholderText('First Name*')

    await act(async () => fireEvent.focus(passwordInput))
    await act(async () =>
      fireEvent.change(passwordInput, { target: { value: 'pass' } })
    )
    await act(async () => fireEvent.blur(passwordInput))

    expect(
      screen.getByText('Password must be at least 5 characters.')
    ).toBeInTheDocument()

    await act(async () => fireEvent.focus(nameInput))

    await act(async () => fireEvent.blur(nameInput))
    expect(screen.getByText('Name is required.')).toBeInTheDocument()

    await act(async () =>
      fireEvent.change(nameInput, { target: { value: 'userName' } })
    )
    await act(async () => fireEvent.blur(nameInput))
    expect(screen.queryByText('Name is required.')).not.toBeInTheDocument()
    expect(
      screen.getByText('Password must be at least 5 characters.')
    ).toBeInTheDocument()
  })
  it('trigger fetch request when submit and renders server error message', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            error: true,
            message: 'This account already exist'
          })
      })
    )
    const emailInput = screen.getByPlaceholderText('Email Address*')
    const passwordInput = screen.getByPlaceholderText('Password*')
    const nameInput = screen.getByPlaceholderText('First Name*')
    const lastnameInput = screen.getByPlaceholderText('Last Name*')
    const submit = screen.getByRole('button', {
      name: /Sign up/i
    })

    await act(async () => fireEvent.focus(nameInput))

    await act(async () =>
      fireEvent.change(nameInput, { target: { value: 'userName' } })
    )
    await act(async () => fireEvent.blur(nameInput))

    await act(async () =>
      fireEvent.change(lastnameInput, { target: { value: 'userLastName' } })
    )
    await act(async () => fireEvent.blur(lastnameInput))
    await act(async () => fireEvent.focus(emailInput))
    await act(async () =>
      fireEvent.change(emailInput, {
        target: { value: 'example@email.com' }
      })
    )
    await act(async () => fireEvent.blur(emailInput))
    await act(async () => fireEvent.focus(passwordInput))
    await act(async () =>
      fireEvent.change(passwordInput, {
        target: { value: 'secretPassword' }
      })
    )

    await act(async () => fireEvent.blur(passwordInput))

    expect(global.fetch).not.toHaveBeenCalled()

    await act(async () => fireEvent.submit(submit))

    expect(global.fetch).toHaveBeenCalled()
    await waitFor(() => screen.getByText('This account already exist'))
    expect(screen.getByText('This account already exist')).toBeInTheDocument()
  })
})

describe('initialy signin form section', () => {
  beforeEach(() => {
    signIn.mockReturnValueOnce(() => true)
    render(<AuthSection {...signinProps} />)
  })

  it('initialy renders props correctly', () => {
    const link = screen.getByText(signinProps.linkText)

    expect(screen.getByText(signinProps.title)).toBeInTheDocument()

    expect(link).toHaveAttribute('href', signinProps.linkURL)
    expect(screen.getByText(authProviders.google)).toBeInTheDocument()
    expect(screen.getByText(authProviders.github)).toBeInTheDocument()
  })
})
