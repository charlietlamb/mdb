import {AnimatedTooltip} from '~/components/aceternity/AnimatedTooltip';
import {items} from '~/data/reviews/items';
import {faker} from '@faker-js/faker';

export default function Reviews() {
  return (
    <div className="padding-main bg-accent-500 bg-dot-white/50 flex flex-col py-16">
      <h3 className="text-4xl font-bold text-white">
        Join hundreds of thousands who’ve created their own melody
      </h3>
      <div className="flex">
        <AnimatedTooltip
          items={Array.from({length: 7}, (_, index) => ({
            id: index,
            image: faker.image.avatarLegacy(),
            name: faker.person.fullName(),
            designation: faker.lorem.sentence(),
          }))}
        />
      </div>
    </div>
  );
}
