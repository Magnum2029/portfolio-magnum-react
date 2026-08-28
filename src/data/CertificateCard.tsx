import "./CertificateCard.css";
import { FaExternalLinkAlt } from "react-icons/fa";

type Props = {
  titulo: string;
  instituicao: string;
  categoria: string;
  descricao: string;
  imagem: string;
  pdf: string;
};

export default function CertificateCard({
  titulo,
  instituicao,
  categoria,
  descricao,
  imagem,
  pdf,
}: Props) {
  return (
    <div className="certificate-card">
      <img src={imagem} alt={titulo} />

      <div className="certificate-content">
        <span>{instituicao}</span>

        <h3>{titulo}</h3>

        <p>{descricao}</p>

        <small>{categoria}</small>

        <a href={pdf} target="_blank">
          Visualizar PDF <FaExternalLinkAlt />
        </a>
      </div>
    </div>
  );
}