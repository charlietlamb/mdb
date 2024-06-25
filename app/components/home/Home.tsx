import Faq from './faq/Faq';
import Hero from './hero/Hero';
import Who from './who/Who';

export default function Home() {
  return (
    <div className="flex flex-col py-8">
      <Hero />
      <Faq />
      <Who />
      <Faq />
    </div>
  );
}
