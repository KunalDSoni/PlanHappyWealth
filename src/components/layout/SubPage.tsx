import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

interface SubPageProps {
  kicker?: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  children: React.ReactNode;
}

/**
 * Editorial chrome for non-home routes — keeps the Navbar/Footer consistent
 * and prints an architectural masthead with a kicker, title and lede.
 */
export function SubPage({ kicker, title, lede, children }: SubPageProps) {
  return (
    <>
      <Navbar />
      <main className="relative pt-32 sm:pt-36">
        <div className="pointer-events-none fixed inset-0 -z-10 bg-radial-aurora opacity-40" aria-hidden="true" />

        {/* Masthead */}
        <header className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-8">
          {kicker && (
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-gold/60" />
              <span className="kicker">{kicker}</span>
            </div>
          )}
          <h1 className="mt-5 max-w-4xl text-balance font-display text-display-xl font-semibold leading-[0.96] text-cloud">
            {title}
          </h1>
          {lede && (
            <p className="mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-cloud-muted md:text-xl">
              {lede}
            </p>
          )}
          <div className="mt-12 h-px w-full bg-gradient-to-r from-cloud/10 via-gold/40 to-cloud/10" />
        </header>

        {children}
      </main>
      <Footer />
    </>
  );
}
