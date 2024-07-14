import {Disc, Palette, Rabbit, Sparkles} from 'lucide-react';
import InfoBox from './InfoBox';
import {useRef} from 'react';
import ConnectingLine from './ConnectingLine';
import InfoVideo from './InfoVideo';
import {motion} from 'framer-motion';

export default function Flow() {
  const box1 = useRef<HTMLDivElement | null>(null);
  const box2 = useRef<HTMLDivElement | null>(null);
  const box3 = useRef<HTMLDivElement | null>(null);
  const iconClassName = 'size-10';
  return (
    <div className="relative flex flex-col w-full gap-8">
      <InfoBox
        ref={box1}
        className="w-full"
        title={'What is an original song?'}
        text={
          'Share Your Story Share Your Story Share Your Story Share Your Story Share Your Story Share Your Story Share Your Story Share Your Story '
        }
        icon={<Disc className={iconClassName} />}
        index={0}
      />
      <motion.div
        className="flex flex-col items-center w-full gap-2"
        initial={{opacity: 0, x: -100}}
        whileInView={{opacity: 1, x: 0}}
        transition={{duration: 1}}
        viewport={{once: true}}
      >
        <h3 className="h2-size w-full font-bold text-center">How it works?</h3>
        <InfoVideo />
      </motion.div>
      <div className="md:grid-cols-3 grid grid-cols-1 gap-8">
        <InfoBox
          ref={box1}
          className="w-full text-center"
          title={'Share Your Story'}
          text={
            'Share Your Story Share Your Story Share Your Story Share Your Story Share Your Story Share Your Story Share Your Story Share Your Story '
          }
          icon={<Sparkles className={iconClassName} />}
          index={1}
        />
        <InfoBox
          ref={box2}
          className="w-full text-center"
          title={'Let the artists do the rest!'}
          text={
            'Share Your Story Share Your Story Share Your Story Share Your Story Share Your Story Share Your Story Share Your Story Share Your Story '
          }
          icon={<Palette className={iconClassName} />}
          index={2}
        />
        <InfoBox
          ref={box3}
          className="w-full text-center"
          title={'Fast Delivery!'}
          text={
            'Get your personalized, one of a kind song delivered to you in 3-5 days!'
          }
          icon={<Rabbit className={iconClassName} />}
          index={3}
        />
      </div>
    </div>
  );
}
