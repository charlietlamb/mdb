import {Disc, Palette, Rabbit, Sparkles} from 'lucide-react';
import InfoBox from './InfoBox';
import {useRef} from 'react';
import ConnectingLine from './ConnectingLine';

export default function Flow() {
  const box1 = useRef<HTMLDivElement | null>(null);
  const box2 = useRef<HTMLDivElement | null>(null);
  const box3 = useRef<HTMLDivElement | null>(null);
  const iconClassName = 'size-10';
  return (
    <div className="relative flex flex-col w-full gap-8">
      <InfoBox
        ref={box1}
        className="w-2/3"
        title={'What is an original song?'}
        text={
          'Share Your Story Share Your Story Share Your Story Share Your Story Share Your Story Share Your Story Share Your Story Share Your Story '
        }
        icon={<Disc className={iconClassName} />}
        index={0}
      />
      <InfoBox
        ref={box1}
        className="w-2/3 ml-auto"
        title={'Share Your Story'}
        text={
          'Share Your Story Share Your Story Share Your Story Share Your Story Share Your Story Share Your Story Share Your Story Share Your Story '
        }
        icon={<Sparkles className={iconClassName} />}
        index={1}
      />
      <InfoBox
        ref={box2}
        className="w-2/3"
        title={'Let the artists do the rest!'}
        text={
          'Share Your Story Share Your Story Share Your Story Share Your Story Share Your Story Share Your Story Share Your Story Share Your Story '
        }
        icon={<Palette className={iconClassName} />}
        index={2}
      />
      <InfoBox
        ref={box3}
        className=" w-2/3 ml-auto"
        title={'Fast Delivery!'}
        text={
          'Get your personalized, one of a kind song delivered to you in 3-5 days!'
        }
        icon={<Rabbit className={iconClassName} />}
        index={4}
      />
    </div>
  );
}
