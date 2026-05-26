import Image from "next/image";
import { WA_URL } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Decorative background — alt="" hides it from screen readers */}
      <div className="absolute inset-0">
        <Image
          src="/imgs/banner.webp"
          alt=""
          role="presentation"
          fill
          className="object-cover object-center"
          priority
          quality={85}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050601]/60 via-[#050601]/30 to-[#050601]/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-3xl mx-auto pt-20">
        <p className="text-[#FFDE00]/60 text-xs tracking-[0.4em] uppercase mb-6 font-medium">
          Calistenia · Yoga · Funcional · Fisioterapia
        </p>

        <h1
          className="text-[clamp(2.8rem,9vw,5.5rem)] leading-[0.95] text-white uppercase mb-6"
          style={{ fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)" }}
        >
          DONDE LA FUERZA
          <br />
          <span className="text-[#FFDE00]">ENCUENTRA SU FORMA</span>
        </h1>

        <p className="text-sm sm:text-base text-white/55 mb-10 max-w-md mx-auto leading-relaxed font-light">
          Transforma tu cuerpo y mente con los mejores especialistas de Puebla.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="glow-yellow px-7 py-3.5 bg-[#FFDE00] text-[#050601] font-bold text-xs uppercase tracking-[0.15em] rounded-full hover:bg-white hover:scale-105 transition-all duration-300 min-w-[230px] text-center"
          >
            Inicia Tu Transformación
          </a>
          {/* Fixed: was #testimonios which shows videos, not gym photos */}
          <a
            href="#comunidad"
            className="px-7 py-3.5 bg-transparent text-white/70 font-bold text-xs uppercase tracking-[0.15em] rounded-full border border-white/25 hover:border-[#FFDE00]/60 hover:text-[#FFDE00] transition-all duration-300 min-w-[230px] text-center"
          >
            Ver Instalaciones
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <div className="w-5 h-8 border border-white/40 rounded-full flex items-start justify-center pt-1.5">
          <div className="w-0.5 h-2 bg-[#FFDE00] rounded-full" />
        </div>
      </div>
    </section>
  );
}
