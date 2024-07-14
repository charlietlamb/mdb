import MuxPlayer from '@mux/mux-player-react';
import React from 'react';

export default function TargetVideo() {
  return (
    <MuxPlayer
      streamType="on-demand"
      playbackId="00a8vahkdQR5YUW005Y9d7tJe1S00g9Q7QODUljOF6ohbk"
      metadataVideoTitle="Your Own Melody"
      metadataViewerUserId="Create Your Own Melody"
      primaryColor="#e4e4e7"
      secondaryColor="#0F172A"
      className="relative z-10 w-full mx-auto overflow-hidden rounded-lg"
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
  );
}
