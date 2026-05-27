"use client";
import { useRef, useState, useEffect } from "react";
import AnimateOnScroll from "./AnimateOnScroll";
import { WA_URL } from "@/lib/constants";

const VIDEOS = [
  { src: "/videos/video3.mp4", name: "— Familia ISO" },
  { src: "/videos/video1.mp4", name: "— Miembro ISO" },
  { src: "/videos/video2.mp4", name: "— Comunidad ISO" },
];

function VideoCard({
  src,
  name,
  delay,
}: {
  src: string;
  name: string;
  delay: number;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [muted, setMuted] = useState(true);
  const [loaded, setLoaded] = useState(false);

  // Only load + play the video once it enters the viewport
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !loaded) {
          setLoaded(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [loaded]);

  // Pause video when it leaves the viewport to save resources
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !loaded) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [loaded]);

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setMuted(videoRef.current.muted);
  };

  return (
    <AnimateOnScroll animation="fade-up" delay={delay}>
      <div className="flex flex-col gap-3">
        {/* 9:16 container */}
        <div
          ref={containerRef}
          className="relative w-full"
          style={{ paddingBottom: "177.78%" }}
        >
          <div className="absolute inset-0 rounded-2xl overflow-hidden bg-card border border-[#1f2204]">
            {loaded ? (
              <video
                ref={videoRef}
                src={src}
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
            ) : (
              /* Placeholder shown until video enters viewport */
              <div className="absolute inset-0 bg-card animate-pulse" />
            )}

            {/* Audio toggle — only show once video is loaded */}
            {loaded && (
              <button
                onClick={toggleMute}
                aria-label={muted ? "Activar audio" : "Silenciar"}
                className="absolute bottom-4 right-4 z-10 w-11 h-11 flex items-center justify-center rounded-full bg-black/55 backdrop-blur-sm border border-white/10 text-white hover:bg-[#FFDE00]/20 hover:border-[#FFDE00]/40 hover:text-[#FFDE00] transition-all duration-200"
              >
                {muted ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16.5 12A4.5 4.5 0 0014 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0014 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                  </svg>
                )}
              </button>
            )}

            {/* Subtle ISO watermark */}
            <div className="absolute top-4 left-4 pointer-events-none">
              <span
                className="text-white/20 text-xs tracking-[0.25em] uppercase"
                style={{ fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)" }}
              >
                ISO
              </span>
            </div>
          </div>
        </div>

        <p className="text-white/30 text-xs text-right tracking-wider px-1">
          {name}
        </p>
      </div>
    </AnimateOnScroll>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-24 sm:py-32 bg-[#0a0c02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-16">
          <span className="text-[#FFDE00] text-xs font-bold tracking-[0.3em] uppercase">
            Resultados Reales
          </span>
          <h2
            className="text-[clamp(2.5rem,6vw,4.5rem)] text-white uppercase mt-3 leading-tight"
            style={{ fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)" }}
          >
            Ellos Confían en Nosotros
          </h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto text-sm sm:text-base">
            Las mejores historias son las que vivimos juntos. Conoce la
            experiencia de nuestra comunidad.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-8">
          {VIDEOS.map((video, i) => (
            <VideoCard
              key={video.src}
              src={video.src}
              name={video.name}
              delay={i * 130}
            />
          ))}
        </div>

        <AnimateOnScroll className="text-center mt-14">
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 border-2 border-[#FFDE00]/50 text-[#FFDE00] font-bold text-sm uppercase tracking-[0.15em] rounded-full hover:bg-[#FFDE00] hover:text-[#050601] transition-all duration-300"
          >
            ¡Escribe Tu Propia Historia!
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
