import {Collection, Product} from '@shopify/hydrogen/storefront-api-types';
import {useEffect} from 'react';
import {useMediaQuery} from 'react-responsive';
import {usePopupStore} from '~/lib/state/popup/store';

export default function PopupProvider({
  products,
  bestSellers,
  collections,
  children,
}: {
  products: Product[];
  bestSellers: Product[];
  collections: Collection[];
  children: React.ReactNode;
}) {
  const {setMobileOpen, setProducts, setBestSellers, setCollections} =
    usePopupStore();
  const isSmallScreen = useMediaQuery({query: '(max-width: 768px)'});
  useEffect(() => {
    setProducts(shuffle(products).slice(0, 5));
    setBestSellers(bestSellers);
    setCollections(collections);
  }, []);

  useEffect(() => {
    if (!isSmallScreen) setMobileOpen(false);
  }, [isSmallScreen]);

  return <>{children}</>;
}

export function shuffle<T>(array: T[]): T[] {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
