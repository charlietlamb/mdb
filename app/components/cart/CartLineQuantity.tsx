import {CartLine} from '@shopify/hydrogen/storefront-api-types';
import {CartLineUpdateButton} from './CartLineUpdateButton';
import {CartLineRemoveButton} from './CartLineRemoveButton';
import {Button} from '~/components/ui/button';
import {Minus, Plus} from 'lucide-react';

export function CartLineQuantity({line}: {line: CartLine}) {
  if (!line || typeof line?.quantity === 'undefined') return null;
  const {id: lineId, quantity} = line;
  const prevQuantity = Number(Math.max(0, quantity - 1).toFixed(0));
  const nextQuantity = Number((quantity + 1).toFixed(0));

  return (
    <div className="flex items-center rounded-md">
      <CartLineUpdateButton lines={[{id: lineId, quantity: prevQuantity}]}>
        <Button
          disabled={quantity <= 1}
          value={prevQuantity}
          variant="ghost"
          className="p-0" // Add h-full here
        >
          <Minus />
        </Button>
      </CartLineUpdateButton>
      <p className="flex flex-col justify-center h-10 px-2 font-medium">
        {quantity}
      </p>
      <CartLineUpdateButton lines={[{id: lineId, quantity: nextQuantity}]}>
        <Button value={nextQuantity} variant="ghost" className="p-0">
          <Plus />
        </Button>
      </CartLineUpdateButton>
    </div>
  );
}
