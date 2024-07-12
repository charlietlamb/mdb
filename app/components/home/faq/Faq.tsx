import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/accordion';
import {faqData} from '~/data/faq/faqData';
import {motion} from 'framer-motion';

export default function Faq() {
  return (
    <div className="padding-main flex flex-col items-center gap-8 p-8">
      <motion.h3
        className="h2-size font-bold"
        initial={{opacity: 0, x: 100}}
        whileInView={{opacity: 1, x: 0}}
        transition={{duration: 1}}
        viewport={{once: true}}
      >
        Frequently Asked Questions
      </motion.h3>
      <Accordion
        type="single"
        className="divide-primary-300 flex flex-col items-center w-full divide-y"
        collapsible
      >
        {faqData.map((faq, index) => {
          return (
            <motion.div
              key={faq.question}
              className="w-full"
              initial={{opacity: 0, x: index % 2 === 0 ? -100 : 100}}
              whileInView={{opacity: 1, x: 0}}
              transition={{duration: 1}}
              viewport={{once: true}}
            >
              <AccordionItem value={faq.question} className="w-full">
                <AccordionTrigger className="h3-size font-bold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="h4-size">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          );
        })}
      </Accordion>
    </div>
  );
}
