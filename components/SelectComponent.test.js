import React from 'react'
import { render, screen, act, fireEvent } from '@testing-library/react'
import SelectComponent from './SelectComponent'
import constants from '../constants/defaultQueryParams'
import { beforeEach } from '@jest/globals'

const onChange = jest.fn()

const props = {
  onChange,
  name: 'dietType',
  globalOption: 'All',
  label: 'Diet Type:',
  options: constants.DIET_OPTIONS
}
beforeEach(() => {
  render(<SelectComponent {...props} />)
})

it('render all props correctly', () => {
  expect(screen.getByText('Diet Type:')).toBeInTheDocument()
  expect(screen.getByRole('combobox')).toHaveValue('All')
  expect(screen.getAllByRole('option')).toHaveLength(
    constants.DIET_OPTIONS.length + 1
  )
})

it('set the select option as value on change', async () => {
  const select = screen.getByRole('combobox')
  const options = screen.getAllByRole('option')
  await act(async () =>
    fireEvent.change(select, {
      target: { value: options[3].value }
    })
  )
  expect(onChange).toHaveBeenCalled()
  expect(select).toHaveValue(options[3].value)
})
