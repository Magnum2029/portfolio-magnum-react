import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <h2>Magnum Santos</h2>

      <nav>
        <a href="#sobre">Sobre</a>
        <a href="#habilidades">Habilidades</a>
        <a href="#projetos">Projetos</a>
        <a href="#contato">Contato</a>
      </nav>
    </header>
  );
}