import { useState } from 'react'
import { experiences } from '../data/experiences'
import { Reveal } from '../components/Reveal'

export function Experience() {
  const [expanded, setExpanded] = useState<string | null>('nocvola')

  return (
    <section className="section experience-section section-paper" id="experience" data-section aria-labelledby="experience-title">
      <div className="page-shell">
        <Reveal className="section-intro">
          <p className="eyebrow">02 — Work, research & community</p>
          <h2 className="section-title" id="experience-title">Where I’ve<br /><span>made an impact.</span></h2>
          <p className="section-description">Eight experiences, across product engineering, education, research and student life.</p>
        </Reveal>
        <div className="experience-list">
          {experiences.map((experience, index) => {
            const isExpanded = expanded === experience.id
            return (
              <Reveal key={experience.id} delay={Math.min(index * 45, 225)}>
                <article className={`experience-item${isExpanded ? ' is-expanded' : ''}`}>
                  <div className="experience-marker" aria-hidden="true"><span /></div>
                  <button
                    className="experience-trigger"
                    type="button"
                    aria-expanded={isExpanded}
                    aria-controls={`experience-detail-${experience.id}`}
                    onClick={() => setExpanded(isExpanded ? null : experience.id)}
                  >
                    <span className="experience-date mono">{experience.period}</span>
                    <span className="experience-main">
                      <span className="experience-role">{experience.role}</span>
                      <span className="experience-org">{experience.organisation}</span>
                    </span>
                    <span className="experience-trigger-end">
                      {experience.status && <span className="current-pill"><span /> Current</span>}
                      <span className="expand-icon" aria-hidden="true">{isExpanded ? '−' : '+'}</span>
                    </span>
                  </button>
                  <div
                    id={`experience-detail-${experience.id}`}
                    className="experience-detail"
                    hidden={!isExpanded}
                  >
                    <div className="experience-detail-inner">
                      {experience.context && <p className="experience-context">{experience.context}</p>}
                      <p className="experience-summary">{experience.summary}</p>
                      <ul className="contribution-list">
                        {experience.contributions.map((contribution) => <li key={contribution}>{contribution}</li>)}
                      </ul>
                      <div className="tag-row">
                        {experience.tools.map((tool) => <span className="tag" key={tool}>{tool}</span>)}
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
