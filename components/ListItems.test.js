import React from 'react'
import { render, screen, act, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ListItems from './ListItems'

const setItems = jest.fn()
const items = ['cheese', 'meat', 'milk']
beforeEach(() => {
  render(<ListItems setItems={setItems} items={items} />)
})
it('display items and delete them when clickin the delete button', async () => {
  items.forEach((item) => {
    expect(screen.getByText(item, { excact: false })).toBeInTheDocument()
  })
  expect(screen.getAllByRole('button', { name: 'X' })).toHaveLength(
    items.length
  )
  const cheeseButton = screen.getAllByRole('button', { name: 'X' })[0]
  const listWidthOutCheese = items.filter((item) => item !== 'cheese')

  await act(async () => userEvent.click(cheeseButton))

  expect(setItems).toHaveBeenCalledWith(listWidthOutCheese)
})
it('adds a new item to the list', async () => {
  await act(async () =>
    fireEvent.change(screen.getByPlaceholderText('Exclude ingredient...'), {
      target: {
        value: 'fish'
      }
    })
  )

  expect(screen.getByPlaceholderText('Exclude ingredient...')).toHaveValue(
    'fish'
  )
  await act(async () =>
    fireEvent.submit(screen.getByRole('button', { name: 'Add' }))
  )
  const listWithFish = [...items, 'fish']
  expect(setItems).toHaveBeenLastCalledWith(listWithFish)
})
