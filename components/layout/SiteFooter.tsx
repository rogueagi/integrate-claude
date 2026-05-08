import Link from "next/link";
import { X, Mail } from "lucide-react";

// LinkedIn SVG since lucide-react doesn't include it
function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Left: Wordmark + description + socials */}
          <div className="md:col-span-1 flex flex-col gap-4">
            <Link
              href="/"
              className="font-semibold text-base tracking-tight text-foreground"
            >
              Integrate Claude
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Helping businesses of every size move from casual AI usage to
              deeply integrated Claude workflows — through training, prompt
              engineering, and custom software.
            </p>
            <div className="flex items-center gap-3 mt-1">
              <a
                href="https://linkedin.com/company/integrateclaude"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <LinkedInIcon className="size-4" />
              </a>
              <a
                href="https://x.com/integrateclaude"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="size-4" />
              </a>
              <a
                href="mailto:hello@integrateclaude.com"
                aria-label="Email"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="size-4" />
              </a>
            </div>
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
        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
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
    </footer>
  );
}
