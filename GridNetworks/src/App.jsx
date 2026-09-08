import NavBar from "./NavBar";
import AbstractGlobe from "./AbstractGlobe";
import Services from "./Services";
import InfiniteBanner from "./InfiniteBanner";
import AboutSection from "./AboutSection";
import Footer from "./Footer";
import Button from "./Button";
import DarkGlow from "./DarkGlow";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import WhatsAppButton from "./WhatsAppButton";
import { WHATSAPP_NUMBERS, whatsappLink } from "./whatsapp";

function App() {
  return (
    <>
      <main>
        {/* ========================================
            HERO
            ======================================== */}

        <section
          id="inicio"
          className="relative flex min-h-screen items-center overflow-hidden bg-[#080808] scroll-mt-24"
        >
          <DarkGlow variant="corners" />

          {/* Globo abstrato */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-[-270px] right-[-170px] z-[2]"
          >
            <AbstractGlobe />
          </div>

          {/* Escurecimento */}
          <div
            aria-hidden="true"
            className="absolute inset-0 z-[3] bg-gradient-to-r from-[#080808] via-[#080808]/80 to-[#080808]/25"
          />

          <NavBar />

          {/* Conteúdo da Hero */}
          <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-24 lg:px-8">
            <Reveal className="max-w-3xl">
              <SectionLabel>Infraestrutura de TI</SectionLabel>

              <h1 className="text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
                Tecnologia completa para o{" "}
                <span className="text-red-500">seu negócio.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl">
                Do sistema à infraestrutura completa, oferecemos soluções para
                manter sua empresa conectada, segura e preparada para crescer.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button
                  href={whatsappLink(
                    WHATSAPP_NUMBERS.geral,
                    "Olá! Gostaria de falar com um especialista.",
                  )}
                  variant="primary"
                >
                  Fale com um especialista
                </Button>

                <Button href="#servicos" variant="outline">
                  Conheça nossos serviços
                </Button>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ========================================
            SERVIÇOS
            ======================================== */}

        <section
          id="servicos"
          className="flex min-h-screen flex-col bg-white px-6 pt-24 lg:px-8 scroll-mt-24"
        >
          <div className="mx-auto w-full max-w-7xl">
            <Reveal>
              <SectionLabel tone="light" bordered={false}>
                Nossos serviços
              </SectionLabel>

              <h2 className="mt-3 text-4xl font-bold text-zinc-900">
                Soluções para sua infraestrutura
              </h2>
            </Reveal>

            <Services />
          </div>

          <InfiniteBanner />
        </section>

        <AboutSection />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
