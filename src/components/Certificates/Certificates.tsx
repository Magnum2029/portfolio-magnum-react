import "./Certificates.css";

const BASE = import.meta.env.BASE_URL;

const certificados = [
  {
    id: 1,
    titulo: "Desenvolvedor Full Stack Python",
    instituicao: "EBAC",
    descricao: "Certificado de matrícula do curso Full Stack Python da EBAC.",
    imagem: `${BASE}certificados/thumbs/matricula-ebac.png`,
    pdf: `${BASE}certificados/ebac/matricula-ebac.pdf`,
  },
  {
    id: 2,
    titulo: "HTML e CSS",
    instituicao: "EBAC",
    descricao: "Curso de HTML5 e CSS3 com projetos práticos.",
    imagem: `${BASE}certificados/thumbs/html-css.png`,
    pdf: `${BASE}certificados/ebac/html-css.pdf`,
  },
  {
    id: 3,
    titulo: "JavaScript para Front-End",
    instituicao: "EBAC",
    descricao: "Curso de JavaScript moderno para aplicações Front-End.",
    imagem: `${BASE}certificados/thumbs/javascript.png`,
    pdf: `${BASE}certificados/ebac/javascript.pdf`,
  },
  {
    id: 4,
    titulo: "Python 3 - Mundo 1, 2 e 3",
    instituicao: "Estudonauta",
    descricao: "Curso completo de Python do Estudonauta.",
    imagem: `${BASE}certificados/thumbs/python-estudonauta.png`,
    pdf: `${BASE}certificados/estudonauta/python-estudonauta.pdf`,
  },
  {
    id: 5,
    titulo: "Python Developer",
    instituicao: "Tokio School",
    descricao: "Certificação em Python Developer pela Tokio School.",
    imagem: `${BASE}certificados/thumbs/python-tokio-school.png`,
    pdf: `${BASE}certificados/tokio-school/python-tokio-school.pdf`,
  },
  {
    id: 6,
    titulo: "React + TypeScript",
    instituicao: "EBAC",
    descricao: "Projeto e desenvolvimento de aplicações React com TypeScript.",
    imagem: `${BASE}certificados/thumbs/ebac-front-end.png`,
    pdf: `${BASE}certificados/ebac/ebac-front-end.pdf`,
  },
];

export default function Certificates() {
  return (
    <section className="certificates-page">
      <div className="container">
        <span className="section-tag">CERTIFICADOS E FORMAÇÃO</span>

        <h1>Meus Certificados</h1>

        <p className="section-description">
          Formação contínua em Desenvolvimento Front-End, Back-End Python,
          React, Next.js, TypeScript, JavaScript, HTML, CSS e tecnologias
          modernas para desenvolvimento web.
        </p>

        <div className="certificates-grid">
          {certificados.map((certificado) => (
            <div className="certificate-card" key={certificado.id}>
              <img
                src={certificado.imagem}
                alt={certificado.titulo}
                className="certificate-image"
              />

              <div className="certificate-content">
                <span className="certificate-school">
                  {certificado.instituicao}
                </span>

                <h3>{certificado.titulo}</h3>

                <p>{certificado.descricao}</p>

                <div className="certificate-buttons">
                  <a
                    href={certificado.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Ver Certificado
                  </a>

                  <a
                    href={certificado.pdf}
                    download
                    className="btn-outline"
                  >
                    Baixar PDF
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}