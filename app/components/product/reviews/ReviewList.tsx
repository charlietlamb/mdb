import {AliReview, ReviewItem, ReviewItemData} from './Review';
import {Rating} from './ReviewRating';
import {ReviewBar} from './ReviewBar';

type AliReviewsProps = ReviewItemData & {
  showAvgRating: boolean;
  showReviewsCount: boolean;
  showReviewsProgressBar: boolean;
  reviewsToShow: number;
  showReviewWithMediaOnly: boolean;
};

export default function ReviewList({allReviews}: {allReviews: AliReview[]}) {
  if (allReviews?.length) {
    let {totalReviews, avgRating, reviewsByRating} =
      getReviewsSummary(allReviews);
    let reviewsToRender = Array.from(allReviews);
    // if (showReviewWithMediaOnly) {
    //   reviewsToRender = reviewsToRender.filter((rv) => rv.media.length > 0);
    // }
    // reviewsToRender = reviewsToRender.slice(0, reviewsToShow);

    return (
      <div className=" md:gap-16 md:space-y-0 p-4 space-y-8">
        <div className="md:my-4 w-full my-6 space-y-6">
          <div className="shrink-0 flex gap-4">
            <div className="text-6xl font-bold leading-none">
              {avgRating.toFixed(1)}
            </div>
            <div className="flex flex-col gap-1.5 justify-center">
              <Rating rating={avgRating} />
              <div className="text-sm font-medium leading-none text-gray-500">
                {totalReviews} reviews
              </div>
            </div>
          </div>
          <div className="sm:mt-0 flex-1 min-w-0 mt-6 space-y-3">
            {Object.entries(reviewsByRating)
              .sort((a, b) => Number(b[0]) - Number(a[0]))
              .map(([rating, ratingData]) => (
                <ReviewBar
                  key={rating}
                  rating={Number(rating)}
                  {...ratingData}
                />
              ))}
          </div>
        </div>
        <div className="grow mt-6 divide-y divide-gray-200">
          {reviewsToRender.map((review: AliReview) => (
            <ReviewItem key={review.id} review={review} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="p-8 text-center">No reviews yet!</div>
    </div>
  );
}

function getReviewsSummary(allReviews: AliReview[]) {
  let totalReviews = allReviews.length;
  let avgRating =
    totalReviews > 0
      ? allReviews.reduce((acc, curr) => acc + curr.star, 0) / totalReviews
      : 0;
  let reviewsByRating = allReviews.reduce(
    (acc, curr) => {
      if (curr.star) {
        acc[curr.star].count += 1;
        acc[curr.star].avg = acc[curr.star].count / totalReviews;
      }
      return acc;
    },
    {
      5: {count: 0, avg: 0},
      4: {count: 0, avg: 0},
      3: {count: 0, avg: 0},
      2: {count: 0, avg: 0},
      1: {count: 0, avg: 0},
    } as {
      [rating: number]: {
        count: number;
        avg: number;
      };
    },
  );
  return {
    totalReviews,
    avgRating,
    reviewsByRating,
  };
}
