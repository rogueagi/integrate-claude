"use client";

import { useState } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

export function PlaybookSignupForm() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;

    setStatus("submitting");
    setErrorMessage(null);

    try {
      const res = await fetch("/api/playbook-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          firstName: firstName.trim() || undefined,
          company: company.trim() || undefined,
        }),
      });

      const data = (await res.json().catch(() => ({}))) as {
        error?: string;
      };

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(
          data.error ??
            "Something went wrong. Please try again or email hello@integrateclaude.com.",
        );
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage(
        "Couldn't reach the server. Please try again or email hello@integrateclaude.com.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-accent/30 bg-accent/5 p-6 sm:p-8 flex flex-col gap-3">
        <div className="flex items-center gap-2 text-accent">
          <CheckCircle2 className="size-5 shrink-0" />
          <p className="text-base font-semibold text-foreground">
            Check your inbox.
          </p>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          We sent the playbook link to{" "}
          <span className="font-medium text-foreground">{email}</span>. If it
          doesn&rsquo;t arrive in a few minutes, check your spam folder or email{" "}
          <a
            href="mailto:hello@integrateclaude.com"
            className="text-foreground underline underline-offset-4 hover:text-accent"
          >
            hello@integrateclaude.com
          </a>{" "}
          and we&rsquo;ll send it directly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-border bg-background p-6 sm:p-8 flex flex-col gap-4"
    >
      <div className="flex flex-col gap-1">
        <p className="text-base sm:text-lg font-semibold text-foreground">
          Get the playbook by email
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Drop your details and we&rsquo;ll send you the link instantly.
          We&rsquo;ll also notify you when we update the policy templates.
          Unsubscribe any time.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-medium text-muted-foreground">
            First name
          </span>
          <input
            type="text"
            name="firstName"
            autoComplete="given-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            disabled={status === "submitting"}
            className="h-11 rounded-md border border-border bg-background px-3 text-base text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:border-accent disabled:opacity-60"
            placeholder="Jane"
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-medium text-muted-foreground">
            Company <span className="text-muted-foreground/60">(optional)</span>
          </span>
          <input
            type="text"
            name="company"
            autoComplete="organization"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            disabled={status === "submitting"}
            className="h-11 rounded-md border border-border bg-background px-3 text-base text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:border-accent disabled:opacity-60"
            placeholder="Acme Inc."
          />
        </label>
      </div>

      <label className="flex flex-col gap-1.5">
        <span className="text-xs font-medium text-muted-foreground">
          Work email
        </span>
        <input
          type="email"
          name="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "submitting"}
          className="h-11 rounded-md border border-border bg-background px-3 text-base text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:border-accent disabled:opacity-60"
          placeholder="jane@company.com"
        />
      </label>

      {status === "error" && errorMessage && (
        <p className="text-sm text-destructive" role="alert">
          {errorMessage}
        </p>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
        <button
          type="submit"
          disabled={status === "submitting" || !email}
          className={cn(
            buttonVariants({ size: "lg" }),
            "gap-2 h-12 px-6 text-base bg-accent text-accent-foreground hover:bg-accent/90 border-0 disabled:opacity-60 disabled:cursor-not-allowed sm:w-auto w-full justify-center",
          )}
        >
          {status === "submitting" ? "Sending..." : "Email me the playbook"}
          {status !== "submitting" && <ArrowRight className="size-4" />}
        </button>
        <p className="text-xs text-muted-foreground">
          No spam. We won&rsquo;t share your email.
        </p>
      </div>
    </form>
  );
}
