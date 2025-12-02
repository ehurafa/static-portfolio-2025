import { useEffect, useState } from 'react'
import Spinner from '../components/Spinner'
import { fetchGithubLanguages } from '../api/github'

interface GithubLanguage {
  name: string
  percentage: number
  color: string
}

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [languages, setLanguages] = useState<GithubLanguage[]>([])

  useEffect(() => {
    const loadData = async () => {
      const langs = await fetchGithubLanguages()
      setLanguages(langs)
      setLoading(false)
    }
    loadData()
  }, [])

  if (loading) {
    return <Spinner />
  }

  return (
    <div className="home-page">
      <section className="intro-section">
        <h1 className="intro-title">Olá, eu sou Rafael.</h1>
        <p className="intro-text">
          Rafael Gomes com paixão pelo desenvolvimento front-end. Experiência em projetos diversos,
          sempre buscando aprender e compartilhar conhecimento.
        </p>
      </section>

      <div className="home-cards-grid">
        <div className="home-card">
          <h2 className="card-title">Linguagens Mais Usadas</h2>
          <div className="card-content">
            {/* Barra de cores empilhada */}
            <div className="languages-bar">
              {languages.map(lang => (
                <div
                  key={lang.name}
                  className="language-segment"
                  style={{
                    width: `${lang.percentage}%`,
                    backgroundColor: lang.color
                  }}
                  title={`${lang.name}: ${lang.percentage.toFixed(2)}%`}
                ></div>
              ))}
            </div>

            {/* Lista de linguagens em 2 colunas */}
            <div className="languages-grid">
              {languages.map(lang => (
                <div key={lang.name} className="language-item">
                  <span className="language-dot" style={{ backgroundColor: lang.color }}></span>
                  <span className="language-name">{lang.name}</span>
                  <span className="language-percent">{lang.percentage.toFixed(2)}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="home-card">
          <h2 className="card-title">Experiência</h2>
          <div className="card-content">
            <div className="experience-item">
              <h3 className="experience-role">UI Developer</h3>
              <p className="experience-company">
                UI Developer a uma startup tech folojpis de entr arionalizar com interesta
                tamalhando em om oncentuai mento aumnino.
              </p>
            </div>
          </div>
        </div>

        <div className="home-card">
          <h2 className="card-title">Projetos Recentes</h2>
          <div className="card-content">
            <div className="recent-projects">
              <div className="project-thumb">
                <img src="/screenshots/todo-app.png" alt="E-commerce Redesign" />
                <span className="project-label">E-commerce Redesign</span>
                <button className="project-btn">Conhecendo</button>
              </div>
              <div className="project-thumb">
                <img src="/screenshots/weather-app.png" alt="App de Saúde" />
                <span className="project-label">App de Saúde</span>
                <button className="project-btn">Conhecendo</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
