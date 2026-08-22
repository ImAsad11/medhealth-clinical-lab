import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { SITE } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Get Your Reports",
  description:
    "Download your Med Health Clinical Lab diagnostic report online through our secure patient reporting portal.",
  alternates: { canonical: "/reports" },
};

const STEPS = [
  { step: "01", title: "Open the report portal", body: "Click through to our secure online reporting system in a new tab." },
  { step: "02", title: "Enter your details", body: "Use the MR number or patient details provided at the time of sample collection." },
  { step: "03", title: "Download your report", body: "Your digitally signed report is ready to view, download, or forward to your doctor." },
];

export default function ReportsPage() {
  return (
    <>
      <PageHero
        eyebrow="Get your reports"
        title="Download your diagnostic report online"
        description="Your results are available through our secure patient reporting portal — accessible any time, from any device."
        crumb="Get Reports"
      />

      <section className="container-content py-24">
        <div className="grid gap-14 md:grid-cols-[1fr_1.1fr] md:items-center">
          <Reveal direction="right" distance={24}>
            <div>
              <SectionHeading eyebrow="How it works" title="Three steps to your results" />
              <div className="mt-10 space-y-8">
                {STEPS.map((s, i) => (
                  <Reveal key={s.step} direction="up" delay={i * 100}>
                    <div className="flex gap-5 border-t border-line pt-6">
                      <span className="font-display text-2xl font-semibold text-teal-300">{s.step}</span>
                      <div>
                        <h4 className="font-display text-base font-semibold text-ink">{s.title}</h4>
                        <p className="mt-2 text-sm leading-relaxed text-ink/60">{s.body}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
              <p className="mt-10 text-sm text-ink/50">
                Trouble accessing your report? Call{" "}
                <a href={SITE.phoneHref} className="font-medium text-teal-500">
                  {SITE.phone}
                </a>{" "}
                and we&rsquo;ll help you retrieve it.
              </p>
            </div>
          </Reveal>

          <Reveal direction="left" distance={24} delay={100}>
            <div className="hover-lift border border-line bg-white p-10 text-center md:p-14">
              <p className="eyebrow text-teal-500">Secure patient portal</p>
              <h3 className="mt-3 font-display text-2xl font-semibold text-ink">
                Your report is one click away
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/60">
                Reports are digitally signed and available as soon as testing is complete —
                typically within hours of sample collection.
              </p>
              <a
                href={SITE.reportPortalHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-coral mt-8 inline-flex animate-pulse-soft"
              >
                Download Your Report Online ↗
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
