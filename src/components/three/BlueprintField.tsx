"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

/**
 * Architectural blueprint background — quiet technical grid, vellum tone,
 * with a slowly drifting set of construction lines. Replaces the prior
 * particle field. Skipped for reduced-motion users (static layer only).
 */
export function BlueprintField({ className }: { className?: string }) {
  const ref = useRef<SVGSVGElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !ref.current) return;
    const svg = ref.current;
    const drift = svg.querySelector<SVGGElement>("[data-drift]");
    if (!drift) return;
    let raf = 0;
    let t = 0;
    const tick = () => {
      t += 0.0025;
      const x = Math.sin(t) * 6;
      const y = Math.cos(t * 0.7) * 4;
      drift.setAttribute("transform", `translate(${x} ${y})`);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduce]);

  return (
    <div className={className} aria-hidden="true">
      {/* Vellum wash + gentle warm light */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#FBFCFE_0%,#F4F6FA_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-radial-gold opacity-50" />

      <svg
        ref={ref}
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1600 1000"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="grid-fine" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(14,27,46,0.05)" strokeWidth="0.5" />
          </pattern>
          <pattern id="grid-major" width="200" height="200" patternUnits="userSpaceOnUse">
            <path d="M 200 0 L 0 0 0 200" fill="none" stroke="rgba(14,27,46,0.08)" strokeWidth="0.8" />
          </pattern>
          <radialGradient id="bp-vignette" cx="50%" cy="40%" r="70%">
            <stop offset="60%" stopColor="rgba(255,255,255,0)" />
            <stop offset="100%" stopColor="rgba(14,27,46,0.10)" />
          </radialGradient>
        </defs>

        <rect width="1600" height="1000" fill="url(#grid-fine)" />
        <rect width="1600" height="1000" fill="url(#grid-major)" />

        {/* Drifting structural lines — the blueprint of a household */}
        <g data-drift stroke="rgba(184,147,42,0.55)" strokeWidth="1" fill="none">
          {/* Foundation rectangle */}
          <rect x="200" y="640" width="1200" height="180" />
          {/* Structure */}
          <rect x="320" y="440" width="960" height="200" />
          {/* Roofline */}
          <path d="M 320 440 L 800 240 L 1280 440" />
          {/* Diagonals */}
          <path d="M 200 820 L 1400 820" strokeDasharray="2 6" />
          <path d="M 800 240 L 800 820" strokeDasharray="2 6" />
          {/* Annotation ticks */}
          <g strokeWidth="0.8" opacity="0.7">
            <path d="M 200 820 L 200 850" />
            <path d="M 1400 820 L 1400 850" />
            <path d="M 320 440 L 290 440" />
            <path d="M 1280 440 L 1310 440" />
          </g>
          {/* Dimension labels */}
          <g fill="rgba(184,147,42,0.85)" stroke="none" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize="10" letterSpacing="0.18em">
            <text x="800" y="870" textAnchor="middle">FOUNDATION · 1200</text>
            <text x="800" y="225" textAnchor="middle">LEGACY HORIZON</text>
            <text x="270" y="442" textAnchor="end">04</text>
            <text x="1330" y="442">04</text>
          </g>
        </g>

        <rect width="1600" height="1000" fill="url(#bp-vignette)" />
      </svg>
    </div>
  );
}
