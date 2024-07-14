import {Product} from '@shopify/hydrogen/storefront-api-types';
import Faq from './faq/Faq';
import Hero from './hero/Hero';
import Info from './info/Info';
import Reviews from './reviews/Reviews';
import Stats from './stats/Stats';
import Who from './who/Who';
import {useAppDispatch} from '~/lib/hooks';
import {useEffect} from 'react';
import {setProduct, setWho} from '~/store/product/productSlice';
import {WhoTypeHome} from '~/data/who/types/WhoType';
import Target from '../target/Target';

export default function Home({
  song,
  who = 'home',
}: {
  song: Product;
  who?: WhoTypeHome;
}) {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setProduct(song));
    dispatch(setWho(who));
  }, []);
  return (
    <div className="bg-dot-black/20 bg-primary-200 flex flex-col gap-8 py-4">
      <Hero />
      {who !== 'home' && <Target />}
      <Info />
      <Who />
      <Stats />
      <Reviews />
      <Faq />
    </div>
  );
}
