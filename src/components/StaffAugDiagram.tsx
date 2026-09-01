import { Building2, ArrowDown, Users } from "lucide-react";
import Image from "next/image";

export function StaffAugDiagram() {
  return (
    <div className="mx-auto flex max-w-xs flex-col items-center gap-3">
      <div className="flex w-full flex-col items-center gap-2 rounded-2xl border border-border bg-white p-5 card-shadow">
        <Building2 className="h-6 w-6 text-accent" />
        <span className="text-sm font-semibold text-ink">Your Company</span>
      </div>

      <ArrowDown className="h-5 w-5 text-muted" />

      <div className="flex w-full flex-col items-center gap-2 rounded-2xl border-2 border-accent bg-accent-soft p-5">
        <Image src="/brand/achutham-icon.png" alt="Achutham" width={32} height={32} />
        <span className="text-sm font-semibold text-accent">Achutham</span>
      </div>

      <ArrowDown className="h-5 w-5 text-muted" />

      <div className="flex w-full flex-col items-center gap-2 rounded-2xl border border-border bg-white p-5 card-shadow">
        <Users className="h-6 w-6 text-accent" />
        <span className="text-sm font-semibold text-ink">Engineering Talent</span>
      </div>
    </div>
  );
}
