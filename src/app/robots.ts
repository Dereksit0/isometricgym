import type { MetadataRoute } from "next";

// TODO: Replace with your actual production domain
const SITE_URL = "https://isometricgym.com.mx";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
