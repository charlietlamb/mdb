import {Link, useNavigate} from '@remix-run/react';
import {CartMainProps} from './types/CartMainProps';
import {Button} from '~/components/ui/button';
import {ArrowRight} from 'lucide-react';
import {cn} from '~/lib/utils';

export function CartEmpty({
  hidden = false,
  layout = 'aside',
}: {
  hidden: boolean;
  layout?: CartMainProps['layout'];
}) {
  const navigate = useNavigate();
  return (
    <div className={cn('flex flex-col gap-2', hidden && 'hidden')}>
      <p className="text-primary-500 font-normal">
        Looks like you haven&rsquo;t added anything yet, let&rsquo;s get you
        started!
      </p>
      <Button onClick={() => navigate('/collections')}>
        Get Started <ArrowRight />
      </Button>
    </div>
  );
}
