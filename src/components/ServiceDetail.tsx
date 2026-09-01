import { CheckCircle2 } from "lucide-react";
import { Container } from "./Container";
import { PageHero } from "./PageHero";
import { CtaBanner } from "./CtaBanner";
import { FaqAccordion } from "./FaqAccordion";
import type { ServiceData } from "@/data/services";

export function ServiceDetail({ service }: { service: ServiceData }) {
  return (
    <>
      <PageHero eyebrow="Service" title={service.headline} description={service.summary} />

      {/* PROBLEM */}
      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <h2 className="font-display text-2xl font-semibold text-ink">The Problem</h2>
          <p className="mt-4 text-base leading-relaxed text-body">{service.problem}</p>
        </Container>
      </section>

      {/* WHAT WE PROVIDE */}
      <section className="border-y border-border bg-bg-soft py-16 sm:py-20">
        <Container>
          <h2 className="font-display text-2xl font-semibold text-ink">What We Provide</h2>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {service.whatWeProvide.map((item) => (
              <div key={item} className="flex gap-3 rounded-xl bg-white p-5 card-shadow">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <p className="text-sm leading-relaxed text-body">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* TECHNOLOGIES */}
      <section className="py-16 sm:py-20">
        <Container>
          <h2 className="font-display text-2xl font-semibold text-ink">Technologies</h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {service.technologies.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border bg-white px-3.5 py-2 text-sm font-medium text-body"
              >
                {t}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* ENGAGEMENT MODELS */}
      <section className="border-y border-border bg-bg-soft py-16 sm:py-20">
        <Container>
          <h2 className="font-display text-2xl font-semibold text-ink">Engagement Models</h2>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {service.engagementModels.map((m) => (
              <div key={m} className="rounded-xl bg-white p-5 text-sm text-body card-shadow">
                {m}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* TYPICAL ROLES */}
      <section className="py-16 sm:py-20">
        <Container>
          <h2 className="font-display text-2xl font-semibold text-ink">Typical Roles</h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {service.typicalRoles.map((r) => (
              <span
                key={r}
                className="rounded-full bg-accent-soft px-3.5 py-2 text-sm font-medium text-accent"
              >
                {r}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* PROCESS */}
      <section className="border-y border-border bg-bg-soft py-16 sm:py-20">
        <Container>
          <h2 className="font-display text-2xl font-semibold text-ink">Our Process</h2>
          <ol className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {service.process.map((step, i) => (
              <li key={step} className="rounded-xl bg-white p-5 card-shadow">
                <span className="font-display text-2xl font-bold text-accent-soft">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 text-sm leading-relaxed text-body">{step}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <h2 className="font-display text-2xl font-semibold text-ink">Frequently Asked Questions</h2>
          <div className="mt-8">
            <FaqAccordion items={service.faq} />
          </div>
        </Container>
      </section>

      <CtaBanner
        title={service.ctaLabel}
        primaryLabel="Discuss Your Requirement"
        primaryHref="/contact"
        secondaryLabel="Request a Resource"
        secondaryHref="/request-resource"
      />
    </>
  );
}
