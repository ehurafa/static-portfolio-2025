import Spinner from '../components/Spinner';

export default function Certificates() {
  const mappedTags: Record<string, string> = {
    Udemy: 'purple',
    Alura: 'white'
  };

  const certificates = [
    {
      id: 100,
      title: 'Angular 9',
      pdf: '/certificates/angular-9.pdf',
      thumb: '/certificates/angular-9.jpg',
      tags: []
    },
    {
      id: 2222,
      title: 'Cypress',
      pdf: '/certificates/cypress.pdf',
      description: 'AUTOMATIZANDO TESTES E2E',
      school: 'Alura',
      thumb: '/certificates/cypress.jpg',
      tags: []
    },
    {
      id: 3,
      title: 'Cypress',
      description: 'AUTOMATIZAÇÃO DE TESTES WEB E CI',
      school: 'Alura',
      pdf: '/certificates/cypress-2.pdf',
      thumb: '/certificates/cypress-2.jpg',
      tags: []
    },
    {
      id: 3333,
      title: 'HTTP',
      pdf: '/certificates/http.jpg',
      thumb: '/certificates/http.jpg',
      tags: []
    },
    {
      id: 33,
      title: 'Javascript',
      pdf: '/certificates/js.pdf',
      thumb: '/certificates/javascript.jpg',
      tags: []
    },
    {
      id: 34,
      title: 'Javascript',
      pdf: '/certificates/js-2.pdf',
      thumb: '/certificates/javascript.jpg',
      tags: []
    },
    {
      id: 35,
      title: 'Javascript',
      pdf: '/certificates/js-3.pdf',
      thumb: '/certificates/javascript.jpg',
      tags: []
    },
    {
      id: 36,
      title: 'Javascript',
      pdf: '/certificates/js-4.pdf',
      thumb: '/certificates/javascript.jpg',
      tags: []
    },
    {
      id: 37,
      title: 'Javascript',
      pdf: '/certificates/js-5.pdf',
      thumb: '/certificates/javascript.jpg',
      tags: []
    },
    {
      id: 38,
      title: 'Javascript',
      pdf: '/certificates/js-6.pdf',
      thumb: '/certificates/javascript.jpg',
      tags: []
    },
    {
      id: 388,
      title: 'Micro-frontend',
      pdf: '/certificates/mfe.pdf',
      thumb: '/certificates/mfe.jpg',
      tags: []
    },
    {
      id: 1,
      title: 'Next',
      description: 'TOUR PELO NEXT.JS',
      school: 'Alura',
      pdf: '/certificates/next.pdf',
      thumb: '/certificates/next.jpg',
      tags: []
    },
    {
      id: 44,
      title: 'React',
      pdf: '/certificates/react.pdf',
      thumb: '/certificates/react.jpg',
      tags: []
    },
    {
      id: 2,
      title: 'React',
      description: 'React do Zero a Maestria (c/ hooks, router, API, Projetos)',
      school: 'Udemy',
      pdf: '/certificates/react-2.pdf',
      thumb: '/certificates/react-2.jpg',
      tags: ['Udemy']
    },
    {
      id: 46,
      title: 'React',
      pdf: '/certificates/react-3.pdf',
      thumb: '/certificates/react-2.jpg',
      tags: []
    },
    {
      id: 47,
      title: 'Regex',
      pdf: '/certificates/regex.pdf',
      thumb: '/certificates/regex.jpg',
      tags: []
    },
    {
      id: 400,
      title: 'Sass',
      pdf: '/certificates/sass.pdf',
      thumb: '/certificates/sass.jpg',
      tags: []
    },
    {
      id: 401,
      title: 'Sass',
      pdf: '/certificates/seo.pdf',
      thumb: '/certificates/seo.jpg',
      tags: []
    },
    {
      id: 402,
      title: 'Typescript',
      pdf: '/certificates/ts.pdf',
      thumb: '/certificates/typescript.jpg',
      tags: []
    },
    {
      id: 403,
      title: 'Typescript',
      pdf: '/certificates/ts-2.pdf',
      thumb: '/certificates/typescript.jpg',
      tags: []
    },
    {
      id: 404,
      title: 'Webpack',
      description: 'Trabalhando com módulos na sua webapp',
      school: 'Alura',
      pdf: '/certificates/webpack.pdf',
      thumb: '/certificates/webpack.jpg',
      tags: []
    },
    {
      id: 40,
      title: 'Vue 2',
      pdf: '/certificates/vue-2.pdf',
      thumb: '/certificates/vue-2.jpg',
      tags: []
    },
    {
      id: 4,
      title: 'Vue 3',
      pdf: '/certificates/vue-3.pdf',
      thumb: '/certificates/vue-3.jpg',
      tags: []
    },
    {
      id: 5,
      title: 'Vue 3',
      pdf: '/certificates/vue-3-2.pdf',
      thumb: '/certificates/vue-3-2.jpg',
      tags: []
    }
  ];

  return (
    <div className="content">
      <h2>Certificados</h2>

      {!certificates ? (
        <Spinner />
      ) : (
        <div className="grid">
          {certificates
            .slice()
            .sort((a, b) => a.id - b.id)
            .map(cert => (
              <a
                key={cert.id}
                href={cert.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="card"
              >
                <div className="thumb">
                  {cert.tags &&
                    cert.tags.map(t => (
                      <span key={t} className={`tag school ${mappedTags[t]}`}>
                        {cert.tags[0]}
                      </span>
                    ))}
                  <img src={cert.thumb} alt={cert.title} />
                </div>

                <div className="body">
                  <h3 className="title">{cert.title}</h3>
                  {cert.description && <p className="description">{cert.description}</p>}
                </div>
              </a>
            ))}
        </div>
      )}
    </div>
  );
}
