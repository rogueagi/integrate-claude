const stats = [
  { value: "70%", label: "faster legal drafting at a 210-attorney firm" },
  {
    value: "83%",
    label: "less CFO reporting prep for a mid-market finance team",
  },
  { value: "10×", label: "BD outreach for a nationwide tax advisory" },
  {
    value: "75%",
    label: "faster content production for a mobile gaming team",
  },
  {
    value: "178%",
    label: "verified CAGR for a pro sports catering ops build",
  },
];

export function SocialProofBar() {
  return (
    <section className="border-y border-border bg-muted/40 py-8 md:py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:flex md:flex-row md:items-stretch md:divide-x divide-border gap-y-2">
          {stats.map((stat, idx) => (
            <div
              key={stat.value}
              className={[
                "flex-1 flex flex-col items-center justify-center text-center gap-1.5 md:gap-2 py-3 md:py-2 px-2 md:px-4",
                idx === stats.length - 1 && stats.length % 2 !== 0
                  ? "col-span-2 md:col-span-1"
                  : "",
              ].join(" ")}
            >
              <span className="text-2xl md:text-3xl font-bold tracking-tight text-accent">
                {stat.value}
              </span>
              <span className="text-[11px] sm:text-xs uppercase tracking-wide text-muted-foreground max-w-[18ch] md:max-w-[14ch] leading-snug">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
