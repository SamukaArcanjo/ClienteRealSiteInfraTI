function Services() {
  const services = [
    { nome: "Cabeamento e ajustes de ethernet", tela: "" },
    {
      nome: "Suporte/montagem/manutenção de computadores,notebooks e servidores",
      tela: "",
    },
    { nome: "Instalação de suporte para cameras" },
    { nome: "desenvolvimento de sistemas", tela: "" },
  ];
  return (
    <div>
      <div>
        {services.map((service) => {
          return <div>{service.nome}</div>;
        })}
      </div>
    </div>
  );
}

export default Services;
