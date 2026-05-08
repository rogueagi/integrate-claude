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
    <section className="border-y border-border bg-muted/40 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-stretch md:divide-x divide-border">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="flex-1 flex flex-col items-center justify-center text-center gap-2 py-4 md:py-2 md:px-4"
            >
              <span className="text-2xl md:text-3xl font-bold tracking-tight text-accent">
                {stat.value}
              </span>
              <span className="text-xs uppercase tracking-wide text-muted-foreground max-w-[14ch]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
