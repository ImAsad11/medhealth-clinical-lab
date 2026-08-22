# Med Health Clinical Lab — Website

A multi-page Next.js 15 (App Router) website for Med Health Clinical Lab (MHCL),
built with TypeScript, Tailwind CSS, and React 19. Structured around MHCL's real
collection-point network and built with SEO and performance as first-class concerns
(static generation, JSON-LD, sitemap, metadata per page).

## Pages

- `/` — Home: hero, quick-access tiles (Find a Test / Online Reports / Find a Location),
  stats bar, services overview, 3-step process, chairman's message, network preview,
  offers preview, CTA
- `/about` — Who we are, chairman's message, vision & mission, capabilities, certification
- `/services` — Full test menu across 5 departments (hematology, biochemistry, hormones,
  microbiology, molecular), each with an anchor id matching the nav dropdown
- `/packages` — Bundled health packages (full body checkup, corporate wellness, senior
  care, pre-marital screening, diabetes monitoring, seasonal Ramzan package)
- `/offers` — Current promotions
- `/locations` — Directory of all 6 collection points
- `/locations/[slug]` — Individual branch page per collection point (Islamabad HQ,
  Abbottabad, Haripur, Khan Pur, Mansehra, Rahim Yar Khan), each with its own map embed,
  JSON-LD `MedicalClinic` schema, and booking CTAs — statically generated at build time
- `/reports` — Links out to the real MHCL online report portal
- `/contact` — Contact info, per-location links, embedded map, appointment request form

## Real data used

Content is based on what's publicly live on medhealthlab.online: the actual collection-point
network (Islamabad head office plus 5 other cities), the real CEO/chairman message, the
real IHRA-01452 certification, the real WhatsApp and phone contact details, and the real
external report portal link. Prices are not published on the source site, so the services
pages show test names and turnaround times rather than invented prices — add pricing in
`lib/site-data.ts` once you have a confirmed price list.

## SEO & performance

- **Per-page metadata**: every route exports its own `title`/`description`/canonical via
  `generateMetadata` or the static `metadata` export.
- **JSON-LD structured data**: `MedicalOrganization` schema site-wide (`app/layout.tsx`),
  plus `MedicalClinic` and `BreadcrumbList` schema on each location page
  (`lib/schema.ts`, `components/JsonLd.tsx`).
- **Sitemap & robots**: auto-generated at `/sitemap.xml` and `/robots.txt`
  (`app/sitemap.ts`, `app/robots.ts`) from the same location data used elsewhere, so new
  branches are picked up automatically.
- **Static generation**: every page — including all 6 location pages — is statically
  generated at build time (`generateStaticParams`), so there's no server round-trip on
  page load.
- **Fonts**: `next/font/google` self-hosts and subsets Fraunces, Inter, and IBM Plex Mono
  at build time — no external font requests at runtime, no layout shift.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Build for production

```bash
npm run build
npm run start
```

## Dependency security

This project pins **Next.js 15.5.21** and **React 19** — the actively patched Next.js
release line. (Next's 14.x line stopped receiving security patches as of mid-2026;
Next 14.2.5 in an earlier draft of this project had known CVEs.) `package.json` also
uses npm `overrides` to force `postcss` and `sharp` — dependencies bundled *inside*
Next.js itself — to patched versions, since Next's own internal copies lag behind.
`npm audit` should report 0 vulnerabilities on a fresh install. If a newer Next.js
patch release is out by the time you read this, check `npm audit` again and bump
accordingly — don't jump to a new major version (e.g. 16.x) without testing, since
that can include breaking changes beyond this project's scope.

## Deploying

The easiest path is [Vercel](https://vercel.com) (built by the Next.js team):

1. Push this project to a GitHub repository.
2. Import the repo at vercel.com/new.
3. Vercel auto-detects Next.js — no config needed. Deploy.

You can also deploy to any Node host that supports `npm run build && npm run start`.

## What to customize before launch

- **Contact form**: `components/ContactForm.tsx` currently simulates submission. Wire
  the `handleSubmit` function to your email service, CRM, or booking API.
- **Central data file**: almost everything content-wise lives in `lib/site-data.ts` —
  locations, service categories/tests, offers, nav links, and contact details all come
  from this one file. Add a branch, service, or offer there and it propagates to the
  homepage, footer, nav, sitemap, and relevant listing pages automatically.
- **Test prices**: the source site doesn't publish prices, so none are shown. Add a
  `price` field to `ServiceTest` in `lib/site-data.ts` once you have a confirmed list.
- **Location addresses**: only the Islamabad head office has a confirmed street address
  in the source data. The other 5 collection points show city + region only, with a note
  to call ahead — add exact addresses in `lib/site-data.ts` as they're confirmed.
- **Logo**: the header/footer render an "M" monogram placeholder. Swap in your real logo
  once you have final artwork.
- **Domain**: `SITE.domain` in `lib/site-data.ts` feeds metadata, JSON-LD, and the
  sitemap — update it if the site moves off `medhealthlab.online`.

## Design system

- **Colors**: deep clinical teal (`#0F6B62`) as the primary brand color, a coral accent
  (`#EF6351`) for calls to action, set against a cool near-white base (`#F6F9F8`).
  Tokens live in `tailwind.config.ts`.
- **Type**: Fraunces (display/serif) for headings, Inter for body copy, and IBM Plex
  Mono for data, labels, and the eyebrow/tag-pill style — echoing the numeric,
  reference-range language of an actual lab report.
- **Signature element**: `components/ReportCard.tsx` — a stylized lab report card used
  in the hero, tying the design to what the lab actually produces.
- **Structure**: mega-menu navigation, quick-access tiles, and a branch-network model
  (directory + individual location pages) modeled on how larger Pakistani diagnostic
  networks like IDC and Aman Labs structure their sites — scaled to MHCL's real 6-branch
  network rather than a generic template.
