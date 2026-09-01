import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/lib/config";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Terms of Service",
  description: `Terms of service for ${siteConfig.brandName}.`,
  path: "/terms-of-service",
});

export default function TermsOfServicePage() {
  return (
    <>
      <PageHero title="Terms of Service" description={`Last updated: ${new Date().toLocaleDateString("en-US", { year: "numeric", month: "long" })}`} />
      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl space-y-8 text-sm leading-relaxed text-body">
          <p className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-800">
            Template notice: this is a general-purpose terms-of-service draft covering use of this
            website. It is not a services agreement or master service agreement — those are
            negotiated separately with clients. Have this reviewed by counsel before publishing.
          </p>

          <div>
            <h2 className="text-lg font-semibold text-ink">Use of This Website</h2>
            <p className="mt-3">
              This website is provided by {siteConfig.legalName} to describe our services and to
              allow prospective clients and candidates to get in touch. By using this site, you
              agree not to misuse it — including submitting fraudulent information through our
              forms or attempting to disrupt the site&apos;s normal operation.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-ink">No Guarantee of Outcome</h2>
            <p className="mt-3">
              Submitting a form on this site does not guarantee a specific engineer, timeline, or
              engagement. Actual terms of any engagement are agreed separately in writing.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-ink">Intellectual Property</h2>
            <p className="mt-3">
              The content, design and branding of this website belong to {siteConfig.legalName}{" "}
              unless otherwise noted, and may not be reproduced without permission.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-ink">Contact</h2>
            <p className="mt-3">
              Questions about these terms can be sent to{" "}
              <a href={`mailto:${siteConfig.contact.email}`} className="font-medium text-accent">
                {siteConfig.contact.email}
              </a>
              .
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
