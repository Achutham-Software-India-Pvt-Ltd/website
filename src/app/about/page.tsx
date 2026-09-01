import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { CtaBanner } from "@/components/CtaBanner";
import { siteConfig } from "@/lib/config";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "About",
  description:
    "Achutham Software India Private Limited is an India-based technology services company focused on helping organizations extend their engineering capabilities.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Achutham"
        title="Engineering Expertise With a Global Delivery Mindset"
      />

      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <p className="text-lg leading-relaxed text-body">
            {siteConfig.legalName} is an India-based technology services company focused on
            helping organizations extend their engineering capabilities.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-body">
            From individual specialists to dedicated teams and project-based engagements, we
            work with clients to provide practical technology expertise aligned with their
            business needs.
          </p>
        </Container>
      </section>

      <section className="border-y border-border bg-bg-soft py-16 sm:py-20">
        <Container className="max-w-3xl">
          <h2 className="font-display text-2xl font-semibold text-ink">Leadership</h2>
          <div className="mt-8 rounded-2xl border border-border bg-white p-8 card-shadow">
            <p className="text-xl font-semibold text-ink">{siteConfig.founder.name}</p>
            <p className="mt-1 text-sm font-medium text-accent">{siteConfig.founder.title}</p>
            <div className="mt-4 flex flex-col gap-4">
              {siteConfig.founder.bioParagraphs.map((paragraph) => (
                <p key={paragraph} className="text-sm leading-relaxed text-body">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Let's Talk About Your Next Engineering Requirement"
        primaryLabel="Discuss Your Requirement"
      />
    </>
  );
}
