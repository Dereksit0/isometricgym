import type { Metadata } from "next";
import { Bebas_Neue, Montserrat } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "IsometricGym | Transforma Tu Vida",
  description:
    "Gimnasio de calistenia, yoga, entrenamiento funcional y fisioterapia en Puebla. Únete a la comunidad IsometricGym y transforma tu cuerpo y mente.",
  keywords: "gimnasio, calistenia, yoga, fisioterapia, entrenamiento funcional, Puebla, IsometricGym",
  openGraph: {
    title: "IsometricGym | Transforma Tu Vida",
    description: "Calistenia, Yoga, Entrenamiento Funcional y Fisioterapia en Puebla.",
    type: "website",
    locale: "es_MX",
  },
  icons: {
    icon: "/imgs/favicon.png",
    shortcut: "/imgs/favicon.png",
    apple: "/imgs/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${bebasNeue.variable} ${montserrat.variable}`}
    >
      <body className="bg-surface text-white antialiased">{children}</body>
    </html>
  );
}
