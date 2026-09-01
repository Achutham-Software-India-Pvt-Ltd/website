import { cn } from "@/lib/utils";

export function Field({
  label,
  htmlFor,
  error,
  optional,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-medium text-ink">
        {label} {optional ? <span className="font-normal text-muted">(optional)</span> : null}
      </label>
      {children}
      {error ? <span className="text-xs font-medium text-red-600">{error}</span> : null}
    </div>
  );
}

export const inputClass = cn(
  "w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm text-ink placeholder:text-muted",
  "focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
);
