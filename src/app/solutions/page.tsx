import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { EngagementCard } from "@/components/Cards";
import { CtaBanner } from "@/components/CtaBanner";
import { Button } from "@/components/Button";
import { Users, Rocket, LayoutGrid } from "lucide-react";
import { engagementModels } from "@/data/site-content";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Solutions",
  description:
    "Staff augmentation, dedicated teams and proof-of-concept engagements — explore the ways companies work with Achutham Software.",
  path: "/solutions",
});

const solutionLinks = [
  {
    icon: Users,
    title: "Staff Augmentation",
    description: "Add one engineer or an entire team, matched to your exact requirement.",
    href: "/staff-augmentation",
    cta: "Explore Staff Augmentation",
  },
  {
    icon: Rocket,
    title: "Start a POC",
    description: "Prove value with a focused, time-boxed engagement before scaling.",
    href: "/poc",
    cta: "Start a POC",
  },
  {
    icon: LayoutGrid,
    title: "Request a Resource",
    description: "Tell us the role, technology and timeline — we'll find your match.",
    href: "/request-resource",
    cta: "Request a Resource",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Ways to Work With Achutham"
        description="Whether you know exactly what you need or want to validate an idea first, there's a solution shaped to match."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {solutionLinks.map((s) => (
              <div key={s.title} className="flex flex-col rounded-2xl border border-border bg-white p-7 card-shadow">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-body">{s.description}</p>
                <Button href={s.href} variant="secondary" className="mt-6 w-fit">
                  {s.cta}
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-bg-soft py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Engagement Models" title="Every Solution Fits One of Four Shapes" />
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

      <CtaBanner />
    </>
  );
}
