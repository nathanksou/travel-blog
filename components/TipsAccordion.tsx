import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tip } from "@/lib/types";

export function TipsAccordion({ tips }: { tips: Tip[] }) {
  return (
    <Accordion
      type="multiple"
      defaultValue={tips.map((_, index) => `tip-${index}`)}
    >
      {tips.map((tip, index) => (
        <AccordionItem key={`tip-${index}`} value={`tip-${index}`}>
          <AccordionTrigger className="font-bold">
            {tip.heading}
          </AccordionTrigger>
          <AccordionContent>{tip.details}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
