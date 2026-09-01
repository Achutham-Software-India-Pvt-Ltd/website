import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/manrope";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Analytics } from "@/components/Analytics";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Achutham Software | IT Staffing & Software Engineering Services",
    template: `%s | ${siteConfig.brandName}`,
  },
  description:
    "Achutham Software provides software engineering, IT staffing, QA automation, performance engineering, cloud, DevOps and AI talent to companies worldwide.",
  verification: siteConfig.analytics.googleSiteVerification
    ? { google: siteConfig.analytics.googleSiteVerification }
    : undefined,
  icons: {
    icon: [
      { url: "/favicon-icon.png", sizes: "64x64", type: "image/png" },
      { url: "/brand/achutham-icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/brand/achutham-icon-192.png",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.legalName,
  alternateName: siteConfig.brandName,
  url: siteConfig.url,
  logo: `${siteConfig.url}/brand/achutham-icon.png`,
  email: siteConfig.contact.email,
  telephone: siteConfig.contact.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500084",
    addressCountry: "IN",
  },
  ...(siteConfig.social.linkedin ? { sameAs: [siteConfig.social.linkedin] } : {}),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full">
      <body className="flex min-h-full flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Analytics />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
