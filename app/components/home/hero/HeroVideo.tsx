import MuxPlayer from '@mux/mux-player-react';
import {MicVocal} from 'lucide-react';
import {Button} from '~/components/ui/button';
import {useAppDispatch} from '~/lib/hooks';
import {setOpen} from '~/store/create/createSlice';

export default function HeroVideo() {
  const dispatch = useAppDispatch();
  return (
    <div className="relative w-full">
      <MuxPlayer
        streamType="on-demand"
        playbackId="00a8vahkdQR5YUW005Y9d7tJe1S00g9Q7QODUljOF6ohbk"
        metadataVideoTitle="Your Own Melody"
        metadataViewerUserId="Create Your Own Melody"
        primaryColor="#e4e4e7"
        secondaryColor="#0F172A"
        className="relative z-10 w-full min-w-full overflow-hidden rounded-lg"
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
        <div className="h-1/3 lg:gap-4 relative z-20 flex flex-col items-center justify-center gap-2">
          <div className="flex flex-col items-center">
            <h1 className="text-primary-900 h1-size font-bold">
              Create Your Own Melody
            </h1>
            <p className="text-primary-700 h3-size">
              Get a one of a kind song for{' '}
              <span className="text-accent-500">someone you love</span>
            </p>
          </div>
          <Button
            style={{pointerEvents: 'auto'}}
            onClick={() => dispatch(setOpen(true))}
            className="h3-size flex items-center gap-2"
          >
            Start Your Song
            <MicVocal />
          </Button>
        </div>
        <div className="top-1/2 bg-gradient-to-b from-transparent via-50% via-primary-200/90 to-primary-200 absolute bottom-0 left-0 right-0" />
      </div>
    </div>
  );
}
