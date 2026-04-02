import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import LandingPage from '../components/LandingPage'

describe('LandingPage', () => {
  it('renders the title with FOX and CODING', () => {
    render(<LandingPage />)
    const title = screen.getByTestId('title')
    expect(title).toHaveTextContent('FOX')
    expect(title).toHaveTextContent('CODING')
  })

  it('renders FOX in gold and CODING in teal', () => {
    render(<LandingPage />)
    const title = screen.getByTestId('title')
    const foxSpan = title.querySelector('.fox')
    const codingSpan = title.querySelector('.coding')
    expect(foxSpan).toHaveTextContent('FOX')
    expect(codingSpan).toHaveTextContent('CODING')
  })

  it('renders COMING SOON text', () => {
    render(<LandingPage />)
    expect(screen.getByTestId('coming-soon')).toHaveTextContent('COMING SOON')
  })

  it('renders PRESS START button', () => {
    render(<LandingPage />)
    expect(screen.getByTestId('press-start')).toHaveTextContent('PRESS START')
  })

  it('renders the PixelFox component', () => {
    render(<LandingPage />)
    expect(screen.getByTestId('pixel-fox')).toBeInTheDocument()
  })

  it('renders the high score display', () => {
    render(<LandingPage />)
    expect(screen.getByTestId('high-score')).toHaveTextContent(
      'HIGH SCORE: 999,999'
    )
  })

  it('renders the tagline', () => {
    render(<LandingPage />)
    expect(screen.getByTestId('tagline')).toHaveTextContent(
      'CRAFTING CODE, ONE PIXEL AT A TIME'
    )
  })

  it('renders the footer with copyright', () => {
    render(<LandingPage />)
    const footer = screen.getByTestId('footer')
    expect(footer).toHaveTextContent('INSERT COIN TO CONTINUE')
    expect(footer).toHaveTextContent('2026 FOXCODING')
  })

  it('renders 3 fox emoji lives', () => {
    render(<LandingPage />)
    const lives = screen.getByTestId('lives')
    const lifeElements = lives.querySelectorAll('.life')
    expect(lifeElements).toHaveLength(3)
  })

  it('renders star and particle containers', () => {
    render(<LandingPage />)
    expect(screen.getByTestId('stars')).toBeInTheDocument()
    expect(screen.getByTestId('particles')).toBeInTheDocument()
  })
})
