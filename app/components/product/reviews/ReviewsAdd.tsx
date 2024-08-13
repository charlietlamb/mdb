import {useState} from 'react';
import {Button} from '~/components/ui/button';
import {Input} from '~/components/ui/input';

export default function ReviewsAdd() {
  const [reviewInput, setReviewInput] = useState('');

  async function submitReview(reviewInput: string) {
    const reviewData = {
      // Replace with actual review data fields
      productId: '8550571835737',
      userId: '67890',
      rating: 5,
      comment: reviewInput,
    };

    try {
      const response = await fetch(
        'https://widget-hub-api.alireviews.io/api/public/reviews',
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer 43aad528abab14f50c7fe48a85e0757d`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(reviewData),
        },
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Review submitted successfully:', result);
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  }

  return (
    <div>
      <Input
        placeholder="Add a review"
        onChange={(e) => setReviewInput(e.target.value)}
      />
      <Button onClick={() => submitReview(reviewInput)}>Add</Button>
    </div>
  );
}
