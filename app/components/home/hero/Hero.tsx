import {WhoType} from '~/data/who/types/WhoType';
import HeroVideo from './HeroVideo';
import {motion} from 'framer-motion';

export default function Hero() {
  return (
    <motion.div
      className="padding-main flex flex-col items-center"
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 2}}
      viewport={{amount: 'some'}}
    >
      <HeroVideo />
    </motion.div>
  );
}
