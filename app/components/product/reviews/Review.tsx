import clsx from 'clsx';
import {Check, X} from 'lucide-react';
import {useState} from 'react';
import {Rating} from './ReviewRating';

export type AliReview = {
  id: number;
  product_id: number;
  order_id: number;
  author: string;
  country: string;
  star: number;
  content: string;
  email: string;
  media: ReviewMedia[];
  total_likes: number;
  total_dislikes: number;
  created_at: string;
  updated_at: string;
  shop_id: number;
  reply: any;
};

type ReviewMedia = {
  id: number;
  product_id: number;
  comment_id: number;
  type: string;
  url: string;
  created_at: string;
  metadata: any[];
};

export type ReviewItemData = {
  showCountry: boolean;
  showDate: boolean;
  showVerifiedBadge: boolean;
  verifiedBadgeText: string;
  showStar: boolean;
};

type ReviewItemProps = ReviewItemData & {
  review: AliReview;
};

export type ReviewFetch = {
  data: {
    reviews: AliReview[];
    cursor: string;
  };
  status: boolean;
  message: string;
};

export function ReviewItem({review}: {review: AliReview}) {
  const [previewMedia, setPreviewMedia] = useState<ReviewMedia | null>(null);
  return (
    <div className="gap-3 py-6 space-y-4">
      <div className="md:flex justify-between w-full space-y-2">
        <div className="space-y-0.5">
          <div className="flex items-center gap-2">
            <span className="text-base font-semibold">{review.author}</span>
            {/* {showCountry && (
              <ReactCountryFlag
                svg
                countryCode={review.country}
                style={{width: '24px', height: '14px'}}
                className="mb-0.5"
              />
            )} */}
          </div>
          <p className="text-sm font-normal text-gray-500">
            {formatDate(review.created_at)}
          </p>
        </div>
        <div className="flex items-center gap-6">
          <div className="inline-flex items-center gap-1">
            <Check className="w-4 h-4 text-white" fill="black" />
            <p className="text-xs">Verfied</p>
          </div>
          <div className="flex items-center gap-0.5">
            <Rating rating={review.star} />
          </div>
        </div>
      </div>
      <div className="sm:mt-0 flex-1 min-w-0 mt-4 space-y-4">
        <p className="text-base font-normal">{review.content}</p>
        <div className="flex flex-wrap gap-3">
          {review.media.map((media) => (
            <div
              key={media.id}
              role="button"
              className={clsx(
                'flex items-center justify-center bg-gray-800 w-20 h-20 overflow-hidden cursor-pointer',
                'outline-offset-2 hover:outline hover:outline-2 hover:outline-gray-500',
                previewMedia?.id === media.id &&
                  'outline outline-2 outline-gray-500',
              )}
              onClick={() => {
                if (previewMedia?.id === media.id) {
                  setPreviewMedia(null);
                } else {
                  setPreviewMedia(media);
                }
              }}
            >
              <img
                className="object-cover object-center w-full h-full"
                src={media.url}
                alt="Review media"
              />
            </div>
          ))}
        </div>
        <ReviewMediaPreview
          media={previewMedia}
          closePreview={() => setPreviewMedia(null)}
        />
      </div>
    </div>
  );
}

function ReviewMediaPreview(props: {
  media: ReviewMedia | null;
  closePreview: () => void;
}) {
  let {media, closePreview} = props;
  if (media) {
    return (
      <div className="flex items-start gap-2">
        <div className="w-96 h-96 flex items-center justify-center overflow-hidden bg-gray-800">
          <img
            className="object-cover max-w-full max-h-full"
            src={media.url}
            alt="Review media preview"
          />
        </div>
        <X
          className="w-5 h-5 text-gray-600 cursor-pointer"
          onClick={closePreview}
        />
      </div>
    );
  }
  return null;
}

function formatDate(date: string) {
  let dateObj = new Date(date);
  let dateStr = dateObj.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  let timeStr = dateObj.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
  });
  return `${dateStr} at ${timeStr}`;
}
