import { useEffect, useState } from 'react'
import { profile } from '../data/profile'

export function Hero() {
  const [typedText, setTypedText] = useState('')

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTypedText(profile.taglines[0])
      return
    }

    let phraseIndex = 0
    let position = 0
    let deleting = false
    let timeout = 0

    const tick = () => {
      const phrase = profile.taglines[phraseIndex]
      if (!deleting) {
        position = Math.min(position + 1, phrase.length)
        setTypedText(phrase.slice(0, position))
        if (position === phrase.length) {
          deleting = true
          timeout = window.setTimeout(tick, 1500)
          return
        }
      } else {
        position = Math.max(position - 1, 0)
        setTypedText(phrase.slice(0, position))
        if (position === 0) {
          deleting = false
          phraseIndex = (phraseIndex + 1) % profile.taglines.length
          timeout = window.setTimeout(tick, 280)
          return
        }
      }
      timeout = window.setTimeout(tick, deleting ? 38 : 72)
    }

    timeout = window.setTimeout(tick, 500)
    return () => window.clearTimeout(timeout)
  }, [])

  return (
    <section className="hero section-dark" id="home" data-section aria-labelledby="hero-title">
      <div className="hero-grain" aria-hidden="true" />
      <div className="hero-inner page-shell">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow"><span className="status-dot" /> Hong Kong · Always building</p>
          <h1 id="hero-title">Hello,<br />I’m Henry<span className="hero-period">.</span></h1>
          <p className="hero-intro">
            {profile.heroIntro}
          </p>
          <p className="hero-type-line" aria-label={`I’m a ${typedText}`}>
            <span className="type-prefix">I’m a </span>
            <span aria-hidden="true">{typedText}</span>
            <span className="type-cursor" aria-hidden="true" />
          </p>
          <div className="hero-actions">
            <a className="button button-lime" href="#projects">Explore my work <span aria-hidden="true">↘</span></a>
            <a className="text-link text-link-light" href="https://www.linkedin.com/in/henryhhui/" target="_blank" rel="noreferrer">
              View my LinkedIn <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="hero-footnote">
            <span className="mono">01 / 08</span>
            <span>Scroll to explore the journey</span>
          </div>
        </div>
        <div className="hero-portrait-wrap">
          <div className="portrait-orbit portrait-orbit-one" aria-hidden="true" />
          <div className="portrait-orbit portrait-orbit-two" aria-hidden="true" />
          <div className="hero-portrait">
            <img src="/profile.jpeg" alt="Henry at the Golden Gate Bridge in San Francisco" fetchPriority="high" />
          </div>
          <div className="portrait-caption">
            <span className="caption-mark">H.</span>
            <span>Curiosity, built into<br />everything I do.</span>
          </div>
          <span className="portrait-index mono">HKU · CS ’27</span>
        </div>
      </div>
      <a className="scroll-cue" href="#about" aria-label="Scroll to About section"><span />Scroll</a>
    </section>
  )
}
