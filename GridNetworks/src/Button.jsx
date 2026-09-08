const VARIANTS = {
  primary: "bg-red-600 text-white shadow-lg shadow-red-600/20 hover:bg-red-700",
  outline:
    "border border-zinc-700 bg-white/5 text-white backdrop-blur-sm hover:border-red-500 hover:bg-red-500/10",
};

// Botão/link reutilizável. Se o "href" começar com "http", ele já
// abre em uma aba nova sozinho (é assim que os links de WhatsApp
// devem se comportar, sem precisar lembrar disso toda vez).
function Button({ href, variant = "primary", className = "", children }) {
  const external = href?.startsWith("http");

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center justify-center rounded-lg px-7 py-4 text-center font-semibold transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808] ${VARIANTS[variant]} ${className}`}
    >
      {children}
    </a>
  );
}

export default Button;
