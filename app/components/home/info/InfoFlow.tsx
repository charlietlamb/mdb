import {Disc, Palette, Rabbit, Sparkles} from 'lucide-react';
import InfoBox from './InfoBox';
import {useRef} from 'react';
import ConnectingLine from './ConnectingLine';
import InfoVideo from './InfoVideo';
import {motion} from 'framer-motion';
import {Button} from '~/components/ui/button';
import {setOpen} from '~/store/create/createSlice';
import {useAppDispatch} from '~/lib/hooks';

export default function Flow() {
  const box1 = useRef<HTMLDivElement | null>(null);
  const box2 = useRef<HTMLDivElement | null>(null);
  const box3 = useRef<HTMLDivElement | null>(null);
  const iconClassName = 'size-10';
  const textClassName =
    'max-w-[70%] h4-size text-center text-accent-500 font-medium';
  const dispatch = useAppDispatch();
  return (
    <div className="relative flex flex-col w-full gap-8">
      <InfoBox
        ref={box1}
        className="w-full"
        title={'What is an original song?'}
        text={
          <p className={textClassName}>
            It's a one-of-a-kind, radio-quality song based on your stories,
            memories, and ideas. Our community of the best singers, songwriters,
            and musical talent will write and record your original song in 5
            days or less.
          </p>
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
            <p className={textClassName}>
              Fill in a short form with your stories, memories, and ideas.
              <br /> <br />
              The more details you provide, the better the song will be!
            </p>
          }
          icon={<Sparkles className={iconClassName} />}
          index={1}
        />
        <InfoBox
          ref={box2}
          className="w-full text-center"
          title={'Our Artists Perfect'}
          text={
            <p className={textClassName}>
              Our team will hand pick the best talented artist based on the
              story you provide. <br /> <br />
              They will write, perform, and perfect an original song that will
              leave your loved ones speechless.
            </p>
          }
          icon={<Palette className={iconClassName} />}
          index={2}
        />
        <InfoBox
          ref={box3}
          className="w-full text-center"
          title={'Fast Delivery!'}
          text={
            <p className={textClassName}>
              Get your personalized, one of a kind song delivered to you in 3-5
              days! <br /> <br />
              Share it with your loved ones and see the magic unfold, make sure
              to send us their reaction!
            </p>
          }
          icon={<Rabbit className={iconClassName} />}
          index={3}
        />
      </div>
      <motion.div
        initial={{opacity: 0, x: -100}}
        whileInView={{opacity: 1, x: 0}}
        transition={{duration: 1}}
        viewport={{once: true}}
      >
        <Button
          style={{pointerEvents: 'auto'}}
          onClick={() => dispatch(setOpen(true))}
          className="h3-size lg:w-1/4 flex items-center w-1/2 gap-2 mx-auto text-lg font-semibold"
        >
          Start Your Song
          <Disc />
        </Button>
      </motion.div>
    </div>
  );
}
