import { STATS } from "@/lib/site-data";

export default function StatBar() {
  return (
    <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4">
      {STATS.map((stat) => (
        <div key={stat.label}>
          <p className="font-display text-2xl font-semibold text-ink md:text-3xl">{stat.value}</p>
          <p className="mt-1 text-xs leading-snug text-ink/50">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
