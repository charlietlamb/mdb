import {CartApiQueryFragment} from 'storefrontapi.generated';
import {CartMainProps} from './types/CartMainProps';
import {Money} from '@shopify/hydrogen';

export function CartSummary({
  cost,
  layout,
  children = null,
}: {
  children?: React.ReactNode;
  cost: CartApiQueryFragment['cost'];
  layout: CartMainProps['layout'];
}) {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <h4 className="text-xl font-semibold">Totals</h4>
        <dl className="flex gap-1">
          <dt className="text-primary-600 font-medium">Subtotal:</dt>
          <dd>
            {cost?.subtotalAmount?.amount ? (
              <Money data={cost?.subtotalAmount} />
            ) : (
              '-'
            )}
          </dd>
        </dl>
      </div>
      {children}
    </div>
  );
}
