import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Destination } from "@/lib/types";

type TipsAccordionProps = {
  tips: Destination["tips"];
};

export const TipsAccordion = ({ tips = [] }: TipsAccordionProps) => {
  if (!tips || tips.length === 0) return null;

  return (
    <div className="my-6">
      <h2 className="text-xl font-bold">Tips</h2>
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
    </div>
  );
};
