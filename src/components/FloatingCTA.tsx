import Link from "next/link";
import { MessageCircle } from "lucide-react";

export function FloatingCTA() {
  return (
    <Link
      href="/contact"
      data-cta-id="floating_talk_to_us"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-accent px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/30 lg:hidden"
    >
      <MessageCircle className="h-4 w-4" />
      Talk to Us
    </Link>
  );
}
