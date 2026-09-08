// Aquele "selinho" vermelho em letra pequena e maiúscula que aparece
// no topo de várias seções (Hero, Serviços, Sobre). Antes esse mesmo
// bloco de classes estava copiado e colado em 3 lugares diferentes.
function SectionLabel({ children, tone = "dark", bordered = true }) {
  const cor = tone === "dark" ? "text-red-500" : "text-red-600";
  const borda = bordered ? "mb-6 border-l-4 border-red-600 pl-4" : "";

  return (
    <span
      className={`inline-block text-sm font-semibold uppercase tracking-[0.25em] ${cor} ${borda}`}
    >
      {children}
    </span>
  );
}

export default SectionLabel;
