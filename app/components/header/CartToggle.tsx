import {Await} from '@remix-run/react';
import {Suspense} from 'react';
import {CartBadge} from './CartBadge';
import {HeaderProps} from './types/HeaderProps';

export function CartToggle({cart}: Pick<HeaderProps, 'cart'>) {
  return (
    <Suspense fallback={<CartBadge count={0} />}>
      <Await resolve={cart}>
        {(cart) => {
          if (!cart) return <CartBadge count={0} />;
          return <CartBadge count={cart.totalQuantity || 0} />;
        }}
      </Await>
    </Suspense>
  );
}
