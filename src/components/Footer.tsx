import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { Container } from "./Container";
import { siteConfig } from "@/lib/config";

// lucide-react no longer ships brand/logo icons, so the LinkedIn glyph is a
// small inline SVG instead of a library import.
function LinkedinGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.11 20.45H3.56V9h3.55v11.45z" />
    </svg>
  );
}

const columns = [
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Industries", href: "/industries" },
      { label: "How We Work", href: "/how-we-work" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Software Engineering", href: "/software-engineering" },
      { label: "QA & Test Automation", href: "/qa-automation" },
      { label: "Performance Engineering", href: "/performance-engineering" },
      { label: "Cloud & DevOps", href: "/cloud-devops" },
      { label: "AI & Data Engineering", href: "/ai-data" },
      { label: "IT Staffing", href: "/it-staffing" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-deep text-white">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <Image
                src="/brand/achutham-icon.png"
                alt=""
                width={36}
                height={36}
                className="h-9 w-9 shrink-0"
              />
              <div className="flex flex-col leading-none">
                <span className="font-display text-lg font-bold tracking-tight text-white">
                  ACHUTHAM
                </span>
                <span className="text-[11px] font-semibold tracking-[0.2em] text-accent">
                  SOFTWARE
                </span>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              {siteConfig.legalName}
            </p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-400">
              {siteConfig.tagline}
            </p>

            <div className="mt-6 flex flex-col gap-2.5 text-sm text-slate-400">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-2 hover:text-white"
              >
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                {siteConfig.contact.email}
              </a>
              <a
                href={`tel:${siteConfig.contact.phoneHref}`}
                className="flex items-center gap-2 hover:text-white"
              >
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                {siteConfig.contact.phone}
              </a>
              <span className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                {siteConfig.contact.addressLine}
              </span>
            </div>

            {siteConfig.social.linkedin ? (
              <div className="mt-6 flex gap-3">
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Achutham Software on LinkedIn"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-accent"
                >
                  <LinkedinGlyph className="h-4 w-4" />
                </a>
              </div>
            ) : null}
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-sm font-semibold text-white">{col.heading}</h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
          </p>
          <p>{siteConfig.contact.locationShort}</p>
        </div>
      </Container>
    </footer>
  );
}
