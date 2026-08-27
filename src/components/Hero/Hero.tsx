import "./Hero.css";

export default function Hero() {
  return (
    <section id="sobre" className="hero">
      <div className="hero-content">
        <p className="hero-subtitle">
          DESENVOLVEDOR FRONT-END • DESENVOLVEDOR BACK-END PYTHON
        </p>

        <h1>Magnum Santos 👋</h1>

        <h2>Interfaces modernas, rápidas e responsivas.</h2>

        <p className="hero-description">
          Desenvolvedor especializado em aplicações Front-End e Back-End,
          utilizando React, Next.js, TypeScript, JavaScript, Python e Flask.
          Atualmente moro em Portimão, Portugal, desenvolvendo projetos modernos
          e buscando minha primeira oportunidade como desenvolvedor.
        </p>

        <div className="hero-tech">
          <span>React</span>
          <span>Next.js</span>
          <span>TypeScript</span>
          <span>JavaScript</span>
          <span>Python</span>
          <span>Flask</span>
        </div>

        <div className="hero-buttons">
          <a href="#projetos" className="btn-primary">
            Ver Projetos
          </a>

          <a
            href="/cv/CV-Magnum.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            Baixar Currículo
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img src="/images/magnum.jpg" alt="Magnum Santos" />
      </div>
    </section>
  );
}