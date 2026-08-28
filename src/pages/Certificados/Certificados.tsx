import { Link } from "react-router-dom";
import "./Certificados.css";
import { certificados } from "../../data/certificados";

export default function Certificados() {
  return (
    <section className="certificados-page">
      <p className="subtitle">Minha Formação</p>

      <h1>Certificados</h1>

      <div className="certificados-grid">
        {certificados.map((item) => (
          <div className="cert-card" key={item.escola}>
            <img src={item.imagem} alt={item.escola} />

            <h2>{item.escola}</h2>

            <p>{item.descricao}</p>

            <Link to={item.rota} className="btn-certificado">
              Ver Certificados
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}