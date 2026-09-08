const ITEMS = [
  "Suporte técnico especializado",
  "Cabeamento e redes estruturadas",
  "Monitoramento 24/7",
  "Infraestrutura de TI",
  "Segurança e backup",
];

function MarqueeContent() {
  return (
    <div className="flex flex-shrink-0 items-center gap-12 pr-12">
      {ITEMS.map((item) => (
        <span
          key={item}
          className="flex items-center gap-12 text-lg font-bold uppercase tracking-wide text-white md:text-xl"
        >
          {item}
          <span aria-hidden="true" className="text-white/40">
            -
          </span>
        </span>
      ))}
    </div>
  );
}

function InfiniteBanner() {
  return (
    <div className="relative -mx-6 mt-auto flex h-[100px] items-center overflow-hidden bg-red-600 lg:-mx-8">
      <div className="animate-marquee flex w-max">
        <MarqueeContent />
        <MarqueeContent />
      </div>
    </div>
  );
}

export default InfiniteBanner;
