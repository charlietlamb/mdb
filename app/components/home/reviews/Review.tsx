import {Image} from '@shopify/hydrogen';
import {ReviewType} from '~/data/reviews/reviews';

export default function Review({review}: {review: ReviewType}) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center w-full">
        <Image
          src={review.image}
          alt={review.name}
          className="w-12 h-12 rounded-full"
        />
        <div className="flex flex-col">
          <p className="text-accent-500 text-lg font-bold">{review.name}</p>
          <p className="text-accent-500 text-sm">{review.designation}</p>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
        dolorum blanditiis aliquam necessitatibus aspernatur quod ratione ad
        placeat temporibus hic voluptates dolor, ab eos illum vel aliquid,
        corrupti cumque numquam.
      </p>
    </div>
  );
}
