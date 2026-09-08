import { useState } from "react";
import Reveal from "./Reveal";
import { WHATSAPP_NUMBERS, whatsappLink } from "./whatsapp";

function CableIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 4v6a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4" />
      <path d="M8 14v6" />
      <path d="M16 14v6" />
      <path d="M4 4h4" />
      <path d="M16 4h4" />
    </svg>
  );
}

function ToolIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="4" width="18" height="13" rx="2" />
      <path d="M9 20h6" />
      <path d="M12 17v3" />
    </svg>
  );
}

function CameraIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3 8a2 2 0 0 1 2-2h2l1.5-2h7L17 6h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <circle cx="12" cy="13" r="3.5" />
    </svg>
  );
}

function CodeIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M8 6 3 12l5 6" />
      <path d="M16 6l5 6-5 6" />
    </svg>
  );
}

/* ========================================
   MARCAS ABSTRATAS (card de detalhe)
   ======================================== */

function CableMark(props) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="32" cy="13" r="4" />
      <circle cx="14" cy="43" r="4" />
      <circle cx="50" cy="43" r="4" />
      <path d="M32 17v9" />
      <path d="M32 26 16 39" />
      <path d="M32 26 48 39" />
      <circle cx="32" cy="26" r="2.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function SupportMark(props) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 32a20 20 0 0 1 20-20" />
      <path d="M52 32a20 20 0 0 1-20 20" />
      <path d="M20 32a12 12 0 0 1 12-12" />
      <path d="M44 32a12 12 0 0 1-12 12" />
      <circle cx="32" cy="32" r="3" fill="currentColor" stroke="none" />
    </svg>
  );
}

function CameraMark(props) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M32 9 51 21v22L32 55 13 43V21z" />
      <circle cx="32" cy="32" r="9" />
      <circle cx="32" cy="32" r="2.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function SystemsMark(props) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M32 8 47 20 32 32 17 20z" />
      <path d="M17 32 32 44 47 32" />
      <path d="M17 44 32 56 47 44" />
    </svg>
  );
}

const SERVICES = [
  {
    nome: "Cabeamento e ajustes de ethernet",
    descricao:
      "Organizamos e estruturamos o cabeamento de rede da sua empresa, com ajustes finos para eliminar quedas de conexão e lentidão no dia a dia.",
    Icon: CableIcon,
    Mark: CableMark,
    whatsapp: WHATSAPP_NUMBERS.geral,
  },
  {
    nome: "Suporte/montagem/manutenção de computadores, notebooks e servidores",
    descricao:
      "Montagem, suporte e manutenção de computadores, notebooks e servidores, mantendo sua operação sempre funcionando sem dor de cabeça.",
    Icon: ToolIcon,
    Mark: SupportMark,
    whatsapp: WHATSAPP_NUMBERS.geral,
  },
  {
    nome: "Instalação de suporte para câmeras",
    descricao:
      "Projetamos e instalamos sistemas de câmeras de segurança, dando mais controle, visibilidade e tranquilidade para o seu negócio.",
    Icon: CameraIcon,
    Mark: CameraMark,
    whatsapp: WHATSAPP_NUMBERS.geral,
  },
  {
    nome: "Desenvolvimento de sistemas",
    descricao:
      "Criamos sistemas sob medida para resolver problemas específicos da sua empresa, com foco em produtividade e crescimento.",
    Icon: CodeIcon,
    Mark: SystemsMark,
    // Único serviço que vai pra um número de WhatsApp diferente.
    whatsapp: WHATSAPP_NUMBERS.sistemas,
  },
];

function Services() {
  const [serviceActive, setServiceActive] = useState(0);
  const active = SERVICES[serviceActive];
  const ActiveMark = active.Mark;

  const linkVerSolucao = whatsappLink(
    active.whatsapp,
    `Olá! Tenho interesse em: ${active.nome}`,
  );

  return (
    <div className="relative overflow-hidden py-12">
      {/* Fundo sublime (pontilhado + brilho leve) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.05)_1px,transparent_0)] bg-[size:28px_28px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 -z-10 h-[420px] w-[420px] rounded-full bg-red-600/[0.04] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-32 -z-10 h-[380px] w-[380px] rounded-full bg-black/[0.03] blur-3xl"
      />

      <Reveal className="grid min-w-0 gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-16">
        {/* Lista de serviços (botões) */}
        <div className="min-w-0 divide-y divide-zinc-200">
          {SERVICES.map((service, index) => {
            const isActive = index === serviceActive;
            const Icon = service.Icon;

            return (
              <button
                key={service.nome}
                type="button"
                onClick={() => setServiceActive(index)}
                aria-pressed={isActive}
                className={`flex w-full items-center gap-3 border-l-4 py-6 pl-6 pr-2 text-left transition-colors duration-300 sm:gap-4 ${
                  isActive
                    ? "border-red-600"
                    : "border-transparent hover:border-zinc-200"
                }`}
              >
                <span className="hidden font-mono text-xs text-zinc-400 sm:inline">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span
                  className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                    isActive
                      ? "border-red-600 bg-red-600 text-white"
                      : "border-zinc-200 text-zinc-400"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </span>

                {/* min-w-0 é o que permite esse texto quebrar linha
                    em vez de estourar a largura da tela no celular */}
                <span
                  className={`min-w-0 flex-1 text-base font-semibold leading-snug transition-colors duration-300 md:text-lg ${
                    isActive ? "text-red-600" : "text-zinc-900"
                  }`}
                >
                  {service.nome}
                </span>

                <span
                  aria-hidden="true"
                  className={`flex-shrink-0 text-xl transition-all duration-300 ${
                    isActive
                      ? "translate-x-0 text-red-600"
                      : "-translate-x-1 text-zinc-300"
                  }`}
                >
                  →
                </span>
              </button>
            );
          })}
        </div>

        {/* Detalhe do serviço ativo */}
        <div className="relative flex min-w-0 flex-col justify-center py-6 lg:border-l lg:border-zinc-200 lg:pl-16">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-4 top-0 h-40 w-40 rounded-full border border-red-600/10"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-12 top-8 h-24 w-24 rounded-full border border-red-600/10"
          />

          <span className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-red-600 text-white shadow-lg shadow-red-600/20">
            <ActiveMark className="h-8 w-8" />
          </span>

          <span className="relative mt-6 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-red-600">
            Serviço {String(serviceActive + 1).padStart(2, "0")} /{" "}
            {String(SERVICES.length).padStart(2, "0")}
          </span>

          <h3 className="relative mt-3 max-w-sm text-2xl font-bold leading-tight text-zinc-900 md:text-3xl">
            {active.nome}
          </h3>

          <p className="relative mt-4 max-w-md text-base leading-7 text-zinc-600">
            {active.descricao}
          </p>

          <a
            href={linkVerSolucao}
            target="_blank"
            rel="noopener noreferrer"
            className="relative mt-8 inline-flex w-fit items-center gap-2 border-b-2 border-red-600 pb-1 text-sm font-semibold text-red-600 transition-all duration-300 hover:gap-3"
          >
            Ver solução
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </Reveal>
    </div>
  );
}

export default Services;
