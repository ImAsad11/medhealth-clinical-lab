import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site-data";

const TESTS_URDU = [
  "شوگر ٹیسٹ (Sugar Test)",
  "گردوں اور جگر کے فنکشن ٹیسٹ (RFTs & LFTs)",
  "کولیسٹرول لیول (Lipid Profile)",
  "خون کا مکمل معائنہ (CBC)",
  "پیشاب کا معائنہ (Urine R/E)",
  "وٹامن ڈی 3 (Vitamin D3)",
  "ہیپاٹائٹس بی اینڈ سی (Hepatitis B & C)",
  "کیلشیم اور آئرن لیول (Calcium & Iron)",
];

export default function PromoOffer() {
  return (
    <section className="container-content py-4">
      <div className="grid overflow-hidden border border-line bg-white lg:grid-cols-2">
        <div className="hover-lift flex flex-col justify-center p-8 md:p-12" dir="rtl">
          <span className="tag-pill w-fit border-coral-400 text-coral-500" dir="ltr">
            ⏱ محدود آفر — 40% رعایت
          </span>
          <h2 className="font-urdu mt-5 text-3xl font-semibold leading-[1.8] text-ink md:text-4xl">
            صحت مند زندگی کیلئے
            <br />
            ہر 6 ماہ بعد فل باڈی چیک اپ کروائیں
          </h2>
          <p className="font-urdu mt-4 max-w-md text-base leading-loose text-ink/60">
            فُل باڈی چیک اپ (بلا لسٹ) پر محدود وقت کیلئے 40% رعایت حاصل کریں۔ نتائج بذریعہ
            وٹس ایپ اور ہماری آن لائن پورٹل پر بھی دستیاب ہوں گے۔
          </p>

          <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
            {TESTS_URDU.map((test) => (
              <li key={test} className="font-urdu flex items-center gap-2 text-sm text-ink/70">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-coral-500" />
                {test}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-4" dir="ltr">
            <Link href="/contact" className="btn-coral">
              Book Now / ابھی بک کریں
            </Link>
            <a href={SITE.phoneHref} className="btn-secondary">
              Call {SITE.phone}
            </a>
          </div>
          <p className="mt-4 text-xs text-ink/40" dir="ltr">
            Free home sample collection · Reports within hours · Accredited laboratory
          </p>
        </div>

        <div className="relative min-h-[320px] bg-panel lg:min-h-full">
          <Image
            src="/images/offer-full-body.jpg"
            alt="Med Health Clinical Lab — Full Body Checkup Offer, Save up to 40%, Rs 6000"
            fill
            className="object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}
