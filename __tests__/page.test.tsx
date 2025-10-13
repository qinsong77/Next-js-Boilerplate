// import { describe, expect, it } from 'vitest'
import Page from '../app/(app)/(root)/page'
import { render, screen, userEvent } from './react-test-utils'

vi.mock('@/components/text-splitter', () => {
  return {
    TextSplitter: vi.fn((props) => {
      console.log('Mocked TextSplitter rendered with props:', props)
      return <div data-testid="MockTextSplitter">Mocked Splitter</div>
    }),
  }
})

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

  it('handles click events', async () => {
    const user = userEvent.setup()
    render(<Page />)
    const learnLink = screen.getByRole('link', { name: /Learn/i })

    expect(learnLink).toBeInTheDocument()
    await user.click(learnLink)
  })
})
