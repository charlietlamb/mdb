import MuxPlayer from '@mux/mux-player-react';
import React from 'react';

export default function WhoContentDaughterCard3() {
  return (
    <div className="bg-primary-200 ring-4 ring-offset-4 ring-offset-accent-500 ring-primary-200 relative flex flex-col p-2 rounded-lg">
      <MuxPlayer
        streamType="on-demand"
        playbackId="pNnVdHi6tbMQgCFI3BimkTpvHPTlvHogEkL801llTQU00"
        metadataVideoTitle="Your Own Melody"
        metadataViewerUserId="Create Your Own Melody"
        primaryColor="#e4e4e7"
        secondaryColor="#0F172A"
        // autoPlay
        className="absolute inset-0 z-10 min-w-full min-h-full overflow-hidden rounded-lg"
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
    </div>
  );
}
