import { useEffect, useState } from "react";
import logo from "./assets/logo.png";

const LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
];

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="absolute top-0 left-0 z-50 w-full">
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8"
      >
        {/* Logo */}
        <a
          href="#inicio"
          className="text-2xl font-bold tracking-tight text-white"
        >
          <img src={logo} alt="Logo da empresa" className="h-10 w-auto" />
        </a>

        {/* Links (desktop) */}
        <ul className="hidden items-center gap-10 font-bold md:flex">
          {LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="rounded text-sm font-medium text-white transition hover:text-red-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Botão (desktop) */}
        <a
          href="#contato"
          className="hidden rounded-lg bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700 md:block"
        >
          Solicitar orçamento
        </a>

        {/* Botão hambúrguer (mobile) */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-zinc-700 bg-white/5 md:hidden"
        >
          <span
            className={`h-0.5 w-5 bg-white transition ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-white transition ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-white transition ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Menu mobile */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-white/10 bg-[#080808]/98 px-6 py-6 backdrop-blur-sm md:hidden"
        >
          <ul className="flex flex-col gap-6">
            {LINKS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-base font-medium text-white transition hover:text-red-500"
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contato"
                onClick={() => setMenuOpen(false)}
                className="block rounded-lg bg-red-600 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-red-700"
              >
                Solicitar orçamento
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default NavBar;
