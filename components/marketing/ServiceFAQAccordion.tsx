"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

interface Props {
  faq: Array<{ q: string; a: string }>;
}

export function ServiceFAQAccordion({ faq }: Props) {
  return (
    <Accordion>
      {faq.map(({ q, a }, i) => (
        <AccordionItem key={`${i}-${q}`} value={`${i}-${q}`}>
          <AccordionTrigger className="text-base font-medium text-foreground py-4 text-left">
            {q}
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-base text-muted-foreground leading-relaxed">
              {a}
            </p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
