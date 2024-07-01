import {faker} from '@faker-js/faker';

export default function ReviewSlider() {
  const reviews = Array.from({length: 7}, (_, index) => ({
    id: index,
    image: faker.image.avatarLegacy(),
    name: faker.person.fullName(),
    designation: faker.lorem.sentence(),
  }));
  return (
    <div>
      {/* {reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))} */}
    </div>
  );
}
