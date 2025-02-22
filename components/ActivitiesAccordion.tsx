import { Activity } from "@/lib/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function ActivitiesAccordion({
  activities,
}: {
  activities: Activity[];
}) {
  return (
    <Accordion
      type="multiple"
      defaultValue={activities.map((_, index) => `activity-${index}`)}
    >
      {activities.map((activity, activityIndex) => (
        <AccordionItem
          key={`activity-${activityIndex}`}
          value={`activity-${activityIndex}`}
        >
          <AccordionTrigger className="text-lg font-bold">
            {activity.name}
          </AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-6">
              {activity.highlights.map((highlight, highlightIndex) => (
                <li
                  key={`activity-${activityIndex}-highlight-${highlightIndex}`}
                >
                  {highlight}
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
