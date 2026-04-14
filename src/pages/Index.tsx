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
  Twitter,
  Linkedin,
  Instagram,
  Check,
  ChevronRight,
} from "lucide-react";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  { icon: Users, title: "Smart CRM", desc: "Keep all your customers organized in one simple dashboard. No spreadsheets needed." },
  { icon: MessageSquare, title: "Automated Messaging", desc: "Text, email & SMS follow-ups sent automatically. Never miss a lead again." },
  { icon: CalendarCheck, title: "Online Booking", desc: "Let customers book appointments 24/7. Syncs with your calendar instantly." },
  { icon: Star, title: "Reviews & Reputation", desc: "Get more 5-star reviews on autopilot. We make it easy for happy customers to share." },
  { icon: CreditCard, title: "Easy Payments", desc: "Accept payments online with simple invoicing. Get paid faster, stress-free." },
  { icon: Bot, title: "AI Chat & Voice", desc: "An AI assistant answers calls and chats so you never miss a customer — even at 2 AM." },
];

const STEPS = [
  { num: "01", icon: PhoneCall, title: "Book a Free Call", desc: "Tell us about your business. We'll show you exactly how AI can help — no jargon." },
  { num: "02", icon: Settings, title: "We Set Everything Up", desc: "Our team builds and configures your entire system. You don't lift a finger." },
  { num: "03", icon: TrendingUp, title: "You Grow", desc: "Sit back as leads flow in, reviews stack up, and your business runs smoother than ever." },
];

const BENEFITS = [
  { icon: Clock, title: "Save 10+ Hours a Week", desc: "Automate the busywork so you can focus on what matters most." },
  { icon: UserPlus, title: "Get More Customers", desc: "Capture every lead with automated follow-ups and online booking." },
  { icon: GraduationCap, title: "Zero Learning Curve", desc: "We handle the tech. You just use the simple dashboard." },
  { icon: LayoutGrid, title: "All-In-One Platform", desc: "Replace 6+ separate tools with one easy system." },
];

const TESTIMONIALS = [
  { name: "Sarah Mitchell", role: "Owner, Mitchell's Bakery", quote: "Baker & Sons completely transformed how I manage my business. I went from drowning in spreadsheets to having everything automated. My revenue is up 40%!" },
  { name: "James Rodriguez", role: "Founder, Rodriguez Plumbing", quote: "I was skeptical about AI, but these guys made it so simple. Now I get twice as many bookings and never miss a customer call. Game changer." },
  { name: "Emily Chen", role: "Director, Chen Dental Care", quote: "The automated review system alone was worth it. We went from 12 Google reviews to over 200 in six months. Patients love the easy booking too." },
];

const PRICING = [
  {
    tier: "Starter",
    price: "$297",
    desc: "Perfect for getting started with automation",
    features: ["Smart CRM", "Automated Email & SMS", "Online Booking", "Basic Reporting", "Email Support"],
    cta: "Get Started",
    popular: false,
  },
  {
    tier: "Growth",
    price: "$497",
    desc: "Everything you need to scale fast",
    features: ["Everything in Starter", "AI Chat Assistant", "Review Automation", "Payment Processing", "Funnels & Workflows", "Priority Support"],
    cta: "Most Popular",
    popular: true,
  },
  {
    tier: "Enterprise",
    price: "$997",
    desc: "Full-service AI automation suite",
    features: ["Everything in Growth", "AI Voice Assistant", "Custom Integrations", "Advanced Analytics", "Dedicated Account Manager", "White-Glove Setup"],
    cta: "Contact Us",
    popular: false,
  },
];

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
      <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg">B</div>
            <div>
              <span className="text-lg font-bold tracking-tight">Baker &amp; Sons</span>
              <span className="block text-xs text-muted-foreground -mt-1">IT Automation Made Effortless</span>
            </div>
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                {l.label}
              </a>
            ))}
            <Button asChild>
              <a href="#contact">Free Consultation</a>
            </Button>
          </div>
          <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {mobileOpen && (
          <div className="border-t md:hidden">
            <div className="flex flex-col gap-2 px-4 py-4">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground">
                  {l.label}
                </a>
              ))}
              <Button asChild className="mt-2">
                <a href="#contact" onClick={() => setMobileOpen(false)}>Free Consultation</a>
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-4 py-20 sm:px-6 lg:flex-row lg:gap-16 lg:px-8 lg:py-28">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              AI Tools for Your Small Business –{" "}
              <span className="text-primary">Zero Tech Hassle</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground lg:mx-0">
              We set up and manage everything so you can focus on your customers. No tech skills needed — just results.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <Button size="lg" asChild className="gap-2 text-base">
                <a href="#contact">
                  Get Your Free Demo <ArrowRight size={18} />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="gap-2 text-base">
                <a href="#how-it-works">See How It Works</a>
              </Button>
            </div>
          </div>
          <div className="flex-1 relative overflow-hidden rounded-2xl shadow-2xl shadow-primary/10" style={{ minHeight: 350 }}>
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
                  className={`h-2 rounded-full transition-all ${i === heroIdx ? "w-6 bg-primary" : "w-2 bg-white/60"}`}
                  aria-label={`Show image ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-muted/40 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">What We Offer</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Everything Your Business Needs in One Place</h2>
            <p className="mt-4 text-muted-foreground">Powerful AI tools, simplified. We handle the setup — you enjoy the results.</p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <Card key={s.title} className="group border-0 bg-background shadow-md transition-all hover:shadow-xl hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <s.icon size={24} />
                  </div>
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Simple Process</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Up and Running in 3 Easy Steps</h2>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {STEPS.map((s, i) => (
              <div key={s.num} className="relative text-center">
                {i < STEPS.length - 1 && (
                  <div className="absolute right-0 top-12 hidden w-full translate-x-1/2 md:block">
                    <ChevronRight className="mx-auto text-border" size={32} />
                  </div>
                )}
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/25">
                  <s.icon size={32} />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary">Step {s.num}</span>
                <h3 className="mt-2 text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-primary py-20 sm:py-28 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Small Businesses Love Us</h2>
            <p className="mt-4 text-primary-foreground/80">Real results, not empty promises.</p>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((b) => (
              <div key={b.title} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-foreground/15">
                  <b.icon size={28} />
                </div>
                <h3 className="text-lg font-bold">{b.title}</h3>
                <p className="mt-2 text-sm text-primary-foreground/80">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Testimonials</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Trusted by Business Owners Like You</h2>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <Card key={t.name} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="mb-4 flex gap-1 text-primary">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground italic">"{t.quote}"</p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-sm">
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
      <section id="pricing" className="bg-muted/40 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Pricing</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Simple, Transparent Pricing</h2>
            <p className="mt-4 text-muted-foreground">No hidden fees. Cancel anytime.</p>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {PRICING.map((p) => (
              <Card key={p.tier} className={`relative border-0 shadow-md ${p.popular ? "ring-2 ring-primary shadow-xl scale-105" : ""}`}>
                {p.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground">
                    Most Popular
                  </div>
                )}
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold">{p.tier}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                  <div className="mt-6">
                    <span className="text-4xl font-extrabold">{p.price}</span>
                    <span className="text-muted-foreground">/mo</span>
                  </div>
                  <ul className="mt-6 space-y-3">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm">
                        <Check size={16} className="text-primary shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className={`mt-8 w-full ${p.popular ? "" : "variant-outline"}`} variant={p.popular ? "default" : "outline"}>
                    <a href="#contact">{p.cta}</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">Get Started</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Ready to Automate Your Business?</h2>
              <p className="mt-4 text-muted-foreground">Book your free consultation today. No pressure, no jargon — just a friendly chat about how AI can help you grow.</p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="text-primary shrink-0" size={20} />
                  <span>hello@bakerandsons.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="text-primary shrink-0" size={20} />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="text-primary shrink-0" size={20} />
                  <span>Serving small businesses nationwide</span>
                </div>
              </div>
            </div>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium">Your Name</label>
                    <Input id="name" placeholder="John Smith" />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium">Email</label>
                    <Input id="email" type="email" placeholder="john@business.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-medium">Phone</label>
                    <Input id="phone" type="tel" placeholder="(555) 000-0000" />
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium">How can we help?</label>
                    <Textarea id="message" placeholder="Tell us about your business and what you'd like to automate..." rows={4} />
                  </div>
                  <Button type="submit" className="w-full gap-2" size="lg">
                    Book My Free Consultation <ArrowRight size={18} />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t bg-foreground text-background">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">B</div>
                <span className="text-lg font-bold">Baker &amp; Sons</span>
              </div>
              <p className="mt-3 text-sm text-background/60">IT Automation Made Effortless. Helping small businesses thrive with simple AI tools.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Quick Links</h4>
              <div className="flex flex-col gap-2">
                {NAV_LINKS.map((l) => (
                  <a key={l.href} href={l.href} className="text-sm text-background/60 hover:text-background transition-colors">{l.label}</a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Connect</h4>
              <div className="flex gap-3">
                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                  <a key={i} href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-background/10 text-background/60 hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-background/10 pt-8 text-center text-sm text-background/40">
            &copy; {new Date().getFullYear()} Baker &amp; Sons. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
