"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { NAV_LINKS, WA_URL } from "@/lib/constants";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on Escape key
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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
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
              width={80}
              height={34}
              className="object-contain w-[68px] sm:w-[80px]"
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

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2 text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span
              className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          aria-label="Navegación móvil"
          className="bg-[#050601]/98 backdrop-blur-lg border-t border-[#FFDE00]/15 px-4 py-6 flex flex-col gap-5"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-[#FFDE00] transition-colors text-sm font-semibold tracking-widest uppercase py-1"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 px-6 py-3 bg-[#FFDE00] text-[#050601] font-bold text-sm tracking-widest uppercase rounded-full text-center"
            onClick={() => setMenuOpen(false)}
          >
            Únete Ahora
          </a>
        </nav>
      </div>
    </header>
  );
}
