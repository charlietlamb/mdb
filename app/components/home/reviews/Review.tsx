import {Image} from '@shopify/hydrogen';
import {ReviewType} from '~/data/reviews/reviews';
import Stars from './Stars';

export default function Review({review}: {review: ReviewType}) {
  return (
    <div className="border-primary-700 flex flex-col h-full gap-1 p-2 bg-white border rounded-lg">
      <div className="flex items-center justify-between">
        <h4 className="font-larken text-lg font-bold">{review.title}</h4>
        <Stars rating={review.rating} />
      </div>
      <p>{review.text}</p>
    </div>
  );
}
