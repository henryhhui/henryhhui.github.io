import { Reveal } from '../components/Reveal'
import { profile } from '../data/profile'

export function About() {
  return (
    <section className="section about-section" id="about" data-section aria-labelledby="about-title">
      <div className="page-shell">
        <div className="about-heading">
          <Reveal>
            <p className="eyebrow">01 — A little about me</p>
            <h2 className="section-title" id="about-title">Curious by nature.<br /><span>Hands-on by choice.</span></h2>
          </Reveal>
          <Reveal delay={90}>
            <p className="about-lede">{profile.aboutLead}</p>
          </Reveal>
        </div>
        <div className="about-grid">
          {profile.aboutNotes.map((note, index) => (
            <Reveal
              className={`about-note${index === 2 ? ' about-note-wide' : ''}`}
              delay={index * 90}
              key={note.label}
            >
              <span className="note-number mono">{note.label}</span>
              <div>
                <p>{note.text}</p>
                {index === 2 && (
                  <div className="about-tags">
                    {profile.interests.map((interest) => <span key={interest}>{interest}</span>)}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
