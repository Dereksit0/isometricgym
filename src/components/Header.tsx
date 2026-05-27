"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { NAV_LINKS, WA_URL, PHONE_NUMBER } from "@/lib/constants";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) setMenuOpen(false);
    },
    [menuOpen]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#050601]/96 backdrop-blur-lg shadow-[0_4px_30px_rgba(0,0,0,0.6)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 sm:h-20">
            <a href="#inicio" className="flex items-center shrink-0">
              <Image
                src="/imgs/logo.webp"
                alt="IsometricGym — Inicio"
                width={60}
                height={26}
                className="object-contain w-[50px] sm:w-[60px]"
                priority
              />
            </a>

            {/* Desktop nav */}
            <nav aria-label="Navegación principal" className="hidden lg:flex items-center gap-7">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/80 hover:text-[#FFDE00] transition-colors duration-200 text-xs font-semibold tracking-[0.15em] uppercase"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 px-5 py-2 bg-[#FFDE00] text-[#050601] font-bold text-xs tracking-widest uppercase rounded-full hover:bg-white transition-colors duration-200"
              >
                Únete Ahora
              </a>
            </nav>

            {/* Hamburger button */}
            <button
              className="lg:hidden relative z-[60] flex flex-col gap-[5px] p-2 text-white"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <span
                className={`block w-6 h-0.5 transition-all duration-300 origin-center ${
                  menuOpen ? "bg-[#FFDE00] rotate-45 translate-y-[7px]" : "bg-white"
                }`}
              />
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ${
                  menuOpen ? "opacity-0 scale-x-0" : "bg-white"
                }`}
              />
              <span
                className={`block w-6 h-0.5 transition-all duration-300 origin-center ${
                  menuOpen ? "bg-[#FFDE00] -rotate-45 -translate-y-[7px]" : "bg-white"
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu — fullscreen overlay */}
      <div
        id="mobile-menu"
        aria-hidden={!menuOpen}
        className={`lg:hidden fixed inset-0 z-[55] transition-all duration-500 ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Dark backdrop */}
        <div
          className={`absolute inset-0 bg-[#050601]/80 backdrop-blur-sm transition-opacity duration-500 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMenuOpen(false)}
        />

        {/* Slide-in panel from right */}
        <div
          className={`absolute top-0 right-0 h-full w-[80%] max-w-sm bg-[#0a0c02] border-l border-[#FFDE00]/10 flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Panel header */}
          <div className="flex items-center justify-between px-6 pt-6 pb-5 border-b border-[#1f2204]">
            <Image
              src="/imgs/logo.webp"
              alt="IsometricGym"
              width={50}
              height={22}
              className="object-contain"
            />
            <span
              className="text-[#FFDE00]/40 text-[10px] tracking-[0.3em] uppercase"
              style={{ fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)" }}
            >
              Menú
            </span>
          </div>

          {/* Nav links */}
          <nav
            aria-label="Navegación móvil"
            className="flex-1 flex flex-col justify-center px-6 gap-1"
          >
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="group flex items-center gap-4 py-3.5 border-b border-[#1f2204] last:border-0"
                style={{
                  transitionProperty: "opacity, transform",
                  transitionDuration: "0.4s",
                  transitionTimingFunction: "ease",
                  transitionDelay: menuOpen ? `${i * 50 + 100}ms` : "0ms",
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? "translateX(0)" : "translateX(20px)",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFDE00]/30 group-hover:bg-[#FFDE00] transition-colors duration-200 flex-shrink-0" />
                <span
                  className="text-white/60 group-hover:text-white transition-colors duration-200 text-base font-semibold tracking-[0.12em] uppercase"
                >
                  {link.label}
                </span>
              </a>
            ))}
          </nav>

          {/* Panel footer */}
          <div className="px-6 pb-8 pt-5 border-t border-[#1f2204] flex flex-col gap-3">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2.5 w-full py-3.5 bg-[#FFDE00] text-[#050601] font-bold text-xs uppercase tracking-widest rounded-full hover:bg-white transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Únete Ahora
            </a>
            <p className="text-white/20 text-[10px] text-center tracking-widest uppercase">
              +52 222 446 2597
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
