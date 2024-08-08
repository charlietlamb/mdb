import {motion} from 'framer-motion';

export default function StatsNums() {
  return (
    <motion.div
      className="md:grid-cols-3 md:gap-0 grid w-full grid-cols-1 gap-4 my-8"
      initial={{opacity: 0, x: 100}}
      whileInView={{opacity: 1, x: 0}}
      transition={{duration: 1}}
      viewport={{once: true}}
    >
      <div className="flex flex-col items-center">
        <p className="font-larken text-5xl font-bold">
          350<span className="h3-size">k+</span>
        </p>
        <p className="text-accent-400 h5-size leading-none text-center">
          New opportunities <br className="md:flex hidden" />
          created for artists
        </p>
      </div>
      <div className="flex flex-col items-center">
        <p className="font-larken text-5xl font-bold">
          <span className="text-4xl">$</span>30
          <span className="text-4xl">M+</span>
        </p>
        <p className="text-accent-400 h5-size leading-none text-center">
          Paid to the artist
          <br className="md:flex hidden" /> community
        </p>
      </div>
      <div className="flex flex-col items-center">
        <p className="font-larken text-5xl font-bold">
          1<span className="text-4xl">M+</span>
        </p>
        <p className="text-accent-400 h5-size leading-none text-center">
          New Fans <br className="md:flex hidden" />
          created
        </p>
      </div>
    </motion.div>
  );
}
