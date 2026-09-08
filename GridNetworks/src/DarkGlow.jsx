// Fundo decorativo escuro (brilhos vermelhos + grade pontilhada)
// reaproveitado pela Hero e pela seção Sobre — antes esse bloco
// inteiro estava duplicado nos dois arquivos.
function DarkGlow({ variant = "corners" }) {
  const grid = (
    <div
      aria-hidden="true"
      className="animate-grid pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:60px_60px]"
    />
  );

  if (variant === "center") {
    return (
      <>
        <div
          aria-hidden="true"
          className="animate-glow pointer-events-none absolute left-1/2 top-0 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-red-600/10 blur-[130px]"
        />
        {grid}
      </>
    );
  }

  return (
    <>
      <div
        aria-hidden="true"
        className="animate-glow pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-red-600/20 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="animate-glow pointer-events-none absolute -bottom-40 right-20 h-[500px] w-[500px] rounded-full bg-red-600/15 blur-[120px] [animation-delay:3s]"
      />
      {grid}
    </>
  );
}

export default DarkGlow;
