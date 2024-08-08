import {
  Collection as CollectionType,
  Product,
} from '@shopify/hydrogen/storefront-api-types';
import Faq from './faq/Faq';
import Hero from './hero/Hero';
import Reviews from './reviews/Reviews';
import Stats from './stats/Stats';
import {useEffect} from 'react';
import {PopupTypeHome} from '~/data/who/types/WhoType';
import Target from '../target/Target';
import {useFunnelStore} from '~/lib/state/store';
import {FeaturedCollection} from './FeaturedCollection';

export default function Home({
  featuredProducts,
  funnel = 'home',
}: {
  featuredProducts: Product[] | undefined;
  funnel?: PopupTypeHome;
}) {
  const {setFunnel} = useFunnelStore();
  useEffect(() => {
    setFunnel(funnel);
  }, []);
  return (
    <div className="bg-dot-primary/20 flex flex-col gap-8 bg-white">
      <Hero />
      {funnel !== 'home' && <Target />}
      <FeaturedCollection products={featuredProducts} />
      <Stats />
      <Reviews />
      <Faq />
    </div>
  );
}
