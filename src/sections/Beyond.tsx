import { Reveal } from '../components/Reveal'
import { robocon } from '../data/activities'

export function Beyond() {
  return (
    <section className="section beyond-section" id="beyond" data-section aria-labelledby="beyond-title">
      <div className="page-shell">
        <div className="beyond-heading">
          <Reveal>
            <p className="eyebrow">04 — Beyond the screen</p>
            <h2 className="section-title" id="beyond-title">Built to move.<br /><span>Made as a team.</span></h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="section-description">Robotics is where design meets the workshop — and where a good idea has to work under pressure.</p>
          </Reveal>
        </div>
        <div className="robotics-card">
          <Reveal className="robotics-story">
            <div className="robotics-card-top">
              <span className="eyebrow">{robocon.team}</span>
              <span className="current-pill"><span /> {robocon.period}</span>
            </div>
            <h3>{robocon.role.split(', ')[0]}<br /><span>{robocon.role.split(', ')[1]}</span></h3>
            <p className="robotics-description">{robocon.summary}</p>
            <ul className="robotics-contributions">
              {robocon.contributions.map((contribution) => <li key={contribution}>{contribution}</li>)}
            </ul>
            <div className="tag-row">{robocon.tools.map((skill) => <span className="tag" key={skill}>{skill}</span>)}</div>
          </Reveal>
          <Reveal className="robotics-results" delay={100}>
            <div className="results-topline">
              <span className="mono">COMPETITION RECORD</span>
              <span className="record-mark">R.</span>
            </div>
            {robocon.achievements.map((result) => (
              <div className="result-row" key={`${result.year}-${result.title}`}>
                <span className="result-year mono">{result.year}</span>
                <span className="result-name">{result.title}</span>
                <strong>{result.result}</strong>
              </div>
            ))}
            <p className="results-footnote">Competition results and placements as provided.</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
