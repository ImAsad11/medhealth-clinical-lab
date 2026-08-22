import Image from "next/image";

export default function ServiceCard({
  index,
  title,
  description,
  turnaround,
  image,
}: {
  index: string;
  title: string;
  description: string;
  turnaround: string;
  image?: string;
}) {
  return (
    <div className="hover-lift group relative overflow-hidden border border-line bg-white transition-colors hover:border-teal-500">
      {image && (
        <div className="relative h-36 w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-7">
        <p className="font-mono text-xs text-ink/30">{index}</p>
        <h3 className="mt-4 font-display text-xl font-semibold text-ink">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink/60">{description}</p>
        <div className="mt-6 flex items-center justify-between border-t border-line pt-4">
          <span className="text-xs text-ink/40">Report in</span>
          <span className="font-mono text-xs font-medium text-teal-500">{turnaround}</span>
        </div>
      </div>
    </div>
  );
}
