import type { MetadataRoute } from "next";
import { LOCATIONS, SITE } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/packages",
    "/offers",
    "/locations",
    "/reports",
    "/contact",
  ].map((path) => ({
    url: `${SITE.domain}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const locationRoutes = LOCATIONS.map((loc) => ({
    url: `${SITE.domain}/locations/${loc.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...locationRoutes];
}
