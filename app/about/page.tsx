import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { SITE } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Med Health Clinical Lab's mission, leadership, and IHRA-01452 certification — an internationally standardized diagnostic laboratory in Islamabad.",
  alternates: { canonical: "/about" },
};

const VALUES = [
  {
    title: "Precision",
    body: "Every analyzer is calibrated daily and cross-checked against control samples before a single patient result is released.",
  },
  {
    title: "Speed",
    body: "Most routine panels are reported within 6–8 hours, because a diagnosis delayed is care delayed.",
  },
  {
    title: "Clarity",
    body: "Reports are written to be understood, with reference ranges and flags a patient can read without a medical degree.",
  },
  {
    title: "Integrity",
    body: `${SITE.certification} certification means our processes are audited against international laboratory standards, not just our own.`,
  },
];

const CAPABILITIES = [
  {
    title: "Medical Professionals",
    body: "A team of pathologists, technologists, and phlebotomists trained to national and international protocols.",
  },
  {
    title: "Facilities & Equipment",
    body: "Fully automated hematology, biochemistry, and molecular analyzers calibrated to international reference standards.",
  },
  {
    title: "Emergency Care",
    body: "Time-critical panels are prioritized and reported with the urgency the situation demands.",
  },
  {
    title: "Medical Consulting",
    body: "Our team is available to help you and your physician interpret results and plan next steps.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Med Health"
        title="Diagnostic excellence, built for the people of Pakistan"
        description="We started Med Health Clinical Lab to close the gap between hospital-grade testing and the everyday patient — accurate, fast, and honestly priced, from our Islamabad head office to six collection points nationwide."
        crumb="About Us"
      />

      <section id="leadership" className="container-content py-24 scroll-mt-24">
        <div className="grid gap-14 md:grid-cols-2 md:items-center">
          <Reveal direction="right" distance={30}>
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-line bg-panel">
              <Image
                src="/images/people/ceo-saeed-akhtar.jpg"
                alt={SITE.founder}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-t from-black/70 via-black/10 to-transparent p-8">
                <p className="eyebrow text-white">Chairman&rsquo;s message</p>
                <blockquote className="font-display text-2xl italic leading-snug text-white">
                  &ldquo;Our mission is to provide a comprehensive healthcare experience
                  under one roof, exemplified by our {SITE.certification} certification.&rdquo;
                </blockquote>
                <div>
                  <p className="font-display text-base font-semibold text-white">{SITE.founder}</p>
                  <p className="text-sm text-white/70">{SITE.founderTitle}, Med Health Clinical Lab</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal direction="left" distance={30}>
            <div>
              <SectionHeading
                eyebrow="Vision & mission"
                title="Leading the way in diagnostic excellence for healthier lives"
                description="We deliver cost-effective diagnostic solutions without compromising on quality or turnaround time, empowering a healthier future for every patient who walks through our door."
              />
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {VALUES.map((v, i) => (
                  <div key={v.title} className="border-l-2 border-teal-500 pl-4 transition-colors duration-300 hover:border-coral-500">
                    <h4 className="font-display text-base font-semibold text-ink">{v.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-ink/60">{v.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-teal-700 py-24 text-[#E3EEF7]">
        <div className="container-content">
          <Reveal direction="up">
            <SectionHeading eyebrow="What we run on" title="The capabilities behind every report" align="center" />
          </Reveal>
          <div className="mt-14 grid gap-8 border-t border-[#285C86] pt-10 md:grid-cols-4">
            {CAPABILITIES.map((c, i) => (
              <Reveal key={c.title} direction="up" delay={i * 90}>
                <div>
                  <p className="font-display text-lg font-semibold text-white">{c.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-[#C9DCEC]">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="certification" className="container-content py-24 scroll-mt-24">
        <Reveal direction="up">
          <SectionHeading
            eyebrow="Certification"
            title="Held to a standard higher than our own"
            description={`MHCL operates under ${SITE.certification} certification, meaning our sample handling, equipment calibration, and reporting processes are independently audited against international laboratory guidelines.`}
          />
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {[
            { label: "Certification", value: SITE.certification },
            { label: "Collection points", value: "6" },
            { label: "Departments", value: "5" },
          ].map((item, i) => (
            <Reveal key={item.label} direction="up" delay={i * 90}>
              <div className="hover-lift border border-line bg-white p-7 transition-colors hover:border-coral-500">
                <p className="font-display text-2xl font-semibold text-teal-500">{item.value}</p>
                <p className="mt-2 text-sm text-ink/50">{item.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
