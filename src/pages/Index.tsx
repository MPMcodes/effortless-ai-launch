import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Menu,
  Users,
  MessageSquare,
  CalendarCheck,
  Star,
  CreditCard,
  Bot,
  PhoneCall,
  Settings,
  TrendingUp,
  Clock,
  UserPlus,
  GraduationCap,
  LayoutGrid,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Check,
  Heart,
  Sparkles,
  HandHeart,
} from "lucide-react";
import logoMark from "@/assets/logo-mark.png";
import brandLogo from "@/assets/baker-sons-logo.png";
import { PingPongVideo } from "@/components/PingPongVideo";
import { HeroBackground } from "@/components/HeroBackground";
import { NavBackground } from "@/components/NavBackground";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { ServicesGrid } from "@/components/ServicesGrid";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { HowItWorksStepper } from "@/components/HowItWorksStepper";
import { PricingCard } from "@/components/PricingCard";
import { FeatureInfo } from "@/components/FeatureInfo";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  {
    icon: Users,
    title: "Smart CRM",
    desc: "Keep track of your customers the easy way — like a Rolodex, but way better.",
    examples: [
      "Auto-tags first-time vs repeat customers",
      "Birthday and anniversary reminders",
      "Notes you can search like email",
    ],
  },
  {
    icon: MessageSquare,
    title: "Automated Follow-Ups",
    desc: "Friendly texts and emails sent at just the right time. Your customers will feel the love.",
    examples: [
      "Thank-you text an hour after a visit",
      "Re-engage customers gone quiet for 60+ days",
      "Appointment reminders that cut no-shows",
    ],
  },
  {
    icon: CalendarCheck,
    title: "Online Booking",
    desc: "Customers pick a time that works, you show up ready. Simple as that.",
    examples: [
      "Real-time slots tied to your calendar",
      "Deposits or pre-pay supported",
      "Confirmation and reminder texts included",
    ],
  },
  {
    icon: Star,
    title: "Reviews on Autopilot",
    desc: "Happy customers spread the word — we just make it easier for them.",
    examples: [
      "Asks happy customers for a Google review",
      "Flags negative feedback to you privately first",
      "Tracks your star average over time",
    ],
  },
  {
    icon: CreditCard,
    title: "Easy Invoicing",
    desc: "Send invoices, get paid. No chasing people down or messy paperwork.",
    examples: [
      "Send by text or email",
      "Stripe, Square, or ACH payment",
      "Auto-reminders on unpaid invoices",
    ],
  },
  {
    icon: Bot,
    title: "AI Assistant",
    desc: "A friendly helper that answers questions when you're busy doing what you do best.",
    examples: [
      "Answers hours, pricing, and services 24/7",
      "Books appointments while you're working",
      "Hands off to you for anything tricky",
    ],
  },
];

const STEPS = [
  { num: "1", icon: PhoneCall, title: "Let's Chat", desc: "We'll grab a coffee (virtually!) and learn about your business. No sales pitch, promise." },
  { num: "2", icon: Settings, title: "We Build It For You", desc: "We build it, integrate it, and train it on your business. Zero homework." },
  { num: "3", icon: TrendingUp, title: "Watch It Grow", desc: "More customers, more reviews, less stress. That's the Baker & Sons way." },
];

const BENEFITS = [
  {
    icon: Clock,
    title: "Get Your Evenings Back",
    desc: "Automate the busywork so you can make it to little league practice.",
    info: "Owners we work with reclaim 6–10 hours a week on average — most of it from manual follow-ups and review requests.",
  },
  {
    icon: UserPlus,
    title: "More Happy Customers",
    desc: "Never let a lead slip through the cracks again.",
    info: "Every inbound message is answered within 60 seconds, day or night, even when you're with another customer.",
  },
  {
    icon: GraduationCap,
    title: "We Speak Human",
    desc: "No tech jargon. We explain everything in plain English.",
    info: "You get a real human walkthrough on day one, plus short Loom videos any time something changes.",
  },
  {
    icon: LayoutGrid,
    title: "One Simple Dashboard",
    desc: "Replace that mess of apps with one easy-to-use system.",
    info: "Replaces tools like Mailchimp, Calendly, basic CRMs, and review-request apps — usually saves $80–$150/month.",
  },
];

const TESTIMONIALS = [
  { name: "Sarah M.", role: "Mitchell's Bakery", quote: "These folks are the real deal. I went from sticky notes everywhere to actually knowing what's going on in my business. My regulars get birthday texts now — they love it!" },
  { name: "James R.", role: "Rodriguez Plumbing", quote: "I'm a plumber, not a tech guy. Baker & Sons made it so easy I almost felt guilty. Now I get calls booked while I'm under a sink. Can't beat that." },
  { name: "Emily C.", role: "Chen Family Dental", quote: "We went from 12 Google reviews to over 200. Patients actually thank us for the appointment reminders. That's never happened before!" },
];

const PRICING = [
  {
    tier: "Growth",
    price: "$349",
    features: [
      "AI Receptionist (up to 200 calls/month)",
      "AI Support Agent (up to 500 conversations/month)",
      "Mobile-optimized website (up to 10 pages)",
      "Lead capture + CRM sync",
      "Custom domain + hosting",
      "Co-branded (Baker & Sons AI powered)",
      "Priority email support",
    ],
    cta: "Choose Growth",
    popular: false,
  },
  {
    tier: "Pro",
    price: "$499",
    features: [
      "Everything in Growth",
      "Unlimited calls and conversations",
      "Voice AI + SMS + WhatsApp + email support",
      "Full white label (your brand, invisible to customers)",
      "Google Ads integration",
      "Monthly strategy call",
      "Priority support",
    ],
    cta: "Go Pro",
    popular: true,
  },
];

const SETUP_FEE = {
  label: "One-Time Setup Fee",
  price: "$1,499",
  priceSuffix: "flat",
  subtitle: "Required with any subscription · paid once",
  includes: [
    "Brand discovery session",
    "AI agent training on your business content",
    "Custom design direction",
    "Domain + integrations setup",
    "Onboarding walkthrough",
    "Go live in 48 hours",
  ],
};

type GrowthFeature = (typeof PRICING)[0]["features"][number];
type ProFeature = (typeof PRICING)[1]["features"][number];

const PRICING_FEATURE_INFO: {
  Growth: Record<GrowthFeature, string>;
  Pro: Record<ProFeature, string>;
} = {
  Growth: {
    "AI Receptionist (up to 200 calls/month)":
      "Answers inbound calls 24/7, takes messages, and books appointments. Overflow calls beyond 200/mo are billed at $0.30 each.",
    "AI Support Agent (up to 500 conversations/month)":
      "Handles website chat and SMS support. Counts only resolved conversations, not single messages back and forth.",
    "Mobile-optimized website (up to 10 pages)":
      "Includes home, services, about, and contact, plus 6 more pages of your choice. Additional pages are $99 each.",
    "Lead capture + CRM sync":
      "Form and chat leads land in your CRM automatically with source attribution so you know what's working.",
    "Custom domain + hosting":
      "We register and host your domain (yourbusiness.com). SSL certificate included.",
    "Co-branded (Baker & Sons AI powered)":
      'A small "Powered by Baker & Sons AI" tag in the footer. Upgrade to Pro for full white label.',
    "Priority email support": "24-hour response time on weekdays.",
  },
  Pro: {
    "Everything in Growth": "Every Growth feature included as the baseline.",
    "Unlimited calls and conversations":
      "No usage caps on the AI receptionist or support agent.",
    "Voice AI + SMS + WhatsApp + email support":
      "The same AI persona answers across every channel your customers reach you on.",
    "Full white label (your brand, invisible to customers)":
      "Zero Baker & Sons branding visible to your customers anywhere.",
    "Google Ads integration":
      "We connect Google Ads conversion tracking and provide a monthly performance report.",
    "Monthly strategy call": "30-minute call to review your numbers and tune campaigns.",
    "Priority support": "Same-day response on weekdays, plus an urgent line for outages.",
  },
};

const HERO_IMAGES = [
  { id: "photo-1556761175-5973dc0f32e7", alt: "IT team collaborating in modern office" },
  { id: "photo-1553877522-43269d4ea984", alt: "Small business owner using laptop" },
  { id: "photo-1522071820081-009f0129c71c", alt: "Team working on IT solutions together" },
];

const heroWidths = [640, 1024, 1600];
const heroSrc = (id: string, w: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&q=70&w=${w}`;
const heroSrcSet = (id: string) =>
  heroWidths.map((w) => `${heroSrc(id, w)} ${w}w`).join(", ");

export default function Index() {
  const [heroIdx, setHeroIdx] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    let timer: ReturnType<typeof setInterval> | null = null;
    const start = () => {
      if (timer) return;
      timer = setInterval(() => {
        setHeroIdx((prev) => (prev + 1) % HERO_IMAGES.length);
      }, 4000);
    };
    const stop = () => {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    };
    const onVis = () => (document.hidden ? stop() : start());
    start();
    document.addEventListener("visibilitychange", onVis);
    return () => {
      stop();
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground pb-20 md:pb-0 [&_section[id]]:scroll-mt-20">
      {/* NAV */}
      <nav className="sticky top-0 z-50 border-b border-[#E2E8F0] bg-white/80 backdrop-blur-md">
        <NavBackground />
        <div className="relative mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#" className="flex items-center gap-2 sm:gap-3">
            <img
              src={logoMark}
              alt="Baker & Sons logo mark"
              className="h-9 w-9 sm:h-11 sm:w-11 object-contain shrink-0"
            />
            <img
              src={brandLogo}
              alt="Baker & Sons AI Consulting"
              className="h-7 sm:h-9 w-auto object-contain"
            />
          </a>
          <div className="hidden items-center gap-7 md:flex">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="inline-flex min-h-11 items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                {l.label}
              </a>
            ))}
            <Button asChild className="rounded-full px-6">
              <a href="#contact">Let's Talk</a>
            </Button>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <button
                className="inline-flex min-h-11 min-w-11 items-center justify-center md:hidden"
                aria-label="Open menu"
              >
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] max-w-sm p-0">
              <div className="flex items-center gap-3 border-b border-[#E2E8F0] px-5 py-4">
                <img src={logoMark} alt="" className="h-9 w-9 object-contain" />
                <span className="text-base font-semibold">Baker & Sons</span>
              </div>
              <nav className="flex flex-col px-3 py-4">
                {NAV_LINKS.map((l) => (
                  <SheetClose asChild key={l.href}>
                    <a
                      href={l.href}
                      className="flex min-h-12 items-center rounded-lg px-3 text-base font-medium text-muted-foreground hover:bg-primary/10 hover:text-primary"
                    >
                      {l.label}
                    </a>
                  </SheetClose>
                ))}
              </nav>
              <div className="px-5 pb-6 pt-2">
                <SheetClose asChild>
                  <Button asChild className="min-h-12 w-full rounded-full text-base">
                    <a href="#contact">Let's Talk</a>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-mesh">
        <HeroBackground />
        {/* Floating gradient blobs */}
        <span className="blob animate-float-slow -left-24 top-10 h-72 w-72 bg-gradient-primary md:h-96 md:w-96" aria-hidden="true" />
        <span className="blob animate-float-slower right-0 -top-10 h-64 w-64 bg-gradient-warm md:h-80 md:w-80" aria-hidden="true" />
        <span className="blob animate-float-slow bottom-0 left-1/3 h-56 w-56 bg-gradient-cool opacity-40" aria-hidden="true" />
        <div className="relative mx-auto flex max-w-6xl flex-col-reverse items-center gap-8 px-4 py-12 sm:gap-10 sm:px-6 sm:py-16 lg:flex-row lg:gap-14 lg:px-8 lg:py-24">
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-white/70 px-3 py-1 text-[11px] font-medium text-primary shadow-sm backdrop-blur sm:text-xs">
              <Sparkles size={14} className="text-accent-orange" /> Built for businesses like yours
            </div>
            <h1 className="text-[28px] font-bold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl">
              Smart AI Tools for{" "}
              <span className="text-gradient bg-[length:200%_auto] animate-gradient-shift">Your</span> Small Business
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-[15px] text-muted-foreground sm:mt-5 sm:text-base lg:mx-0 leading-relaxed">
              The friendly tech team you always wished you had. We handle the setup so you can focus on your business.
            </p>
            <div className="mt-6 flex flex-col items-stretch gap-2.5 sm:mt-7 sm:flex-row sm:items-center sm:justify-center sm:gap-3 lg:justify-start">
              <Button size="lg" asChild className="w-full gap-2 rounded-full bg-gradient-primary bg-[length:200%_auto] px-7 text-base shadow-glow transition-all hover:bg-right hover:shadow-glow-warm sm:w-auto">
                <a href="#contact">
                  Get Your Free Demo <ArrowRight size={18} />
                </a>
              </Button>
              <Button size="lg" variant="ghost" asChild className="w-full gap-2 text-base text-muted-foreground sm:w-auto">
                <a href="#how-it-works">See How It Works ↓</a>
              </Button>
            </div>
          </div>
          <div className="w-full lg:flex-1 relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-glow aspect-[4/3] sm:aspect-[7/5] lg:aspect-auto lg:min-h-[340px] ring-1 ring-white/40">
            {HERO_IMAGES.map((img, i) => (
              <img
                key={img.id}
                src={heroSrc(img.id, 1024)}
                srcSet={heroSrcSet(img.id)}
                sizes="(min-width: 1024px) 50vw, 100vw"
                alt={img.alt}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === heroIdx ? "opacity-100" : "opacity-0"}`}
                loading={i === 0 ? "eager" : "lazy"}
                decoding={i === 0 ? "sync" : "async"}
                fetchPriority={i === 0 ? "high" : "low"}
                width={1024}
                height={730}
              />
            ))}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1 sm:bottom-4">
              {HERO_IMAGES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setHeroIdx(i)}
                  className="inline-flex min-h-11 min-w-11 items-center justify-center"
                  aria-label={`Show image ${i + 1}`}
                >
                  <span
                    className={`h-2.5 rounded-full transition-all ${i === heroIdx ? "w-7 bg-primary" : "w-2.5 bg-white/60"}`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div id="hero-sentinel" aria-hidden="true" />

      {/* SERVICES */}
      <section id="services" className="bg-white py-10 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">What We Do</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">Tools That Actually Make Your Life Easier</h2>
            <p className="mt-3 text-muted-foreground text-sm">Tap any tool to see how it works for your business.</p>
          </div>
          <ServicesGrid services={SERVICES} />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="bg-white py-10 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Easy as 1-2-3</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">Here's How We Get You Started</h2>
          </div>
          <HowItWorksStepper steps={STEPS} />
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-[#F1F5F9] py-10 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <div className="inline-flex items-center gap-1.5 mb-3 text-primary">
              <Heart size={18} fill="currentColor" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Why Folks Choose Baker & Sons</h2>
            <p className="mt-3 text-muted-foreground text-sm">We treat every business like it's our own.</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((b) => (
              <div key={b.title} className="text-center rounded-2xl bg-white p-6 shadow-sm border border-[#E2E8F0]">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <b.icon size={24} />
                </div>
                <h3 className="inline-flex items-center justify-center gap-1 text-base font-bold">
                  {b.title}
                  <FeatureInfo content={b.info} label={b.title} side="bottom" />
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-white py-10 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Happy Customers</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">Don't Take Our Word For It</h2>
          </div>
          <TestimonialsCarousel items={TESTIMONIALS} />
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="bg-white py-10 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Pricing</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">Honest Pricing. No Surprises.</h2>
            <p className="mt-3 text-muted-foreground text-sm">Cancel anytime. We earn your business every month.</p>
          </div>
          {/* Mobile pricing tabs */}
          <div className="mt-10 max-w-md mx-auto md:hidden">
            <Tabs defaultValue="Pro">
              <TabsList className="grid h-12 w-full grid-cols-2 rounded-full bg-muted p-1">
                {PRICING.map((p) => (
                  <TabsTrigger key={p.tier} value={p.tier} className="rounded-full text-sm">
                    {p.tier} · {p.price}
                  </TabsTrigger>
                ))}
              </TabsList>
              {PRICING.map((p) => (
                <TabsContent key={p.tier} value={p.tier} className="mt-6">
                  <PricingCard
                    p={p}
                    featureInfo={PRICING_FEATURE_INFO[p.tier as "Growth" | "Pro"]}
                  />
                </TabsContent>
              ))}
            </Tabs>
          </div>

          {/* Desktop pricing grid */}
          <div className="mt-12 hidden max-w-4xl mx-auto items-stretch gap-6 md:grid md:grid-cols-2">
            {PRICING.map((p) => (
              <PricingCard
                key={p.tier}
                p={p}
                featureInfo={PRICING_FEATURE_INFO[p.tier as "Growth" | "Pro"]}
              />
            ))}
          </div>

          {/* One-Time Setup Fee */}
          <Card className="mt-8 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] shadow-none">
            <CardContent className="p-6 sm:p-8">
              <div className="grid gap-6 md:grid-cols-3 md:items-center">
                <div className="md:col-span-1">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{SETUP_FEE.label}</p>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-3xl font-extrabold">{SETUP_FEE.price}</span>
                    <span className="text-muted-foreground text-sm">{SETUP_FEE.priceSuffix}</span>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">{SETUP_FEE.subtitle}</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-sm font-semibold mb-3">Includes:</p>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {SETUP_FEE.includes.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <Check size={15} className="text-primary shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-white py-10 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-3">
                <HandHeart size={14} /> We'd love to hear from you
              </div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Let's Get Your Business Growing</h2>
              <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                No pressure, no sales pitch — just a quick chat about what's possible for your business. Real people, every time.
              </p>
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="text-primary shrink-0" size={18} />
                  <span>hello@bakerandsons.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="text-primary shrink-0" size={18} />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="text-primary shrink-0" size={18} />
                  <span>Proudly serving small businesses nationwide</span>
                </div>
              </div>
            </div>
            <Card className="border border-[#E2E8F0] shadow-sm rounded-2xl bg-white">
              <CardContent className="p-6">
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label htmlFor="name" className="mb-1 block text-sm font-medium">Your Name</label>
                    <Input id="name" placeholder="John Smith" className="h-12 rounded-xl text-base" />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1 block text-sm font-medium">Email</label>
                    <Input id="email" type="email" placeholder="john@mybusiness.com" className="h-12 rounded-xl text-base" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1 block text-sm font-medium">Phone</label>
                    <Input id="phone" type="tel" placeholder="(555) 000-0000" className="h-12 rounded-xl text-base" />
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-1 block text-sm font-medium">Tell us about your business</label>
                    <Textarea id="message" placeholder="What kind of business do you run? What's your biggest headache right now?" rows={3} className="min-h-[120px] rounded-xl text-base" />
                  </div>
                  <Button type="submit" className="w-full gap-2 rounded-full" size="lg">
                    Book a Friendly Chat <ArrowRight size={18} />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#E2E8F0] bg-[#F9FAFB] text-foreground">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <img src={brandLogo} alt="Baker & Sons AI Consulting" className="h-10 w-auto" />
              
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-sm">Quick Links</h4>
              <div className="flex flex-col gap-1.5">
                {NAV_LINKS.map((l) => (
                  <a key={l.href} href={l.href} className="inline-flex min-h-11 items-center text-sm text-muted-foreground hover:text-primary transition-colors">{l.label}</a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-sm">Follow Along</h4>
              <div className="flex gap-2.5">
                {[Facebook, Instagram].map((Icon, i) => (
                  <a key={i} href="#" className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 border-t pt-6 text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Baker & Sons. Made with <Heart size={12} className="inline text-primary" fill="currentColor" /> for small businesses everywhere.
          </div>
        </div>
      </footer>
      <StickyMobileCTA phoneHref="tel:+15551234567" />
    </div>
  );
}
