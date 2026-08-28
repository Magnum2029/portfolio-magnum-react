import "./Certificates.css";
import { certificados } from "../../data/certificados";

export default function Certificates() {
  return (
    <section className="certificates-page">
      <div className="container">

        <span className="section-tag">
          CURSOS E CERTIFICAÇÕES
        </span>

        <h1>Meus Certificados</h1>

        <p className="section-description">
          Certificações obtidas durante minha formação em Desenvolvimento
          Front-End, Back-End Python, React, Next.js, TypeScript, JavaScript,
          HTML, CSS, Figma e outras tecnologias.
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

                <small>{certificado.categoria}</small>

                <div className="certificate-buttons">

                  <a
                    href={certificado.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Ver Certificado
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