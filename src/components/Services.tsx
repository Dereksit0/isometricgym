import AnimateOnScroll from "./AnimateOnScroll";

const SERVICES = [
  {
    emoji: "💪🏽",
    title: "Calistenia & Funcional",
    description:
      "Desarrolla fuerza real usando tu propio peso corporal. Movimientos funcionales que transforman tu cuerpo y mejoran tu rendimiento en la vida diaria.",
  },
  {
    emoji: "🤸🏻‍♂️",
    title: "Yoga",
    description:
      "Equilibra mente, cuerpo y espíritu. Nuestras clases de yoga te guiarán hacia una mayor flexibilidad, fuerza interior y paz mental.",
  },
  {
    emoji: "🎯",
    title: "Entrenamientos Personalizados",
    description:
      "Planes diseñados específicamente para tus objetivos, tu nivel y tu estilo de vida. Atención uno a uno con nuestros especialistas.",
  },
  {
    emoji: "♿️",
    title: "Fisioterapia",
    description:
      "Recupera tu movilidad y previene lesiones. Nuestros fisioterapeutas certificados te acompañan en cada etapa de tu rehabilitación.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 sm:py-32 bg-[#050601]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-16">
          <span className="text-[#FFDE00] text-xs font-bold tracking-[0.3em] uppercase">
            Lo Que Ofrecemos
          </span>
          <h2
            className="text-[clamp(2.5rem,6vw,4.5rem)] text-white uppercase mt-3 leading-tight"
            style={{ fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)" }}
          >
            Nuestros Servicios
          </h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto text-sm sm:text-base">
            Todo lo que necesitas para transformarte, en un solo lugar.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, i) => (
            <AnimateOnScroll
              key={service.title}
              animation="fade-up"
              delay={i * 100}
            >
              <div className="card-lift h-full bg-card border border-[#1f2204] rounded-2xl p-7 group">
                <div className="text-4xl mb-5">{service.emoji}</div>
                <div className="w-8 h-0.5 bg-[#FFDE00] mb-4 group-hover:w-16 transition-all duration-400" />
                <h3
                  className="text-xl text-white mb-3"
                  style={{ fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)" }}
                >
                  {service.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
