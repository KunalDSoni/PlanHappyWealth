import type { Config } from "tailwindcss";

/**
 * Plan Happy Wealth — Design Tokens
 * A luxury fintech system: deep navy canvas, midnight depth, gold signal, soft-white light.
 */
const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx,mdx}",
    "./src/components/**/*.{ts,tsx,mdx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core brand palette
        navy: {
          DEFAULT: "#07111F", // Deep Navy — primary canvas
          950: "#05080F",
          900: "#07111F",
          800: "#0E1B2E", // Midnight Blue — elevated surfaces
          700: "#13243B",
          600: "#1B3149",
        },
        midnight: "#0E1B2E",
        gold: {
          DEFAULT: "#D4AF37", // Gold Accent — signal / wealth
          50: "#FBF6E6",
          100: "#F4E6B8",
          200: "#E8CE7F",
          300: "#DDBB57",
          400: "#D4AF37",
          500: "#B8932A",
          600: "#967421",
        },
        cloud: {
          DEFAULT: "#F8F9FB", // Soft White — light text / inversion
          muted: "#C7CEDB",
          dim: "#8B97AC",
          faint: "#5A6478",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        // Fluid editorial scale
        "display-2xl": ["clamp(3.5rem, 8vw, 7rem)", { lineHeight: "0.95", letterSpacing: "-0.03em" }],
        "display-xl": ["clamp(2.75rem, 6vw, 5rem)", { lineHeight: "1.0", letterSpacing: "-0.025em" }],
        "display-lg": ["clamp(2.25rem, 4.5vw, 3.5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.75rem, 3vw, 2.5rem)", { lineHeight: "1.1", letterSpacing: "-0.015em" }],
      },
      letterSpacing: {
        tightest: "-0.04em",
        kicker: "0.22em",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.75rem",
      },
      boxShadow: {
        glass: "0 1px 0 0 rgba(255,255,255,0.06) inset, 0 24px 64px -24px rgba(0,0,0,0.7)",
        "glass-lg": "0 1px 0 0 rgba(255,255,255,0.08) inset, 0 40px 120px -32px rgba(0,0,0,0.85)",
        gold: "0 0 0 1px rgba(212,175,55,0.35), 0 16px 48px -12px rgba(212,175,55,0.35)",
        "gold-soft": "0 12px 40px -16px rgba(212,175,55,0.45)",
        elevate: "0 30px 80px -24px rgba(0,0,0,0.6)",
      },
      backgroundImage: {
        "radial-gold": "radial-gradient(circle at 50% 0%, rgba(212,175,55,0.18), transparent 60%)",
        "radial-aurora": "radial-gradient(60% 60% at 50% 0%, rgba(27,49,73,0.6), transparent 70%)",
        "gold-line": "linear-gradient(90deg, transparent, rgba(212,175,55,0.6), transparent)",
        "noise": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.22, 1, 0.36, 1)",
        "luxury-in": "cubic-bezier(0.65, 0, 0.35, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "pulse-gold": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        "gradient-pan": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.22,1,0.36,1) forwards",
        shimmer: "shimmer 2.5s linear infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-gold": "pulse-gold 3s ease-in-out infinite",
        "gradient-pan": "gradient-pan 8s ease infinite",
      },
    },
  },
  plugins: [],
};

export default config;
