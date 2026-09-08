import logo from "./assets/logo.png";
import { NAV_LINKS } from "./navLinks";

function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-10 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
          {/* Logo + descrição */}
          <div>
            <div className="h-10 w-32 overflow-hidden">
              <img
                src={logo}
                alt="Logo da empresa"
                className="h-full w-full object-contain object-left"
              />
            </div>

            <p className="mt-4 max-w-xs text-sm leading-6 text-zinc-500">
              Tecnologia completa para pequenas e médias empresas crescerem com
              segurança e previsibilidade.
            </p>
          </div>

          {/* Navegação */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-red-500">
              Navegação
            </span>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm text-zinc-400 transition hover:text-white"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-red-500">
              Contato
            </span>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="mailto:utimicrosupervisor@gmail.com"
                  className="text-sm text-zinc-400 transition hover:text-white"
                >
                  utimicrosupervisor@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+5511982796560"
                  className="text-sm text-zinc-400 transition hover:text-white"
                >
                  (11) 98279-6560
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="pt-8 text-center text-xs text-zinc-600 md:text-left">
          © {anoAtual} Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
