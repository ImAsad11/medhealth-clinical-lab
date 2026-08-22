import Image from "next/image";
import Link from "next/link";
import ReportCard from "@/components/ReportCard";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import QuickAccess from "@/components/QuickAccess";
import StatBar from "@/components/StatBar";
import StatsGlance from "@/components/StatsGlance";
import PromoOffer from "@/components/PromoOffer";
import LocationCard from "@/components/LocationCard";
import CertificatesSection from "@/components/CertificatesSection";
import Reveal from "@/components/Reveal";
import { LOCATIONS, OFFERS, SERVICE_CATEGORIES, SITE } from "@/lib/site-data";

const TEST_IMAGES: Record<string, string> = {
  "Complete Blood Count (CBC)": "/images/tests/cbc.jpg",
  "ESR": "/images/tests/esr.jpg",
  "Liver Function Test (LFT)": "/images/tests/lft.jpg",
  "Renal Function Test (RFT)": "/images/tests/rft.jpg",
  "Thyroid Profile (T3, T4, TSH)": "/images/tests/tsh.jpg",
  "Vitamin D (25-OH)": "/images/tests/vitamin-d.jpg",
};

const FEATURED_SERVICES = SERVICE_CATEGORIES.slice(0, 3).flatMap((cat) =>
  cat.tests.slice(0, 2).map((test) => ({
    index: cat.slug,
    title: test.name,
    description: `${cat.name} — ${cat.description}`,
    turnaround: test.turnaround,
    image: TEST_IMAGES[test.name] ?? `/images/placeholders/service-${cat.slug}.svg`,
  }))
);

const PROCESS = [
  {
    step: "01",
    title: "Book your test",
    description: "Call, WhatsApp, or walk in to any of our 6 collection points. Choose a lab visit or home collection slot.",
  },
  {
    step: "02",
    title: "Sample collected & tested",
    description: "A certified phlebotomist draws your sample, which is processed on calibrated analyzers.",
  },
  {
    step: "03",
    title: "Report delivered",
    description: "Get a digitally signed report through our online portal, WhatsApp, or email — usually within hours.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative h-[260px] w-full overflow-hidden sm:h-[340px] md:h-[420px]">
        <Image
          src="/images/hero-lab-banner.jpg"
          alt="Med Health Clinical Lab — laboratory technicians processing diagnostic samples"
          fill
          priority
          className="object-cover object-[center_25%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-700/85 via-teal-700/10 to-transparent" />
        <div className="container-content relative flex h-full items-end pb-8 md:pb-12">
          <div>
            <p className="eyebrow text-[#C9DCEC]">Excellence Is Our Speciality</p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-white md:text-3xl">
              Inside the laboratory behind every report
            </h2>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-line">
        <div
          className="absolute inset-0 -z-10 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #D8E1E8 1px, transparent 1px), linear-gradient(to bottom, #D8E1E8 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="container-content grid gap-16 py-16 md:grid-cols-2 md:py-24">
          <Reveal direction="up" distance={20}>
            <div className="flex flex-col justify-center">
              <span className="tag-pill w-fit border-teal-300 text-teal-500">
                6 collection points · Islamabad, KPK & Punjab
              </span>
              <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.08] text-ink md:text-5xl">
                Diagnostic clarity,
                <br />
                <span className="italic text-teal-500">delivered on time.</span>
              </h1>
              <p className="mt-6 max-w-md text-ink/60 leading-relaxed">
                Med Health Clinical Lab runs internationally standardized testing under
                one roof — from a routine CBC to specialized molecular panels — with
                reports you can trust and read in plain language.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link href="/contact" className="btn-coral">
                  Book an appointment
                </Link>
                <Link href="/services" className="btn-secondary">
                  View all tests
                </Link>
              </div>

              <div className="mt-14 border-t border-line pt-8">
                <StatBar />
              </div>
            </div>
          </Reveal>

          <Reveal direction="up" distance={20} delay={120}>
            <div className="flex items-center justify-center md:justify-end">
              <ReportCard />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-line bg-white py-20">
        <div className="container-content">
          <Reveal direction="up">
            <StatsGlance />
          </Reveal>
        </div>
      </section>

      <section className="container-content py-20">
        <Reveal direction="up">
          <QuickAccess />
        </Reveal>
      </section>

      <Reveal direction="up">
        <PromoOffer />
      </Reveal>

      <section className="container-content py-4">
        <Reveal direction="up">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Our services"
              title="Testing across every major diagnostic discipline"
              description="Every panel is processed in-house on calibrated equipment and reviewed by a qualified pathologist before it reaches you."
            />
            <Link href="/services" className="btn-secondary w-fit shrink-0">
              See full test menu
            </Link>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_SERVICES.map((service, i) => (
            <Reveal key={service.title} direction="up" delay={i * 80}>
              <ServiceCard {...service} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-teal-700 py-24 text-[#E3EEF7] mt-24">
        <div className="container-content">
          <Reveal direction="up">
            <SectionHeading
              eyebrow="How it works"
              title="From sample to signed report in three steps"
              align="center"
            />
          </Reveal>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {PROCESS.map((item, i) => (
              <Reveal key={item.step} direction="up" delay={i * 100}>
                <div className="relative border-t border-[#285C86] pt-6">
                  <p className="font-display text-3xl font-semibold text-[#4A8FC2]">{item.step}</p>
                  <h3 className="mt-4 font-display text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#C9DCEC]">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-content py-24">
        <div className="grid items-center gap-14 md:grid-cols-2">
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
                  &ldquo;Your well-being is our priority, and we are committed to being your
                  trusted partner on your journey to optimal health.&rdquo;
                </blockquote>
                <div>
                  <p className="font-display text-base font-semibold text-white">{SITE.founder}</p>
                  <p className="text-sm text-white/70">{SITE.founderTitle}</p>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal direction="left" distance={30}>
            <div>
              <SectionHeading
                eyebrow="Why Med Health"
                title="Care that reads your results the way a doctor would"
                description="Every result here is reviewed before it leaves the building — because a lab report should be accurate enough to trust and clear enough to act on."
              />
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {[
                  { title: "Certified laboratory", body: `Operating under ${SITE.certification} certification, audited against international standards.` },
                  { title: "Pathologist-reviewed", body: "Every panel is checked by a qualified pathologist before release." },
                  { title: "Digital-first reports", body: "Reports reach you through our online portal, WhatsApp, and email." },
                  { title: "6 collection points", body: "Islamabad HQ plus Abbottabad, Haripur, Khan Pur, Mansehra & Rahim Yar Khan." },
                ].map((item) => (
                  <div key={item.title}>
                    <h4 className="font-display text-base font-semibold text-ink">{item.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-ink/60">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-line bg-panel py-24">
        <div className="container-content">
          <Reveal direction="up">
            <SectionHeading
              eyebrow="Accreditations"
              title="Our Certificates"
              description="Med Health Clinical Lab is recognized and accredited by the following regulatory bodies and quality standards organizations."
              align="center"
            />
          </Reveal>
          <div className="mt-12">
            <Reveal direction="up" delay={90}>
              <CertificatesSection />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container-content py-24">
        <Reveal direction="up">
          <SectionHeading
            eyebrow="Inside Med Health"
            title="A closer look at our labs and collection points"
            description="From sample collection to the diagnostic bench — a look inside how your results come together."
          />
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { src: "/images/gallery/lab-interior.jpg", label: "Lab interior" },
            { src: "/images/gallery/sample-collection.jpg", label: "Sample collection" },
            { src: "/images/gallery/reception.jpg", label: "Reception / branch" },
            { src: "/images/gallery/home-collection.png", label: "Home collection" },
          ].map((img, i) => (
            <Reveal key={img.src} direction="up" delay={i * 90}>
              <div className="relative aspect-[4/5] overflow-hidden border border-line">
                <Image src={img.src} alt={img.label} fill className="object-cover" />
                <span className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-3 py-2 text-xs font-medium text-white">
                  {img.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-panel py-24">
        <div className="container-content">
          <Reveal direction="up">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <SectionHeading
                eyebrow="Our network"
                title="Six collection points, one certified laboratory"
                description="Samples from every collection point are processed at our Islamabad head office, so results are consistent no matter where you're tested."
              />
              <Link href="/locations" className="btn-secondary w-fit shrink-0">
                View all locations
              </Link>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {LOCATIONS.map((loc, i) => (
              <Reveal key={loc.slug} direction="up" delay={(i % 3) * 90}>
                <LocationCard location={loc} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-content py-24">
        <Reveal direction="up">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Current offers"
              title="Preventive care shouldn't be out of reach"
            />
            <Link href="/offers" className="btn-secondary w-fit shrink-0">
              See all offers
            </Link>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {OFFERS.slice(0, 2).map((offer, i) => (
            <Reveal key={offer.title} direction="up" delay={i * 100}>
              <div className="hover-lift overflow-hidden border border-line bg-white">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-white">
                  <Image src={offer.image} alt={offer.title} fill className="object-contain p-3" />
                </div>
                <div className="p-8">
                  <span className="tag-pill border-teal-300 text-teal-500">{offer.tag}</span>
                  <h3 className="mt-5 font-display text-xl font-semibold text-ink">{offer.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/60">{offer.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-content pb-24">
        <Reveal direction="up">
          <div className="flex flex-col items-start justify-between gap-8 border border-line bg-white p-10 md:flex-row md:items-center md:p-14">
            <div className="max-w-lg">
              <h2 className="font-display text-2xl font-semibold text-ink md:text-3xl">
                Need a test today? Book a home collection in under two minutes.
              </h2>
              <p className="mt-3 text-ink/60">
                Serving Islamabad and all 6 of our collection points, seven days a week.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-coral">
                Book appointment
              </Link>
              <Link href="/offers" className="btn-secondary">
                See current offers
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
