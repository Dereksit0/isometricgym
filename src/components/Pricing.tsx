import AnimateOnScroll from "./AnimateOnScroll";

const WA = "https://wa.me/522224462597?text=";

const PLANS = [
  {
    name: "ISOHEALTHY ESSENTIAL",
    price: "$1,499",
    period: "/ mes",
    featured: false,
    features: [
      "3 clases a la semana",
      "Primera consulta incluida",
      "Consulta subsecuente (15 días)",
      "Acceso a todas las disciplinas",
      "Seguimiento personalizado",
    ],
    waMessage: "Hola, me interesa el plan ISOHEALTHY ESSENTIAL",
    cta: "Elegir Essential",
  },
  {
    name: "ISOHEALTHY ELITE",
    price: "$1,699",
    period: "/ mes",
    featured: true,
    features: [
      "6 clases a la semana",
      "Primera consulta incluida",
      "Consulta subsecuente (15 días)",
      "Acceso a todas las disciplinas",
      "Seguimiento personalizado",
      "Prioridad en reservas",
    ],
    waMessage: "Hola, me interesa el plan ISOHEALTHY ELITE",
    cta: "Elegir Elite",
  },
];

const PACKAGE_FEATURES = [
  "Clases semanales flexibles",
  "Primera consulta incluida",
  "Consulta subsecuente (a los 15 días)",
];

export default function Pricing() {
  return (
    <section id="planes" className="py-24 sm:py-32 bg-[#0a0c02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-6">
          <span className="text-[#FFDE00] text-xs font-bold tracking-[0.3em] uppercase">
            Invierte en Ti
          </span>
          <h2
            className="text-[clamp(2.5rem,6vw,4.5rem)] text-white uppercase mt-3 leading-tight"
            style={{ fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)" }}
          >
            Planes & Precios
          </h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto text-sm sm:text-base">
            Todos los planes incluyen acceso a nuestros especialistas y
            seguimiento personalizado.
          </p>
        </AnimateOnScroll>

        {/* ISOHEALTHY PACKAGES label */}
        <AnimateOnScroll className="text-center mb-12">
          <span
            className="inline-block text-[#FFDE00] border border-[#FFDE00]/30 rounded-full px-6 py-2 text-sm tracking-[0.2em] uppercase"
            style={{ fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)" }}
          >
            ISOHEALTHY Packages
          </span>
          <div className="flex flex-wrap justify-center gap-4 mt-5">
            {PACKAGE_FEATURES.map((f) => (
              <span
                key={f}
                className="flex items-center gap-2 text-white/50 text-xs"
              >
                <span className="text-[#FFDE00]">✓</span> {f}
              </span>
            ))}
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {PLANS.map((plan, i) => (
            <AnimateOnScroll
              key={plan.name}
              animation="fade-up"
              delay={i * 150}
            >
              <div
                className={`card-lift relative h-full flex flex-col rounded-2xl overflow-hidden ${
                  plan.featured
                    ? "bg-[#FFDE00] text-[#050601]"
                    : "bg-card border border-[#1f2204] text-white"
                }`}
              >
                {plan.featured && (
                  <div className="absolute top-5 right-5">
                    <span className="bg-[#050601] text-[#FFDE00] text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full">
                      Más Popular
                    </span>
                  </div>
                )}

                <div className="p-8 flex-1">
                  <h3
                    className={`text-2xl leading-tight mb-1 ${plan.featured ? "text-[#050601]" : "text-[#FFDE00]"}`}
                    style={{ fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)" }}
                  >
                    {plan.name}
                  </h3>

                  <div className="flex items-end gap-1 my-5">
                    <span
                      className="text-5xl font-black"
                      style={{ fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)" }}
                    >
                      {plan.price}
                    </span>
                    <span
                      className={`text-sm mb-2 ${plan.featured ? "text-[#050601]/60" : "text-white/40"}`}
                    >
                      {plan.period}
                    </span>
                  </div>

                  <div
                    className={`h-px mb-6 ${plan.featured ? "bg-[#050601]/20" : "bg-[#1f2204]"}`}
                  />

                  <ul className="flex flex-col gap-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <span
                          className={`mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold ${
                            plan.featured
                              ? "bg-[#050601] text-[#FFDE00]"
                              : "bg-[#FFDE00]/15 text-[#FFDE00]"
                          }`}
                        >
                          ✓
                        </span>
                        <span className={plan.featured ? "text-[#050601]/80" : "text-white/60"}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-8 pt-0">
                  <a
                    href={`${WA}${encodeURIComponent(plan.waMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center py-4 rounded-full font-bold text-sm uppercase tracking-[0.15em] transition-all duration-300 hover:scale-105 ${
                      plan.featured
                        ? "bg-[#050601] text-[#FFDE00] hover:bg-[#111]"
                        : "bg-[#FFDE00] text-[#050601] hover:bg-white glow-yellow"
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll className="text-center mt-10">
          <p className="text-white/30 text-xs">
            ¿Tienes dudas? Escríbenos por WhatsApp y te ayudamos a elegir el plan ideal.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
