import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function PageHero({
  eyebrow,
  title,
  description,
  crumb,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  crumb: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div
        className="absolute inset-0 -z-10 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #D8E1E8 1px, transparent 1px), linear-gradient(to bottom, #D8E1E8 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <Reveal direction="up" distance={16}>
        <div className="container-content py-16 md:py-20">
          <div className="flex items-center gap-2 text-xs text-ink/40">
            <Link href="/" className="hover:text-teal-500 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-ink/60">{crumb}</span>
          </div>
          <p className="eyebrow mt-6 text-teal-500">{eyebrow}</p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-xl text-ink/60 leading-relaxed">{description}</p>
          )}
        </div>
      </Reveal>
    </section>
  );
}
