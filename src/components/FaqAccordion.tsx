"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { ServiceFaq } from "@/data/services";
import { cn } from "@/lib/utils";

export function FaqAccordion({ items }: { items: ServiceFaq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-border rounded-2xl border border-border bg-white">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? null : i)}
            >
              <span className="font-medium text-ink">{item.q}</span>
              <ChevronDown
                className={cn(
                  "h-4 w-4 shrink-0 text-muted transition-transform",
                  open && "rotate-180 text-accent"
                )}
              />
            </button>
            {open ? (
              <div className="px-6 pb-5 text-sm leading-relaxed text-body">{item.a}</div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
