import {useNavigate} from '@remix-run/react';
import {ArrowRight} from 'lucide-react';
import {Button} from '~/components/ui/button';

export function CartCheckoutActions({checkoutUrl}: {checkoutUrl: string}) {
  const navigate = useNavigate();

  if (!checkoutUrl) return null;
  return (
    <Button onClick={() => navigate(checkoutUrl)}>
      Continue To Checkout <ArrowRight />
    </Button>
  );
}
