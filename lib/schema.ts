import { LOCATIONS, SITE } from "./site-data";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    name: SITE.name,
    url: SITE.domain,
    logo: `${SITE.domain}/logo.png`,
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.hqAddress,
      addressLocality: "Islamabad",
      addressCountry: "PK",
    },
    sameAs: [SITE.social.facebook, SITE.social.instagram],
    medicalSpecialty: "Diagnostic Laboratory",
  };
}

export function locationSchema(slug: string) {
  const loc = LOCATIONS.find((l) => l.slug === slug);
  if (!loc) return null;
  return {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: `${SITE.name} — ${loc.city}`,
    url: `${SITE.domain}/locations/${loc.slug}`,
    telephone: SITE.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: loc.address ?? loc.city,
      addressLocality: loc.city,
      addressCountry: "PK",
    },
    parentOrganization: {
      "@type": "MedicalOrganization",
      name: SITE.name,
      url: SITE.domain,
    },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
