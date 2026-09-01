/**
 * ============================================================================
 * CENTRAL SITE CONFIGURATION
 * ============================================================================
 * Every company-specific fact used across the website lives in this single
 * file. Update it here and the change propagates everywhere automatically.
 *
 * IMPORTANT — DATA INTEGRITY POLICY
 * ----------------------------------------------------------------------------
 * Fields verified from real Achutham sources (the previous achutham.com site,
 * its README, and information the founder provided directly) are filled in.
 * Fields Achutham has not yet provided or verified (client names, employee
 * counts, certifications, awards, testimonials, case-study results, social
 * profile URLs, etc.) are left as explicit placeholders — either `null`,
 * an empty array, or a string wrapped like `"[Add ...]"`.
 *
 * DO NOT replace a placeholder with an invented value. Only replace a
 * placeholder once you have a real, verifiable fact. Components that render
 * placeholder data intentionally show a "sample / placeholder" label so the
 * public site never implies unverified information is real. See README.md
 * → "How to change company information" for the full guide.
 * ============================================================================
 */

export const siteConfig = {
  // ---------------------------------------------------------------------
  // CORE IDENTITY (verified — from CNAME / README of the existing site)
  // ---------------------------------------------------------------------
  legalName: "Achutham Software India Private Limited",
  brandName: "Achutham Software",
  shortName: "Achutham",
  domain: "achutham.com",
  url: "https://achutham.com",
  tagline: "Engineering talent and technology services for ambitious companies.",

  // ---------------------------------------------------------------------
  // POSITIONING (verified — supplied directly by the founder for this build)
  // ---------------------------------------------------------------------
  positioning:
    "An engineering and technology partner helping companies extend their engineering teams with high-quality India-based talent and software delivery.",
  valueProposition: "Scale Your Technology Team With Engineering Talent From India",
  supportingMessage:
    "Achutham helps startups, SaaS companies and enterprises accelerate software delivery through skilled engineering resources, dedicated teams, QA automation, performance engineering and AI-enabled technology services.",

  // ---------------------------------------------------------------------
  // CONTACT (verified — email confirmed directly by the founder;
  // phone/address from the existing site's README/index.html)
  // ---------------------------------------------------------------------
  contact: {
    email: "info@achutham.com",
    phone: "+91 97011 99922",
    phoneHref: "+919701199922",
    addressLine: "Achutham, Kondapur, Hyderabad 500084, Telangana, India",
    locationShort: "Hyderabad, India",
  },

  // ---------------------------------------------------------------------
  // FOUNDER / LEADERSHIP (verified — supplied directly by the founder)
  // Do not add education, certifications or previous employers unless
  // Achutham supplies them — the brief explicitly prohibits inventing these.
  // bioParagraphs is an array so the About page can render clean paragraph
  // breaks instead of one dense block of text.
  // ---------------------------------------------------------------------
  founder: {
    name: "Chaitanya Revalla",
    title: "Founder & Engineering Manager — Achutham Software",
    bioParagraphs: [
      "Engineering leader with 14+ years of experience building and delivering enterprise technology solutions across retail and healthcare technology, including experience working with Fortune 100 organizations.",
      "My focus is on building AI-driven QA and RPA solutions, scalable test automation frameworks, performance engineering and modern software delivery platforms.",
      "I bring hands-on expertise across full-stack test engineering, API automation, cloud technologies, container orchestration and CI/CD, combining engineering depth with practical delivery leadership.",
      "At Achutham Software, my goal is to help organizations scale engineering capacity, modernize quality engineering and accelerate software delivery through skilled technology professionals and outcome-focused solutions.",
    ],
  },

  // ---------------------------------------------------------------------
  // SOCIAL — PLACEHOLDER. No verified social profile URLs exist yet.
  // Fill these in once real company profiles are live; leave `null` until then.
  // The Footer / Header only render a social icon when its URL is non-null.
  // ---------------------------------------------------------------------
  social: {
    linkedin: null as string | null, // e.g. "https://www.linkedin.com/company/achutham-software"
    twitter: null as string | null,
  },

  // ---------------------------------------------------------------------
  // ANALYTICS — reads from environment variables, never hardcoded.
  // Leave the env vars unset in development; the scripts simply won't render.
  // ---------------------------------------------------------------------
  analytics: {
    gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || null,
    linkedInPartnerId: process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID || null,
    googleSiteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || null,
  },

  // ---------------------------------------------------------------------
  // FORM SUBMISSION TARGETS — read at runtime from env vars only.
  // ---------------------------------------------------------------------
  forms: {
    notifyEmail:
      process.env.CONTACT_NOTIFY_EMAIL || "info@achutham.com",
  },
} as const;

// ============================================================================
// TRUST BAR MICROCOPY (hero)
// ============================================================================
export const trustMicrocopy = [
  "Flexible engagement models",
  "Dedicated resources",
  "Staff augmentation",
  "Managed delivery",
];

// ============================================================================
// STATS — PLACEHOLDER. The brief explicitly forbids inventing headcount,
// years-in-business or client counts. This array is intentionally empty.
// If/when Achutham supplies verified numbers, add objects of the shape
// { value: "12", label: "Engineers placed" } and the <StatsStrip /> component
// (currently unused on purpose) can be wired back in.
// ============================================================================
export const verifiedStats: { value: string; label: string }[] = [];

// ============================================================================
// CERTIFICATIONS / PARTNERSHIPS / AWARDS — PLACEHOLDER (empty on purpose)
// ============================================================================
export const certifications: { name: string; logo?: string }[] = [];
export const technologyPartnerships: { name: string; logo?: string }[] = [];
export const awards: { name: string; year?: string }[] = [];

// ============================================================================
// TESTIMONIALS — PLACEHOLDER (empty on purpose — never fabricate quotes)
// ============================================================================
export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
};
export const testimonials: Testimonial[] = [];

// ============================================================================
// CLIENT LOGOS — PLACEHOLDER (empty on purpose — never fabricate client names)
// ============================================================================
export const clientLogos: { name: string; logo: string }[] = [];
