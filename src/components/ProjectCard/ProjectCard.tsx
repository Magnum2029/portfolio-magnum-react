import "./ProjectCard.css";
import type { Projeto } from "../../data/projetos";

type Props = {
  projeto: Projeto;
};

export default function ProjectCard({ projeto }: Props) {
  return (
    <div className="project-card">
      <img
        src={projeto.imagem}
        alt={projeto.titulo}
        className="project-image"
      />

      <div className="project-content">
        <span className="categoria">{projeto.categoria}</span>

        <h3>{projeto.titulo}</h3>

        <p>{projeto.descricao}</p>

        <div className="tecnologias">
          {projeto.tecnologias.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <div className="links">
          <a
            href={projeto.github}
            target="_blank"
            rel="noreferrer"
            aria-label={`Abrir GitHub do projeto ${projeto.titulo}`}
          >
            Git
          </a>

          {projeto.demo && (
            <a
              href={projeto.demo}
              target="_blank"
              rel="noreferrer"
              aria-label={`Abrir demonstração do projeto ${projeto.titulo}`}
            >
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}