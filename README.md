# Achutham Software — Website

A Next.js (App Router) + TypeScript + Tailwind CSS site for Achutham Software
India Private Limited, built for one purpose: generating qualified B2B leads
from CTOs, CIOs, VP Engineering, Engineering Managers, and HR/Talent
Acquisition teams who need software engineers, QA/automation engineers,
performance engineers, DevOps/cloud engineers, or AI engineers.

## Data integrity policy — read this first

Every company-specific fact on this site (contact info, positioning,
founder) lives in **`src/lib/config.ts`**. Stats, certifications, awards,
testimonials, client logos, and case-study results are **intentionally
empty or placeholder** in `src/lib/config.ts` and `src/data/site-content.ts`
— Achutham has not verified these yet, and the site must never imply
otherwise. Do not fill in a placeholder with an invented number. Only
replace one once you have a real, verifiable fact — see "How to add case
studies" below for the process.

## 1. How to run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. No environment variables are required to run
the site locally — forms submit successfully and log to the server console
instead of sending email (see "How to configure email" below).

## 2. How to build

```bash
npm run build
npm run start   # serves the production build on http://localhost:3000
```

`npm run lint` runs ESLint. `npm run verify` runs an automated Playwright
check (route status codes, broken internal links, console errors, all
three forms end-to-end, and a mobile/tablet/desktop responsive check) — it
expects a server already running; see `scripts/verify.mjs`.

## 3. How to deploy

This site uses **Next.js Route Handlers** (`src/app/api/*/route.ts`) for the
contact, resource-request, and POC forms, plus dynamic OG image generation.
That means it needs a Node.js-capable host — it is **not** a static export,
and it will not work if simply pushed as static files to GitHub Pages the
way the previous achutham.com site was hosted.

**Recommended: [Vercel](https://vercel.com)** (built by the makers of
Next.js — zero-config deploy, free tier is sufficient to start).

1. Push this repository to GitHub.
2. Import it in Vercel → it auto-detects Next.js.
3. Add the environment variables from `.env.example` under Project
   Settings → Environment Variables.
4. Point `achutham.com` at the Vercel deployment (Vercel's dashboard gives
   you the exact DNS records — typically an `A` record to their apex IP and
   a `CNAME` for `www`).

The repository still contains the original `CNAME` file (with `achutham.com`
in it) from the previous site — GitHub Pages reads that file to know which
custom domain to serve, but since this is no longer a GitHub Pages static
site, that file is no longer functional and can be removed once DNS is
repointed to your new host. Other Node-friendly hosts (Netlify, Render, AWS
Amplify, a self-managed server behind Nginx) also work with `next build` +
`next start`.

## 4. How to change company information

Almost everything lives in **`src/lib/config.ts`**:

- `siteConfig.contact` — email, phone, address
- `siteConfig.founder` — name, title, bio
- `siteConfig.social` — set `linkedin`/`twitter` once real company profile
  URLs exist (they render only when non-`null`)
- `verifiedStats`, `certifications`, `technologyPartnerships`, `awards`,
  `testimonials`, `clientLogos` — all intentionally empty; add entries only
  once you have real, approved facts

Section copy that isn't purely a "fact" (service descriptions, industries
list, engagement models, process steps, FAQ content) lives in
`src/data/services.ts` and `src/data/site-content.ts`.

## 5. How to configure email

Form submissions (`/contact`, `/request-resource`, `/poc`) are handled by
`src/lib/mailer.ts`. Without SMTP configured, submissions are logged to the
server console (visible in your host's function/server logs) so nothing is
silently lost — but you should configure real delivery before relying on
the site for leads.

Copy `.env.example` to `.env.local` (or set these in your host's
environment variable settings) and fill in:

```
SMTP_HOST=
SMTP_PORT=587
SMTP_USER=
SMTP_PASS=
SMTP_FROM=
CONTACT_NOTIFY_EMAIL=info@achutham.com
```

Any standard SMTP provider works — a Gmail app password, SendGrid,
Postmark, Resend's SMTP endpoint, or Amazon SES.

**CAPTCHA / spam protection**: every form already has an invisible honeypot
field and a basic in-memory rate limit (`src/lib/rate-limit.ts`). To add
Cloudflare Turnstile on top, set `NEXT_PUBLIC_TURNSTILE_SITE_KEY` and
`TURNSTILE_SECRET_KEY` and follow the steps in `src/lib/captcha.ts`.

## 6. How to configure analytics

All analytics are off by default and only activate when their environment
variable is set (`src/components/Analytics.tsx`, `src/lib/analytics.ts`):

```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXX        # Google Analytics 4
NEXT_PUBLIC_LINKEDIN_PARTNER_ID=XXXXXXX        # LinkedIn Insight Tag
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=xxxxxxxx  # Google Search Console
```

CTA clicks, contact-form submits, resource-request submits, and POC-request
submits are already tracked as events (`cta_click`, `contact_form_submit`,
`resource_request_submit`, `poc_request_submit`) once GA is configured —
see `trackEvent()` in `src/lib/analytics.ts`. Configure these as
Conversions in GA4 and as a Conversion in LinkedIn Campaign Manager once
you're running ads.

For Search Console, verify the domain using the
`NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` meta tag above (already wired into
`src/app/layout.tsx`), then submit `https://achutham.com/sitemap.xml`
(auto-generated by `src/app/sitemap.ts`).

## 7. How to add case studies

Case studies are placeholders on purpose (`src/data/site-content.ts` →
`caseStudies`) — the brief this site was built from explicitly prohibits
fabricating client names or results. To publish a real one:

1. Get written confirmation from the client that you can reference the
   engagement (even anonymized) and its result.
2. Edit the relevant object in `caseStudies` in `src/data/site-content.ts`,
   replacing the `result: "[Add verified result]"` placeholder with the
   real, approved metric.
3. Remove the "Sample scenario · placeholder metric" badge rendering for
   that specific card in `src/components/Cards.tsx` (`CaseStudyCard`) once
   it's a real, verified case study rather than an illustrative scenario.

## 8. How to add blog posts

`/insights` (`src/app/insights/page.tsx`) currently renders 6 sample
article concepts from `src/data/site-content.ts` → `blogPosts`, each
labeled "Draft" — these are placeholders for the kind of content Achutham
intends to publish, not real articles yet.

To publish real posts:

1. Add real entries to the `blogPosts` array (title, category, excerpt).
2. If you want individual article pages (not just listing cards), add a
   `src/app/insights/[slug]/page.tsx` dynamic route and a content source
   (MDX files, or a headless CMS) — this scaffold intentionally keeps
   `/insights` to a listing page only, since no real article content
   exists yet.
3. Remove the "Draft" badge in `src/components/Cards.tsx` (`BlogCard`) for
   posts that are genuinely published.

## Project structure

```
src/
  app/                  Routes (App Router) — one folder per URL
    api/                Route Handlers for the 3 forms
  components/           Shared UI (Header, Footer, cards, forms, etc.)
  data/                 Content arrays (services, industries, blog, etc.)
  lib/                  config.ts (central config), utils, mailer, schemas
public/
  brand/legacy-logo.svg       The original circular Achutham logo badge (reference only)
  brand/achutham-icon.png     The real "flame + circuit A" mark, transparent background
  brand/achutham-icon-192.png Same mark, used for the Apple touch icon
  brand/achutham-logo-full.png Full icon + wordmark lockup (from the approved logo file),
                               available for use anywhere a larger combined mark is needed
  favicon-icon.png             64×64 favicon source
scripts/verify.mjs             Automated Playwright verification pass
```

## Design notes

- Colors (`src/app/globals.css`) are sampled directly from the approved
  Achutham logo: `--color-accent` is the flame orange (`#EE6C2E`) used for
  CTAs, links and icon accents, and `--color-navy` (`#123B73`) is the
  circuit-board navy used for secondary brand text (e.g. the "SOFTWARE"
  wordmark on light backgrounds). Body text stays a near-black navy
  (`--color-ink`) for readability at small sizes.
- `public/brand/achutham-icon.png` is a tight, transparent-background crop
  of the icon portion of the approved logo file (no re-drawing — the
  orange/navy pixels are exactly as supplied), used in the Header, Footer
  and staff-augmentation diagram. The full icon + wordmark lockup is kept
  at `public/brand/achutham-logo-full.png`, and the original circular badge
  logo is preserved untouched at `public/brand/legacy-logo.svg`.
- Motion is limited to fade-in-on-scroll (`RevealOnScroll`, respects
  `prefers-reduced-motion`), hover states, and smooth scrolling — no heavy
  animation libraries.
- No client-side data collection beyond the three lead-generation forms and
  optional, env-gated analytics scripts.

## Pre-launch checklist

Before pointing `achutham.com` at a production deploy:

- [ ] Fill in real values for `verifiedStats`, `certifications`,
      `testimonials`, `clientLogos` in `src/lib/config.ts` / `site-content.ts`
      as they become available — or leave them empty; never fabricate them
- [ ] Add the real Achutham LinkedIn company page URL to `siteConfig.social`
- [ ] Configure SMTP so form leads actually reach an inbox (see §5)
- [ ] Configure GA4 / LinkedIn Insight Tag / Search Console if you plan to
      run paid campaigns or want search visibility tracking (see §6)
- [ ] Have counsel review `/privacy-policy` and `/terms-of-service` —
      both are clearly marked template drafts
- [ ] Run `npm run build && npm run start` then `npm run verify` once more
      against the final production build
