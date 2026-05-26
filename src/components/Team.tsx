import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";

// Order: coach1.webp → coach3.webp → coach2.webp
const COACHES = [
  {
    image: "/imgs/coach1.webp",
    name: "Carlos Reyes",
    role: "Especialista en Calistenia & Fuerza Funcional",
    bio: "Más de 8 años dedicados al entrenamiento funcional y calistenia. Transforma vidas a través del movimiento consciente.",
  },
  {
    image: "/imgs/coach3.webp",
    name: "Ana Martínez",
    role: "Instructora de Yoga & Bienestar",
    bio: "Certificada internacionalmente en Hatha y Vinyasa Yoga. Guía a sus alumnos hacia el equilibrio físico y mental.",
  },
  {
    image: "/imgs/coach2.webp",
    name: "Miguel Torres",
    role: "Fisioterapeuta & Entrenamiento Personal",
    bio: "Fisioterapeuta certificado con especialidad en rehabilitación deportiva y prevención de lesiones.",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-24 sm:py-32 bg-[#0a0c02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-16">
          <span className="text-[#FFDE00] text-xs font-bold tracking-[0.3em] uppercase">
            Expertos en Tu Transformación
          </span>
          <h2
            className="text-[clamp(2.5rem,6vw,4.5rem)] text-white uppercase mt-3 leading-tight"
            style={{ fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)" }}
          >
            Conoce a Nuestro Team
          </h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto text-sm sm:text-base">
            Profesionales apasionados que viven lo que enseñan. Tu éxito es
            nuestra motivación.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COACHES.map((coach, i) => (
            <AnimateOnScroll
              key={coach.name}
              animation="fade-up"
              delay={i * 150}
            >
              <div className="card-lift group bg-card border border-[#1f2204] rounded-2xl overflow-hidden">
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={coach.image}
                    alt={coach.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c02] via-transparent to-transparent" />
                </div>

                {/* Info */}
                <div className="p-6 -mt-4 relative">
                  <div className="w-8 h-0.5 bg-[#FFDE00] mb-3 group-hover:w-16 transition-all duration-400" />
                  <h3
                    className="text-2xl text-white"
                    style={{ fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)" }}
                  >
                    {coach.name}
                  </h3>
                  <p className="text-[#FFDE00] text-xs font-semibold tracking-wider uppercase mt-1 mb-3">
                    {coach.role}
                  </p>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {coach.bio}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
