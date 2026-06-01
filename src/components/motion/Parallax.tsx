"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface ParallaxProps {
  children: ReactNode;
  className?: string;
  /** Pixels of travel across the scroll window. Negative = moves up. */
  offset?: number;
}

/** Subtle scroll-linked parallax. Disabled when reduced-motion is set. */
export function Parallax({ children, className, offset = 80 }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y: reduce ? 0 : y }}>{children}</motion.div>
    </div>
  );
}
