import { awards, education } from '../data/education'
import { Reveal } from '../components/Reveal'

export function Education() {
  return (
    <section className="section education-section section-paper" id="education" data-section aria-labelledby="education-title">
      <div className="page-shell">
        <div className="education-heading">
          <Reveal>
            <p className="eyebrow">05 — Education & recognition</p>
            <h2 className="section-title" id="education-title">Where it<br /><span>started.</span></h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="section-description">A university journey grounded in computing, broadened by finance and an exchange semester abroad.</p>
          </Reveal>
        </div>
        <div className="education-grid">
          <div className="education-timeline">
            {education.map((entry, index) => (
              <Reveal key={entry.institution} delay={index * 80}>
                <article className="education-entry">
                  <span className="education-marker" aria-hidden="true" />
                  <span className="education-date mono">{entry.period}</span>
                  <h3>{entry.institution}</h3>
                  <p className="education-qualification">{entry.qualification}</p>
                  {entry.location && <p className="education-location">{entry.location}</p>}
                  {entry.details?.map((detail) => <p className="education-detail" key={detail}>{detail}</p>)}
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="awards-panel" delay={120}>
            <div className="awards-panel-heading">
              <span className="eyebrow">Recognition</span>
              <span className="mono">14 HIGHLIGHTS</span>
            </div>
            {awards.map((award, index) => (
              <div className={`award-row${award.category === 'Earlier achievement' ? ' award-older' : ''}`} key={award.name}>
                <span className="award-index mono">{String(index + 1).padStart(2, '0')}</span>
                <div><strong>{award.name}</strong><span>{award.category}</span></div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
