// import { describe, expect, it } from 'vitest'
import Page from '../app/(app)/(root)/page'
import { render, screen, userEvent } from './react-test-utils'

describe('Home component', () => {
  it('renders correctly', () => {
    render(<Page />)
    expect(screen.getByText(/Get started by editing/i)).toBeInTheDocument()
    expect(screen.getByAltText('Vercel Logo')).toHaveAttribute(
      'src',
      '/vercel.svg',
    )
    expect(screen.getByText(/Docs/i)).toBeInTheDocument()
  })

  it('renders images correctly', () => {
    render(<Page />)
    const nextLogo = screen.getByAltText('Next.js Logo')

    expect(nextLogo).toHaveAttribute('src', '/next.svg')
    expect(nextLogo).toHaveAttribute('height', '24')
  })

  it('handles click events', () => {
    const user = userEvent.setup()
    render(<Page />)
    const learnLink = screen.getByRole('link', { name: /Learn/i })

    expect(learnLink).toBeInTheDocument()
    // eslint-disable-next-line testing-library/no-node-access
    user.click(learnLink)
  })
})
