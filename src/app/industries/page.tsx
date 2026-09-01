import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { IndustryCard } from "@/components/Cards";
import { CtaBanner } from "@/components/CtaBanner";
import { industries } from "@/data/site-content";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Industries",
  description:
    "Technology expertise across SaaS, healthcare technology, FinTech, InsurTech, cloud infrastructure, enterprise software, e-commerce, manufacturing, supply chain and AI & data.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Technology Expertise Across Industries"
        description="Engineering, QA, performance, cloud and AI talent applied to the specific realities of your industry. We do not claim named clients in a sector until a real engagement is verified and approved for publication."
      />
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {industries.map((name) => (
              <IndustryCard key={name} name={name} />
            ))}
          </div>
        </Container>
      </section>
      <CtaBanner
        title="Discuss Your Industry Requirement"
        description="Tell us about your business context and the technical problem you're solving — we'll respond with next steps."
      />
    </>
  );
}
