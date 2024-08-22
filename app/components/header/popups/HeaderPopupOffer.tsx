import {ChevronLeft} from 'lucide-react';
import {useHeaderContext} from '../context/headerContext';
import {AnimatePresence, motion} from 'framer-motion';

export default function HeaderPopupOffer() {
  const {setHeaderKey} = useHeaderContext();
  return (
    <AnimatePresence>
      <motion.div
        className="md:flex-row md:items-start text-primary-700 flex flex-col items-center w-full gap-4"
        initial={{opacity: 0, x: 100}}
        animate={{opacity: 1, x: 0, transition: {duration: 0.6}}}
        exit={{opacity: 0, x: -100, transition: {duration: 0.6}}}
      >
        <div
          className="text-primary whitespace-nowrap text-start md:hidden flex items-center justify-between w-full text-lg font-normal uppercase cursor-pointer"
          onClick={() => setHeaderKey(null)}
        >
          <ChevronLeft className="w-4 h-4" />
          Back
        </div>
        {/* <img src="/images/logoFull.jpg" alt="our-story" className="size-40" /> */}
        <div className="flex flex-col h-full gap-1">
          <h4 className="font-larken h2-size font-semibold">Our Offer</h4>
          <p>
            Enjoy a free gift with your order!
            <br /> We make our products to put a smile on your face.
            <br /> We are a family owned business that has produces natural,
            organic, and non-GMO cosmetics.
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
