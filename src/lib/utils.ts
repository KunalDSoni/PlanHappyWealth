import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind classes with conflict resolution. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Indian-format currency (₹) with compact lakhs/crores where helpful. */
export function formatINR(value: number, compact = false): string {
  if (compact) {
    if (value >= 1_00_00_000) return `₹${(value / 1_00_00_000).toFixed(2)} Cr`;
    if (value >= 1_00_000) return `₹${(value / 1_00_000).toFixed(1)} L`;
  }
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

/** Clamp a number between min and max. */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/** Linear interpolation. */
export function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

/** Map a value from one range to another. */
export function mapRange(
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number,
): number {
  return outMin + ((value - inMin) * (outMax - outMin)) / (inMax - inMin);
}
