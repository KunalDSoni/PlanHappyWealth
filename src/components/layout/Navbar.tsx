"use client";

import { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, CTA } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/layout/Logo";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <nav
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-500 ease-luxury md:px-8",
          scrolled
            ? "my-3 rounded-full border border-white/10 bg-navy-900/70 py-2.5 backdrop-blur-xl shadow-glass md:mx-6"
            : "py-5",
        )}
      >
        <a href="#main" aria-label={`${"Plan Happy Wealth"} home`}>
          <Logo />
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm text-cloud-muted transition-colors hover:text-cloud"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href={CTA.secondary.href} variant="ghost" size="sm">
            Health Score
          </Button>
          <Button href={CTA.primary.href} size="sm">
            {CTA.primary.label}
          </Button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-cloud lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mx-4 mt-2 overflow-hidden rounded-3xl glass-strong p-6 lg:hidden"
          >
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-base text-cloud-muted transition-colors hover:bg-white/5 hover:text-cloud"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="mt-4 flex flex-col gap-3">
              <Button href={CTA.secondary.href} variant="secondary" size="md" onClick={() => setOpen(false)}>
                {CTA.secondary.label}
              </Button>
              <Button href={CTA.primary.href} size="md" onClick={() => setOpen(false)}>
                {CTA.primary.label}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
