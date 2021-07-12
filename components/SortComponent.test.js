import React from 'react'
import { render, screen, act, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SortComponent from './SortComponent'
import { beforeEach } from '@jest/globals'
import consts from '../consts/defaultQueryParams'

const onSortChange = jest.fn(),
  onDirectionChange = jest.fn(),
  props = {
    label: 'Sort By:',
    options: consts.SORT_OPTIONS,
    name: 'sortType',
    directions: consts.SORT_DIRECIONS,
    onSortChange,
    onDirectionChange,
    sortDirection: 'desc'
  }

beforeEach(() => {
  render(<SortComponent {...props} />)
})

it('render all props correctly', () => {
  expect(screen.getByText('Sort By:')).toBeInTheDocument()
  expect(screen.getByRole('combobox')).toHaveValue(consts.SORT_OPTIONS[0])
  expect(screen.getAllByRole('option')).toHaveLength(consts.SORT_OPTIONS.length)
  expect(screen.getByLabelText('Less')).toBeChecked()
})

it('call the correct setter funcions', async () => {
  const select = screen.getByRole('combobox')
  const options = screen.getAllByRole('option')
  await act(async () =>
    fireEvent.change(select, {
      target: { value: options[3].value }
    })
  )
  expect(onSortChange).toHaveBeenCalled()
  expect(select).toHaveValue(options[3].value)

  await act(async () => userEvent.click(screen.getByLabelText('More')))

  expect(onDirectionChange).toHaveBeenCalled()
})
