import Spinner from '../components/Spinner';

export default function Certificates() {
  const certificates = [
    {
      id: 1,
      title: 'Kubernetes',
      pdf: '/certificates/kubernetes.pdf',
      thumb: '/certificates/kubernetes.jpg'
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
