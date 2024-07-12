import WhoTabs from './WhoTabs';
import {motion} from 'framer-motion';

export default function Who() {
  return (
    <div className="padding-main bg-accent-500 bg-dot-white/50 flex flex-col w-full gap-4 py-8">
      <motion.h3
        className="text-primary-100 h2-size font-bold"
        initial={{opacity: 0, x: 100}}
        whileInView={{opacity: 1, x: 0}}
        transition={{duration: 1}}
        viewport={{once: true}}
      >
        Over 350,000 original songs created for people just like you
      </motion.h3>
      <motion.p
        className="text-primary-200 h3-size"
        initial={{opacity: 0, x: -100}}
        whileInView={{opacity: 1, x: 0}}
        transition={{duration: 1}}
        viewport={{once: true}}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, maxime
        consequatur. Tempore quisquam veritatis incidunt quaerat, nesciunt
        excepturi tempora quam, ea quia ad aspernatur eum dolore aliquam
        provident asperiores repellendus.
      </motion.p>
      <WhoTabs />
    </div>
  );
}
