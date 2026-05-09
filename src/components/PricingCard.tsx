import { ReactNode } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FeatureInfo } from "./FeatureInfo";

export interface PricingTier {
  tier: string;
  price: string;
  features: string[];
  cta: string;
  popular: boolean;
}

interface Props {
  p: PricingTier;
  featureInfo?: Record<string, ReactNode>;
}

export function PricingCard({ p, featureInfo }: Props) {
  return (
    <Card
      className={`relative flex flex-col rounded-2xl bg-white shadow-sm transition-all hover:-translate-y-1 ${
        p.popular
          ? "border-2 border-transparent bg-clip-padding shadow-glow ring-1 ring-primary/30 [background:linear-gradient(white,white)_padding-box,var(--gradient-primary)_border-box]"
          : "border border-[#E2E8F0] hover:shadow-elegant"
      }`}
    >
      {p.popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-primary bg-[length:200%_auto] px-4 py-1 text-xs font-bold text-white shadow-glow animate-gradient-shift">
          ⭐ Most Popular
        </div>
      )}
      <CardContent className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold">{p.tier}</h3>
        <div className="mt-4">
          <span className="text-3xl font-extrabold">{p.price}</span>
          <span className="text-sm text-muted-foreground">/mo</span>
        </div>
        <p className="mt-1 text-xs text-muted-foreground">monthly subscription · no contract</p>
        <ul className="mt-5 flex-1 space-y-2.5">
          {p.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm">
              <Check size={15} className="mt-0.5 shrink-0 text-primary" />
              <span className="flex-1">{f}</span>
              {featureInfo?.[f] && (
                <FeatureInfo content={featureInfo[f]} label={f} side="left" />
              )}
            </li>
          ))}
        </ul>
        <Button
          asChild
          className="mt-6 min-h-12 w-full rounded-full"
          variant={p.popular ? "default" : "outline"}
        >
          <a href="#contact">{p.cta}</a>
        </Button>
      </CardContent>
    </Card>
  );
}
