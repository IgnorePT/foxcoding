import { useEffect, useRef } from 'react'
import PixelFox from './PixelFox'

const STAR_COUNT = 60
const PARTICLE_COUNT = 15
const PARTICLE_COLORS = ['#ffd700', '#e94560', '#4ecdc4', '#ff8c00', '#00ff41']

export default function LandingPage() {
  const starsRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (starsRef.current) {
      for (let i = 0; i < STAR_COUNT; i++) {
        const star = document.createElement('div')
        star.className = 'star'
        star.style.left = `${Math.random() * 100}%`
        star.style.top = `${Math.random() * 100}%`
        star.style.animationDelay = `${Math.random() * 3}s`
        const size = `${Math.random() * 2 + 1}px`
        star.style.width = size
        star.style.height = size
        starsRef.current.appendChild(star)
      }
    }

    if (particlesRef.current) {
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const particle = document.createElement('div')
        particle.className = 'particle'
        particle.style.left = `${Math.random() * 100}%`
        particle.style.background =
          PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)]
        particle.style.animationDelay = `${Math.random() * 8}s`
        particle.style.animationDuration = `${6 + Math.random() * 6}s`
        particlesRef.current.appendChild(particle)
      }
    }
  }, [])

  return (
    <div className="landing">
      <div className="scanlines" />
      <div className="stars" ref={starsRef} data-testid="stars" />
      <div className="particles" ref={particlesRef} data-testid="particles" />

      <div className="container">
        <div className="high-score" data-testid="high-score">
          HIGH SCORE: 999,999
        </div>

        <PixelFox />

        <h1 className="title" data-testid="title">
          <span className="fox">FOX</span>
          <span className="coding">CODING</span>
        </h1>

        <p className="tagline" data-testid="tagline">
          CRAFTING CODE, ONE PIXEL AT A TIME
        </p>

        <div className="coming-soon" data-testid="coming-soon">
          &#9608; COMING SOON &#9608;
        </div>

        <button className="press-start" data-testid="press-start">
          PRESS START
        </button>

        <div className="lives" data-testid="lives">
          <span className="life">&#129418;</span>
          <span className="life">&#129418;</span>
          <span className="life">&#129418;</span>
        </div>
      </div>

      <footer className="footer" data-testid="footer">
        INSERT COIN TO CONTINUE &bull; &copy; 2026 FOXCODING
      </footer>
    </div>
  )
}
