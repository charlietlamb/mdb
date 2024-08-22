import {Link} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';
import {Collection} from '@shopify/hydrogen/storefront-api-types';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '~/components/ui/carousel';

export function Collections({
  collections,
}: {
  collections: Collection[] | undefined;
}) {
  if (!collections) return null;
  return (
    <div className="padding-main flex flex-col items-center w-full gap-8 p-8">
      <div className="gap flex flex-col items-center">
        <h3 className="text h1-size text-primary font-larken font-bold uppercase">
          Our Collections
        </h3>
        <p className="text-accent h3-size">Different types of our products</p>
      </div>
      <Carousel className="max-w-[100vw] w-full sm:max-w-[vw] md:max-w-[82vw] lg:max-w-[90vw]">
        <CarouselContent className="px-4">
          {collections.map((collection) => (
            <CarouselItem
              key={collection.id}
              className="basis-[100%] md:basis-1/2 lg:basis-1/3"
            >
              <Link
                key={collection.id}
                className="flex flex-col mx-auto flex-grow items-stretch h-full min-h-full md:w-full w-[70%] gap-6"
                to={`/collections/${collection.handle}`}
              >
                {collection.image && (
                  <div className="aspect-square border-primary relative flex items-center justify-center w-full overflow-hidden border">
                    <Image data={collection.image} sizes="100vw" />
                  </div>
                )}
                <div className=" border-primary flex flex-col items-center flex-grow w-full h-full p-4 bg-white border">
                  <h3 className="font-larken h25-size font-primary w-full font-bold text-center">
                    {collection.title}
                  </h3>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="md:flex text-primary-700 hover:bg-transparent hidden" />
        <CarouselNext className="md:flex text-primary-700 hover:bg-transparent hidden" />
      </Carousel>
    </div>
  );
}
