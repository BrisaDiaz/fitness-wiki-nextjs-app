import React from 'react'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import PaginationComponent from './PaginationComponent.jsx'

const setPage = jest.fn(),
  setOffset = jest.fn()

const props = {
  totalResults: 28,
  resultsPerPage: 6,
  setPage,
  setOffset
}

afterEach(() => {
  jest.clearAllMocks()
})

it('diplays the correct buttons', () => {
  render(<PaginationComponent page={1} {...props} />)
  expect(screen.getByText('1')).toBeInTheDocument()
  expect(screen.getByText('2')).toBeInTheDocument()
  expect(screen.getByText('3')).toBeInTheDocument()
  expect(screen.queryByText('4')).not.toBeInTheDocument()
  expect(screen.getByRole('button', { name: 'Next' })).toBeInTheDocument()
  expect(screen.queryByRole('button', { name: 'Prev' })).not.toBeInTheDocument()
})

it('call functions with correct values and centralized  select number when clicking next ', async () => {
  render(<PaginationComponent page={1} {...props} />)
  await act(async () =>
    userEvent.click(screen.getByRole('button', { name: 'Next' }))
  )

  expect(setPage.mock.calls.length).toBe(1)
  expect(setPage).toHaveBeenCalledWith(2)
  expect(setOffset.mock.calls.length).toBe(1)
  expect(setOffset).toHaveBeenCalledWith(6)
})

it('call functions with correct values and sentralized  select number when clicking prev ', async () => {
  render(<PaginationComponent page={5} {...props} />)

  expect(screen.queryByRole('button', { name: 'Next' })).not.toBeInTheDocument()

  await act(async () =>
    userEvent.click(screen.getByRole('button', { name: 'Prev' }))
  )

  expect(setPage.mock.calls.length).toBe(1)
  expect(setPage).toHaveBeenCalledWith(4)
  expect(setOffset.mock.calls.length).toBe(1)
  expect(setOffset).toHaveBeenCalledWith(18)
})

it('call functions with correct values and sentralized  select number when clicking number button directly ', async () => {
  render(<PaginationComponent page={5} {...props} />)

  await act(async () => userEvent.click(screen.getByText('3')))

  expect(setPage.mock.calls.length).toBe(1)
  expect(setPage).toHaveBeenCalledWith(3)
  expect(setOffset.mock.calls.length).toBe(1)
  expect(setOffset).toHaveBeenCalledWith(12)
})

it('diplay next and prev buttons when there are prev and next page', () => {
  render(<PaginationComponent page={3} {...props} />)
  expect(screen.queryByRole('button', { name: 'Next' })).toBeInTheDocument()
  expect(screen.queryByRole('button', { name: 'Prev' })).toBeInTheDocument()
})
