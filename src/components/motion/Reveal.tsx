"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

type Direction = "up" | "down" | "left" | "right" | "none";

const offset: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 28 },
  down: { y: -28 },
  left: { x: 28 },
  right: { x: -28 },
  none: {},
};

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: Direction;
  /** Stagger children that are also <Reveal.Item> or motion items. */
  as?: "div" | "section" | "span" | "li" | "ul";
  amount?: number;
  once?: boolean;
}

/**
 * Scroll-triggered reveal — the signature entrance of the experience.
 * Honors prefers-reduced-motion via Framer's reducedMotion config.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.8,
  direction = "up",
  as = "div",
  amount = 0.3,
  once = true,
}: RevealProps) {
  const MotionTag = motion[as];
  const o = offset[direction];

  const variants: Variants = {
    hidden: { opacity: 0, ...o },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration, delay, ease: EASE },
    },
  };

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
    >
      {children}
    </MotionTag>
  );
}

/** Container that staggers its <Reveal.Item> children. */
export function RevealGroup({
  children,
  className,
  stagger = 0.12,
  delayChildren = 0.1,
  once = true,
  amount = 0.2,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
  once?: boolean;
  amount?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: stagger, delayChildren },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
  direction = "up",
  duration = 0.7,
}: {
  children: ReactNode;
  className?: string;
  direction?: Direction;
  duration?: number;
}) {
  const o = offset[direction];
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, ...o },
        show: { opacity: 1, x: 0, y: 0, transition: { duration, ease: EASE } },
      }}
    >
      {children}
    </motion.div>
  );
}
