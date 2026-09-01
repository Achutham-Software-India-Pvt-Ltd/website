import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/lib/config";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.brandName}.`,
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" description={`Last updated: ${new Date().toLocaleDateString("en-US", { year: "numeric", month: "long" })}`} />
      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl space-y-8 text-sm leading-relaxed text-body">
          <p className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-800">
            Template notice: this is a general-purpose privacy policy draft. Have it reviewed by
            counsel before relying on it for compliance with GDPR, CCPA or other applicable data
            protection law in the jurisdictions you operate in.
          </p>

          <div>
            <h2 className="text-lg font-semibold text-ink">Information We Collect</h2>
            <p className="mt-3">
              When you submit a form on this website (contact, resource request, or proof-of-concept
              request), we collect the information you provide — such as your name, work email,
              company, job title, phone number, and details of your engineering requirement. We do
              not collect this information through any other means on this site beyond standard,
              privacy-respecting analytics described below.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-ink">How We Use Information</h2>
            <p className="mt-3">
              We use the information you submit solely to respond to your inquiry, evaluate your
              requirement, and, where relevant, propose engineering talent or a proposed engagement.
              We do not sell your information to third parties.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-ink">Analytics</h2>
            <p className="mt-3">
              This site may use Google Analytics and the LinkedIn Insight Tag to understand
              aggregate traffic and campaign performance, when configured. These tools may set
              cookies in your browser. You can control cookies through your browser settings.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-ink">Data Retention</h2>
            <p className="mt-3">
              We retain form submissions for as long as reasonably necessary to evaluate and follow
              up on your inquiry, and as required for legitimate business record-keeping.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-ink">Contact</h2>
            <p className="mt-3">
              Questions about this policy can be sent to{" "}
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
