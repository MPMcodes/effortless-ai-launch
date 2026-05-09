import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

interface StickyMobileCTAProps {
  phoneHref: string;
  contactHref?: string;
  sentinelId?: string;
}

export function StickyMobileCTA({
  phoneHref,
  contactHref = "#contact",
  sentinelId = "hero-sentinel",
}: StickyMobileCTAProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = document.getElementById(sentinelId);
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        // Sentinel above viewport => boundingClientRect.top < 0 and not intersecting
        const above = !entry.isIntersecting && entry.boundingClientRect.top < 0;
        setVisible(above);
      },
      { threshold: 0 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [sentinelId]);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 grid grid-cols-[1fr_auto] gap-2 border-t border-[#E2E8F0] bg-white/95 px-3 pt-2.5 backdrop-blur transition-all duration-300 md:hidden ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0"
      }`}
      style={{ paddingBottom: "calc(env(safe-area-inset-bottom) + 0.625rem)" }}
    >
      <Button asChild className="min-h-12 w-full rounded-full text-base">
        <a href={contactHref}>Let's Talk</a>
      </Button>
      <Button asChild variant="outline" className="min-h-12 min-w-12 rounded-full px-4">
        <a href={phoneHref} aria-label="Call us">
          <Phone size={20} />
        </a>
      </Button>
    </div>
  );
}
