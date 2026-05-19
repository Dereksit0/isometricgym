import AnimateOnScroll from "./AnimateOnScroll";

const TIME_SLOTS = [
  {
    icon: "🌅",
    label: "Matutino",
    days: "Lunes — Viernes",
    time: "5:30",
    timeEnd: "11:30 am",
    accent: true,
    desc: "Arranca el día con energía y propósito antes de que el mundo despierte.",
  },
  {
    icon: "☀️",
    label: "Mediodía",
    days: "Lunes — Viernes",
    time: "12:30",
    timeEnd: "3:30 pm",
    accent: false,
    desc: "El impulso perfecto para romper la rutina y recargar tu tarde.",
  },
  {
    icon: "🌆",
    label: "Vespertino",
    days: "Lunes — Viernes",
    time: "5:30",
    timeEnd: "8:30 pm",
    accent: false,
    desc: "Libera el estrés del día y termina con la mejor versión de ti.",
  },
  {
    icon: "🏖️",
    label: "Fin de Semana",
    days: "Sábados",
    time: "10:30",
    timeEnd: "11:30 am",
    accent: false,
    desc: "Dos opciones para que el sábado también sea día de transformación.",
  },
];

export default function Schedule() {
  return (
    <section id="horarios" className="py-24 sm:py-32 bg-[#050601]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-16">
          <span className="text-[#FFDE00] text-xs font-bold tracking-[0.3em] uppercase">
            Siempre Hay un Momento Para Ti
          </span>
          <h2
            className="text-[clamp(2.5rem,6vw,4.5rem)] text-white uppercase mt-3 leading-tight"
            style={{ fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)" }}
          >
            Horarios
          </h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto text-sm sm:text-base">
            Horarios flexibles para que el entrenamiento encaje en tu vida,
            no al revés.
          </p>
        </AnimateOnScroll>

        {/* 4-column grid on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TIME_SLOTS.map((slot, i) => (
            <AnimateOnScroll key={slot.label} animation="fade-up" delay={i * 100}>
              <div
                className={`card-lift h-full flex flex-col rounded-2xl p-6 border ${
                  slot.accent
                    ? "bg-[#FFDE00]/8 border-[#FFDE00]/25"
                    : "bg-card border-[#1f2204]"
                }`}
              >
                {/* Icon + badge */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-2xl">{slot.icon}</span>
                  <span
                    className={`text-[10px] font-bold tracking-[0.2em] uppercase px-2.5 py-1 rounded-full ${
                      slot.accent
                        ? "bg-[#FFDE00] text-[#050601]"
                        : "bg-[#1f2204] text-white/40"
                    }`}
                  >
                    {slot.label}
                  </span>
                </div>

                {/* Time display */}
                <div className="mb-1">
                  <span
                    className={`text-5xl leading-none ${slot.accent ? "text-[#FFDE00]" : "text-white"}`}
                    style={{ fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)" }}
                  >
                    {slot.time}
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-px flex-1 bg-[#1f2204]" />
                  <span
                    className="text-sm text-white/40"
                    style={{ fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)" }}
                  >
                    {slot.timeEnd}
                  </span>
                </div>

                {/* Day */}
                <p className="text-[#FFDE00]/70 text-xs font-semibold tracking-widest uppercase mb-3">
                  {slot.days}
                </p>

                {/* Description */}
                <p className="text-white/40 text-xs leading-relaxed mt-auto">
                  {slot.desc}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Full-width divider row */}
        <AnimateOnScroll animation="fade-up" delay={400}>
          <div className="mt-5 bg-card border border-[#1f2204] rounded-2xl px-7 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-[#FFDE00] text-xl">ℹ</span>
              <p className="text-white/40 text-sm">
                Los horarios pueden variar en días festivos.{" "}
                <span className="text-white/60">Consúltanos antes de venir.</span>
              </p>
            </div>
            <a
              href="https://wa.me/522224462597?text=Hola%2C%20me%20gustar%C3%ADa%20conocer%20m%C3%A1s%20sobre%20los%20horarios%20de%20IsometricGym"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-6 py-2.5 bg-[#FFDE00] text-[#050601] font-bold text-xs uppercase tracking-widest rounded-full hover:bg-white transition-colors duration-200"
            >
              Confirmar Horario
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
