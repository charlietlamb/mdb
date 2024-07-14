import MuxPlayer from '@mux/mux-player-react';
import {Disc} from 'lucide-react';
import {Button} from '~/components/ui/button';
import {heroVideo} from '~/copy/heroVideo/heroVideo';
import {useAppDispatch, useAppSelector} from '~/lib/hooks';
import {cn} from '~/lib/utils';
import {setOpen} from '~/store/create/createSlice';

export default function HeroVideo() {
  const dispatch = useAppDispatch();
  const who = useAppSelector((state) => state.product.who);
  return (
    <div className="relative w-full h-full">
      <MuxPlayer
        streamType="on-demand"
        playbackId="00a8vahkdQR5YUW005Y9d7tJe1S00g9Q7QODUljOF6ohbk"
        metadataVideoTitle="Your Own Melody"
        metadataViewerUserId="Create Your Own Melody"
        primaryColor="#e4e4e7"
        secondaryColor="#0F172A"
        className="relative z-10 w-full min-w-full overflow-hidden rounded-lg"
        autoPlay
        style={
          {
            '--seek-backward-button': 'none',
            '--seek-forward-button': 'none',
            '--mute-button': 'none',
            '--captions-button': 'none',
            '--airplay-button': 'none',
            '--pip-button': 'none',
            '--fullscreen-button': 'none',
            '--cast-button': 'none',
            '--playback-rate-button': 'none',
            '--volume-range': 'none',
            '--time-range': 'none',
            '--time-display': 'none',
            '--duration-display': 'none',
            '--rendition-selectmenu': 'none',
          } as React.CSSProperties
        }
      />
      <div
        className="absolute inset-0 z-10 flex flex-col justify-end"
        style={{pointerEvents: 'none'}}
      >
        <div
          className={cn(
            'md:h-1/3 h-1/2 lg:gap-4 relative z-20 flex flex-col items-center justify-center md:gap-2',
            who !== 'home' && 'h-1/3',
          )}
        >
          <div className="md:gap-2 flex flex-col items-center text-center">
            {heroVideo[who].heading}
            {heroVideo[who].subHeading}
          </div>
          <Button
            style={{pointerEvents: 'auto'}}
            onClick={() => dispatch(setOpen(true))}
            className="h3-size flex items-center gap-2"
          >
            Start Your Song
            <Disc />
          </Button>
        </div>
        <div
          className={cn(
            'md:top-1/2 top-1/4  bg-gradient-to-b from-transparent via-50% via-primary-200/90 to-primary-200 absolute bottom-0 left-0 right-0',
            who !== 'home' && 'top-1/3',
          )}
        />
      </div>
    </div>
  );
}
