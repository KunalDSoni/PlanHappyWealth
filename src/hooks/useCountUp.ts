"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

interface Options {
  duration?: number;
  decimals?: number;
  /** Start the count only when scrolled into view. */
  startOnView?: boolean;
}

/**
 * Animated number that counts up from 0 → `to`.
 * Returns the formatted value string and a ref to attach for in-view start.
 */
export function useCountUp(to: number, options: Options = {}) {
  const { duration = 2, decimals = 0, startOnView = true } = options;
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    const shouldStart = startOnView ? inView : true;
    if (!shouldStart) return;

    if (reduce) {
      setValue(to);
      return;
    }

    const controls = animate(0, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setValue(latest),
    });
    return () => controls.stop();
  }, [inView, to, duration, reduce, startOnView]);

  const formatted = value.toLocaleString("en-IN", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return { ref, value, formatted };
}
