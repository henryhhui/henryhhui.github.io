import { languages, skillGroups } from '../data/skills'
import { Reveal } from '../components/Reveal'

export function Skills() {
  return (
    <section className="section skills-section section-dark" id="skills" data-section aria-labelledby="skills-title">
      <div className="page-shell">
        <div className="skills-heading">
          <Reveal>
            <p className="eyebrow">06 — My toolkit</p>
            <h2 className="section-title" id="skills-title">Tools for<br /><span>the curious.</span></h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="section-description">A cross-disciplinary toolkit shaped by the things I’ve built, studied and explored.</p>
          </Reveal>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <Reveal className="skill-group" key={group.name} delay={Math.min(index * 55, 220)}>
              <span className="skill-index mono">0{index + 1}</span>
              <h3>{group.name}</h3>
              <div className="tag-row">{group.skills.map((skill) => <span className="tag" key={skill}>{skill}</span>)}</div>
            </Reveal>
          ))}
        </div>
        <Reveal className="language-row">
          <span className="eyebrow">Languages</span>
          <div className="language-list">
            {languages.map((language) => <span key={language.name}><strong>{language.name}</strong><i>—</i>{language.level}</span>)}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
