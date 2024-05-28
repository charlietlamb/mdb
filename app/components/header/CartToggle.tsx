import {Await} from '@remix-run/react';
import {Suspense} from 'react';
import {HeaderProps} from './types/HeaderProps';
import Cart from '~/components/cart/Cart';

export function CartToggle({cart}: Pick<HeaderProps, 'cart'>) {
  return (
    <Suspense fallback={<Cart count={0} />}>
      <Await resolve={cart}>
        {(cart) => {
          if (!cart) return <Cart count={0} />;
          return <Cart count={cart.totalQuantity || 0} />;
        }}
      </Await>
    </Suspense>
  );
}
