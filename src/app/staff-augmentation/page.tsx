import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { StaffAugDiagram } from "@/components/StaffAugDiagram";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { EngagementCard } from "@/components/Cards";
import { CtaBanner } from "@/components/CtaBanner";
import { Button } from "@/components/Button";
import { engagementModels, staffAugRoles } from "@/data/site-content";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Staff Augmentation",
  description:
    "Add one engineer or build an entire dedicated team. Achutham sources, technically screens and presents India-based engineering talent matched to your requirement.",
  path: "/staff-augmentation",
});

export default function StaffAugmentationPage() {
  return (
    <>
      <PageHero
        eyebrow="Staff Augmentation"
        title="Need One Engineer or an Entire Team?"
        description="Tell us the role, technology, experience level and timeline. We identify, technically screen and present suitable India-based professionals."
      />

      <section className="py-16 sm:py-20">
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-display text-2xl font-semibold text-ink">Example Roles We Place</h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {staffAugRoles.map((role) => (
                <span
                  key={role}
                  className="rounded-full border border-border bg-white px-3.5 py-2 text-sm font-medium text-body"
                >
                  {role}
                </span>
              ))}
            </div>
            <div className="mt-8">
              <Button href="/request-resource" size="lg" trackId="staff_aug_page_request_resource">
                Request a Resource
              </Button>
            </div>
          </div>
          <StaffAugDiagram />
        </Container>
      </section>

      <section className="border-y border-border bg-bg-soft py-16 sm:py-20">
        <Container>
          <SectionHeading
            title="From Requirement to Productive Engineer"
            description="Start with one resource. Scale when you're ready."
          />
          <div className="mt-12">
            <ProcessTimeline />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
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

      <CtaBanner
        title="Discuss an Engagement"
        primaryLabel="Discuss an Engagement"
        secondaryLabel="Request a Resource"
        secondaryHref="/request-resource"
      />
    </>
  );
}
