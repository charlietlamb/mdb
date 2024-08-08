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
    <div className="padding-main bg-primary flex flex-col items-center gap-8 p-8 text-white">
      <motion.h3
        className="h2-size font-larken font-bold"
        initial={{opacity: 0, x: 100}}
        whileInView={{opacity: 1, x: 0}}
        transition={{duration: 1}}
        viewport={{once: true}}
      >
        Frequently Asked Questions
      </motion.h3>
      <Accordion
        type="single"
        className="flex flex-col items-center w-full"
        collapsible
      >
        {faqData.map((faq, index) => {
          return (
            <motion.div
              key={faq.question}
              className="w-full"
              initial={{opacity: 0, x: -50}}
              whileInView={{opacity: 1, x: 0}}
              transition={{duration: 1}}
              viewport={{once: true}}
            >
              <AccordionItem
                value={faq.question}
                className="w-full border-white"
              >
                <AccordionTrigger className="h3-size font-larken font-bold">
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
