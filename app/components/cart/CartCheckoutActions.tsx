import {ArrowRight} from 'lucide-react';
import {Button} from '~/components/ui/button';

export function CartCheckoutActions({checkoutUrl}: {checkoutUrl: string}) {
  if (!checkoutUrl) return null;
  return (
    <Button onClick={() => (window.location.href = checkoutUrl)}>
      Continue To Checkout <ArrowRight />
    </Button>
  );
}
