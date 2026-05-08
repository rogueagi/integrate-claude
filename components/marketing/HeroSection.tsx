"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden">
      {/* Subtle geometric background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        {/* Warm gradient wash */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5" />

        {/* Animated geometric shapes */}
        <motion.div
          className="absolute -top-32 -right-32 size-[600px] rounded-full bg-accent/6 blur-3xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        />
        <motion.div
          className="absolute -bottom-48 -left-24 size-[500px] rounded-full bg-accent/4 blur-3xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease: "easeOut", delay: 0.2 }}
        />

        {/* Fine grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-32 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/60 px-3 py-1 text-xs text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="size-1.5 rounded-full bg-accent inline-block" />
            Claude integration. End to end.
          </motion.div>

          {/* H1 */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-6"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Claude, integrated into how your business{" "}
            <span className="text-accent">actually operates.</span>
          </motion.h1>

          {/* Subhead */}
          <motion.p
            className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 max-w-2xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            From training to workflow design to custom software, the system that
            makes Claude compound instead of fade.
          </motion.p>

          {/* Proof line */}
          <motion.p
            className="text-sm text-muted-foreground/80 mb-10 max-w-2xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            Trusted across legal, finance, healthcare, marketing, and
            federal-scale operations.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              href="#book"
              className={cn(
                buttonVariants({ size: "lg" }),
                "gap-2 text-base px-6 h-11",
              )}
            >
              Book a 30-min discovery call
              <ArrowRight className="size-4" />
            </a>
            <Link
              href="/prompts"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "gap-2 text-base px-6 h-11",
              )}
            >
              Browse the prompt library
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
