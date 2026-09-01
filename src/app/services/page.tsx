import { Code2, TestTube2, Gauge, CloudCog, BrainCircuit, UsersRound } from "lucide-react";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { ServiceCard } from "@/components/Cards";
import { CtaBanner } from "@/components/CtaBanner";
import { services } from "@/data/services";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Services",
  description:
    "Software engineering, QA automation, performance engineering, cloud & DevOps, AI & data engineering, and IT staffing — delivered by India-based engineering talent.",
  path: "/services",
});

const serviceIcons = {
  "software-engineering": Code2,
  "qa-automation": TestTube2,
  "performance-engineering": Gauge,
  "cloud-devops": CloudCog,
  "ai-data": BrainCircuit,
  "it-staffing": UsersRound,
} as const;

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Technology Services Built Around Your Needs"
        description="Six focused disciplines, delivered through whichever engagement model fits — a single specialist, a dedicated team, or a fully managed engagement."
      />
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                icon={serviceIcons[service.slug as keyof typeof serviceIcons]}
                title={service.name}
                summary={service.summary}
                technologies={service.technologies}
                href={`/${service.slug}`}
                ctaLabel={service.ctaLabel}
              />
            ))}
          </div>
        </Container>
      </section>
      <CtaBanner />
    </>
  );
}
