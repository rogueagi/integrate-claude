import Link from "next/link";
import { BrandMark } from "@/components/shared/BrandMark";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Left: Wordmark + description */}
          <div className="md:col-span-1 flex flex-col gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-semibold text-base tracking-tight text-foreground hover:text-foreground/80 transition-colors w-fit"
            >
              <BrandMark className="h-6 w-auto text-accent" />
              <span>Integrate Claude</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Helping businesses of every size move from casual AI usage to
              deeply integrated Claude workflows. Training, prompt engineering,
              and custom software.
            </p>
          </div>

          {/* Right: Two link columns */}
          <div className="md:col-span-2 grid grid-cols-2 gap-8">
            {/* Services column */}
            <div className="flex flex-col gap-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Services
              </h3>
              <ul className="flex flex-col gap-2">
                {[
                  {
                    label: "AI Readiness Audit",
                    href: "/services/ai-readiness-audit",
                  },
                  {
                    label: "Education",
                    href: "/services/education-ai-fluency",
                  },
                  {
                    label: "Workflow Integration",
                    href: "/services/workflow-integration",
                  },
                  {
                    label: "Prompting",
                    href: "/services/prompting-and-projects",
                  },
                  { label: "Custom Apps", href: "/services/custom-web-apps" },
                  {
                    label: "Data & Analytics",
                    href: "/services/data-analytics-intelligence",
                  },
                  {
                    label: "Security & Governance",
                    href: "/services/ai-security-governance",
                  },
                  {
                    label: "Marketing Operations",
                    href: "/services/marketing-content-ops",
                  },
                  {
                    label: "Partnership",
                    href: "/services/ongoing-partnership",
                  },
                ].map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Prompt Library column */}
            <div className="flex flex-col gap-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Prompt Library
              </h3>
              <ul className="flex flex-col gap-2">
                {[
                  { label: "Sales", href: "/prompts?function=sales" },
                  { label: "Marketing", href: "/prompts?function=marketing" },
                  { label: "Finance", href: "/prompts?function=finance" },
                  {
                    label: "Engineering",
                    href: "/prompts?function=engineering",
                  },
                  { label: "Browse all", href: "/prompts" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-border flex flex-col gap-3">
          <p className="text-xs text-muted-foreground leading-relaxed">
            Integrate Claude is an independent consultancy. Not affiliated with,
            endorsed by, or sponsored by Anthropic. &ldquo;Claude&rdquo; and the
            Claude logo are trademarks of Anthropic, PBC.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <p className="text-xs text-muted-foreground">
              &copy; {currentYear} Integrate Claude. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/privacy"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
