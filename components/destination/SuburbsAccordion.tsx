import { Destination } from "@/lib/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type SuburbsAccordionProps = {
  suburbs: Destination["suburbs"];
};

export const SuburbsAccordion = ({ suburbs = [] }: SuburbsAccordionProps) => {
  if (!suburbs || suburbs.length === 0) return null;

  return (
    <div className="my-6">
      <h2 className="text-xl font-bold">Suburbs</h2>
      <Accordion type="multiple">
        {suburbs.map((suburb, suburbIndex) => (
          <AccordionItem
            key={`suburb-${suburbIndex}`}
            value={`suburb-${suburbIndex}`}
          >
            <AccordionTrigger className="font-bold">
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
    </div>
  );
};
