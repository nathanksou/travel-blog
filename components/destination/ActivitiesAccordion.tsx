import { memo } from "react";
import { Destination } from "@/lib/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Activity } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

type ActivitiesAccordionProps = {
  activities: Destination["activities"];
};

export const ActivitiesAccordion = memo(({
  activities = [],
}: ActivitiesAccordionProps) => {
  if (!activities || activities.length === 0) return null;

  // Set all activities to be open by default
  const defaultOpenValues = activities.map((_, index) => `activity-${index}`);

  return (
    <section className="mb-8">
      <SectionHeader>Activities & Highlights</SectionHeader>
      <Accordion type="multiple" defaultValue={defaultOpenValues}>
        {activities.map((activity, activityIndex) => (
          <AccordionItem
            key={`activity-${activityIndex}`}
            value={`activity-${activityIndex}`}
          >
            <AccordionTrigger className="font-semibold">
              <div className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-[#B3C8CF]" />
                {activity.name}
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <ol className="space-y-2 pl-7">
                {activity.highlights.map((highlight, highlightIndex) => (
                  <li
                    key={`activity-${activityIndex}-highlight-${highlightIndex}`}
                    className="flex gap-3"
                  >
                    <span className="text-[#B3C8CF] font-medium flex-shrink-0">
                      {highlightIndex + 1}.
                    </span>
                    <p className="text-slate-600 leading-relaxed">
                      {highlight}
                    </p>
                  </li>
                ))}
              </ol>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
});

ActivitiesAccordion.displayName = "ActivitiesAccordion";
