import StatsNums from './StatsNums';
import {motion} from 'framer-motion';
export default function Stats() {
  return (
    <div className="padding-main flex flex-col items-center gap-8 py-16">
      <div className="flex flex-col gap-8 px-8">
        <div className="flex flex-col gap-2">
          <motion.h3
            className="h2-size font-bold text-center"
            initial={{opacity: 0, x: 100}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 1}}
            viewport={{once: true}}
          >
            Only .002% of musicians currently make a full-time living in music
          </motion.h3>
          <motion.p
            className="text-primary-700 h3-size leading-none text-center"
            initial={{opacity: 0, x: -100}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 1}}
            viewport={{once: true}}
          >
            Together, we're changing that. When you request an original song,
            you're giving a musician the chance to turn their passion into a
            living.
          </motion.p>
        </div>
        <StatsNums />
      </div>
    </div>
  );
}
