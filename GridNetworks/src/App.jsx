import NavBar from "./NavBar";
import AbstractGlobe from "./AbstractGlobe";
import Services from "./Services";
import InfiniteBanner from "./InfiniteBanner";
import AboutSection from "./AboutSection";

function App() {
  return (
    <main>
      {/* ========================================
          HERO
          ======================================== */}

      <section
        id="inicio"
        className="
          relative
          flex
          min-h-screen
          items-center
          overflow-hidden
          bg-[#080808]
          scroll-mt-24
        "
      >
        {/* ========================================
            BRILHO VERMELHO SUPERIOR
            ======================================== */}

        <div
          aria-hidden="true"
          className="
            animate-glow
            absolute
            -right-40
            -top-40
            h-[600px]
            w-[600px]
            rounded-full
            bg-red-600/20
            blur-[120px]
          "
        />

        {/* ========================================
            BRILHO VERMELHO INFERIOR
            ======================================== */}

        <div
          aria-hidden="true"
          className="
            animate-glow
            absolute
            -bottom-40
            right-20
            h-[500px]
            w-[500px]
            rounded-full
            bg-red-600/15
            blur-[120px]
            [animation-delay:3s]
          "
        />

        {/* ========================================
            GLOBO ABSTRATO
            ======================================== */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            bottom-[-270px]
            right-[-170px]
            z-[2]
          "
        >
          <AbstractGlobe />
        </div>

        {/* ========================================
            GRID TECNOLÓGICO
            ======================================== */}

        <div
          aria-hidden="true"
          className="
            animate-grid
            absolute
            inset-0
            z-[1]
            bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)]
            bg-[size:60px_60px]
          "
        />

        {/* ========================================
            ESCURECIMENTO
            ======================================== */}

        <div
          aria-hidden="true"
          className="
            absolute
            inset-0
            z-[3]
            bg-gradient-to-r
            from-[#080808]
            via-[#080808]/80
            to-[#080808]/25
          "
        />

        {/* ========================================
            NAVBAR
            ======================================== */}

        <NavBar />

        {/* ========================================
            CONTEÚDO DA HERO
            ======================================== */}

        <div
          className="
            relative
            z-10
            mx-auto
            w-full
            max-w-7xl
            px-6
            pt-24
            lg:px-8
          "
        >
          <div className="max-w-3xl">
            {/* Categoria */}

            <span
              className="
                mb-6
                inline-block
                border-l-4
                border-red-600
                pl-4
                text-sm
                font-semibold
                uppercase
                tracking-[0.25em]
                text-red-500
              "
            >
              Infraestrutura de TI
            </span>

            {/* Título */}

            <h1
              className="
                text-5xl
                font-bold
                leading-tight
                tracking-tight
                text-white
                md:text-6xl
                lg:text-7xl
              "
            >
              Tecnologia completa para o{" "}
              <span className="text-red-500">seu negócio.</span>
            </h1>

            {/* Descrição */}

            <p
              className="
                mt-6
                max-w-2xl
                text-lg
                leading-8
                text-zinc-400
                md:text-xl
              "
            >
              Do sistema à infraestrutura completa, oferecemos soluções para
              manter sua empresa conectada, segura e preparada para crescer.
            </p>

            {/* Botões */}

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contato"
                className="
                  rounded-lg
                  bg-red-600
                  px-7
                  py-4
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-red-600/20
                  transition
                  duration-300
                  hover:bg-red-700
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-red-400
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-[#080808]
                "
              >
                Fale com um especialista
              </a>

              <a
                href="#servicos"
                className="
                  rounded-lg
                  border
                  border-zinc-700
                  bg-white/5
                  px-7
                  py-4
                  font-semibold
                  text-white
                  backdrop-blur-sm
                  transition
                  duration-300
                  hover:border-red-500
                  hover:bg-red-500/10
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-red-400
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-[#080808]
                "
              >
                Conheça nossos serviços
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          SERVIÇOS
          ======================================== */}

      <section
        id="servicos"
        className="
          bg-white
          px-6
          pt-24
          lg:px-8
          scroll-mt-24
        "
      >
        <div className="mx-auto max-w-7xl">
          <span
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.25em]
              text-red-600
            "
          >
            Nossos serviços
          </span>

          <h2
            className="
              mt-3
              text-4xl
              font-bold
              text-zinc-900
            "
          >
            Soluções para sua infraestrutura
          </h2>

          <Services />
        </div>

        <InfiniteBanner />
      </section>

      <AboutSection />
    </main>
  );
}

export default App;
