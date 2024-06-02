import {ArrowRight} from 'lucide-react';
import {Button} from '~/components/ui/button';
import {cn} from '~/lib/utils';

export default function NextPage({className}: {className?: string}) {
  return (
    <Button className={cn('flex gap-2 rounded-full', className)}>
      Next Page
      <ArrowRight />
    </Button>
  );
}
