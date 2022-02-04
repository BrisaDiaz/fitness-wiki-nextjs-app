import React from 'react'
import { render, screen } from '@testing-library/react'
import mockErrors from '../../mocks/mockFormErrors'
import FormErrors from './FormErrors.jsx'

const emptyErrors = {}

it("doesn't render when theire is not errors", () => {
  const { container } = render(<FormErrors errors={emptyErrors} />)
  expect(container).not.toContainHTML('ul')
})

it('renders the error messages correctly', () => {
  render(<FormErrors errors={mockErrors} />)
  expect(screen.getByText('Invalid email.')).toBeInTheDocument()
  expect(screen.getByText('Last name is required.')).toBeInTheDocument()
  expect(screen.getByText('Password is required.')).toBeInTheDocument()
})
