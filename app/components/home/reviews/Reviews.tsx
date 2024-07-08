import {AnimatedTooltip} from '~/components/aceternity/AnimatedTooltip';
import ReviewSlider from './ReviewSlider';
import {faker} from '@faker-js/faker';

export default function Reviews() {
  const reviews = Array.from({length: 7}, (_, index) => ({
    id: index,
    image: faker.image.avatarLegacy(),
    name: faker.person.fullName(),
    designation: faker.lorem.sentence(),
  }));
  return (
    <div className="padding-main bg-accent-500 bg-dot-white/50 flex flex-col py-16">
      <h3 className="h2-size font-bold text-white">
        Join hundreds of thousands who’ve created their own melody
      </h3>
      <div className="flex">
        <AnimatedTooltip items={reviews} />
      </div>
      <ReviewSlider />
    </div>
  );
}
