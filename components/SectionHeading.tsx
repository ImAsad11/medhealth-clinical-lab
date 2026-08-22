export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <p className="eyebrow text-teal-500">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-ink/60 leading-relaxed">{description}</p>}
    </div>
  );
}
