import React, {Suspense} from 'react';
import {CartMain} from './CartMain';
import {useRootLoaderData} from '~/lib/root-data';
import {Await} from '@remix-run/react';

export default function CartContent() {
  const rootData = useRootLoaderData();
  const cartPromise = rootData.cart;
  return (
    <Suspense fallback={<p>Loading cart ...</p>}>
      <Await resolve={cartPromise} errorElement={<div>An error occurred?</div>}>
        {(cart) => {
          return <CartMain layout="page" cart={cart} />;
        }}
      </Await>
    </Suspense>
  );
}
