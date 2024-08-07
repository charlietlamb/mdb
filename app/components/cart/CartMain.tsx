import {CartDetails} from './CartDetails';
import {CartEmpty} from './CartEmpty';
import {CartMainProps} from './types/CartMainProps';

//if there is an error with discount code could be here
export function CartMain({layout, cart}: CartMainProps) {
  const linesCount = Boolean(cart?.lines?.nodes?.length || 0);
  const withDiscount =
    cart &&
    Boolean(cart?.discountCodes?.filter((code) => code.applicable)?.length);
  return (
    <div className="flex flex-col w-full gap-2">
      <div className="flex flex-col">
        <h3 className="text-2xl font-semibold leading-none">Cart</h3>
        {linesCount && (
          <p className="text-primary-500">
            Below Are The Items Currently In Your Cart.
          </p>
        )}
      </div>
      <CartEmpty hidden={linesCount} layout={layout} />
      <CartDetails cart={cart} layout={layout} />
    </div>
  );
}
