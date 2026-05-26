import { WA_URL } from "@/lib/constants";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#050601] flex flex-col items-center justify-center text-center px-4">
      <p className="text-[#FFDE00] text-xs font-bold tracking-[0.3em] uppercase mb-4">
        Error 404
      </p>
      <h1
        className="text-[clamp(3rem,10vw,7rem)] text-white uppercase leading-none mb-6"
        style={{ fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)" }}
      >
        Página no encontrada
      </h1>
      <p className="text-white/50 text-sm sm:text-base max-w-md mb-10">
        La página que buscas no existe. Vuelve al inicio o contáctanos directamente.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href="/"
          className="px-7 py-3.5 bg-[#FFDE00] text-[#050601] font-bold text-xs uppercase tracking-[0.15em] rounded-full hover:bg-white transition-all duration-300"
        >
          Volver al inicio
        </a>
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="px-7 py-3.5 border border-[#FFDE00]/40 text-[#FFDE00] font-bold text-xs uppercase tracking-[0.15em] rounded-full hover:bg-[#FFDE00] hover:text-[#050601] transition-all duration-300"
        >
          Contáctanos
        </a>
      </div>
    </main>
  );
}
