import Image from "next/image";

const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Team", href: "#team" },
  { label: "Horarios", href: "#horarios" },
  { label: "Planes", href: "#planes" },
  { label: "Comunidad", href: "#comunidad" },
  { label: "Contacto", href: "#ubicacion" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0c02] border-t border-[#1f2204]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Image
              src="/imgs/logo.png"
              alt="IsometricGym"
              width={130}
              height={55}
              className="object-contain mb-5"
            />
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Transforma tu cuerpo, transforma tu vida. Calistenia, Yoga,
              Entrenamiento Funcional y Fisioterapia en Puebla.
            </p>
            <a
              href="https://wa.me/522224462597"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 text-[#FFDE00] text-sm font-semibold hover:text-white transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              +52 222 446 2597
            </a>
          </div>

          {/* Nav */}
          <div>
            <h4
              className="text-[#FFDE00] text-sm tracking-[0.25em] uppercase mb-5"
              style={{ fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)" }}
            >
              Navegación
            </h4>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/40 hover:text-[#FFDE00] text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4
              className="text-[#FFDE00] text-sm tracking-[0.25em] uppercase mb-5"
              style={{ fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)" }}
            >
              ¿Listo para Empezar?
            </h4>
            <p className="text-white/40 text-sm mb-5 leading-relaxed">
              Tu transformación comienza con una decisión. Contáctanos hoy y
              te orientamos sin compromiso.
            </p>
            <a
              href="https://wa.me/522224462597?text=Hola%2C%20me%20gustar%C3%ADa%20conocer%20m%C3%A1s%20sobre%20los%20planes%20de%20IsometricGym"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-7 py-3 bg-[#FFDE00] text-[#050601] font-bold text-xs uppercase tracking-[0.15em] rounded-full hover:bg-white transition-colors duration-300"
            >
              Contáctanos
            </a>
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="border-t border-[#1f2204] pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/20 text-xs tracking-wider">
            © {new Date().getFullYear()} IsometricGym. Todos los derechos reservados.
          </p>
          <p className="text-white/15 text-xs">
            Puebla, México
          </p>
        </div>
      </div>
    </footer>
  );
}
