import Faq from './faq/Faq';
import Hero from './hero/Hero';
import Info from './info/Info';
import Reviews from './reviews/Reviews';
import Stats from './stats/Stats';
import Who from './who/Who';

export default function Home() {
  return (
    <div className="bg-dot-black/20 bg-primary-200 flex flex-col gap-8 py-8">
      <Hero />
      <Info />
      <Who />
      <Stats />
      <Reviews />
      <Faq />
    </div>
  );
}
