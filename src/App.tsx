import { useEffect } from 'react'
import { SiteNav } from './components/SiteNav'
import { About } from './sections/About'
import { Beyond } from './sections/Beyond'
import { Contact } from './sections/Contact'
import { Education } from './sections/Education'
import { Experience } from './sections/Experience'
import { Hero } from './sections/Hero'
import { Projects } from './sections/Projects'
import { Skills } from './sections/Skills'

export default function App() {
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) {
      document.querySelectorAll('.reveal').forEach((element) => element.classList.add('is-visible'))
    }
  }, [])

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteNav />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Beyond />
        <Education />
        <Skills />
        <Contact />
      </main>
    </>
  )
}
