import Spinner from '../components/Spinner';

export default function Certificates() {
  const certificates = [
    {
      id: 1,
      title: 'Angular 9',
      pdf: '/certificates/angular-9.pdf',
      thumb: '/certificates/angular-9.jpg'
    },
    {
      id: 2,
      title: 'Cypress',
      pdf: '/certificates/cypress.pdf',
      thumb: '/certificates/cypress.jpg'
    },
    {
      id: 3,
      title: 'Cypress',
      pdf: '/certificates/cypress-2.pdf',
      thumb: '/certificates/cypress-2.jpg'
    },
    {
      id: 3333,
      title: 'HTTP',
      pdf: '/certificates/http.jpg',
      thumb: '/certificates/http.jpg'
    },
    {
      id: 33,
      title: 'Javascript',
      pdf: '/certificates/js.pdf',
      thumb: '/certificates/javascript.jpg'
    },
    {
      id: 34,
      title: 'Javascript',
      pdf: '/certificates/js-2.pdf',
      thumb: '/certificates/javascript.jpg'
    },
    {
      id: 35,
      title: 'Javascript',
      pdf: '/certificates/js-3.pdf',
      thumb: '/certificates/javascript.jpg'
    },
    {
      id: 36,
      title: 'Javascript',
      pdf: '/certificates/js-4.pdf',
      thumb: '/certificates/javascript.jpg'
    },
    {
      id: 37,
      title: 'Javascript',
      pdf: '/certificates/js-5.pdf',
      thumb: '/certificates/javascript.jpg'
    },
    {
      id: 38,
      title: 'Javascript',
      pdf: '/certificates/js-6.pdf',
      thumb: '/certificates/javascript.jpg'
    },
    {
      id: 388,
      title: 'Micro-frontend',
      pdf: '/certificates/mfe.pdf',
      thumb: '/certificates/mfe.jpg'
    },
    {
      id: 39,
      title: 'Next',
      pdf: '/certificates/next.pdf',
      thumb: '/certificates/next.jpg'
    },
    {
      id: 44,
      title: 'React',
      pdf: '/certificates/react.pdf',
      thumb: '/certificates/react.jpg'
    },
    {
      id: 45,
      title: 'React',
      pdf: '/certificates/react-2.pdf',
      thumb: '/certificates/react-2.jpg'
    },
    {
      id: 46,
      title: 'React',
      pdf: '/certificates/react-3.pdf',
      thumb: '/certificates/react-2.jpg'
    },
    {
      id: 47,
      title: 'Regex',
      pdf: '/certificates/regex.pdf',
      thumb: '/certificates/regex.jpg'
    },
    {
      id: 400,
      title: 'Sass',
      pdf: '/certificates/sass.pdf',
      thumb: '/certificates/sass.jpg'
    },
    {
      id: 401,
      title: 'Sass',
      pdf: '/certificates/seo.pdf',
      thumb: '/certificates/seo.jpg'
    },
    {
      id: 402,
      title: 'Typescript',
      pdf: '/certificates/ts.pdf',
      thumb: '/certificates/typescript.jpg'
    }, // Curso Webpack_ trabalhando com módulos na sua webapp - Alura
    {
      id: 403,
      title: 'Typescript',
      pdf: '/certificates/ts-2.pdf',
      thumb: '/certificates/typescript.jpg'
    },
    {
      id: 404,
      title: 'Webpack',
      description: 'Trabalhando com módulos na sua webapp',
      school: 'Alura',
      pdf: '/certificates/webpack.pdf',
      thumb: '/certificates/webpack.jpg'
    },
    {
      id: 40,
      title: 'Vue 2',
      pdf: '/certificates/vue-2.pdf',
      thumb: '/certificates/vue-2.jpg'
    },
    {
      id: 4,
      title: 'Vue 3',
      pdf: '/certificates/vue-3.pdf',
      thumb: '/certificates/vue-3.jpg'
    },
    {
      id: 5,
      title: 'Vue 3',
      pdf: '/certificates/vue-3-2.pdf',
      thumb: '/certificates/vue-3-2.jpg'
    }
  ];

  return (
    <div className="content">
      <h2>Certificados</h2>

      {!certificates ? (
        <Spinner />
      ) : (
        <div className="grid">
          {' '}
          {certificates.map(cert => (
            <a
              key={cert.id}
              href={cert.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="card"
            >
              <div className="thumb">
                <img src={cert.thumb} alt={cert.title} />
              </div>

              <div className="body">
                <h3 className="title">{cert.title}</h3>
              </div>
            </a>
          ))}{' '}
        </div>
      )}
    </div>
  );
}
