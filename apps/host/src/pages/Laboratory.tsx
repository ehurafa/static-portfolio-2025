import { useState, useEffect } from 'react'
import { FaGithub, FaTimes } from 'react-icons/fa'
import Spinner from '../components/Spinner'
import { projects, type Project } from './projectsData'

export default function Laboratory() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [filter, setFilter] = useState<string>('all')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  const categories = ['all', ...new Set(projects.map(p => p.category))]
  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter)

  if (loading) {
    return <Spinner />
  }

  return (
    <div className="laboratory">
      <header className="laboratory-header">
        <h1>Laboratório</h1>
        <p>
          Explore meus projetos desenvolvidos durante cursos e estudos. Cada projeto é uma aplicação
          funcional que você pode interagir.
        </p>
      </header>

      {!selectedProject ? (
        <>
          {/* Filter buttons */}
          <div className="category-filter">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${filter === category ? 'active' : ''}`}
                onClick={() => setFilter(category)}
              >
                {category === 'all' ? 'Todos' : category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map(project => (
              <article
                key={project.id}
                className="project-card"
                onClick={() => setSelectedProject(project)}
              >
                <div className="project-screenshot">
                  <img src={project.screenshot} alt={project.name} loading="lazy" />
                  <div className="project-overlay">
                    <button className="view-btn">Ver Projeto</button>
                  </div>
                </div>
                <div className="project-info">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="tech-tags">
                    {project.technologies.map(tech => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </>
      ) : (
        /* Project Viewer Modal with iframe */
        <div className="project-viewer">
          <div className="viewer-header">
            <div className="viewer-title">
              <h2>{selectedProject.name}</h2>
              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                  onClick={e => e.stopPropagation()}
                >
                  <FaGithub />
                  <span>Ver Código</span>
                </a>
              )}
            </div>
            <button
              className="close-btn"
              onClick={() => setSelectedProject(null)}
              aria-label="Fechar"
            >
              <FaTimes />
            </button>
          </div>

          <div className="viewer-content">
            <iframe
              src={`http://localhost:5001/${selectedProject.id}`}
              title={selectedProject.name}
              className="project-iframe"
              sandbox="allow-scripts allow-same-origin allow-forms"
            />
          </div>
        </div>
      )}
    </div>
  )
}
