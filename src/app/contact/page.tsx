import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/forms/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Tell Achutham Software about your engineering requirement — role, technology, experience level and timeline — and hear back with next steps.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Talk About Your Next Engineering Requirement"
      />

      <section className="py-16 sm:py-20">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <h2 className="text-lg font-semibold text-ink">Reach Us Directly</h2>
            <div className="mt-6 flex flex-col gap-4 text-sm">
              <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-3 text-body hover:text-accent">
                <Mail className="h-5 w-5 text-accent" />
                {siteConfig.contact.email}
              </a>
              <a href={`tel:${siteConfig.contact.phoneHref}`} className="flex items-center gap-3 text-body hover:text-accent">
                <Phone className="h-5 w-5 text-accent" />
                {siteConfig.contact.phone}
              </a>
              <span className="flex items-start gap-3 text-body">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                {siteConfig.contact.locationShort}
              </span>
            </div>
            <p className="mt-8 text-sm leading-relaxed text-muted">
              Prefer a faster path for a specific role? Use{" "}
              <a href="/request-resource" className="font-medium text-accent">
                Request a Resource
              </a>{" "}
              instead.
            </p>
          </div>
          <ContactForm />
        </Container>
      </section>
    </>
  );
}
