import NavBar from "./NavBar";

function App() {
  return (
    <main>
      {/* HERO */}
      <section
        id="inicio"
        className="relative flex min-h-screen items-center overflow-hidden bg-[#080808]"
      >
        {/* Fundo animado */}
        <div className="absolute inset-0 animate-background-move bg-[radial-gradient(circle_at_20%_50%,rgba(220,38,38,0.18),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(220,38,38,0.10),transparent_30%)]" />

        {/* Grid tecnológico */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

        {/* Degradê para escurecer a imagem */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/80 to-transparent" />

        {/* Navbar */}
        <NavBar />

        {/* Conteúdo */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-24 lg:px-8">
          <div className="max-w-3xl">
            <span className="mb-6 inline-block border-l-4 border-red-600 pl-4 text-sm font-semibold uppercase tracking-[0.25em] text-red-500">
              Infraestrutura de TI
            </span>

            <h1 className="text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
              Tecnologia completa para o{" "}
              <span className="text-red-500">seu negócio.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl">
              Do sistema à infraestrutura completa, oferecemos soluções para
              manter sua empresa conectada, segura e preparada para crescer.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contato"
                className="rounded-lg bg-red-600 px-7 py-4 font-semibold text-white shadow-lg shadow-red-600/20 transition duration-300 hover:-translate-y-1 hover:bg-red-700"
              >
                Fale com um especialista
              </a>

              <a
                href="#servicos"
                className="rounded-lg border border-zinc-700 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur-sm transition duration-300 hover:border-red-500 hover:bg-red-500/10"
              >
                Conheça nossos serviços
              </a>
            </div>
          </div>
        </div>

        {/* Brilho vermelho */}
        <div className="absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-red-600/10 blur-3xl" />
      </section>

      {/* SERVIÇOS - só para visualização */}
      <section id="servicos" className="bg-white px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-red-600">
            Nossos serviços
          </span>

          <h2 className="mt-3 text-4xl font-bold text-zinc-900">
            Soluções para sua infraestrutura
          </h2>
        </div>
      </section>
    </main>
  );
}

export default App;
