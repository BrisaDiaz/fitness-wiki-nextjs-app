import React from 'react'
import { render, screen } from '@testing-library/react'
import mockErrors from '../mocks/mockFornErrors'
import FormErrors from './FormErrors.jsx'

const emtyErrors = {}

it("dosen't render when there is not errors", () => {
  const { container } = render(<FormErrors errors={emtyErrors} />)
  expect(container).not.toContainHTML('ul')
})

it('renders the error messages correctly', () => {
  render(<FormErrors errors={mockErrors} />)
  expect(screen.getByText('Invalid email.')).toBeInTheDocument()
  expect(screen.getByText('Last name is required.')).toBeInTheDocument()
  expect(screen.getByText('Password is required.')).toBeInTheDocument()
})
