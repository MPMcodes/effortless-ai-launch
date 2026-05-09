import { useEffect, useState } from "react";
import { LucideIcon, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

export interface StepItem {
  num: string;
  icon: LucideIcon;
  title: string;
  desc: string;
}

interface Props {
  steps: StepItem[];
}

function StepBlock({ s }: { s: StepItem }) {
  return (
    <div className="text-center">
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-primary bg-[length:200%_auto] text-2xl font-bold text-primary-foreground shadow-glow animate-gradient-shift">
        {s.num}
      </div>
      <h3 className="text-lg font-bold">{s.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
    </div>
  );
}

export function HowItWorksStepper({ steps }: Props) {
  const [api, setApi] = useState<CarouselApi>();
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (!api) return;
    setIdx(api.selectedScrollSnap());
    const onSelect = () => setIdx(api.selectedScrollSnap());
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const total = steps.length;
  const pct = ((idx + 1) / total) * 100;
  const isLast = idx === total - 1;

  return (
    <>
      <div className="mt-10 md:hidden">
        <div className="mb-3 flex items-center justify-between text-xs font-medium text-muted-foreground">
          <span>
            Step {idx + 1} of {total}
          </span>
          <span>{Math.round(pct)}%</span>
        </div>
        <Progress value={pct} className="h-1.5" />
        <Carousel opts={{ align: "start", loop: false }} setApi={setApi} className="mt-6">
          <CarouselContent>
            {steps.map((s) => (
              <CarouselItem key={s.num} className="basis-full">
                <StepBlock s={s} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="mt-6 flex items-center justify-between gap-3">
          <Button
            variant="outline"
            disabled={idx === 0}
            onClick={() => api?.scrollPrev()}
            className="min-h-12 rounded-full"
          >
            <ArrowLeft size={18} /> Back
          </Button>
          {isLast ? (
            <Button asChild className="min-h-12 rounded-full">
              <a href="#pricing">See pricing →</a>
            </Button>
          ) : (
            <Button onClick={() => api?.scrollNext()} className="min-h-12 rounded-full">
              Next <ArrowRight size={18} />
            </Button>
          )}
        </div>
      </div>

      <div className="mt-12 hidden gap-8 md:grid md:grid-cols-3">
        {steps.map((s) => (
          <StepBlock key={s.num} s={s} />
        ))}
      </div>
    </>
  );
}
