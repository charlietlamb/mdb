import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '~/components/ui/accordion';

export default function Story() {
  return (
    <div className=" flex flex-col items-center min-h-screen p-8">
      <img
        src="/images/logoFull.jpg"
        alt="our-story"
        className="w-40 h-40 mb-8"
      />
      <div className="border-primary flex flex-col items-center w-full max-w-4xl p-6 bg-white border rounded-lg shadow-md">
        <h4 className="font-larken mb-4 text-3xl font-semibold">Our Story</h4>
        <p className="mb-6 text-lg text-gray-700">
          MBD Organics is a family-owned business that has been producing
          natural, organic, and non-GMO cosmetics since 1997. Our journey began
          with a simple mission: to create high-quality, eco-friendly products
          that are safe for both people and the planet.
        </p>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="history">
            <AccordionTrigger>Our History</AccordionTrigger>
            <AccordionContent>
              <p>
                Since our founding in 1997, we have grown from a small local
                business to a well-known brand in the organic cosmetics
                industry. Our commitment to quality and sustainability has been
                the cornerstone of our success.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="mission">
            <AccordionTrigger>Our Mission</AccordionTrigger>
            <AccordionContent>
              <p>
                Our mission is to provide natural and organic products that
                promote health and well-being. We believe in the power of nature
                and strive to harness its benefits in every product we create.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="values">
            <AccordionTrigger>Our Values</AccordionTrigger>
            <AccordionContent>
              <p>
                We are committed to sustainability, transparency, and ethical
                practices. Our values guide us in every decision we make, from
                sourcing ingredients to packaging our products.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
