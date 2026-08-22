import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { SERVICE_CATEGORIES } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Diagnostic Services",
  description:
    "Browse Med Health Clinical Lab's full diagnostic test menu across hematology, biochemistry, hormones, microbiology, and molecular diagnostics.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Full test menu"
        title="Every test, one certified laboratory"
        description="Browse by department below, or contact us directly if you have a prescription and aren't sure what to book. Turnaround times are indicative and confirmed at the time of booking."
        crumb="Services"
      />

      <section className="container-content py-24">
        <Reveal direction="up">
          <SectionHeading
            eyebrow="Departments"
            title="Testing organized the way your doctor orders it"
          />
        </Reveal>

        <div className="mt-14 space-y-16">
          {SERVICE_CATEGORIES.map((cat, i) => (
            <Reveal key={cat.slug} direction="up" delay={Math.min(i * 60, 180)}>
              <div id={cat.slug} className="scroll-mt-24">
                <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-line pb-4">
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-ink">{cat.name}</h3>
                    <p className="mt-1 text-sm text-ink/50">{cat.description}</p>
                  </div>
                  <span className="eyebrow text-ink/30">{cat.tests.length} tests</span>
                </div>
                <div className="divide-y divide-line">
                  {cat.tests.map((test) => (
                    <div
                      key={test.name}
                      className="grid grid-cols-2 items-center gap-4 py-4 transition-colors duration-200 hover:bg-panel/60 sm:grid-cols-[2fr_1fr_auto]"
                    >
                      <p className="text-sm font-medium text-ink">{test.name}</p>
                      <p className="text-xs text-ink/40">{test.turnaround}</p>
                      <Link
                        href="/contact"
                        className="justify-self-end text-xs font-semibold text-teal-500 hover:text-coral-500 transition-colors"
                      >
                        Book →
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-content pb-24">
        <Reveal direction="up">
          <div className="flex flex-col items-start justify-between gap-8 border border-line bg-teal-700 p-10 text-[#E3EEF7] md:flex-row md:items-center md:p-14">
            <div className="max-w-lg">
              <h2 className="font-display text-2xl font-semibold text-white md:text-3xl">
                Don&rsquo;t see the test you need?
              </h2>
              <p className="mt-3 text-[#C9DCEC]">
                We run tests across five diagnostic departments in-house. Send us your
                prescription on WhatsApp and we&rsquo;ll confirm availability and pricing.
              </p>
            </div>
            <Link href="/contact" className="btn-coral shrink-0">
              Talk to our team
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
