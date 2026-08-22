import Image from "next/image";
import Link from "next/link";
import type { Location } from "@/lib/site-data";

export default function LocationCard({ location }: { location: Location }) {
  return (
    <Link
      href={`/locations/${location.slug}`}
      className="hover-lift group flex flex-col justify-between overflow-hidden border border-line bg-white transition-colors hover:border-teal-500"
    >
      <div>
        <div className="relative h-32 w-full overflow-hidden bg-white">
          <Image
            src="/images/partners/collection-point-iht-banner.jpg"
            alt={location.city}
            fill
            className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-7">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-xl font-semibold text-ink">{location.city}</h3>
            {location.isHQ && <span className="tag-pill border-coral-400 text-coral-500">HQ</span>}
          </div>
          <p className="mt-2 text-xs text-ink/40">{location.region}</p>
          <p className="mt-4 text-sm leading-relaxed text-ink/60">{location.blurb}</p>
        </div>
      </div>
      <span className="mb-7 inline-flex items-center gap-1.5 px-7 text-sm font-semibold text-teal-500 group-hover:text-coral-500 transition-colors">
        View location →
      </span>
    </Link>
  );
}
