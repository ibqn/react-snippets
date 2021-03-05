import { render, screen } from '@testing-library/react'
import App from './app'

test('renders snippets', () => {
  render(<App />)
  const linkElement = screen.getByText(/snippets/i)
  expect(linkElement).toBeInTheDocument()
})
