import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faInfoCircle, faUser, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white p-4 relative z-50">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        {/* Logo */}
        <h1 className="text-xl font-bold">MinhaLogo</h1>

        {/* Botão mobile sempre visível */}
        <button
          className="md:hidden z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="lg" />
        </button>

        {/* Menu desktop */}
        <nav className="hidden md:flex gap-6 items-center">
          <a href="#" className="flex items-center gap-1"><FontAwesomeIcon icon={faHome} /> Home</a>
          <a href="#" className="flex items-center gap-1"><FontAwesomeIcon icon={faInfoCircle} /> Sobre</a>
          <a href="#" className="flex items-center gap-1"><FontAwesomeIcon icon={faUser} /> Perfil</a>
        </nav>
      </div>

      {/* Menu mobile fullscreen */}
      <nav
        className={`
          md:hidden fixed top-0 left-0 w-full h-full bg-gray-900 flex flex-col items-center justify-center gap-8 text-2xl transition-transform duration-300
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <a href="#" onClick={() => setMenuOpen(false)} className="flex items-center gap-2">
          <FontAwesomeIcon icon={faHome} /> Home
        </a>
        <a href="#" onClick={() => setMenuOpen(false)} className="flex items-center gap-2">
          <FontAwesomeIcon icon={faInfoCircle} /> Sobre
        </a>
        <a href="#" onClick={() => setMenuOpen(false)} className="flex items-center gap-2">
          <FontAwesomeIcon icon={faUser} /> Perfil
        </a>
      </nav>
    </header>
  );
}
