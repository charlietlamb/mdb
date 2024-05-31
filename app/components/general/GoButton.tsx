import {ArrowRight} from 'lucide-react';
import {Button} from '~/components/ui/button';
import {cn} from '~/lib/utils';

export default function GoButton({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Button className={cn('group flex gap-1 transition', className)}>
      {children}
      <ArrowRight className="group-hover:-rotate-45 transition" />
    </Button>
  );
}
