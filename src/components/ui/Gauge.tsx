"use client";

import { useEffect, useId } from "react";
import { motion, useMotionValue, useTransform, animate, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GaugeProps {
  /** 0–100 */
  value: number;
  size?: number;
  stroke?: number;
  label?: string;
  sublabel?: string;
  /** Sweep angle in degrees (270 = three-quarter dial). */
  sweep?: number;
  className?: string;
  trackColor?: string;
  progressColor?: string;
  showValue?: boolean;
}

/**
 * Premium animated arc gauge.
 * Draws an SVG dial that fills to `value` with a spring-eased sweep
 * and a live count-up label.
 */
export function Gauge({
  value,
  size = 200,
  stroke = 14,
  label,
  sublabel,
  sweep = 270,
  className,
  trackColor = "rgba(255,255,255,0.08)",
  progressColor = "#D4AF37",
  showValue = true,
}: GaugeProps) {
  const reduce = useReducedMotion();
  const gradId = `gg-${useId().replace(/:/g, "")}`;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const arcLength = (sweep / 360) * circumference;
  const gapRotation = (360 - sweep) / 2 + 90;

  const progress = useMotionValue(0);
  const dashoffset = useTransform(progress, (p) => arcLength - (p / 100) * arcLength);
  const display = useTransform(progress, (p) => Math.round(p));

  useEffect(() => {
    if (reduce) {
      progress.set(value);
      return;
    }
    const controls = animate(progress, value, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.15,
    });
    return () => controls.stop();
  }, [value, progress, reduce]);

  return (
    <div className={cn("relative inline-flex items-center justify-center", className)} style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-0">
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F4E6B8" />
            <stop offset="55%" stopColor={progressColor} />
            <stop offset="100%" stopColor="#967421" />
          </linearGradient>
        </defs>
        {/* Track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={trackColor}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${arcLength} ${circumference}`}
          transform={`rotate(${gapRotation} ${size / 2} ${size / 2})`}
        />
        {/* Progress */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={`url(#${gradId})`}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${arcLength} ${circumference}`}
          style={{ strokeDashoffset: dashoffset }}
          transform={`rotate(${gapRotation} ${size / 2} ${size / 2})`}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        {showValue && (
          <motion.span className="font-display text-4xl font-semibold text-gradient-gold tabular-nums">
            {display}
          </motion.span>
        )}
        {label && <span className="mt-1 text-xs font-medium uppercase tracking-kicker text-cloud-dim">{label}</span>}
        {sublabel && <span className="mt-0.5 text-[11px] text-cloud-faint">{sublabel}</span>}
      </div>
    </div>
  );
}
