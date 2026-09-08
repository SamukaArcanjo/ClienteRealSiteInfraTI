import useInView from "./useInView";

// Envolve qualquer conteúdo e faz ele "surgir" (subindo + ficando
// opaco) quando entra na tela ao rolar a página.
function Reveal({ children, delay = 0, className = "" }) {
  const [ref, emVista] = useInView({ threshold: 0.15 });

  return (
    <div
      ref={ref}
      style={{ transitionDelay: emVista ? `${delay}ms` : "0ms" }}
      className={`transition-all duration-700 ease-out ${
        emVista ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default Reveal;
