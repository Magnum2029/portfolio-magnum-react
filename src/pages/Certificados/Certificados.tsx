import "./Certificados.css";
import { certificados } from "../../data/certificados";

export default function Certificados() {
  return (
    <section className="certificados-page">
      <p className="subtitle">Minha formação</p>

      <h1>Certificados</h1>

      <div className="certificados-grid">
        {certificados.map((grupo) => (
          <div className="cert-card" key={grupo.escola}>
            <h2>{grupo.escola}</h2>

            <p>{grupo.descricao}</p>

            <ul>
              {grupo.arquivos.map((cert) => (
                <li key={cert.nome}>📄 {cert.nome}</li>
              ))}
            </ul>

            <a
              href={grupo.arquivos[0].pdf}
              target="_blank"
              rel="noreferrer"
              className="btn-certificado"
            >
              Ver Certificados
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}