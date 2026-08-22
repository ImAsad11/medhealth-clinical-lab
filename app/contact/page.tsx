import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { LOCATIONS, SITE } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Book an appointment or reach Med Health Clinical Lab by phone, WhatsApp, or the contact form. Head office in Blue Area, Islamabad, plus 5 collection points nationwide.",
  alternates: { canonical: "/contact" },
};

const INFO = [
  { label: "Head office address", value: SITE.hqAddress },
  { label: "Phone", value: SITE.phone },
  { label: "Email", value: SITE.email },
  { label: "Hours", value: SITE.hours },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Book an appointment or ask us anything"
        description="Reach us by phone, WhatsApp, or the form below — a member of our team will confirm your slot and answer any questions about test preparation."
        crumb="Contact"
      />

      <section className="container-content py-24">
        <div className="grid gap-14 md:grid-cols-[1fr_1.2fr]">
          <Reveal direction="right" distance={24}>
            <div>
            <h2 className="font-display text-2xl font-semibold text-ink">Visit or reach us</h2>
            <div className="mt-8 space-y-6">
              {INFO.map((item) => (
                <div key={item.label} className="border-b border-line pb-6">
                  <p className="eyebrow text-teal-500">{item.label}</p>
                  <p className="mt-2 text-sm text-ink/70">{item.value}</p>
                </div>
              ))}
            </div>

            <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8 w-fit">
              Chat on WhatsApp
            </a>

            <div className="mt-10">
              <p className="eyebrow text-teal-500">Other collection points</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {LOCATIONS.filter((l) => !l.isHQ).map((loc) => (
                  <Link
                    key={loc.slug}
                    href={`/locations/${loc.slug}`}
                    className="tag-pill border-line text-ink/60 transition-all duration-300 hover:border-coral-500 hover:text-coral-500"
                  >
                    {loc.city}
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-10 aspect-video w-full overflow-hidden border border-line">
              <iframe
                title="Med Health Clinical Lab head office location"
                className="h-full w-full"
                loading="lazy"
                src={`https://www.google.com/maps?q=${encodeURIComponent(SITE.hqAddress)}&output=embed`}
              />
            </div>
            </div>
          </Reveal>

          <Reveal direction="left" distance={24} delay={100}>
            <div className="hover-lift border border-line bg-white p-8 md:p-10">
              <h2 className="font-display text-2xl font-semibold text-ink">Request an appointment</h2>
              <p className="mt-2 text-sm text-ink/60">
                Fill this in and we&rsquo;ll confirm your slot by phone or WhatsApp.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
