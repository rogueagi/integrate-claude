import {
  Target,
  Megaphone,
  Headphones,
  TrendingUp,
  Users,
  Settings,
  Package,
  Code,
  Palette,
  BarChart3,
  Shield,
  Scale,
  Briefcase,
  Rocket,
  Zap,
  Newspaper,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { PromptFunction } from "@/types/prompt";
import { cn } from "@/lib/utils";

const FUNCTION_ICONS: Record<PromptFunction, LucideIcon> = {
  sales: Target,
  marketing: Megaphone,
  "customer-service": Headphones,
  finance: TrendingUp,
  hr: Users,
  operations: Settings,
  product: Package,
  engineering: Code,
  design: Palette,
  data: BarChart3,
  "it-security": Shield,
  legal: Scale,
  executive: Briefcase,
  founder: Rocket,
  productivity: Zap,
  "pr-comms": Newspaper,
};

interface Props {
  function: PromptFunction;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "size-4",
  md: "size-5",
  lg: "size-6",
};

const containerSizeClasses = {
  sm: "size-7",
  md: "size-9",
  lg: "size-11",
};

export function FunctionIcon({ function: fn, className, size = "md" }: Props) {
  const Icon = FUNCTION_ICONS[fn];
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-md bg-accent/10 text-accent",
        containerSizeClasses[size],
        className,
      )}
      aria-hidden="true"
    >
      <Icon className={sizeClasses[size]} />
    </span>
  );
}
