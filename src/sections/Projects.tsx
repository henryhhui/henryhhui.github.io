import { useEffect, useState } from 'react'
import { ProjectVisual } from '../components/ProjectVisual'
import { Reveal } from '../components/Reveal'
import { projects } from '../data/projects'

export function Projects() {
  const [activeProject, setActiveProject] = useState(projects[0])

  useEffect(() => {
    const entries = document.querySelectorAll<HTMLElement>('[data-project-id]')
    const observer = new IntersectionObserver(
      (observations) => {
        const current = observations
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        const project = projects.find((item) => item.id === current?.target.getAttribute('data-project-id'))
        if (project) setActiveProject(project)
      },
      { rootMargin: '-32% 0px -42% 0px', threshold: [0.1, 0.35, 0.6] },
    )
    entries.forEach((entry) => observer.observe(entry))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="section projects-section section-dark" id="projects" data-section aria-labelledby="projects-title">
      <div className="page-shell">
        <div className="projects-heading">
          <Reveal>
            <p className="eyebrow">03 — Projects & experiments</p>
            <h2 className="section-title" id="projects-title">Things I’ve<br /><span>built.</span></h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="section-description">A work in progress, in the best sense. Six projects across software, AI, culture and hardware.</p>
          </Reveal>
        </div>
        <div className="projects-layout">
          <aside className="project-sticky" aria-label="Project in focus">
            <div className="project-sticky-art" key={activeProject.id}>
              <ProjectVisual project={activeProject} compact />
            </div>
            <div className="sticky-project-info">
              <span className="mono sticky-kicker">IN FOCUS · {String(projects.findIndex((project) => project.id === activeProject.id) + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}</span>
              <h3>{activeProject.title}</h3>
              <p>{activeProject.discipline}</p>
              <a className="text-link text-link-light" href={`#project-${activeProject.id}`}>Explore this project <span aria-hidden="true">↓</span></a>
            </div>
          </aside>
          <div className="project-stories">
            {projects.map((project, index) => (
              <article className="project-entry" id={`project-${project.id}`} data-project-id={project.id} key={project.id}>
                <Reveal>
                  <div className="project-entry-head">
                    <span className="project-number mono">{String(index + 1).padStart(2, '0')} / 06</span>
                    <span className="project-period mono">{project.period}</span>
                  </div>
                  <div className="project-entry-visual">
                    <ProjectVisual project={project} />
                  </div>
                  <div className="project-entry-copy">
                    <p className="eyebrow">{project.discipline}</p>
                    <h3>{project.title}</h3>
                    <p className="project-summary">{project.summary}</p>
                    <details className="project-details">
                      <summary>Project notes <span aria-hidden="true">+</span></summary>
                      <div className="project-detail-content">
                        <div>
                          <span className="detail-label">The idea</span>
                          <p>{project.motivation}</p>
                        </div>
                        <div>
                          <span className="detail-label">My role</span>
                          <p>{project.role}</p>
                        </div>
                        <div>
                          <span className="detail-label">What I worked on</span>
                          <ul>{project.implementation.map((item) => <li key={item}>{item}</li>)}</ul>
                        </div>
                        {project.result && (
                          <div>
                            <span className="detail-label">Recognition</span>
                            <p>{project.result}</p>
                          </div>
                        )}
                        <div>
                          <span className="detail-label">Toolkit</span>
                          <div className="tag-row">{project.technologies.map((technology) => <span className="tag" key={technology}>{technology}</span>)}</div>
                        </div>
                        {project.relatedExperienceId && (
                          <a className="related-link" href={`#${project.relatedExperienceId === 'nocvola' || project.relatedExperienceId === 'summer-stem' ? 'experience' : project.relatedExperienceId}`}>
                            Related experience <span aria-hidden="true">↗</span>
                          </a>
                        )}
                        {!project.link && <p className="project-link-note">Project links and original media can be added when available.</p>}
                      </div>
                    </details>
                  </div>
                </Reveal>
              </article>
            ))}
            <p className="visual-note">Abstract visual studies are illustrative compositions, not product screenshots. Project photography and media can be added later.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
