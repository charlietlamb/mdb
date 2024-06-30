import MuxPlayer from '@mux/mux-player-react';
import {Button} from '~/components/ui/button';

export default function InfoVideo() {
  return (
    <div className="relative z-10 flex flex-col items-center w-full gap-8 py-8">
      <div className="flex flex-col items-center gap-2">
        <h3 className="text-5xl font-bold">How it works</h3>
        <p className="text-primary-700 text-xl text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius minus
          saepe numquam voluptatum quae porro id atque laborum dolorum? Sequi at
          dolores nesciunt qui dicta itaque minima illo ea provident?
        </p>
      </div>
      <MuxPlayer
        streamType="on-demand"
        playbackId="00a8vahkdQR5YUW005Y9d7tJe1S00g9Q7QODUljOF6ohbk"
        metadataVideoTitle="Your Own Melody"
        metadataViewerUserId="Create Your Own Melody"
        primaryColor="#e4e4e7"
        secondaryColor="#0F172A"
        // autoPlay

        className="relative z-10 overflow-hidden rounded-lg"
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
      <p className="text-primary-700 text-xl text-center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius minus
        saepe numquam voluptatum quae porro id atque laborum dolorum? Sequi at
        dolores nesciunt qui dicta itaque minima illo ea provident?
      </p>
      <Button className="text-lg font-bold uppercase">Start your song</Button>
    </div>
  );
}
