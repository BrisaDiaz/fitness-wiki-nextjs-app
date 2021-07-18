import React from 'react'
import { render, screen } from '@testing-library/react'
import AuthProviderButtons from './AuthProviderButtons.jsx'
import AuthSection from './AuthSection.jsx'
import SigninForm from './SigninForm.jsx'

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/auth/signIn',
      pathname: '',
      query: { error: 'authentication trown error' },
      asPath: '',
      replace: jest.fn()
    }
  }
}))
jest.mock('next/config', () => () => ({ publicRuntimeConfig: { HOST } }))

const HOST = 'http://localehost:3000'
const signinProps = {
  Form: SigninForm,
  linkText: 'You have not an account yet? Sign Up',
  linkURL: '/auth/signUp',
  title: 'Sign In',
  AuthProviderButtons: AuthProviderButtons
}
it('renders the errors got from the URL query', async () => {
  render(<AuthSection {...signinProps} />)
  expect(
    await screen.findByText('authentication trown error')
  ).toBeInTheDocument()
})
