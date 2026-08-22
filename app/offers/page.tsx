import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { OFFERS, SITE } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Current Offers",
  description:
    "Seasonal packages, standing discounts, and corporate rates from Med Health Clinical Lab.",
  alternates: { canonical: "/offers" },
};

export default function OffersPage() {
  return (
    <>
      <PageHero
        eyebrow="Current offers"
        title="Preventive care shouldn't be out of reach"
        description="Seasonal packages, standing discounts, and corporate rates — all processed on the same certified equipment as every other test we run."
        crumb="Offers"
      />

      <section className="container-content py-24">
        <Reveal direction="up">
          <SectionHeading
            eyebrow="Active packages"
            title="Bundled panels at a lower cost per test"
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {OFFERS.map((offer, i) => (
            <Reveal key={offer.title} direction="up" delay={i * 90}>
              <div className="hover-lift flex flex-col justify-between overflow-hidden border border-line bg-white">
                <div>
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-white">
                    <Image src={offer.image} alt={offer.title} fill className="object-contain p-3 transition-transform duration-500 hover:scale-105" />
                  </div>
                  <div className="p-8">
                    <span className="tag-pill border-teal-300 text-teal-500">{offer.tag}</span>
                    <h3 className="mt-5 font-display text-xl font-semibold text-ink">{offer.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink/60">{offer.description}</p>
                  </div>
                </div>
                <div className="mx-8 mb-8 flex items-center justify-between border-t border-line pt-4">
                  <span className="text-xs text-ink/40">{offer.validity}</span>
                  <Link href="/contact" className="text-xs font-semibold text-teal-500 hover:text-coral-500 transition-colors">
                    Claim offer →
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-content pb-24">
        <Reveal direction="up">
          <div className="border border-line bg-panel p-10 text-center md:p-14">
            <p className="eyebrow text-teal-500">Stay updated</p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-ink md:text-3xl">
              New offers are announced first on WhatsApp
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-ink/60">
              Message us to be added to our offers list, or check back here each season.
            </p>
            <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-coral mt-7 inline-flex">
              Message us on WhatsApp
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
