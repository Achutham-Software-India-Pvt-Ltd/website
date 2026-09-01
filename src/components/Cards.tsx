import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function IconCard({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-white p-6 card-shadow transition-transform duration-300 hover:-translate-y-1">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-body">{description}</p>
    </div>
  );
}

export function ServiceCard({
  icon: Icon,
  title,
  summary,
  technologies,
  href,
  ctaLabel,
}: {
  icon: LucideIcon;
  title: string;
  summary: string;
  technologies: string[];
  href: string;
  ctaLabel: string;
}) {
  return (
    <div className="group flex h-full flex-col rounded-2xl border border-border bg-white p-7 card-shadow transition-all duration-300 hover:-translate-y-1 hover:border-accent/40">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-5 text-xl font-semibold text-ink">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-body">{summary}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {technologies.slice(0, 5).map((t) => (
          <span
            key={t}
            className="rounded-full bg-bg-soft px-2.5 py-1 text-xs font-medium text-body"
          >
            {t}
          </span>
        ))}
        {technologies.length > 5 ? (
          <span className="rounded-full bg-bg-soft px-2.5 py-1 text-xs font-medium text-body">
            +{technologies.length - 5} more
          </span>
        ) : null}
      </div>
      <Link
        href={href}
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors group-hover:text-accent-dark"
      >
        {ctaLabel}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </div>
  );
}

export function EngagementCard({
  title,
  description,
  detail,
}: {
  title: string;
  description: string;
  detail?: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-white p-7 card-shadow">
      <h3 className="text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-2 text-sm font-medium text-accent">{description}</p>
      {detail ? <p className="mt-3 text-sm leading-relaxed text-body">{detail}</p> : null}
    </div>
  );
}

export function IndustryCard({ name }: { name: string }) {
  return (
    <div className="rounded-2xl border border-border bg-white px-6 py-5 text-center card-shadow transition-colors hover:border-accent/40">
      <span className="text-sm font-semibold text-ink">{name}</span>
    </div>
  );
}

export function CaseStudyCard({
  title,
  problem,
  solution,
  result,
}: {
  title: string;
  problem: string;
  solution: string;
  result: string;
}) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-border bg-white p-7 card-shadow">
      <span className="w-fit rounded-full bg-amber-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-amber-700">
        Sample scenario · placeholder metric
      </span>
      <h3 className="mt-4 text-lg font-semibold text-ink">{title}</h3>
      <dl className="mt-4 space-y-3 text-sm">
        <div>
          <dt className="font-semibold text-ink">Problem</dt>
          <dd className="mt-0.5 text-body">{problem}</dd>
        </div>
        <div>
          <dt className="font-semibold text-ink">Solution</dt>
          <dd className="mt-0.5 text-body">{solution}</dd>
        </div>
        <div>
          <dt className="font-semibold text-ink">Result</dt>
          <dd className="mt-0.5 italic text-muted">{result}</dd>
        </div>
      </dl>
    </div>
  );
}

export function BlogCard({
  title,
  category,
  excerpt,
}: {
  title: string;
  category: string;
  excerpt: string;
}) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-border bg-white p-7 card-shadow">
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-accent-soft px-2.5 py-1 text-xs font-semibold text-accent">
          {category}
        </span>
        <span className="rounded-full bg-bg-soft px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-muted">
          Draft
        </span>
      </div>
      <h3 className="mt-4 text-lg font-semibold leading-snug text-ink">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-body">{excerpt}</p>
      <p className="mt-4 text-xs text-muted">Coming soon</p>
    </div>
  );
}

export function StatCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-dashed border-border bg-bg-soft p-6 text-sm text-muted",
        className
      )}
    >
      Verified metrics will appear here once available.
    </div>
  );
}
