import { useEffect, useState } from 'react'

const links = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Beyond', id: 'beyond' },
  { label: 'Education', id: 'education' },
  { label: 'Toolkit', id: 'skills' },
]

export function SiteNav() {
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const updateScroll = () => setScrolled(window.scrollY > 24)
    updateScroll()
    window.addEventListener('scroll', updateScroll, { passive: true })

    const sections = document.querySelectorAll<HTMLElement>('[data-section]')
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActiveSection(visible.target.id)
      },
      { rootMargin: '-28% 0px -58% 0px', threshold: [0, 0.2, 0.5, 0.8] },
    )
    sections.forEach((section) => observer.observe(section))

    return () => {
      window.removeEventListener('scroll', updateScroll)
      observer.disconnect()
    }
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <nav className="nav-shell" aria-label="Main navigation">
        <a className="wordmark" href="#home" onClick={closeMenu} aria-label="Henry Hui, home">
          HH<span>.</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
        <div id="primary-navigation" className={`nav-content${menuOpen ? ' is-open' : ''}`}>
          <div className="nav-links">
            {links.map(({ label, id }) => (
              <a
                key={id}
                href={`#${id}`}
                className={activeSection === id ? 'is-active' : ''}
                aria-current={activeSection === id ? 'location' : undefined}
                onClick={closeMenu}
              >
                {label}
              </a>
            ))}
          </div>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>
            Let’s talk <span aria-hidden="true">↗</span>
          </a>
        </div>
      </nav>
    </header>
  )
}
