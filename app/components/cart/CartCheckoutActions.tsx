import {redirect, useNavigate} from '@remix-run/react';
import {ArrowRight} from 'lucide-react';
import {Button} from '~/components/ui/button';

export function CartCheckoutActions({checkoutUrl}: {checkoutUrl: string}) {
  if (!checkoutUrl) return null;
  return (
    <Button onClick={() => redirect(checkoutUrl)}>
      Continue To Checkout <ArrowRight />
    </Button>
  );
}
