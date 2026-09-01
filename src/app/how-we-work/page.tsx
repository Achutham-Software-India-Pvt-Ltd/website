import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { EngagementCard } from "@/components/Cards";
import { CtaBanner } from "@/components/CtaBanner";
import { whyAchutham, engagementModels } from "@/data/site-content";
import { CheckCircle2 } from "lucide-react";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "How We Work",
  description:
    "From requirement to productive engineer: how Achutham Software sources, screens and onboards engineering talent for your team.",
  path: "/how-we-work",
});

export default function HowWeWorkPage() {
  return (
    <>
      <PageHero
        eyebrow="How We Work"
        title="From Requirement to Productive Engineer"
        description="A structured process, built to reduce the time and risk of extending your engineering team — not a black box."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <ProcessTimeline />
          <p className="mt-8 text-center text-sm font-medium text-muted">
            Start with one resource. Scale when you&apos;re ready.
          </p>
        </Container>
      </section>

      <section className="border-y border-border bg-bg-soft py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Engagement Models" title="Choose the Shape of Engagement That Fits" />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {engagementModels.map((model) => (
              <EngagementCard
                key={model.slug}
                title={model.title}
                description={model.description}
                detail={model.detail}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading title="Why Companies Choose Achutham" />
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
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

      <CtaBanner />
    </>
  );
}
