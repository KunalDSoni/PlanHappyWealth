"use client";

import { useCountUp } from "@/hooks/useCountUp";
import { cn } from "@/lib/utils";

interface CounterProps {
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}

/** Animated number that grows when scrolled into view. */
export function Counter({
  to,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 2.2,
  className,
}: CounterProps) {
  const { ref, formatted } = useCountUp(to, { decimals, duration });
  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
