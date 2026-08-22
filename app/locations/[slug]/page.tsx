import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import { LOCATIONS, SITE } from "@/lib/site-data";
import { locationSchema, breadcrumbSchema } from "@/lib/schema";

export function generateStaticParams() {
  return LOCATIONS.map((loc) => ({ slug: loc.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const loc = LOCATIONS.find((l) => l.slug === slug);
  if (!loc) return {};
  return {
    title: `${loc.city} Collection Point`,
    description: `Med Health Clinical Lab in ${loc.city} — ${loc.blurb}`,
    alternates: { canonical: `/locations/${loc.slug}` },
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const loc = LOCATIONS.find((l) => l.slug === slug);
  if (!loc) notFound();

  const schema = locationSchema(loc.slug);
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: SITE.domain },
    { name: "Locations", url: `${SITE.domain}/locations` },
    { name: loc.city, url: `${SITE.domain}/locations/${loc.slug}` },
  ]);

  return (
    <>
      {schema && <JsonLd data={schema} />}
      <JsonLd data={breadcrumb} />

      <PageHero
        eyebrow={loc.isHQ ? "Head office" : "Collection point"}
        title={`Med Health Clinical Lab — ${loc.city}`}
        description={loc.blurb}
        crumb={loc.city}
      />

      <section className="container-content py-24">
        <div className="grid gap-14 md:grid-cols-[1fr_1.2fr]">
          <Reveal direction="right" distance={24}>
            <div>
            <h2 className="font-display text-2xl font-semibold text-ink">Visit or reach us</h2>
            <div className="mt-8 space-y-6">
              <div className="border-b border-line pb-6">
                <p className="eyebrow text-teal-500">Region</p>
                <p className="mt-2 text-sm text-ink/70">{loc.region}</p>
              </div>
              {loc.address && (
                <div className="border-b border-line pb-6">
                  <p className="eyebrow text-teal-500">Address</p>
                  <p className="mt-2 text-sm text-ink/70">{loc.address}</p>
                </div>
              )}
              <div className="border-b border-line pb-6">
                <p className="eyebrow text-teal-500">Phone</p>
                <p className="mt-2 text-sm text-ink/70">{SITE.phone}</p>
              </div>
              <div className="border-b border-line pb-6">
                <p className="eyebrow text-teal-500">Hours</p>
                <p className="mt-2 text-sm text-ink/70">{SITE.hours}</p>
              </div>
              {!loc.isHQ && (
                <p className="text-xs text-ink/40">
                  This is a sample collection point — call or WhatsApp ahead to confirm the
                  exact address and timing before you visit.
                </p>
              )}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Chat on WhatsApp
              </a>
              <a href={SITE.phoneHref} className="btn-secondary">
                Call {loc.city}
              </a>
            </div>

            <div className="mt-10 aspect-video w-full overflow-hidden border border-line">
              <iframe
                title={`Med Health Clinical Lab — ${loc.city} map`}
                className="h-full w-full"
                loading="lazy"
                src={`https://www.google.com/maps?q=${encodeURIComponent(loc.mapQuery)}&output=embed`}
              />
            </div>
            </div>
          </Reveal>

          <Reveal direction="left" distance={24} delay={100}>
            <div className="hover-lift border border-line bg-white p-8 md:p-10">
              <h2 className="font-display text-2xl font-semibold text-ink">
                Book a test at this location
              </h2>
              <p className="mt-2 text-sm text-ink/60">
                Samples collected here are processed at our Islamabad laboratory, so you get
                the same accuracy and turnaround as our head office.
              </p>
              <div className="mt-8 space-y-4">
                <Link href="/services" className="flex items-center justify-between border border-line px-5 py-4 text-sm font-medium text-ink transition-all duration-300 hover:border-coral-500 hover:bg-panel/60">
                  Browse the full test menu <span>→</span>
                </Link>
                <Link href="/packages" className="flex items-center justify-between border border-line px-5 py-4 text-sm font-medium text-ink transition-all duration-300 hover:border-coral-500 hover:bg-panel/60">
                  See health packages <span>→</span>
                </Link>
                <Link href="/contact" className="flex items-center justify-between border border-line px-5 py-4 text-sm font-medium text-ink transition-all duration-300 hover:border-coral-500 hover:bg-panel/60">
                  Request an appointment <span>→</span>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-24">
        <Reveal direction="up">
          <div className="mx-auto max-w-[1400px] overflow-hidden border border-line bg-white">
            <Image
              src="/images/partners/collection-point-iht-banner.jpg"
              alt="Med Health Clinical Lab in partnership with Islamabad Hearing Technology — available at every collection point"
              width={1561}
              height={555}
              className="h-auto w-full object-cover"
            />
          </div>
        </Reveal>
      </section>
    </>
  );
}
