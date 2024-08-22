import {Product} from '@shopify/hydrogen/storefront-api-types';
import {useEffect} from 'react';
import {useMediaQuery} from 'react-responsive';
import {usePopupStore} from '~/lib/state/popup/store';

export default function PopupProvider({
  products,
  children,
}: {
  products: Product[];
  children: React.ReactNode;
}) {
  const {setMobileOpen, setProducts} = usePopupStore();
  const isSmallScreen = useMediaQuery({query: '(max-width: 768px)'});
  useEffect(() => {
    setProducts(products);
  }, []);

  useEffect(() => {
    if (!isSmallScreen) setMobileOpen(false);
  }, [isSmallScreen]);

  return <>{children}</>;
}
