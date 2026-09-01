function NavBar() {
  return (
    <header className="absolute top-0 left-0 z-50 w-full">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-tight text-white">
          Grid<span className="text-red-500">Networks</span>
        </div>

        {/* Links */}
        <ul className="hidden items-center gap-10 md:flex">
          <li>
            <a
              href="#inicio"
              className="text-sm font-medium text-white transition hover:text-red-500"
            >
              Início
            </a>
          </li>

          <li>
            <a
              href="#servicos"
              className="text-sm font-medium text-white transition hover:text-red-500"
            >
              Serviços
            </a>
          </li>

          <li>
            <a
              href="#sobre"
              className="text-sm font-medium text-white transition hover:text-red-500"
            >
              Sobre
            </a>
          </li>

          <li>
            <a
              href="#contato"
              className="text-sm font-medium text-white transition hover:text-red-500"
            >
              Contato
            </a>
          </li>
        </ul>

        {/* Botão */}
        <a
          href="#contato"
          className="hidden rounded-lg bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700 md:block"
        >
          Solicitar orçamento
        </a>
      </nav>
    </header>
  );
}

export default NavBar;
