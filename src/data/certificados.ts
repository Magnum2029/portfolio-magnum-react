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
    categoria: "Front-End + Back-End",
    descricao:
      "Formação completa em HTML, CSS, JavaScript, React, TypeScript, Python e Flask.",
    imagem: `${BASE}imagens/certificados/ebac-front-end.png`,
    pdf: `${BASE}certificados/ebac/ebac-front-end.pdf`,
  },

  {
    id: 2,
    titulo: "HTML e CSS",
    instituicao: "EBAC",
    categoria: "Front-End",
    descricao:
      "Fundamentos de HTML5, CSS3, responsividade e Flexbox.",
    imagem: `${BASE}imagens/certificados/html-css.png`,
    pdf: `${BASE}certificados/ebac/html-css.pdf`,
  },

  {
    id: 3,
    titulo: "JavaScript",
    instituicao: "EBAC",
    categoria: "Front-End",
    descricao:
      "JavaScript moderno (ES6+), DOM, APIs e programação assíncrona.",
    imagem: `${BASE}imagens/certificados/javascript.png`,
    pdf: `${BASE}certificados/ebac/javascript.pdf`,
  },
];