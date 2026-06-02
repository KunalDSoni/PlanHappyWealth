"use client";

import { forwardRef, type ButtonHTMLAttributes } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "gold-outline";
type Size = "sm" | "md" | "lg";

const base =
  "relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-colors duration-300 ease-luxury focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none select-none overflow-hidden";

const variants: Record<Variant, string> = {
  primary:
    "shine bg-gold text-cloud hover:bg-gold-300 shadow-gold-soft font-semibold",
  secondary:
    "glass text-cloud hover:bg-cloud/[0.08] hover:border-cloud/20",
  ghost: "text-cloud-muted hover:text-cloud",
  "gold-outline":
    "border border-gold/40 text-gold hover:bg-gold/10 hover:border-gold/70",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-[15px]",
  lg: "h-14 px-8 text-base",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  href?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", href, children, ...props }, ref) => {
    const classes = cn(base, variants[variant], sizes[size], className);

    if (href) {
      return (
        <motion.a
          href={href}
          className={classes}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 24 }}
        >
          {children}
        </motion.a>
      );
    }

    return (
      <motion.button
        ref={ref}
        className={classes}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 24 }}
        {...(props as React.ComponentProps<typeof motion.button>)}
      >
        {children}
      </motion.button>
    );
  },
);

Button.displayName = "Button";
