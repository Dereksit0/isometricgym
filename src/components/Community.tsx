import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";
import { WA_URL } from "@/lib/constants";

const STATS = [
  { num: "500+", label: "Miembros Activos" },
  { num: "3+", label: "Años Transformando" },
  { num: "4", label: "Disciplinas" },
  { num: "∞", label: "Motivación" },
];

export default function Community() {
  return (
    <section id="comunidad" className="py-24 sm:py-32 bg-[#050601] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateOnScroll className="text-center mb-16">
          <span className="text-[#FFDE00] text-xs font-bold tracking-[0.3em] uppercase">
            Más Que un Gimnasio
          </span>
          <h2
            className="text-[clamp(2.5rem,6vw,4.5rem)] text-white uppercase mt-3 leading-tight"
            style={{ fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)" }}
          >
            Comunidad IsometricGym
          </h2>
          <p className="text-white/50 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Aquí no solo entrenamos, nos apoyamos, nos motivamos y crecemos
            juntos. La comunidad ISO es la razón por la que volvemos cada día.
          </p>
        </AnimateOnScroll>

        {/* Stats */}
        <AnimateOnScroll animation="fade-up" className="mb-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="text-center bg-card border border-[#1f2204] rounded-2xl py-7 px-4"
              >
                <div
                  className="text-4xl sm:text-5xl text-[#FFDE00]"
                  style={{ fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)" }}
                >
                  {stat.num}
                </div>
                <div className="text-white/40 text-xs tracking-widest uppercase mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        {/*
          Gallery layout (desktop, 3 cols):
          Row 1: [ img1 (col-span-2) ]  [ img2 ]
          Row 2: [ img3 ] [ img4 ] [ img5 ]
          Row 3: [ img6 (col-span-2) ]  [ img7 ]
          Mobile (2 cols):
          [ img1 (col-span-2) ]
          [ img2 ] [ img3 ]
          [ img4 ] [ img5 ]
          [ img6 ] [ img7 ]
        */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">

          {/* img1 — wide featured */}
          <AnimateOnScroll animation="scale-in" delay={0} className="col-span-2 md:col-span-2">
            <div className="relative w-full aspect-[16/9] md:aspect-[16/8] rounded-2xl overflow-hidden">
              <Image
                src="/imgs/comunidad1.webp"
                alt="Comunidad IsometricGym entrenando"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050601]/50 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>
          </AnimateOnScroll>

          {/* img2 */}
          <AnimateOnScroll animation="scale-in" delay={80}>
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/imgs/comunidad2.webp"
                alt="Entrenamiento en equipo ISO"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050601]/50 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>
          </AnimateOnScroll>

          {/* img3 */}
          <AnimateOnScroll animation="scale-in" delay={120}>
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/imgs/comunidad3.webp"
                alt="Sesión ISO"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050601]/50 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>
          </AnimateOnScroll>

          {/* img4 */}
          <AnimateOnScroll animation="scale-in" delay={160}>
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/imgs/comunidad4.webp"
                alt="Team ISO"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050601]/50 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>
          </AnimateOnScroll>

          {/* img5 */}
          <AnimateOnScroll animation="scale-in" delay={200}>
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/imgs/comunidad5.webp"
                alt="Comunidad en acción"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050601]/50 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>
          </AnimateOnScroll>

          {/* img6 — wide */}
          <AnimateOnScroll animation="scale-in" delay={240} className="col-span-2 md:col-span-2">
            <div className="relative w-full aspect-[16/9] md:aspect-[16/8] rounded-2xl overflow-hidden">
              <Image
                src="/imgs/comunidad6.webp"
                alt="IsometricGym comunidad Puebla"
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050601]/50 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>
          </AnimateOnScroll>

          {/* img7 — nueva */}
          <AnimateOnScroll animation="scale-in" delay={280}>
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/imgs/comunidad7.webp"
                alt="Miembros IsometricGym"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050601]/50 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>
          </AnimateOnScroll>

        </div>

        {/* CTA */}
        <AnimateOnScroll className="text-center mt-14">
          <p className="text-white/50 text-sm sm:text-base max-w-lg mx-auto mb-6">
            Sé parte de la familia ISO. Tu transformación empieza con un primer
            paso — y nosotros estamos aquí para acompañarte.
          </p>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="glow-yellow inline-block px-8 py-4 bg-[#FFDE00] text-[#050601] font-bold text-sm uppercase tracking-[0.15em] rounded-full hover:bg-white hover:scale-105 transition-all duration-300"
          >
            Únete a la Comunidad
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
