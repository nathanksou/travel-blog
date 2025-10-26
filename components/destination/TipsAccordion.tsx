import { memo } from "react";
import { Destination } from "@/lib/types";
import { Lightbulb } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

type TipsAccordionProps = {
  tips: Destination["tips"];
};

export const TipsAccordion = memo(({ tips = [] }: TipsAccordionProps) => {
  if (!tips || tips.length === 0) return null;

  return (
    <section className="mb-8">
      <SectionHeader>Essential Tips</SectionHeader>
      <ul className="space-y-3">
        {tips.map((tip, index) => (
          <li key={`tip-${index}`} className="flex gap-3">
            {/* Lightbulb icon */}
            <span className="flex-shrink-0">
              <Lightbulb className="w-5 h-5 text-yellow-500" />
            </span>
            <div>
              <p className="text-slate-700 leading-relaxed">{tip.details}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
});

TipsAccordion.displayName = "TipsAccordion";
