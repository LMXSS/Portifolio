import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="text-white">Gabriel Lamas</span>
      </div>
      <div className="navbar-right">
        <ul className="navbar-links">
          <li>
            <Link href="#sobre" className="text-white">Sobre</Link>
          </li>
          <li>
            <Link href="#projetos" className="text-white">Projetos</Link>
          </li>
          <li>
            <Link href="#contato" className="text-white">Contato</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
