import React from 'react'
import { act, render, screen, waitFor } from '@testing-library/react'
import Layout from './Layout'
import userEvent from '@testing-library/user-event'
import client from 'next-auth/client'
jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn()
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null)
    }
  }
}))
jest.mock('next-auth/client')

beforeEach(() => {
  const useRouter = jest.spyOn(require('next/router'), 'useRouter')
  useRouter.mockImplementation(() => ({
    route: '/',
    pathname: '',
    query: '',
    asPath: '',
    push: jest.fn(),
    events: {
      on: jest.fn(),
      off: jest.fn()
    },
    beforePopState: jest.fn(() => null),
    prefetch: jest.fn(() => null)
  }))
})

describe('layout with session', () => {
  beforeEach(() => {
    client.useSession.mockReturnValue([
      {
        user: {
          email: 'foo@bar.com'
        }
      },
      false
    ])

    render(
      <Layout>
        <section>
          <h1>Some Page Title</h1>
        </section>
      </Layout>
    )
  })

  it('reder pages as childrens correctly', async () => {
    expect(screen.getByText('Some Page Title')).toBeInTheDocument()
  })
  it('push page aside', async () => {
    expect(screen.getByTestId('page-wrapper')).toHaveStyle('left:', '0px;')
    await waitFor(() => screen.getByTestId('menuBtn'))
    await act(async () => userEvent.click(screen.getByTestId('menuBtn')))

    expect(screen.getByTestId('page-wrapper')).toHaveStyle('left:', '60rem;')
  })
})

describe('layout without session', () => {
  beforeEach(() => {
    client.useSession.mockReturnValue([false, false])

    render(
      <Layout>
        <section>
          <h1>Some Page Title</h1>
        </section>
      </Layout>
    )
  })
  it('reder pages as childrens even if there is not session', async () => {
    expect(screen.getByText('Some Page Title')).toBeInTheDocument()
  })
  it('dose not render menuBtn and sidebar if there is not session', () => {
    expect(screen.queryByTestId('menuBtn')).not.toBeInTheDocument()
    expect(screen.queryByTestId('sidebar')).not.toBeInTheDocument()
  })
})
