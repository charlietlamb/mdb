import {CartForm} from '@shopify/hydrogen';
import {X} from 'lucide-react';
import {Button} from '~/components/ui/button';

export function CartLineRemoveButton({lineIds}: {lineIds: string[]}) {
  return (
    <CartForm
      route="/cart"
      action={CartForm.ACTIONS.LinesRemove}
      inputs={{lineIds}}
    >
      <Button
        type="submit"
        className="hover:text-red-500  text-primary-900 hover:bg-transparent right-[2px] top-[2px] absolute flex items-center h-auto gap-2 p-0 bg-transparent hover:bg-white rounded-full"
      >
        <X strokeWidth={2} />
      </Button>
    </CartForm>
  );
}
