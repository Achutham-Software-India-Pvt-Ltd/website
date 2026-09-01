import { processSteps } from "@/data/site-content";
import { RevealOnScroll } from "./RevealOnScroll";

export function ProcessTimeline() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
      {processSteps.map((step, i) => (
        <RevealOnScroll key={step.number} delay={i * 80}>
          <div className="relative h-full rounded-2xl border border-border bg-white p-6 card-shadow">
            <span className="font-display text-3xl font-bold text-accent-soft">
              {step.number}
            </span>
            <h3 className="mt-3 text-base font-semibold text-ink">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-body">{step.description}</p>
          </div>
        </RevealOnScroll>
      ))}
    </div>
  );
}
