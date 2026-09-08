import carlosFoto from "./assets/carlos.png";
import DarkGlow from "./DarkGlow";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const PILARES = [
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

function AboutSection() {
  return (
    <section
      id="sobre"
      className="relative overflow-hidden bg-[#080808] px-6 py-24 scroll-mt-24 lg:px-8"
    >
      <DarkGlow variant="center" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Texto principal */}
          <Reveal>
            <SectionLabel>Sobre nós</SectionLabel>

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
              {PILARES.map((pilar) => (
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
          </Reveal>

          {/* Card do fundador */}
          <Reveal delay={150}>
            <div className="relative rounded-2xl border border-zinc-800 bg-white/[0.03] p-8 backdrop-blur-sm md:p-10">
              <img
                src={carlosFoto}
                alt="Carlos, fundador"
                className="h-16 w-16 rounded-full object-cover ring-1 ring-white/10"
              />

              <p className="mt-8 text-xl leading-8 text-white md:text-2xl">
                "Sempre tive vontade de ajudar outras empresas a crescer
                trazendo soluções de tecnologia de verdade — foi essa vontade
                que me fez colocar essa empresa de pé."
              </p>

              <div className="mt-8 border-t border-zinc-800 pt-6">
                <p className="font-semibold text-white">Carlos</p>
                <p className="text-sm text-zinc-500">Fundador</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
