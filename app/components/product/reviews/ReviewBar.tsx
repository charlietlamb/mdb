import {Star} from 'lucide-react';

export function ReviewBar(review: {
  rating: number;
  count: number;
  avg: number;
}) {
  return (
    <div className="flex items-center w-full gap-2">
      <p className="shrink-0 text-start w-2 text-sm font-medium leading-none text-gray-900">
        {review.rating}
      </p>
      <Star className="shrink-0 w-4 h-4" />
      <div className="h-1.5 w-full  rounded-full bg-gray-200">
        <div
          className="h-1.5 rounded-full bg-gray-800 flex-grow"
          style={{width: `${review.avg * 100}%`}}
        />
      </div>
      <div className="shrink-0 text-primary-700 sm:w-auto sm:text-left w-8 text-sm font-medium leading-none text-right">
        {review.count} <span className="sm:inline hidden">reviews</span>
      </div>
    </div>
  );
}
