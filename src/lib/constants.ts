export const PHONE_NUMBER = "522224462597";
export const WA_BASE = `https://wa.me/${PHONE_NUMBER}`;
export const WA_DEFAULT_MSG = encodeURIComponent(
  "Hola, me gustaría conocer más sobre los planes de IsometricGym"
);
export const WA_URL = `${WA_BASE}?text=${WA_DEFAULT_MSG}`;

export const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Team", href: "#team" },
  { label: "Horarios", href: "#horarios" },
  { label: "Planes", href: "#planes" },
  { label: "Comunidad", href: "#comunidad" },
  { label: "Contacto", href: "#ubicacion" },
] as const;
