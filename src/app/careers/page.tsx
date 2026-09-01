import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Careers",
  description:
    "Join Achutham Software's engineering talent network — opportunities for freshers, interns, experienced engineers and contractors.",
  path: "/careers",
});

const audiences = [
  {
    title: "Freshers",
    description: "Early-career engineers looking to build real, production-grade experience.",
  },
  {
    title: "Interns",
    description: "Structured internships with mentorship from experienced engineers.",
  },
  {
    title: "Experienced Engineers",
    description: "Software engineers, QA/SDET, performance, cloud, DevOps and AI specialists.",
  },
  {
    title: "Contractors",
    description: "Independent engineers available for defined, project-based engagements.",
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Join Our Engineering Talent Network"
        description="Achutham is an engineering company, and our client work depends entirely on the strength of the people on our bench and in our network."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((a) => (
              <div key={a.title} className="rounded-2xl border border-border bg-white p-6 card-shadow">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <h3 className="mt-4 text-base font-semibold text-ink">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{a.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-bg-soft py-16 sm:py-20">
        <Container className="max-w-2xl text-center">
          <h2 className="font-display text-2xl font-semibold text-ink">
            No Open Positions Listed Right Now
          </h2>
          <p className="mt-4 text-base leading-relaxed text-body">
            We don&apos;t publish placeholder job listings. When a specific role opens, it will be
            posted here with real details. In the meantime, you&apos;re welcome to introduce yourself —
            send your resume and area of interest to{" "}
            <a href={`mailto:${siteConfig.contact.email}`} className="font-semibold text-accent">
              {siteConfig.contact.email}
            </a>{" "}
            and we&apos;ll keep it on file for relevant openings.
          </p>
        </Container>
      </section>
    </>
  );
}
