const ROWS = [
  { name: "Hemoglobin", result: "13.8", unit: "g/dL", range: "13.0 – 17.0", flag: "normal" },
  { name: "WBC Count", result: "11.4", unit: "×10³/µL", range: "4.0 – 11.0", flag: "high" },
  { name: "Platelets", result: "245", unit: "×10³/µL", range: "150 – 410", flag: "normal" },
  { name: "Fasting Glucose", result: "94", unit: "mg/dL", range: "70 – 100", flag: "normal" },
  { name: "Total Cholesterol", result: "212", unit: "mg/dL", range: "< 200", flag: "high" },
  { name: "TSH", result: "2.1", unit: "µIU/mL", range: "0.4 – 4.0", flag: "normal" },
];

export default function ReportCard() {
  return (
    <div className="relative w-full max-w-md rounded-sm border border-line bg-white shadow-[0_30px_60px_-25px_rgba(10,43,40,0.35)]">
      <div className="flex items-center justify-between border-b border-line px-6 py-4">
        <div>
          <p className="eyebrow text-teal-500">Laboratory Report</p>
          <p className="font-display text-base font-semibold text-ink">Complete Health Panel</p>
        </div>
        <span className="tag-pill border-mint text-mint">Verified</span>
      </div>

      <div className="px-6 py-4">
        <div className="eyebrow grid grid-cols-[1.4fr_0.7fr_1fr] gap-2 pb-3 text-ink/40">
          <span>Test</span>
          <span>Result</span>
          <span>Reference</span>
        </div>
        <div className="divide-y divide-line/70">
          {ROWS.map((row) => (
            <div key={row.name} className="grid grid-cols-[1.4fr_0.7fr_1fr] items-center gap-2 py-2.5">
              <span className="text-sm text-ink/80">{row.name}</span>
              <span
                className={`font-mono text-sm font-medium ${
                  row.flag === "high" ? "text-coral-500" : "text-ink"
                }`}
              >
                {row.result}
                <span className="ml-1 text-[10px] text-ink/40">{row.unit}</span>
              </span>
              <span className="font-mono text-xs text-ink/50">{row.range}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-line bg-panel px-6 py-3">
        <p className="text-xs text-ink/50">Report generated &amp; digitally signed</p>
        <span className="flex items-center gap-1.5 text-xs font-medium text-teal-500">
          <span className="h-1.5 w-1.5 rounded-full bg-mint" />
          MHCL Lab
        </span>
      </div>

      <div className="absolute -left-6 -top-6 hidden rounded-sm border border-line bg-white px-4 py-3 shadow-lg shadow-black/5 md:block">
        <p className="font-display text-2xl font-semibold text-teal-500">6 hrs</p>
        <p className="text-xs text-ink/50">avg. turnaround</p>
      </div>
    </div>
  );
}
