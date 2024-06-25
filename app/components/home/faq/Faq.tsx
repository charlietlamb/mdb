import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/accordion';
import {} from '@radix-ui/react-accordion';
import {faqData} from '~/data/faq/faqData';

export default function Faq() {
  return (
    <div className="padding-main flex flex-col items-center gap-8 p-8">
      <h3 className="text-3xl font-bold">Frequently Asked Questions</h3>
      <Accordion
        type="single"
        className="divide-primary-300 flex flex-col items-center w-full divide-y"
        collapsible
      >
        {faqData.map((faq) => {
          return (
            <AccordionItem
              key={faq.question}
              value={faq.question}
              className="w-full"
            >
              <AccordionTrigger className="text-2xl font-bold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-xl">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
