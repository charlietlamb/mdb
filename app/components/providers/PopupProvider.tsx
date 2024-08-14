import {Product} from '@shopify/hydrogen/storefront-api-types';
import {useEffect} from 'react';
import {usePopupStore} from '~/lib/state/popup/store';

export default function PopupProvider({
  products,
  children,
}: {
  products: Product[];
  children: React.ReactNode;
}) {
  const {setProducts} = usePopupStore();
  useEffect(() => {
    setProducts(products);
  }, []);
  return <>{children}</>;
}
