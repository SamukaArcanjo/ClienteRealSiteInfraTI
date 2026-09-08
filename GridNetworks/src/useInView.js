import { useEffect, useRef, useState } from "react";

// Hook que avisa quando um elemento entra na tela ao rolar a página.
// Usa o IntersectionObserver, um recurso nativo do navegador —
// ou seja, zero KB de biblioteca extra, o que mantém o site leve.
function useInView(options) {
  const ref = useRef(null);
  const [emVista, setEmVista] = useState(false);

  useEffect(() => {
    const elemento = ref.current;
    if (!elemento) return undefined;

    // Quem tem "reduzir movimento" ativado no sistema já vê tudo
    // visível de cara, sem animação nenhuma.
    const prefereReduzirMovimento = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefereReduzirMovimento) {
      setEmVista(true);
      return undefined;
    }

    const observer = new IntersectionObserver(([entrada]) => {
      if (entrada.isIntersecting) {
        setEmVista(true);
        // Uma vez que apareceu, para de observar — a animação
        // acontece só na primeira vez, não fica repetindo.
        observer.unobserve(elemento);
      }
    }, options);

    observer.observe(elemento);
    return () => observer.disconnect();
  }, [options]);

  return [ref, emVista];
}

export default useInView;
