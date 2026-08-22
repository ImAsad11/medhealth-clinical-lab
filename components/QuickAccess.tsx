import Link from "next/link";
import { SITE } from "@/lib/site-data";

const TILES = [
  {
    title: "Find a Test",
    body: "Browse our full diagnostic menu by department and book online.",
    href: "/services",
    cta: "View services",
    external: false,
  },
  {
    title: "Online Reports",
    body: "Download your digitally signed report through our secure patient portal.",
    href: SITE.reportPortalHref,
    cta: "Get your report",
    external: true,
  },
  {
    title: "Find a Location",
    body: "Six collection points across Islamabad, KPK, and Punjab.",
    href: "/locations",
    cta: "View locations",
    external: false,
  },
];

export default function QuickAccess() {
  return (
    <div className="grid gap-5 sm:grid-cols-3">
      {TILES.map((tile) => {
        const content = (
          <>
            <h3 className="font-display text-lg font-semibold text-ink">{tile.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/60">{tile.body}</p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-500 group-hover:text-coral-500 transition-colors">
              {tile.cta} {tile.external ? "↗" : "→"}
            </span>
          </>
        );

        return tile.external ? (
          <a
            key={tile.title}
            href={tile.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover-lift group border border-line bg-white p-7 transition-colors hover:border-teal-500"
          >
            {content}
          </a>
        ) : (
          <Link
            key={tile.title}
            href={tile.href}
            className="hover-lift group border border-line bg-white p-7 transition-colors hover:border-teal-500"
          >
            {content}
          </Link>
        );
      })}
    </div>
  );
}
