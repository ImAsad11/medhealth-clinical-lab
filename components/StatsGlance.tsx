import { SITE } from "@/lib/site-data";

const ICONS = {
  years: (
    <path d="M6 2v3M18 2v3M4 8h16M5 5h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
  ),
  clock: <path d="M12 7v5l3 3M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />,
  branches: (
    <path d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 12 3a7 7 0 0 1 7 6.5C19 14.9 12 21 12 21Zm0-8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
  ),
  home: <path d="M4 11.5 12 4l8 7.5M6 10v9a1 1 0 0 0 1 1h3v-6h4v6h3a1 1 0 0 0 1-1v-9" />,
  shield: (
    <path d="M12 3 4.5 6v6c0 4.7 3.2 8.4 7.5 9 4.3-.6 7.5-4.3 7.5-9V6L12 3Zm-1.4 10.4L8 10.8l1.06-1.06 1.54 1.55 4.34-4.34L16 8l-5.4 5.4Z" />
  ),
  report: (
    <path d="M8 3h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm1 5h6M9 11h6M9 14h4M17 6l3 3-3 3" />
  ),
};

type StatItem = {
  icon: keyof typeof ICONS;
  value: string;
  label: string;
};

const STATS: StatItem[] = [
  { icon: "years", value: "21+", label: "Years of trusted service" },
  { icon: "clock", value: "365", label: "Days a year, open till late" },
  { icon: "branches", value: "6+", label: "Collection points across Pakistan" },
  { icon: "home", value: "Home", label: "Sample collection, seven days a week" },
  { icon: "shield", value: SITE.certification, label: "Certified laboratory" },
  { icon: "report", value: "Digital", label: "Reports via WhatsApp & portal" },
];

export default function StatsGlance() {
  return (
    <div>
      <p className="text-center font-display text-2xl font-semibold text-ink md:text-3xl">
        MED HEALTH <span className="text-coral-500">AT A GLANCE</span>
      </p>

      <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="group cursor-default bg-panel p-6 text-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:bg-coral-500 hover:shadow-xl hover:shadow-coral-500/20"
          >
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white transition-colors duration-500 group-hover:bg-white/15">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="stroke-teal-500 transition-colors duration-500 group-hover:stroke-white"
              >
                {ICONS[stat.icon]}
              </svg>
            </span>
            <p className="mt-4 font-display text-2xl font-bold text-coral-500 transition-colors duration-500 group-hover:text-white">
              {stat.value}
            </p>
            <p className="mt-1 text-sm text-ink/60 transition-colors duration-500 group-hover:text-white/85">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
