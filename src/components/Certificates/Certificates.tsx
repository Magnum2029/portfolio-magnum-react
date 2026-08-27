import "./Certificates.css";
import { FaGraduationCap } from "react-icons/fa";

const instituicoes = [
  {
    escola: "EBAC",
    curso: "Engenharia Front-End",
    descricao:
      "Formação completa em HTML, CSS, JavaScript, React, TypeScript, Next.js, GitHub e CI/CD.",
  },
  {
    escola: "Tokio School",
    curso: "Desenvolvimento Python",
    descricao:
      "Desenvolvimento Back-End com Python, Flask, APIs REST, SQLite e boas práticas de programação.",
  },
  {
    escola: "Estudonauta",
    curso: "Cursos Complementares",
    descricao:
      "Certificados em HTML5, CSS3, JavaScript e tecnologias para desenvolvimento web.",
  },
];

export default function Certificates() {
  return (
    <section id="certificados" className="certificates">
      <p className="subtitle">Minha Formação</p>

      <h2>Certificados</h2>

      <div className="instituicoes">
        {instituicoes.map((item) => (
          <div className="instituicao-card" key={item.escola}>
            <FaGraduationCap className="icone" />

            <h3>{item.escola}</h3>

            <h4>{item.curso}</h4>

            <p>{item.descricao}</p>
          </div>
        ))}
      </div>

      <div className="botao-certificados">
        <a
          href="/certificados/index.html"
          target="_blank"
          rel="noreferrer"
        >
          📄 Ver todos os certificados
        </a>
      </div>
    </section>
  );
}