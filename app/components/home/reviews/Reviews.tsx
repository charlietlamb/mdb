import {motion} from 'framer-motion';
import {reviews} from '~/data/reviews/reviews';
import Review from './Review';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '~/components/ui/carousel';

export default function Reviews() {
  return (
    <div className="padding-main text-primary flex flex-col items-center gap-8 py-16">
      <motion.div
        initial={{opacity: 0, x: -100}}
        whileInView={{opacity: 1, x: 0}}
        transition={{duration: 1}}
        viewport={{once: true}}
        className="flex flex-col gap-8 max-w-[100vw] padding-main"
      >
        <h3 className="h2-size font-larken font-bold text-center">
          What our customers say about MBD Organics
        </h3>
        <Carousel className="max-w-[100vw] sm:max-w-[vw] md:max-w-[82vw] lg:max-w-[90vw]">
          <CarouselContent className="px-4">
            {reviews.map((review) => (
              <CarouselItem
                key={review.id}
                className="basis-[100%] md:basis-1/2 lg:basis-1/3"
              >
                <Review review={review} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="md:flex text-primary-700 hover:bg-transparent hidden" />
          <CarouselNext className="md:flex text-primary-700 hover:bg-transparent hidden" />
        </Carousel>
      </motion.div>
    </div>
  );
}
