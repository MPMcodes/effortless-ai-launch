import { ReactNode } from "react";
import { Info } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface FeatureInfoProps {
  content: ReactNode;
  label: string;
  side?: "top" | "right" | "bottom" | "left";
}

export function FeatureInfo({ content, label, side = "top" }: FeatureInfoProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          aria-label={`More info about ${label}`}
          className="-m-3 inline-flex h-11 w-11 items-center justify-center p-3 text-muted-foreground hover:text-primary"
        >
          <Info size={15} />
        </button>
      </PopoverTrigger>
      <PopoverContent side={side} collisionPadding={12} className="w-72 text-sm leading-relaxed">
        {content}
      </PopoverContent>
    </Popover>
  );
}
