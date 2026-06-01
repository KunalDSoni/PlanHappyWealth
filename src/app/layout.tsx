import type { Metadata, Viewport } from "next";

// Self-hosted premium type — zero network at build, no CLS.
import "@fontsource-variable/fraunces";
import "@fontsource-variable/inter";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "./globals.css";

import { SITE } from "@/lib/constants";
import { asset } from "@/lib/basePath";

export const viewport: Viewport = {
  themeColor: "#07111F",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Build wealth, confidence & financial freedom`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "financial planning",
    "wealth management",
    "retirement planning",
    "family financial wellness",
    "investment planning",
    "insurance",
    "financial freedom",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  applicationName: SITE.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — Your family's dreams deserve more than advice`,
    description: SITE.description,
    images: [{ url: asset("/og.svg"), width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name}`,
    description: SITE.tagline,
    images: [asset("/og.svg")],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: [{ url: asset("/favicon.svg"), type: "image/svg+xml" }],
    apple: [{ url: asset("/favicon.svg") }],
  },
  manifest: asset("/manifest.webmanifest"),
  category: "finance",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: SITE.name,
  description: SITE.description,
  url: SITE.url,
  email: SITE.email,
  areaServed: "IN",
  knowsAbout: [
    "Retirement Planning",
    "Wealth Management",
    "Insurance",
    "Investment Planning",
    "Tax Optimization",
  ],
  slogan: SITE.tagline,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-navy-900 font-sans text-cloud antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Skip link for keyboard + screen-reader users */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-gold focus:px-5 focus:py-2 focus:text-sm focus:font-semibold focus:text-navy-900"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
