import { render, screen } from '@testing-library/react'
import Hero from '../components/Hero'

jest.mock('framer-motion', () => ({
  motion: {
    h1: ({ children, ...p }: any) => <h1 {...p}>{children}</h1>,
    p: ({ children, ...p }: any) => <p {...p}>{children}</p>,
    a: ({ children, ...p }: any) => <a {...p}>{children}</a>,
  },
}))

describe('Hero', () => {
  it('renders the name', () => {
    render(<Hero />)
    expect(screen.getByText(/Jacob/i)).toBeInTheDocument()
  })
})