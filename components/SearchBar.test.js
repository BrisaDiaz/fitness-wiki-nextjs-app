import React from 'react'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SearchBar from './SearchBar.jsx'

const onChange = jest.fn()

it('set the correct value onChange', async () => {
  render(<SearchBar onChange={onChange} />)

  const input = screen.getByRole('searchbox')

  await act(async () => userEvent.type(input, 'pasta with garlic'))
  expect(input).toHaveValue('pasta with garlic')
  expect(onChange).toHaveBeenCalled()

  await act(async () => userEvent.type(input, ' and Breadcrumbs'))
  expect(input).toHaveValue('pasta with garlic and Breadcrumbs')

  expect(onChange).toHaveBeenCalled()
})
