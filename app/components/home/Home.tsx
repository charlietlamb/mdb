import {Product} from '@shopify/hydrogen/storefront-api-types';
import Faq from './faq/Faq';
import Hero from './hero/Hero';
import Info from './info/Info';
import Reviews from './reviews/Reviews';
import Stats from './stats/Stats';
import Who from './who/Who';
import {useAppDispatch} from '~/lib/hooks';
import {useEffect} from 'react';
import {setProduct} from '~/store/product/productSlice';

export default function Home({song}: {song: Product}) {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setProduct(song));
  }, []);
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
