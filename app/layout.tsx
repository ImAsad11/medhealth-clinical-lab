import type { Metadata } from "next";
import { Fraunces, Inter, IBM_Plex_Mono, Noto_Nastaliq_Urdu } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import JsonLd from "@/components/JsonLd";
import { organizationSchema } from "@/lib/schema";
import { SITE } from "@/lib/site-data";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

const notoUrdu = Noto_Nastaliq_Urdu({
  subsets: ["arabic"],
  variable: "--font-urdu",
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: "Med Health Clinical Lab | Diagnostic Excellence Across Pakistan",
    template: "%s | Med Health Clinical Lab",
  },
  description:
    "Med Health Clinical Lab (MHCL) is an IHRA-01452 certified diagnostic laboratory headquartered in Blue Area, Islamabad, with collection points across Islamabad, KPK, and Punjab. Fast, accurate testing with digitally signed reports.",
  keywords: [
    "Med Health Clinical Lab",
    "MHCL",
    "diagnostic lab Islamabad",
    "blood test Islamabad",
    "home sample collection Islamabad",
    "clinical lab Blue Area",
    "lab tests Pakistan",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: SITE.domain,
    siteName: SITE.name,
    title: "Med Health Clinical Lab | Diagnostic Excellence Across Pakistan",
    description:
      "IHRA-01452 certified diagnostic laboratory with collection points across Pakistan. Fast, accurate testing with digitally signed reports.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Med Health Clinical Lab — Diagnostic Excellence Across Pakistan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Med Health Clinical Lab",
    description: "IHRA-01452 certified diagnostic laboratory with collection points across Pakistan.",
    images: ["/images/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${plexMono.variable} ${notoUrdu.variable}`}>
      <body className="bg-base text-ink antialiased">
        <JsonLd data={organizationSchema()} />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
