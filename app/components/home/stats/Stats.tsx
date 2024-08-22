import {motion} from 'framer-motion';
import BaResults from './BaResults';
export default function Stats() {
  return (
    <div className="padding-main bg-primary flex flex-col items-center gap-8 py-16 text-white">
      <div className="flex flex-col gap-8 px-8">
        <div className="flex flex-col gap-2">
          <motion.h3
            className="h2-size font-larken font-bold text-center"
            initial={{opacity: 0, x: 100}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 1}}
            viewport={{once: true}}
          >
            Our results speak for themselves.
          </motion.h3>
          <motion.p
            className="text-accent-300 h3-size leading-none text-center"
            initial={{opacity: 0, x: -100}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 1}}
            viewport={{once: true}}
          >
            Our products make a difference, transforming your skincare journey.
          </motion.p>
        </div>
        <BaResults />
      </div>
    </div>
  );
}
