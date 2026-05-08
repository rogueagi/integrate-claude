import { Shield, Layers, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const founder = {
  name: "Ben Frost",
  role: "Founder & AI Integration Lead",
  photo: "/founder-ben-frost.jpg",
  // Short bio for homepage (concise, character-focused)
  shortBio:
    "Builder, operator, and AI specialist. Ben has spent years at the intersection of software and business operations, adopting Claude early and developing a systematic approach to enterprise integration. He makes complex AI implementations legible to non-technical teams, and makes sure they actually stick.",
  // Long bio for /about (multi-paragraph for readability at full width)
  longBio: [
    "Ben Frost is a builder, operator, and AI specialist. His background spans cybersecurity, marketing operations as an equity holder in VaynerSports, and revenue generation that has delivered $24M+ to a single client.",
    "He adopted Claude early and has spent the past few years developing a systematic approach to enterprise AI integration. The philosophy is simple: complex AI implementations should be legible to non-technical teams, and they should compound rather than fade.",
    "Ben works closely with clients across legal, finance, healthcare, and operations to translate that philosophy into real working systems.",
  ] as const,
};

export interface TrackRecordItem {
  metric: string;
  label: string;
}

export const trackRecord: TrackRecordItem[] = [
  {
    metric: "$900B+",
    label: "Federal PPP fraud protection experience",
  },
  {
    metric: "$24M+",
    label: "Client revenue generated with AI",
  },
  {
    metric: "VaynerSports",
    label: "Equity stake in Gary Vaynerchuk's media network",
  },
];

export interface CapabilityItem {
  icon: LucideIcon;
  label: string;
  sub: string;
}

export const capabilities: CapabilityItem[] = [
  {
    icon: Shield,
    label: "Cybersecurity-first design",
    sub: "Security baked into every Claude integration.",
  },
  {
    icon: Layers,
    label: "Full-stack execution",
    sub: "Training, workflows, and software under one roof.",
  },
  {
    icon: Users,
    label: "Built for operators",
    sub: "Most clients ship without writing a line of code.",
  },
];
