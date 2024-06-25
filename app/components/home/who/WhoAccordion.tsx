import React from 'react';
import {
  Accordion,
  HorizontalAccordionContent,
  HorizontalAccordionItem,
  HorizontalAccordionTrigger,
} from '~/components/ui/accordion';
import {whoData} from '~/data/who/whoData';
import WhoTrigger from './WhoTrigger';
import {whoContentMap} from '~/data/who/whoContentMap';

export default function WhoAccordion() {
  return (
    <Accordion
      type="single"
      orientation="horizontal"
      className=" flex flex-row w-full transition border-l border-indigo-300"
      defaultValue={whoData[0].title}
    >
      {whoData.map((data) => (
        <HorizontalAccordionItem
          key={data.title}
          value={data.title}
          className="flex flex-row items-center"
        >
          <HorizontalAccordionTrigger className="h-full p-0 font-light no-underline">
            <WhoTrigger title={data.title} />
          </HorizontalAccordionTrigger>
          <HorizontalAccordionContent>
            {whoContentMap.get(data.title)}
          </HorizontalAccordionContent>
        </HorizontalAccordionItem>
      ))}
    </Accordion>
  );
}
