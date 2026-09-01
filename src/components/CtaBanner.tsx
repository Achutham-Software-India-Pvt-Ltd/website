import { Container } from "./Container";
import { Button } from "./Button";

export function CtaBanner({
  title = "Let's Talk About Your Next Engineering Requirement",
  description = "Tell us the role, the technology and the timeline. We'll respond with next steps, not a generic sales pitch.",
  primaryLabel = "Discuss Your Requirement",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
  trackId = "cta_banner_primary",
}: {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  trackId?: string;
}) {
  return (
    <section className="bg-bg-deep py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-400">{description}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href={primaryHref} variant="primary" size="lg" trackId={trackId}>
              {primaryLabel}
            </Button>
            {secondaryLabel && secondaryHref ? (
              <Button
                href={secondaryHref}
                variant="secondary"
                size="lg"
                className="border-white/20 bg-transparent text-white hover:border-white hover:text-white"
              >
                {secondaryLabel}
              </Button>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
