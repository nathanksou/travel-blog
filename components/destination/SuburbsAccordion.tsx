import { memo } from "react";
import { Destination } from "@/lib/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MapPin } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

type SuburbsAccordionProps = {
  suburbs: Destination["suburbs"];
};

export const SuburbsAccordion = memo(({ suburbs = [] }: SuburbsAccordionProps) => {
  if (!suburbs || suburbs.length === 0) return null;

  return (
    <section className="mb-8">
      <SectionHeader>Explore by Area</SectionHeader>
      <Accordion type="multiple">
        {suburbs.map((suburb, suburbIndex) => (
          <AccordionItem
            key={`suburb-${suburbIndex}`}
            value={`suburb-${suburbIndex}`}
          >
            <AccordionTrigger className="font-semibold">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-[#B3C8CF]" />
                {suburb.name}
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2 pl-7">
                {suburb.locations ? (
                  suburb.locations.map((location, locationIndex) => (
                    <li
                      key={`suburb-${suburbIndex}-location-${locationIndex}`}
                      className="flex gap-3"
                    >
                      <span className="text-[#B3C8CF] flex-shrink-0">•</span>
                      <div>
                        <span className="font-medium">{location.name}</span>
                        <span className="text-slate-600">
                          {" "}
                          - {location.blurb}
                        </span>
                      </div>
                    </li>
                  ))
                ) : (
                  <li
                    key={`suburb-${suburbIndex}-blurb`}
                    className="flex gap-3"
                  >
                    <span className="text-[#B3C8CF] flex-shrink-0">•</span>
                    <p className="text-slate-600">{suburb.blurb}</p>
                  </li>
                )}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
});

SuburbsAccordion.displayName = "SuburbsAccordion";
