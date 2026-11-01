import { Reveal } from '../components/Reveal'
import { profile } from '../data/profile'

export function Contact() {
  return (
    <section className="contact-section section-dark" id="contact" data-section aria-labelledby="contact-title">
      <div className="page-shell contact-shell">
        <Reveal>
          <p className="eyebrow">07 — Your move</p>
          <h2 id="contact-title">Let’s build<br /><span>something</span><br />together.</h2>
          <p className="contact-description">For opportunities, thoughtful ideas or a good conversation about technology, I’d love to hear from you.</p>
          <a className="button button-lime contact-button" href={`mailto:${profile.contact.email}`}>Say hello <span aria-hidden="true">↗</span></a>
        </Reveal>
        <Reveal className="contact-links" delay={100}>
          <a href={`mailto:${profile.contact.email}`}><span>Email</span><strong>{profile.contact.email}</strong><i aria-hidden="true">↗</i></a>
          <a href={profile.contact.linkedin} target="_blank" rel="noreferrer" aria-label="Connect with Henry on LinkedIn (opens in a new tab)"><span>LinkedIn</span><strong>linkedin.com/in/henryhhui</strong><i aria-hidden="true">↗</i></a>
          <a href={profile.contact.github} target="_blank" rel="noreferrer" aria-label="View Henry’s GitHub profile (opens in a new tab)"><span>GitHub</span><strong>github.com/henryhhui</strong><i aria-hidden="true">↗</i></a>
        </Reveal>
        <footer className="site-footer">
          <a className="wordmark footer-mark" href="#home">HH<span>.</span></a>
          <span>Made with curiosity, in Hong Kong.</span>
          <span>© {new Date().getFullYear()} Henry Hui</span>
          <a className="back-top mono" href="#home">BACK TO TOP ↑</a>
        </footer>
      </div>
    </section>
  )
}
