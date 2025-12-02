export default function Home() {
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
          <h2 className="card-title">Habilidades</h2>
          <div className="card-content">
            <div className="skill-item">
              <span className="skill-name">React</span>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '90%' }}></div>
              </div>
            </div>
            <div className="skill-item">
              <span className="skill-name">Vue.js</span>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div className="skill-item">
              <span className="skill-name">Tailwind CSS</span>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '80%' }}></div>
              </div>
            </div>
            <div className="skill-item">
              <span className="skill-name">Python</span>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '75%' }}></div>
              </div>
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
