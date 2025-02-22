import { Suburb } from "@/lib/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function SuburbsAccordion({ suburbs }: { suburbs: Suburb[] }) {
  console.log(suburbs);
  return (
    <Accordion type="multiple">
      {suburbs.map((suburb, suburbIndex) => (
        <AccordionItem
          key={`suburb-${suburbIndex}`}
          value={`suburb-${suburbIndex}`}
        >
          <AccordionTrigger className="text-lg font-bold">
            {suburb.name}
          </AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-6">
              {suburb.locations ? (
                suburb.locations.map((location, locationIndex) => (
                  <li key={`suburb-${suburbIndex}-location-${locationIndex}`}>
                    {`${location.name}: ${location.blurb}`}
                  </li>
                ))
              ) : (
                <li key={`suburb-${suburbIndex}-blurb`}>{suburb.blurb}</li>
              )}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
