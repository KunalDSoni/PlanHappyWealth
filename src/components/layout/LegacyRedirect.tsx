import Link from "next/link";
import { asset } from "@/lib/basePath";

/**
 * Static meta-refresh page that survives a static export. Used to keep
 * legacy ASP.NET paths working when the practice transitions DNS to this
 * site. The `to` argument is a route-relative path; it is prefixed with
 * the active basePath at build time.
 */
export function LegacyRedirect({ to, label = "this page" }: { to: string; label?: string }) {
  const target = asset(to);
  return (
    <>
      {/* Meta refresh fallback for clients that ignore script. */}
      <meta httpEquiv="refresh" content={`0; url=${target}`} />
      <script
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: `try{window.location.replace(${JSON.stringify(target)})}catch(e){}`,
        }}
      />
      <main className="mx-auto flex min-h-[60svh] w-full max-w-2xl flex-col items-start justify-center px-5 sm:px-6 md:px-8">
        <p className="font-mono text-[11px] uppercase tracking-kicker text-gold">
          Redirecting · 301-style
        </p>
        <h1 className="mt-4 font-display text-display-md font-semibold leading-tight text-cloud">
          The practice has moved {label} to its new architecture.
        </h1>
        <p className="mt-4 text-cloud-muted">
          If you are not redirected in a moment,{" "}
          <Link href={to} className="text-gold underline-offset-4 hover:underline">
            tap here to continue
          </Link>
          .
        </p>
      </main>
    </>
  );
}
