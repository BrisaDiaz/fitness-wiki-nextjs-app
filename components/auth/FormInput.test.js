import React from 'react'
import { render, screen } from '@testing-library/react'

import FormInput from './FormInput.jsx'

const emailProps = {
  placeholder: '*Email Address',
  type: 'email',
  register: {},
  errors: {}
}
const passwordProps = {
  placeholder: '*Password',
  type: 'password',
  register: {},
  errors: {}
}
const textProps = {
  placeholder: '*Name',
  type: 'text',
  register: {},
  errors: {}
}
const widthErrorsInput = {
  placeholder: '*Name',
  type: 'text',
  register: {},
  errors: {}
}
describe('input render', () => {
  it('render email inputs correctly', () => {
    render(<FormInput {...emailProps} />)
    expect(screen.getByPlaceholderText('*Email Address')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('*Email Address')).toHaveAttribute(
      'type',
      'email'
    )
  })
  it('render password inputs correctly', () => {
    render(<FormInput {...passwordProps} />)
    expect(screen.getByPlaceholderText('*Password')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('*Password')).toHaveAttribute(
      'type',
      'password'
    )
  })
  it('render text inputs correctly', () => {
    render(<FormInput {...textProps} />)
    expect(screen.getByPlaceholderText('*Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('*Name')).toHaveAttribute('type', 'text')
  })
})

it('display red borders when input contains errors', () => {
  render(<FormInput {...widthErrorsInput} />)
  expect(screen.getByPlaceholderText('*Name')).toHaveStyle(
    'border-color:rgb(185 28 28);'
  )
})
