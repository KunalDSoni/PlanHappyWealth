"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";

/**
 * GSAP-powered, scroll-triggered stagger reveal.
 * Animates the container's direct children as they enter the viewport.
 * Used for below-the-fold storytelling moments; respects reduced motion.
 */
export function GsapReveal({
  children,
  className,
  stagger = 0.12,
  y = 28,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  y?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ctx: ReturnType<typeof gsap.context> | undefined;
    let cancelled = false;

    // Dynamically register ScrollTrigger so it stays out of the initial chunk.
    import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
      if (cancelled || !ref.current) return;
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        gsap.from(Array.from(ref.current!.children), {
          opacity: 0,
          y,
          duration: 0.8,
          ease: "power3.out",
          stagger,
          scrollTrigger: {
            trigger: ref.current!,
            start: "top 78%",
            once: true,
          },
        });
      }, ref);
    });

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, [stagger, y]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
