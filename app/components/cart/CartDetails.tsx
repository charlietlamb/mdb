import {CartCheckoutActions} from './CartCheckoutActions';
import {CartDiscounts} from './CartDiscounts';
import {CartLines} from './CartLines';
import {CartSummary} from './CartSummary';
import {CartMainProps} from './types/CartMainProps';

export function CartDetails({layout, cart}: CartMainProps) {
  const cartHasItems = !!cart && cart.totalQuantity > 0;

  return (
    <div className="flex flex-col gap-4">
      <CartLines lines={cart?.lines} layout={layout} />
      {cartHasItems && (
        <CartSummary cost={cart.cost} layout={layout}>
          <CartDiscounts discountCodes={cart.discountCodes} />
          <CartCheckoutActions checkoutUrl={cart.checkoutUrl} />
        </CartSummary>
      )}
    </div>
  );
}
