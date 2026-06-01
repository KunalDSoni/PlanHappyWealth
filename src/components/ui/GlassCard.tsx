"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  /** Lift + gold glow on hover. */
  interactive?: boolean;
  strong?: boolean;
}

/**
 * Frosted card — the primary content surface.
 * Layered depth, soft shadow, hairline border, optional hover elevation.
 */
export function GlassCard({
  className,
  interactive = false,
  strong = false,
  children,
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        strong ? "glass-strong" : "glass",
        "rounded-3xl shadow-glass",
        interactive &&
          "transition-all duration-500 ease-luxury hover:-translate-y-1 hover:shadow-glass-lg hover:border-gold/30",
        className,
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
