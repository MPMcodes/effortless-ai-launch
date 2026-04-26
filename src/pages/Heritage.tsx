import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X } from "lucide-react";

/**
 * Heritage — editorial cinematic landing page.
 * Top 55%: dark panel with vintage trade photos drifting right→left in a staggered cascade.
 * Bottom 45%: existing Baker & Sons nav + hero CTA, kept on-brand.
 */

type Trade = {
  name: string;
  tone: "sepia" | "color";
  photos: string[];
};

// Curated Unsplash photos per trade. Sepia for old trades, full color for modern.
const TRADES: Trade[] = [
  {
    name: "The Blacksmith",
    tone: "sepia",
    photos: [
      "https://images.unsplash.com/photo-1567361808960-dec9cb578182?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=750&fit=crop",
    ],
  },
  {
    name: "The Carpenter",
    tone: "sepia",
    photos: [
      "https://images.unsplash.com/photo-1601058268499-e52658b8bb88?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1572297870735-1428c2bb1101?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1426927308491-6380b6a9936f?w=600&h=750&fit=crop",
    ],
  },
  {
    name: "The Mason",
    tone: "sepia",
    photos: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?w=600&h=750&fit=crop",
    ],
  },
  {
    name: "The Electrician",
    tone: "color",
    photos: [
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1565608438257-fac3c27beb36?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1545239351-cefa43af60f3?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=600&h=750&fit=crop",
    ],
  },
  {
    name: "The Plumber",
    tone: "color",
    photos: [
      "https://images.unsplash.com/photo-1542013936693-884638332954?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=750&fit=crop",
    ],
  },
  {
    name: "The Welder",
    tone: "color",
    photos: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1565728744382-61accd4aa148?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1574610409713-b8e09076d6f0?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1572932491814-4833690788ad?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=600&h=750&fit=crop",
    ],
  },
];

const TRADE_DURATION_MS = 16000; // every ~16s a new trade

// Pre-randomized layout values per slot so each photo feels handmade.
const SLOT_STYLES = Array.from({ length: 5 }, (_, i) => ({
  top: `${8 + i * 14 + (i % 2) * 6}%`,
  rotate: `${(i % 2 === 0 ? -1 : 1) * (3 + (i * 1.7) % 5)}deg`,
  scale: 0.85 + ((i * 0.13) % 0.35),
  delay: i * 2, // staggered 2s apart
}));

export default function Heritage() {
  const [tradeIdx, setTradeIdx] = useState(0);
  const [fading, setFading] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const t = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setTradeIdx((i) => (i + 1) % TRADES.length);
        setFading(false);
      }, 1200);
    }, TRADE_DURATION_MS);
    return () => clearInterval(t);
  }, []);

  const trade = TRADES[tradeIdx];

  // Memoize slot mapping so we don't re-render styles on every tick.
  const slots = useMemo(
    () =>
      trade.photos.slice(0, 5).map((src, i) => ({
        src,
        ...SLOT_STYLES[i],
      })),
    [trade]
  );

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Scoped styles for the cinematic panel */}
      <style>{`
        @keyframes drift {
          0%   { transform: translateX(110vw) rotate(var(--r, 0deg)) scale(var(--s, 1)); opacity: 0; }
          8%   { opacity: 1; }
          92%  { opacity: 1; }
          100% { transform: translateX(-30vw) rotate(var(--r, 0deg)) scale(var(--s, 1)); opacity: 0; }
        }
        .heritage-photo {
          animation: drift 8s linear infinite;
          will-change: transform, opacity;
        }
        .heritage-paper {
          background-image:
            radial-gradient(rgba(0,0,0,0.18) 1px, transparent 1px),
            radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 4px 4px, 7px 7px;
          background-position: 0 0, 2px 3px;
          mix-blend-mode: overlay;
          pointer-events: none;
        }
        .heritage-fade-set { transition: opacity 1.2s ease-in-out; }
        .heritage-label { font-family: 'Playfair Display', Georgia, serif; }
      `}</style>

      {/* ============ TOP 55% — CINEMATIC PANEL ============ */}
      <section
        aria-label="Heritage of the trades"
        className="relative w-full overflow-hidden"
        style={{ height: "55vh", backgroundColor: "#0d0b09" }}
      >
        {/* Vignette */}
        <div
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.7) 100%)",
          }}
        />
        {/* Film grain */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-20 opacity-[0.08] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.6'/></svg>\")",
          }}
        />

        {/* Photo set — fades out/in between trades */}
        <div
          className={`heritage-fade-set absolute inset-0 ${fading ? "opacity-0" : "opacity-100"}`}
          key={trade.name}
        >
          {slots.map((s, i) => (
            <div
              key={`${trade.name}-${i}`}
              className="heritage-photo absolute"
              style={{
                top: s.top,
                left: 0,
                animationDelay: `${s.delay}s`,
                ["--r" as string]: s.rotate,
                ["--s" as string]: s.scale,
              }}
            >
              <figure
                className="relative bg-[#f3ead4] p-2 sm:p-3 shadow-[0_25px_60px_-10px_rgba(0,0,0,0.75),0_8px_20px_-5px_rgba(0,0,0,0.6)]"
                style={{ width: "clamp(160px, 22vw, 320px)" }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={s.src}
                    alt={`${trade.name} archive photograph`}
                    loading="lazy"
                    className="block w-full h-auto select-none"
                    style={{
                      filter:
                        trade.tone === "sepia"
                          ? "sepia(0.85) contrast(1.05) brightness(0.92) saturate(0.8)"
                          : "contrast(1.05) saturate(1.05)",
                      aspectRatio: "4 / 5",
                      objectFit: "cover",
                    }}
                    draggable={false}
                  />
                  <div className="heritage-paper absolute inset-0" />
                </div>
              </figure>
            </div>
          ))}
        </div>

        {/* Trade label — bottom left */}
        <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-12 z-30">
          <div
            className={`heritage-fade-set ${fading ? "opacity-0 translate-y-1" : "opacity-100 translate-y-0"} transition-all duration-700`}
            key={`label-${trade.name}`}
          >
            <div
              className="heritage-label text-[10px] sm:text-xs uppercase tracking-[0.4em] mb-2"
              style={{ color: "#c9a84c", opacity: 0.75 }}
            >
              An archive of craft
            </div>
            <h2
              className="heritage-label italic text-3xl sm:text-5xl lg:text-6xl leading-none"
              style={{ color: "#c9a84c" }}
            >
              {trade.name}
            </h2>
          </div>
        </div>

        {/* Top corner mark */}
        <div className="absolute top-5 right-6 sm:top-7 sm:right-12 z-30 heritage-label text-[10px] sm:text-xs uppercase tracking-[0.4em]" style={{ color: "#c9a84c", opacity: 0.6 }}>
          Baker &amp; Sons · Heritage
        </div>
      </section>

      {/* ============ BOTTOM 45% — NAV + HERO CTA ============ */}
      <div className="flex-1 flex flex-col" style={{ minHeight: "45vh" }}>
        <nav className="border-b bg-background/95 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
            <a href="/" className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">B</div>
              <div>
                <span className="text-lg font-bold tracking-tight">Baker &amp; Sons</span>
                <span className="block text-[11px] text-muted-foreground -mt-0.5 tracking-wide">Family-Run. Tech Done Right.</span>
              </div>
            </a>
            <div className="hidden items-center gap-7 md:flex">
              <a href="/" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">Home</a>
              <a href="/#services" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">Services</a>
              <a href="/#pricing" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">Pricing</a>
              <a href="/#contact" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">Contact</a>
              <Button asChild className="rounded-full px-6">
                <a href="/#contact">Let's Talk</a>
              </Button>
            </div>
            <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          {mobileOpen && (
            <div className="border-t md:hidden">
              <div className="flex flex-col gap-1 px-4 py-3">
                <a href="/" className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-primary/10 hover:text-primary">Home</a>
                <a href="/#services" className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-primary/10 hover:text-primary">Services</a>
                <a href="/#pricing" className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-primary/10 hover:text-primary">Pricing</a>
                <a href="/#contact" className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-primary/10 hover:text-primary">Contact</a>
                <Button asChild className="mt-2 rounded-full">
                  <a href="/#contact">Let's Talk</a>
                </Button>
              </div>
            </div>
          )}
        </nav>

        <div className="flex-1 flex items-center">
          <div className="mx-auto max-w-4xl px-6 py-10 sm:py-14 text-center">
            <h1 className="heritage-label text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight">
              Every great trade was once <em>new technology.</em>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              We bring the same craftsmanship to modern AI tools — built for small businesses, set up by a family that actually picks up the phone.
            </p>
            <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button size="lg" asChild className="gap-2 rounded-full px-7 text-base">
                <a href="/#contact">
                  Book a Free Consult <ArrowRight size={18} />
                </a>
              </Button>
              <Button size="lg" variant="ghost" asChild className="gap-2 text-base text-muted-foreground">
                <a href="/">Explore our services →</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
