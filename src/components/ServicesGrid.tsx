import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FeatureInfo } from "./FeatureInfo";

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  desc: string;
  examples?: string[];
}

interface ServicesGridProps {
  services: ServiceItem[];
}

export function ServicesGrid({ services }: ServicesGridProps) {
  return (
    <>
      {/* Mobile accordion */}
      <Accordion
        type="single"
        collapsible
        className="mt-8 rounded-2xl border border-[#E2E8F0] bg-white md:hidden"
      >
        {services.map((s) => (
          <AccordionItem key={s.title} value={s.title} className="px-4 last:border-b-0">
            <AccordionTrigger className="py-4 hover:no-underline">
              <span className="flex items-center gap-3 text-left">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <s.icon size={20} />
                </span>
                <span className="text-base font-semibold">{s.title}</span>
              </span>
            </AccordionTrigger>
            <AccordionContent className="pb-4">
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              {s.examples && (
                <ul className="mt-3 space-y-1.5">
                  {s.examples.map((ex) => (
                    <li
                      key={ex}
                      className="pl-5 text-sm text-foreground/80 before:content-['→'] before:text-primary before:mr-2 before:-ml-5"
                    >
                      {ex}
                    </li>
                  ))}
                </ul>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {/* Desktop grid */}
      <div className="mt-12 hidden gap-5 md:grid md:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <Card
            key={s.title}
            className="group relative overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-transparent hover:shadow-glow"
          >
            <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 -top-px h-1 bg-gradient-primary opacity-0 transition-opacity group-hover:opacity-100" />
            <CardContent className="p-5">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all group-hover:bg-gradient-primary group-hover:text-primary-foreground group-hover:shadow-glow">
                <s.icon size={22} />
              </div>
              <div className="flex items-center gap-1">
                <h3 className="text-base font-semibold">{s.title}</h3>
                {s.examples && (
                  <FeatureInfo
                    label={s.title}
                    side="top"
                    content={
                      <ul className="space-y-1.5">
                        {s.examples.map((ex) => (
                          <li
                            key={ex}
                            className="pl-5 before:content-['→'] before:text-primary before:mr-2 before:-ml-5"
                          >
                            {ex}
                          </li>
                        ))}
                      </ul>
                    }
                  />
                )}
              </div>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
