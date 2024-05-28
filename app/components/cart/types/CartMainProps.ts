import {CartApiQueryFragment} from 'storefrontapi.generated';

export type CartMainProps = {
  cart: CartApiQueryFragment | null;
  layout: 'page' | 'aside';
};
