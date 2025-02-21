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
      {activities.map((activity) => (
        <AccordionItem key={activity.name} value={activity.name}>
          <AccordionTrigger className="text-lg font-bold">
            {activity.name}
          </AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-6">
              {activity.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
