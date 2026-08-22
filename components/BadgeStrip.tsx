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
  doctors: (
    <path d="M9 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm6 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 19c0-3 2.7-5 6-5s6 2 6 5v1H3v-1Zm12.5-3.5c2.6.2 4.5 1.9 4.5 4V21h-6v-1.2c0-1.4-.5-2.6-1.4-3.6.9-.5 1.9-.7 2.9-.7Z" />
  ),
};

type Badge = {
  icon: keyof typeof ICONS;
  value: string;
  label: string;
};

const BADGES: Badge[] = [
  { icon: "years", value: "21+", label: "Years of trusted service" },
  { icon: "clock", value: "365", label: "Days a year, open till late" },
  { icon: "branches", value: "6+", label: "Collection points" },
  { icon: "home", value: "Home", label: "Sample collection" },
  { icon: "shield", value: SITE.certification, label: "Certified laboratory" },
];

export default function BadgeStrip({
  variant = "light",
  items = BADGES,
}: {
  variant?: "light" | "dark";
  items?: Badge[];
}) {
  const isDark = variant === "dark";
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-9 gap-y-5 md:justify-between">
      {items.map((badge) => (
        <div key={badge.label} className="flex items-center gap-3">
          <span
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${
              isDark
                ? "bg-white/8 border border-[#4A8FC2]/40 text-white"
                : "bg-panel border border-line text-teal-500"
            }`}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              {ICONS[badge.icon]}
            </svg>
          </span>
          <span className="text-left leading-tight">
            <span
              className={`block font-display text-base font-semibold ${
                isDark ? "text-white" : "text-ink"
              }`}
            >
              {badge.value}
            </span>
            <span className={`block text-xs ${isDark ? "text-[#C9DCEC]" : "text-ink/50"}`}>
              {badge.label}
            </span>
          </span>
        </div>
      ))}
    </div>
  );
}
