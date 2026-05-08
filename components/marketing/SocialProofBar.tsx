const stats = [
  {
    value: "178%",
    label: "verified CAGR for a Claude-powered ops build",
  },
  {
    value: "70%",
    label: "reduction in proposal drafting time at a 45-attorney firm",
  },
  {
    value: "5×",
    label: "increase in daily BD outreach for a tax advisory team",
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
              className="flex-1 flex flex-col items-center justify-center text-center gap-2 py-4 md:py-2 md:px-6"
            >
              <span className="text-3xl md:text-4xl font-bold tracking-tight text-accent">
                {stat.value}
              </span>
              <span className="text-xs uppercase tracking-wide text-muted-foreground max-w-xs">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
