import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Health Packages",
  description:
    "Bundled diagnostic packages from Med Health Clinical Lab — full body checkups, corporate wellness screening, senior citizen panels, and pre-marital screening.",
  alternates: { canonical: "/packages" },
};

const PACKAGES = [
  {
    title: "Full Body Checkup",
    audience: "General screening",
    description:
      "A comprehensive panel covering blood counts, liver and kidney function, lipid profile, blood sugar, and thyroid — a broad first look at overall health.",
    includes: ["CBC", "LFT", "RFT", "Lipid Profile", "Fasting Sugar", "Thyroid Profile"],
  },
  {
    title: "Corporate Wellness Screening",
    audience: "Teams of 15+",
    description:
      "Bulk screening for offices and factories, with on-site sample collection and consolidated reporting for HR or occupational health teams.",
    includes: ["CBC", "Fasting Sugar", "Lipid Profile", "LFT", "Urine R/E"],
  },
  {
    title: "Senior Citizen Care Panel",
    audience: "Age 55+",
    description:
      "A screening package weighted toward the markers that matter most for patients over 55, including cardiac and metabolic risk indicators.",
    includes: ["CBC", "Lipid Profile", "HbA1c", "RFT", "Vitamin D", "Vitamin B12"],
  },
  {
    title: "Pre-Marital Screening",
    audience: "Couples",
    description:
      "A discreet, confidential panel commonly requested ahead of marriage, covering infectious disease screening and general blood work.",
    includes: ["CBC", "Hepatitis B & C Screening", "HIV Screening", "Blood Group & Rh Factor"],
  },
  {
    title: "Diabetes Monitoring Panel",
    audience: "Diabetic patients",
    description:
      "Regular monitoring package for patients managing diabetes, tracking both immediate and long-term glucose control.",
    includes: ["Fasting Sugar", "Random Sugar", "HbA1c", "RFT", "Lipid Profile"],
  },
  {
    title: "Ramzan Health Package",
    audience: "Seasonal",
    description:
      "A bundled panel priced for Ramzan so preventive screening fits around fasting schedules and doesn't wait for the season to end.",
    includes: ["CBC", "Fasting Sugar", "Lipid Profile", "LFT", "RFT"],
  },
];

export default function PackagesPage() {
  return (
    <>
      <PageHero
        eyebrow="Bundled panels"
        title="Health packages built around real life stages"
        description="Rather than booking each test separately, choose a package tailored to your age, occasion, or workplace — all processed at the same certified laboratory."
        crumb="Health Packages"
      />

      <section className="container-content py-24">
        <Reveal direction="up">
          <SectionHeading
            eyebrow="Available packages"
            title="Six packages, one visit or one home collection"
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PACKAGES.map((pkg, i) => (
            <Reveal key={pkg.title} direction="up" delay={(i % 3) * 90}>
              <div className="hover-lift flex h-full flex-col justify-between border border-line bg-white p-7 transition-colors hover:border-coral-500">
                <div>
                  <span className="tag-pill border-teal-300 text-teal-500">{pkg.audience}</span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-ink">{pkg.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/60">{pkg.description}</p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {pkg.includes.map((item) => (
                      <span key={item} className="rounded-sm bg-panel px-2.5 py-1 text-xs text-ink/60">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-teal-500 hover:text-coral-500 transition-colors"
                >
                  Enquire about this package →
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-content pb-24">
        <Reveal direction="up">
          <div className="flex flex-col items-start justify-between gap-8 border border-line bg-panel p-10 md:flex-row md:items-center md:p-14">
            <div className="max-w-lg">
              <h2 className="font-display text-2xl font-semibold text-ink md:text-3xl">
                Need a custom package for your organization?
              </h2>
              <p className="mt-3 text-ink/60">
                We can put together a screening package for your workplace, school, or event — talk to our team.
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
