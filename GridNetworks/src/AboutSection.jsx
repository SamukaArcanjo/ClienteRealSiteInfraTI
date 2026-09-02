function AboutSection() {
  const pilares = [
    {
      titulo: "Atendimento próximo",
      descricao:
        "Falamos a língua de quem empreende, sem enrolação técnica desnecessária.",
    },
    {
      titulo: "Soluções sob medida",
      descricao:
        "Cada empresa tem uma realidade diferente — a solução se adapta a ela, não o contrário.",
    },
    {
      titulo: "Compromisso com o resultado",
      descricao:
        "Tecnologia só faz sentido quando resolve um problema de verdade do seu negócio.",
    },
  ];

  return (
    <section
      id="sobre"
      className="relative overflow-hidden bg-[#080808] px-6 py-24 scroll-mt-24 lg:px-8"
    >
      {/* ========================================
          BRILHO VERMELHO (mesma linguagem da Hero)
          ======================================== */}
      <div
        aria-hidden="true"
        className="animate-glow pointer-events-none absolute left-1/2 top-0 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-red-600/10 blur-[130px]"
      />

      {/* ========================================
          GRID TECNOLÓGICO (mesma linguagem da Hero)
          ======================================== */}
      <div
        aria-hidden="true"
        className="animate-grid pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:60px_60px]"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* ========================================
              TEXTO PRINCIPAL
              ======================================== */}
          <div>
            <span className="mb-6 inline-block border-l-4 border-red-600 pl-4 text-sm font-semibold uppercase tracking-[0.25em] text-red-500">
              Sobre nós
            </span>

            <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl">
              Feita para pequenas e médias empresas{" "}
              <span className="text-red-500">crescerem com tecnologia.</span>
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-8 text-zinc-400">
              Atendemos empresas de pequeno e médio porte, trazendo soluções
              técnicas acessíveis e pensadas pra realidade de quem está
              construindo um negócio — sem a complexidade (nem o preço) de uma
              estrutura pensada pra grandes corporações.
            </p>

            <div className="mt-10 space-y-6">
              {pilares.map((pilar) => (
                <div key={pilar.titulo} className="flex gap-4">
                  <span
                    aria-hidden="true"
                    className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-red-600"
                  />
                  <div>
                    <p className="font-semibold text-white">{pilar.titulo}</p>
                    <p className="mt-1 text-sm leading-6 text-zinc-400">
                      {pilar.descricao}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ========================================
              CARD DO FUNDADOR
              ======================================== */}
          <div className="relative rounded-2xl border border-zinc-800 bg-white/[0.03] p-8 backdrop-blur-sm md:p-10">
            <span
              aria-hidden="true"
              className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-600 text-2xl font-bold text-white"
            >
              C
            </span>

            <p className="mt-8 text-xl leading-8 text-white md:text-2xl">
              "Sempre tive vontade de ajudar outras empresas a crescer trazendo
              soluções de tecnologia de verdade — foi essa vontade que me fez
              colocar essa empresa de pé."
            </p>

            <div className="mt-8 border-t border-zinc-800 pt-6">
              <p className="font-semibold text-white">Carlos</p>
              <p className="text-sm text-zinc-500">Fundador</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
