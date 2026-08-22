import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import LocationCard from "@/components/LocationCard";
import Reveal from "@/components/Reveal";
import { LOCATIONS } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Locations",
  description:
    "Med Health Clinical Lab's collection points across Pakistan — Islamabad head office plus Abbottabad, Haripur, Khan Pur, Mansehra, and Rahim Yar Khan.",
  alternates: { canonical: "/locations" },
};

export default function LocationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our network"
        title="Six collection points, one certified laboratory"
        description="Every sample — wherever it's collected — is processed at our Islamabad head office, so results are consistent across the network."
        crumb="Locations"
      />

      <section className="container-content py-24">
        <Reveal direction="up">
          <SectionHeading
            eyebrow="Find a location"
            title="Choose the collection point nearest you"
          />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {LOCATIONS.map((loc, i) => (
            <Reveal key={loc.slug} direction="up" delay={(i % 3) * 90}>
              <LocationCard location={loc} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
