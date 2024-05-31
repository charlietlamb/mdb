import {CartApiQueryFragment} from 'storefrontapi.generated';
import {UpdateDiscountForm} from './UpdateDiscountForm';
import {Input} from '../ui/input';
import {Button} from '../ui/button';
import {TicketPlus} from 'lucide-react';

export function CartDiscounts({
  discountCodes,
}: {
  discountCodes: CartApiQueryFragment['discountCodes'];
}) {
  const codes: string[] =
    discountCodes
      ?.filter((discount) => discount.applicable)
      ?.map(({code}) => code) || [];

  return (
    <div>
      {/* Have existing discount, display it with a remove option */}
      <dl hidden={!codes.length}>
        <div>
          <dt>Discount(s)</dt>
          <UpdateDiscountForm>
            <div className="cart-discount">
              <code>{codes?.join(', ')}</code>
              &nbsp;
              <button>Remove</button>
            </div>
          </UpdateDiscountForm>
        </div>
      </dl>

      {/* Show an input to apply a discount */}
      <UpdateDiscountForm discountCodes={codes}>
        <div className="flex gap-2">
          <Input type="text" name="discountCode" placeholder="Discount code" />
          <Button type="submit">
            <TicketPlus />
          </Button>
        </div>
      </UpdateDiscountForm>
    </div>
  );
}
