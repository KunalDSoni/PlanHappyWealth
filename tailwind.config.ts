import type { Config } from "tailwindcss";

/**
 * Plan Happy Wealth — Design Tokens (Light theme)
 * Bright editorial canvas, soft elevations, gold signal, deep ink for type.
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
        // "navy" tokens now represent the light canvas + elevated surfaces.
        // Names retained for class compatibility across components.
        navy: {
          DEFAULT: "#FFFFFF", // Pure white — primary canvas
          950: "#FFFFFF",
          900: "#FFFFFF",
          800: "#F4F6FA", // soft elevated surface
          700: "#E6EAF1", // hairline / divider zone
          600: "#D3DAE6",
        },
        midnight: "#F4F6FA",
        gold: {
          DEFAULT: "#B8932A", // Slightly deeper gold for legibility on white
          50: "#FBF6E6",
          100: "#F4E6B8",
          200: "#E8CE7F",
          300: "#DDBB57",
          400: "#D4AF37",
          500: "#B8932A",
          600: "#967421",
        },
        // "cloud" tokens now represent ink/text on the light canvas.
        cloud: {
          DEFAULT: "#0E1B2E", // Deep ink — primary text
          muted: "#3B4A66",   // secondary text
          dim: "#5A6478",     // tertiary
          faint: "#8B97AC",   // quaternary / labels
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
        glass: "0 1px 0 0 rgba(255,255,255,0.7) inset, 0 18px 48px -24px rgba(14,27,46,0.18)",
        "glass-lg": "0 1px 0 0 rgba(255,255,255,0.85) inset, 0 32px 96px -32px rgba(14,27,46,0.22)",
        gold: "0 0 0 1px rgba(184,147,42,0.45), 0 16px 48px -12px rgba(184,147,42,0.28)",
        "gold-soft": "0 12px 40px -16px rgba(184,147,42,0.35)",
        elevate: "0 24px 64px -24px rgba(14,27,46,0.18)",
      },
      backgroundImage: {
        "radial-gold": "radial-gradient(circle at 50% 0%, rgba(212,175,55,0.18), transparent 60%)",
        "radial-aurora": "radial-gradient(60% 60% at 50% 0%, rgba(214,224,240,0.7), transparent 70%)",
        "gold-line": "linear-gradient(90deg, transparent, rgba(184,147,42,0.55), transparent)",
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
