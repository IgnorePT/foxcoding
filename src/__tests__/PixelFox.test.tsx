import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import PixelFox from '../components/PixelFox'

describe('PixelFox', () => {
  it('renders the pixel fox container', () => {
    render(<PixelFox />)
    expect(screen.getByTestId('pixel-fox')).toBeInTheDocument()
  })

  it('renders 160 pixel cells (16 columns x 10 rows)', () => {
    render(<PixelFox />)
    const container = screen.getByTestId('pixel-fox')
    const pixels = container.querySelectorAll('.pixel')
    expect(pixels).toHaveLength(160)
  })

  it('applies background colors to pixels', () => {
    render(<PixelFox />)
    const container = screen.getByTestId('pixel-fox')
    const pixels = container.querySelectorAll('.pixel')
    // First row starts with transparent (background), then orange for ears
    const firstPixel = pixels[0] as HTMLElement
    const thirdPixel = pixels[2] as HTMLElement
    expect(firstPixel.style.backgroundColor).toBe('transparent')
    expect(thirdPixel.style.backgroundColor).toBe('rgb(255, 140, 0)') // orange
  })
})
