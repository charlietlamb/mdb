import React from 'react';
import WhoContentDaughterCard1 from './daughter/WhoContentDaughterCard1';
import WhoContentDaughterCard2 from './daughter/WhoContentDaughterCard2';
import WhoContentDaughterCard3 from './daughter/WhoContentDaughter3';

export default function WhoContentDaughter() {
  return (
    <div className="md:grid-cols-4 grid grid-cols-1 gap-8">
      <WhoContentDaughterCard1 />
      <WhoContentDaughterCard2 />
      <WhoContentDaughterCard3 />
      <WhoContentDaughterCard1 />
    </div>
  );
}
