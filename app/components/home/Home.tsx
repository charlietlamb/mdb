import {Product} from '@shopify/hydrogen/storefront-api-types';
import Faq from './faq/Faq';
import Hero from './hero/Hero';
import Reviews from './reviews/Reviews';
import Stats from './stats/Stats';
import Who from './who/Who';
import {useEffect} from 'react';
import {PopupTypeHome} from '~/data/who/types/WhoType';
import Target from '../target/Target';
import Collection from './collection/Collection';
import {useFunnelStore} from '~/lib/state/store';

export default function Home({funnel = 'home'}: {funnel?: PopupTypeHome}) {
  const {setFunnel} = useFunnelStore();
  useEffect(() => {
    setFunnel(funnel);
  }, []);
  return (
    <div className="flex flex-col gap-8 bg-white">
      <Hero />
      {funnel !== 'home' && <Target />}
      <Collection />
      <Who />
      <Stats />
      <Reviews />
      <Faq />
    </div>
  );
}
