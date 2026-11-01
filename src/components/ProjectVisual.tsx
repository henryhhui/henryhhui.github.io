import type { Project } from '../data/projects'

type ProjectVisualProps = {
  project: Project
  compact?: boolean
}

export function ProjectVisual({ project, compact = false }: ProjectVisualProps) {
  if (project.image) {
    return <img className="project-image" src={project.image} alt={`${project.title} project`} loading="lazy" />
  }

  return (
    <div className={`project-art project-art-${project.visual}${compact ? ' is-compact' : ''}`} aria-label={`${project.title} visual study`} role="img">
      <span className="art-label mono">VISUAL STUDY <span>·</span> {project.period.split(' — ')[0]}</span>
      {project.visual === 'robot' && (
        <div className="robot-study">
          <div className="robot-grid" />
          <div className="robot-path"><span /><span /><span /></div>
          <div className="robot-chassis"><i /><i /><i /><i /><b /></div>
          <div className="robot-coordinate mono">X 0.42<br />Y 0.18<br />Z 0.76</div>
          <div className="robot-foot">ADAPTIVE LOCOMOTION <span>↗</span></div>
        </div>
      )}
      {project.visual === 'match' && (
        <div className="match-study">
          <div className="match-topline mono"><span>KF / MATCH LOG</span><span>01 — 04</span></div>
          <div className="match-score"><span>TEAM<br />DATA</span><strong>26<span>’</span></strong></div>
          <div className="match-bars"><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
          <div className="match-foot mono">LOG · REVIEW · REPEAT</div>
        </div>
      )}
      {project.visual === 'light' && (
        <div className="light-study">
          <div className="light-orbit light-orbit-outer" />
          <div className="light-orbit light-orbit-inner" />
          <div className="light-core"><span>V</span></div>
          <div className="light-beam" />
          <div className="light-caption mono">SMART AUTO <span>ON</span></div>
          <div className="light-coordinates mono">22° 17′ N<br />114° 10′ E</div>
        </div>
      )}
      {project.visual === 'culture' && (
        <div className="culture-study">
          <div className="culture-sun" />
          <div className="culture-arch"><span /><span /><span /></div>
          <div className="culture-word">Hong<br /><i>Kong.</i></div>
          <div className="culture-foot mono">MEMORY / PLACE / POSSIBILITY</div>
        </div>
      )}
      {project.visual === 'city' && (
        <div className="city-study">
          <div className="city-skyline"><i /><i /><i /><i /><i /><i /><i /></div>
          <div className="city-lens"><span>SEE THE<br />CITY<br /><b>DIFFERENTLY</b></span></div>
          <div className="city-foot mono">AN INCLUSIVE CITY, IN FOCUS</div>
        </div>
      )}
      {project.visual === 'workshop' && (
        <div className="workshop-study">
          <div className="workshop-outline"><span /><span /><span /><span /></div>
          <div className="workshop-caption"><span className="mono">FIELD NOTES · 2024</span><strong>Ideas,<br />in motion.</strong></div>
          <div className="workshop-foot mono">DESIGN / BUILD / TEST</div>
        </div>
      )}
    </div>
  )
}
