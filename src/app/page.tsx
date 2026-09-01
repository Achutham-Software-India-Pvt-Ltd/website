import Link from "next/link";
import {
  Code2,
  TestTube2,
  Gauge,
  CloudCog,
  BrainCircuit,
  UsersRound,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import {
  IconCard,
  ServiceCard,
  EngagementCard,
  IndustryCard,
  CaseStudyCard,
} from "@/components/Cards";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { StaffAugDiagram } from "@/components/StaffAugDiagram";
import { CtaBanner } from "@/components/CtaBanner";
import { services } from "@/data/services";
import {
  trustValueCards,
  engagementModels,
  industries,
  whyAchutham,
  caseStudies,
  staffAugRoles,
} from "@/data/site-content";
import { siteConfig, trustMicrocopy } from "@/lib/config";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Achutham Software | IT Staffing & Software Engineering Services",
  description:
    "Achutham Software provides software engineering, IT staffing, QA automation, performance engineering, cloud, DevOps and AI talent to companies worldwide.",
  path: "/",
});

const serviceIcons = {
  "software-engineering": Code2,
  "qa-automation": TestTube2,
  "performance-engineering": Gauge,
  "cloud-devops": CloudCog,
  "ai-data": BrainCircuit,
  "it-staffing": UsersRound,
} as const;

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero-mesh relative overflow-hidden border-b border-border">
        <Container className="grid grid-cols-1 items-center gap-12 py-20 sm:py-28 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-5 inline-flex items-center rounded-full border border-border bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-accent">
              IT Staffing &amp; Software Engineering
            </p>
            <h1 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
              {siteConfig.valueProposition}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-body">
              Achutham Software helps US and global companies extend their engineering
              capabilities with skilled software engineers, QA specialists, automation
              experts, performance engineers, cloud professionals and AI talent.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="/contact" size="lg" trackId="hero_discuss_requirement">
                Discuss Your Requirement
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                Explore Our Services
              </Button>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
              {trustMicrocopy.map((item) => (
                <li key={item} className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-md">
            <HeroVisual />
          </div>
        </Container>
      </section>

      {/* TRUST / VALUE */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading title="Engineering Capacity Without the Hiring Friction" />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trustValueCards.map((card, i) => (
              <RevealOnScroll key={card.title} delay={i * 80}>
                <IconCard
                  icon={[Code2, TestTube2, Gauge, CloudCog][i % 4]}
                  title={card.title}
                  description={card.description}
                />
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </section>

      {/* SERVICES */}
      <section className="border-y border-border bg-bg-soft py-20 sm:py-28">
        <Container>
          <SectionHeading title="Technology Services Built Around Your Needs" />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <RevealOnScroll key={service.slug} delay={i * 60}>
                <ServiceCard
                  icon={serviceIcons[service.slug as keyof typeof serviceIcons]}
                  title={service.name}
                  summary={service.summary}
                  technologies={service.technologies}
                  href={`/${service.slug}`}
                  ctaLabel={service.ctaLabel}
                />
              </RevealOnScroll>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/contact" variant="primary" size="lg" trackId="services_tell_us_what_you_need">
              Tell Us What You Need
            </Button>
          </div>
        </Container>
      </section>

      {/* STAFF AUGMENTATION */}
      <section className="py-20 sm:py-28">
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Staff Augmentation"
              title="Need One Engineer or an Entire Team?"
              description="Tell us the role, technology, experience level and timeline. We identify, technically screen and present suitable India-based professionals."
            />
            <div className="mt-8 flex flex-wrap gap-2">
              {staffAugRoles.map((role) => (
                <span
                  key={role}
                  className="rounded-full border border-border bg-white px-3 py-1.5 text-xs font-medium text-body"
                >
                  {role}
                </span>
              ))}
            </div>
            <div className="mt-8">
              <Button href="/request-resource" size="lg" trackId="staff_aug_request_resource">
                Request a Resource
              </Button>
            </div>
          </div>
          <StaffAugDiagram />
        </Container>
      </section>

      {/* PROCESS */}
      <section className="border-y border-border bg-bg-soft py-20 sm:py-28">
        <Container>
          <SectionHeading
            title="From Requirement to Productive Engineer"
            description="Start with one resource. Scale when you're ready."
          />
          <div className="mt-14">
            <ProcessTimeline />
          </div>
        </Container>
      </section>

      {/* ENGAGEMENT MODELS */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Engagement Models" title="Choose the Shape of Engagement That Fits" />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {engagementModels.map((model, i) => (
              <RevealOnScroll key={model.slug} delay={i * 80}>
                <EngagementCard title={model.title} description={model.description} detail={model.detail} />
              </RevealOnScroll>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/contact" variant="secondary" size="lg" trackId="engagement_discuss">
              Discuss an Engagement
            </Button>
          </div>
        </Container>
      </section>

      {/* INDUSTRIES */}
      <section className="border-y border-border bg-bg-soft py-20 sm:py-28">
        <Container>
          <SectionHeading title="Technology Expertise Across Industries" />
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {industries.map((name) => (
              <IndustryCard key={name} name={name} />
            ))}
          </div>
        </Container>
      </section>

      {/* WHY ACHUTHAM */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading title="Why Companies Choose Achutham" />
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {whyAchutham.map((point) => (
              <div key={point.title} className="flex gap-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <h3 className="font-semibold text-ink">{point.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-body">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CASE STUDIES */}
      <section className="border-y border-border bg-bg-soft py-20 sm:py-28">
        <Container>
          <SectionHeading
            title="Engineering Challenges We've Built For"
            description="Illustrative scenarios of the type of work Achutham takes on. Metrics are placeholders until a client result is verified and approved for publication."
          />
          <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {caseStudies.map((cs) => (
              <CaseStudyCard key={cs.title} {...cs} />
            ))}
          </div>
        </Container>
      </section>

      {/* ABOUT TEASER */}
      <section className="py-20 sm:py-28">
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              title="Engineering Expertise With a Global Delivery Mindset"
              description={siteConfig.legalName + " is an India-based technology services company focused on helping organizations extend their engineering capabilities."}
            />
            <p className="mt-4 text-base leading-relaxed text-body">
              From individual specialists to dedicated teams and project-based engagements,
              we work with clients to provide practical technology expertise aligned with
              their business needs.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent"
            >
              Learn more about Achutham
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="rounded-2xl border border-border bg-white p-8 card-shadow">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">Leadership</p>
            <p className="mt-3 text-xl font-semibold text-ink">{siteConfig.founder.name}</p>
            <p className="text-sm text-muted">{siteConfig.founder.title}</p>
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}

function HeroVisual() {
  return (
    <svg
      viewBox="0 0 400 400"
      className="h-full w-full"
      role="img"
      aria-label="Abstract visualization of engineering, cloud and AI systems"
    >
      <defs>
        <linearGradient id="hg1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#123B73" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#0B1220" stopOpacity="0.95" />
        </linearGradient>
        <linearGradient id="hg2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F1752E" />
          <stop offset="100%" stopColor="#D84824" />
        </linearGradient>
      </defs>
      <circle cx="200" cy="200" r="150" fill="#FEF0E7" />
      <circle cx="200" cy="200" r="150" fill="none" stroke="#EE6C2E" strokeOpacity="0.18" strokeWidth="1" />
      <circle cx="200" cy="200" r="110" fill="none" stroke="#EE6C2E" strokeOpacity="0.22" strokeWidth="1" />

      {/* Central node cluster representing engineering + AI, echoing the
          logo's navy circuit core */}
      <g>
        <rect x="165" y="165" width="70" height="70" rx="18" fill="url(#hg1)" />
        <path d="M188 200h24M200 188v24" stroke="white" strokeWidth="3" strokeLinecap="round" />
      </g>

      {/* Orbiting nodes: cloud, automation, team, data — in the logo's flame orange */}
      {[
        { cx: 90, cy: 130, label: "cloud" },
        { cx: 310, cy: 120, label: "automation" },
        { cx: 90, cy: 280, label: "team" },
        { cx: 310, cy: 290, label: "data" },
      ].map((n) => (
        <g key={n.label}>
          <line x1="200" y1="200" x2={n.cx} y2={n.cy} stroke="#EE6C2E" strokeOpacity="0.3" strokeWidth="1.5" />
          <circle cx={n.cx} cy={n.cy} r="22" fill="white" stroke="#EE6C2E" strokeOpacity="0.4" strokeWidth="1.5" />
          <circle cx={n.cx} cy={n.cy} r="7" fill="url(#hg2)" />
        </g>
      ))}
    </svg>
  );
}
