const BASE = import.meta.env.BASE_URL;

export type Certificado = {
  id: number;
  titulo: string;
  instituicao: string;
  categoria: string;
  descricao: string;
  imagem: string;
  pdf: string;
};

export const certificados: Certificado[] = [
  {
    id: 1,
    titulo: "Desenvolvedor Full Stack Python",
    instituicao: "EBAC",
    categoria: "Formação Completa",
    descricao:
      "Certificado de matrícula da formação Full Stack Python da EBAC.",
    imagem: `${BASE}certificados/thumbs/matricula-ebac.png`,
    pdf: `${BASE}certificados/ebac/matricula-ebac.pdf`,
  },

  {
    id: 2,
    titulo: "Introdução à Programação",
    instituicao: "EBAC",
    categoria: "Programação",
    descricao:
      "Curso introdutório de lógica de programação, algoritmos e fundamentos da programação.",
    imagem: `${BASE}certificados/thumbs/introducao-programacao.png`,
    pdf: `${BASE}certificados/ebac/introducao-programacao.pdf`,
  },

  {
    id: 3,
    titulo: "Figma Aplicado",
    instituicao: "EBAC",
    categoria: "UI/UX Design",
    descricao:
      "Curso de Figma aplicado ao desenvolvimento Front-End e criação de interfaces.",
    imagem: `${BASE}certificados/thumbs/figma-aplicado.png`,
    pdf: `${BASE}certificados/ebac/figma-aplicado.pdf`,
  },
];