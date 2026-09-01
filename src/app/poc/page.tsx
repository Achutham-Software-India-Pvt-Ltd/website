import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { PocForm } from "@/components/forms/PocForm";
import { pocCategories } from "@/data/site-content";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Proof of Concept",
  description:
    "Not ready for a long-term engagement? Start with a focused, time-boxed proof of concept across QA automation, performance testing, AI automation, software development, cloud/DevOps or data engineering.",
  path: "/poc",
});

export default function PocPage() {
  return (
    <>
      <PageHero
        eyebrow="Proof of Concept"
        title="Start Small. Prove Value. Scale With Confidence."
        description="Not ready for a long-term engagement? Start with a focused POC."
      />

      <section className="py-16 sm:py-20">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <h2 className="text-lg font-semibold text-ink">POC Categories</h2>
            <div className="mt-6 flex flex-col gap-3">
              {pocCategories.map((c) => (
                <span
                  key={c}
                  className="rounded-xl border border-border bg-white px-4 py-3 text-sm font-medium text-body"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
          <PocForm />
        </Container>
      </section>
    </>
  );
}
