import AnimateOnScroll from "./AnimateOnScroll";

const MAPS_EMBED_URL =
  "https://maps.google.com/maps?q=IsometricGym+Puebla&output=embed&z=16";
// ↑ Replace with the proper embed URL from Google Maps:
//   Google Maps → Share → Embed a map → copy the `src` attribute

const MAPS_LINK = "https://maps.app.goo.gl/Fi7hsmuTBBoYxiaU8";

const CONTACT_INFO = [
  {
    icon: "📍",
    label: "Dirección",
    value: "Puebla, México",
    href: MAPS_LINK,
  },
  {
    icon: "📱",
    label: "WhatsApp",
    value: "+52 222 446 2597",
    href: "https://wa.me/522224462597",
  },
  {
    icon: "🕐",
    label: "Horarios",
    value: "Lun–Vie 5:30 am – 8:30 pm · Sáb 10:30 am",
    href: "#horarios",
  },
];

export default function Location() {
  return (
    <section id="ubicacion" className="py-24 sm:py-32 bg-[#050601]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-16">
          <span className="text-[#FFDE00] text-xs font-bold tracking-[0.3em] uppercase">
            Estamos Esperándote
          </span>
          <h2
            className="text-[clamp(2.5rem,6vw,4.5rem)] text-white uppercase mt-3 leading-tight"
            style={{ fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)" }}
          >
            Encuéntranos
          </h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto text-sm sm:text-base">
            Ven a conocer nuestras instalaciones. El primer paso es el más
            importante.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Map */}
          <AnimateOnScroll animation="fade-left" className="lg:col-span-2">
            <div className="relative rounded-2xl overflow-hidden border border-[#1f2204] bg-card">
              <iframe
                src={MAPS_EMBED_URL}
                title="Ubicación IsometricGym"
                className="w-full h-[350px] sm:h-[450px] grayscale contrast-125 opacity-90"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Overlay for brand feel */}
              <div className="pointer-events-none absolute inset-0 bg-[#FFDE00]/5 mix-blend-multiply" />
            </div>
            <div className="mt-3 text-center">
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FFDE00]/60 hover:text-[#FFDE00] text-xs tracking-widest uppercase transition-colors duration-200"
              >
                Abrir en Google Maps ↗
              </a>
            </div>
          </AnimateOnScroll>

          {/* Contact info */}
          <AnimateOnScroll animation="fade-right" delay={150} className="flex flex-col gap-4">
            {CONTACT_INFO.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="card-lift flex items-start gap-4 bg-card border border-[#1f2204] rounded-2xl p-5 group"
              >
                <span className="text-2xl flex-shrink-0 mt-0.5">{item.icon}</span>
                <div>
                  <p className="text-white/30 text-xs tracking-widest uppercase mb-1">
                    {item.label}
                  </p>
                  <p className="text-white text-sm group-hover:text-[#FFDE00] transition-colors duration-200">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/522224462597?text=Hola%2C%20me%20gustar%C3%ADa%20conocer%20m%C3%A1s%20sobre%20los%20planes%20de%20IsometricGym"
              target="_blank"
              rel="noopener noreferrer"
              className="glow-yellow mt-2 flex items-center justify-center gap-3 py-4 bg-[#FFDE00] text-[#050601] font-bold text-sm uppercase tracking-[0.15em] rounded-full hover:bg-white hover:scale-105 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Escríbenos Ahora
            </a>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
