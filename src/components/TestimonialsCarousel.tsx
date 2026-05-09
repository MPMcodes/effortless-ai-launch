import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

export interface TestimonialItem {
  name: string;
  role: string;
  quote: string;
}

interface Props {
  items: TestimonialItem[];
}

function Card1({ t }: { t: TestimonialItem }) {
  return (
    <Card className="h-full rounded-2xl border border-[#E2E8F0] bg-white shadow-none">
      <CardContent className="p-5">
        <div className="mb-3 flex gap-0.5 text-primary">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={15} fill="currentColor" />
          ))}
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">"{t.quote}"</p>
        <div className="mt-5 flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
            {t.name.split(" ").map((n) => n[0]).join("")}
          </div>
          <div>
            <p className="text-sm font-semibold">{t.name}</p>
            <p className="text-xs text-muted-foreground">{t.role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function TestimonialsCarousel({ items }: Props) {
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!api) return;
    setSelected(api.selectedScrollSnap());
    const onSelect = () => setSelected(api.selectedScrollSnap());
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <>
      <div className="mt-10 md:hidden">
        <Carousel opts={{ align: "start", loop: true }} setApi={setApi}>
          <CarouselContent className="-ml-3">
            {items.map((t) => (
              <CarouselItem key={t.name} className="basis-[88%] pl-3">
                <Card1 t={t} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="mt-3 flex items-center justify-center gap-1">
          {items.map((t, i) => (
            <button
              key={t.name}
              role="tab"
              aria-selected={selected === i}
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => api?.scrollTo(i)}
              className="inline-flex min-h-11 min-w-11 items-center justify-center"
            >
              <span
                className={`h-2.5 rounded-full transition-all ${
                  selected === i ? "w-7 bg-primary" : "w-2.5 bg-muted-foreground/30"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      <div className="mt-12 hidden gap-6 md:grid md:grid-cols-3">
        {items.map((t) => (
          <Card1 key={t.name} t={t} />
        ))}
      </div>
    </>
  );
}
