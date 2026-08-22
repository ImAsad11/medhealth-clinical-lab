import Image from "next/image";
import Link from "next/link";
import BadgeStrip from "@/components/BadgeStrip";
import { LOCATIONS, SERVICE_CATEGORIES, SITE } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="bg-teal-700 text-[#E3EEF7] mt-32">
      <div className="container-content grid gap-12 py-16 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-sm bg-white p-1.5">
              <Image
                src="/images/logo-icon.png"
                alt="Med Health Clinical Lab"
                width={40}
                height={40}
                className="h-full w-full object-contain"
              />
            </span>
            <span className="font-display text-lg font-semibold text-white">{SITE.name}</span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#C9DCEC]">
            {SITE.certification} certified diagnostic laboratory with 6 collection points
            across Pakistan — precise results, fast turnaround, and a care team that treats
            every sample like it belongs to someone waiting for good news.
          </p>
          <a
            href={SITE.reportPortalHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#C9DCEC] transition-colors"
          >
            Download your report online ↗
          </a>
        </div>

        <div>
          <p className="eyebrow text-[#4A8FC2]">Services</p>
          <ul className="mt-4 space-y-3">
            {SERVICE_CATEGORIES.map((cat) => (
              <li key={cat.slug}>
                <Link
                  href={`/services#${cat.slug}`}
                  className="text-sm text-[#C9DCEC] hover:text-white transition-colors"
                >
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-[#4A8FC2]">Locations</p>
          <ul className="mt-4 space-y-3">
            {LOCATIONS.map((loc) => (
              <li key={loc.slug}>
                <Link
                  href={`/locations/${loc.slug}`}
                  className="text-sm text-[#C9DCEC] hover:text-white transition-colors"
                >
                  {loc.city}
                  {loc.isHQ && <span className="ml-1.5 text-[10px] text-[#4A8FC2]">HQ</span>}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-[#4A8FC2]">Visit / Call</p>
          <ul className="mt-4 space-y-3 text-sm text-[#C9DCEC]">
            <li>{SITE.hqAddress}</li>
            <li>
              <a href={SITE.phoneHref} className="hover:text-white transition-colors">
                {SITE.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="hover:text-white transition-colors">
                {SITE.email}
              </a>
            </li>
            <li>{SITE.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#06304F] py-7">
        <div className="container-content">
          <BadgeStrip variant="dark" />
        </div>
      </div>

      <div className="border-t border-[#06304F]">
        <div className="container-content flex flex-col gap-2 py-6 text-xs text-[#7FA8C9] md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p>Certified {SITE.certification} · Islamabad, Pakistan</p>
        </div>
      </div>
    </footer>
  );
}
