import {AnimatedTooltip} from '~/components/aceternity/AnimatedTooltip';
import {faker} from '@faker-js/faker';
import {motion} from 'framer-motion';
import UpworkDialog from '~/components/upwork/UpworkDialog';
import {upworkData} from '~/components/upwork/data/upworkData';
import {UpworkDataType} from '~/components/upwork/data/UpworkDataType';

export default function Reviews() {
  const reviews = Array.from({length: 7}, (_, index) => ({
    id: index,
    image: faker.image.avatarLegacy(),
    name: faker.person.fullName(),
    designation: faker.lorem.sentence(),
  }));
  return (
    <div className="padding-main text-primary flex flex-col items-center gap-8 py-16">
      <motion.div
        initial={{opacity: 0, x: -100}}
        whileInView={{opacity: 1, x: 0}}
        transition={{duration: 1}}
        viewport={{once: true}}
        className="flex flex-col gap-2"
      >
        <h3 className="h2-size font-larken font-bold text-center">
          Join hundreds of thousands who’ve created their own melody
        </h3>
        <div className="flex items-center justify-center w-full">
          <AnimatedTooltip items={reviews} />
        </div>
      </motion.div>
    </div>
  );
}
