import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { RequestResourceForm } from "@/components/forms/RequestResourceForm";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Request a Resource",
  description:
    "Tell us the role, technology, experience level, timezone and timeline. We'll find your match from Achutham's engineering talent network.",
  path: "/request-resource",
});

export default function RequestResourcePage() {
  return (
    <>
      <PageHero
        eyebrow="Request a Resource"
        title="Tell Us the Engineer You Need"
        description="The more specific you are, the faster we can identify a genuine match — vague requirements slow everyone down."
      />
      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <RequestResourceForm />
        </Container>
      </section>
    </>
  );
}
