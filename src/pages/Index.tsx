import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Menu,
  X,
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
import logoVideo from "@/assets/logo-animation.mp4";
import { PingPongVideo } from "@/components/PingPongVideo";
import { HeroBackground } from "@/components/HeroBackground";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  { icon: Users, title: "Smart CRM", desc: "Keep track of your customers the easy way — like a Rolodex, but way better." },
  { icon: MessageSquare, title: "Automated Follow-Ups", desc: "Friendly texts and emails sent at just the right time. Your customers will feel the love." },
  { icon: CalendarCheck, title: "Online Booking", desc: "Customers pick a time that works, you show up ready. Simple as that." },
  { icon: Star, title: "Reviews on Autopilot", desc: "Happy customers spread the word — we just make it easier for them." },
  { icon: CreditCard, title: "Easy Invoicing", desc: "Send invoices, get paid. No chasing people down or messy paperwork." },
  { icon: Bot, title: "AI Assistant", desc: "A friendly helper that answers questions when you're busy doing what you do best." },
];

const STEPS = [
  { num: "1", icon: PhoneCall, title: "Let's Chat", desc: "We'll grab a coffee (virtually!) and learn about your business. No sales pitch, promise." },
  { num: "2", icon: Settings, title: "We Build It For You", desc: "Our team sets everything up while you keep doing what you love. Zero homework." },
  { num: "3", icon: TrendingUp, title: "Watch It Grow", desc: "More customers, more reviews, less stress. That's the Baker & Sons way." },
];

const BENEFITS = [
  { icon: Clock, title: "Get Your Evenings Back", desc: "Automate the busywork so you can make it to little league practice." },
  { icon: UserPlus, title: "More Happy Customers", desc: "Never let a lead slip through the cracks again." },
  { icon: GraduationCap, title: "We Speak Human", desc: "No tech jargon. We explain everything in plain English." },
  { icon: LayoutGrid, title: "One Simple Dashboard", desc: "Replace that mess of apps with one easy-to-use system." },
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

const HERO_IMAGES = [
  { src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=700&h=500&fit=crop", alt: "IT team collaborating in modern office" },
  { src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=700&h=500&fit=crop", alt: "Small business owner using laptop" },
  { src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&h=500&fit=crop", alt: "Team working on IT solutions together" },
  { src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&h=500&fit=crop", alt: "Business professionals discussing technology" },
];

export default function Index() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [heroIdx, setHeroIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIdx((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <nav className="sticky top-0 z-50 border-b border-[#E2E8F0] bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#" className="flex items-center gap-2.5">
            <PingPongVideo
              src={logoVideo}
              className="h-11 w-11 rounded-md object-cover"
            />
            <div>
              <span className="text-lg font-bold tracking-tight">Baker & Sons</span>
              <span className="block text-[11px] text-muted-foreground -mt-0.5 tracking-wide">AI Consulting · Tech for Small Business</span>
            </div>
          </a>
          <div className="hidden items-center gap-7 md:flex">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                {l.label}
              </a>
            ))}
            <Button asChild className="rounded-full px-6">
              <a href="#contact">Let's Talk</a>
            </Button>
          </div>
          <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {mobileOpen && (
          <div className="border-t md:hidden">
            <div className="flex flex-col gap-1 px-4 py-3">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-primary/10 hover:text-primary">
                  {l.label}
                </a>
              ))}
              <Button asChild className="mt-2 rounded-full">
                <a href="#contact" onClick={() => setMobileOpen(false)}>Let's Talk</a>
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <HeroBackground />
        <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-10 px-4 py-16 sm:px-6 lg:flex-row lg:gap-14 lg:px-8 lg:py-24">
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <Sparkles size={14} /> Built for businesses like yours
            </div>
            <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Smart AI Tools for{" "}
              <span className="text-primary">Your</span> Small Business
            </h1>
            <p className="mx-auto mt-5 max-w-lg text-base text-muted-foreground lg:mx-0 leading-relaxed">
              We're the friendly tech team you always wished you had. We set up everything, explain it in plain English, and stick around to make sure it works.
            </p>
            <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
              <Button size="lg" asChild className="gap-2 rounded-full px-7 text-base">
                <a href="#contact">
                  Get Your Free Demo <ArrowRight size={18} />
                </a>
              </Button>
              <Button size="lg" variant="ghost" asChild className="gap-2 text-base text-muted-foreground">
                <a href="#how-it-works">See How It Works ↓</a>
              </Button>
            </div>
          </div>
          <div className="w-full lg:flex-1 relative overflow-hidden rounded-3xl shadow-xl shadow-primary/10 aspect-[7/5] lg:aspect-auto" style={{ minHeight: 340 }}>
            {HERO_IMAGES.map((img, i) => (
              <img
                key={img.src}
                src={img.src}
                alt={img.alt}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === heroIdx ? "opacity-100" : "opacity-0"}`}
                loading={i === 0 ? "eager" : "lazy"}
                width={700}
                height={500}
              />
            ))}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {HERO_IMAGES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setHeroIdx(i)}
                  className={`h-2.5 rounded-full transition-all ${i === heroIdx ? "w-7 bg-primary" : "w-2.5 bg-white/50"}`}
                  aria-label={`Show image ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">What We Do</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">Tools That Actually Make Your Life Easier</h2>
            <p className="mt-3 text-muted-foreground text-sm">No fluff, no complicated setup. Just stuff that works.</p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <Card key={s.title} className="group border border-[#E2E8F0] bg-white rounded-2xl shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5">
                <CardContent className="p-5">
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <s.icon size={22} />
                  </div>
                  <h3 className="text-base font-semibold">{s.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Easy as 1-2-3</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">Here's How We Get You Started</h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {STEPS.map((s) => (
              <div key={s.num} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-md shadow-primary/20 text-2xl font-bold">
                  {s.num}
                </div>
                <h3 className="text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-[#F1F5F9] py-16 sm:py-24">
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
                <h3 className="text-base font-bold">{b.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Happy Customers</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">Don't Take Our Word For It</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <Card key={t.name} className="border border-[#E2E8F0] shadow-none rounded-2xl bg-white">
                <CardContent className="p-5">
                  <div className="mb-3 flex gap-0.5 text-primary">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">"{t.quote}"</p>
                  <div className="mt-5 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-xs">
                      {t.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Pricing</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">Honest Pricing. No Surprises.</h2>
            <p className="mt-3 text-muted-foreground text-sm">Cancel anytime. We earn your business every month.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 max-w-4xl mx-auto items-stretch">
            {PRICING.map((p) => (
              <Card key={p.tier} className={`relative flex flex-col rounded-2xl bg-white shadow-sm ${p.popular ? "border-2 border-[#2D3FBF] shadow-md" : "border border-[#E2E8F0]"}`}>
                {p.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#2D3FBF] px-4 py-1 text-xs font-bold text-white">
                    ⭐ Most Popular
                  </div>
                )}
                <CardContent className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold">{p.tier}</h3>
                  <div className="mt-4">
                    <span className="text-3xl font-extrabold">{p.price}</span>
                    <span className="text-muted-foreground text-sm">/mo</span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">monthly subscription · no contract</p>
                  <ul className="mt-5 space-y-2.5 flex-1">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <Check size={15} className="text-primary shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="mt-6 w-full rounded-full" variant={p.popular ? "default" : "outline"}>
                    <a href="#contact">{p.cta}</a>
                  </Button>
                </CardContent>
              </Card>
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
      <section id="contact" className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-3">
                <HandHeart size={14} /> We'd love to hear from you
              </div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Let's Get Your Business Growing</h2>
              <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                No pressure, no sales pitch. Just a friendly conversation about what's possible for your business. We're real people — not a call center.
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
                    <Input id="name" placeholder="John Smith" className="rounded-xl" />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1 block text-sm font-medium">Email</label>
                    <Input id="email" type="email" placeholder="john@mybusiness.com" className="rounded-xl" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1 block text-sm font-medium">Phone</label>
                    <Input id="phone" type="tel" placeholder="(555) 000-0000" className="rounded-xl" />
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-1 block text-sm font-medium">Tell us about your business</label>
                    <Textarea id="message" placeholder="What kind of business do you run? What's your biggest headache right now?" rows={3} className="rounded-xl" />
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
      <footer className="border-t bg-muted/40">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">B</div>
                <span className="text-lg font-bold">Baker & Sons</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">A dad and three sons on a mission to help small businesses thrive with simple, friendly tech.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-sm">Quick Links</h4>
              <div className="flex flex-col gap-1.5">
                {NAV_LINKS.map((l) => (
                  <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{l.label}</a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-sm">Follow Along</h4>
              <div className="flex gap-2.5">
                {[Facebook, Instagram].map((Icon, i) => (
                  <a key={i} href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Icon size={16} />
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
    </div>
  );
}
