import type { Metadata } from "next";
import { Bebas_Neue, Montserrat } from "next/font/google";
import Script from "next/script";
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

// TODO: Replace with your actual production domain once you deploy
const SITE_URL = "https://isometricgym.com.mx";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "IsometricGym | Calistenia, Yoga y Fisioterapia en Puebla",
  description:
    "Gimnasio de calistenia, yoga, entrenamiento funcional y fisioterapia en Puebla. Transforma tu cuerpo y mente con los mejores especialistas. ¡Primer consulta incluida!",
  keywords: [
    "gimnasio Puebla",
    "calistenia Puebla",
    "yoga Puebla",
    "fisioterapia Puebla",
    "entrenamiento funcional",
    "IsometricGym",
    "gym Puebla",
    "clases calistenia",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "IsometricGym | Calistenia, Yoga y Fisioterapia en Puebla",
    description:
      "Transforma tu cuerpo y mente con calistenia, yoga, entrenamiento funcional y fisioterapia. El gimnasio de Puebla que más transforma vidas.",
    type: "website",
    locale: "es_MX",
    url: "/",
    siteName: "IsometricGym",
    // TODO: Create a 1200×630 px image at public/og-image.jpg
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IsometricGym — Calistenia, Yoga y Fisioterapia en Puebla",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IsometricGym | Calistenia, Yoga y Fisioterapia en Puebla",
    description:
      "Transforma tu cuerpo y mente con los mejores especialistas de Puebla.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/imgs/favicon.webp",
    shortcut: "/imgs/favicon.webp",
    apple: "/imgs/favicon.webp",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: "IsometricGym",
  description:
    "Gimnasio de calistenia, yoga, entrenamiento funcional y fisioterapia en Puebla.",
  url: SITE_URL,
  telephone: "+52-222-446-2597",
  // TODO: Replace with exact street address
  address: {
    "@type": "PostalAddress",
    addressLocality: "Puebla",
    addressRegion: "Puebla",
    addressCountry: "MX",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "05:30",
      closes: "20:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "10:30",
      closes: "11:30",
    },
  ],
  priceRange: "$1,499–$1,699 MXN/mes",
  sameAs: [`https://wa.me/522224462597`],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${bebasNeue.variable} ${montserrat.variable}`}
    >
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-surface text-white antialiased">{children}</body>
    </html>
  );
}
