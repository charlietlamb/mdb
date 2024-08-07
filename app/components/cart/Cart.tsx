import React, {useState} from 'react';
import {Sheet, SheetContent, SheetTrigger} from '~/components/ui/sheet';
import {Button} from '~/components/ui/button';
import {ShoppingCart} from 'lucide-react';
import CartContent from './CartContent';

export default function Cart({count}: {count: number}) {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          onClick={() => setOpen(true)}
          variant="ghost"
          className="relative flex items-center gap-2"
        >
          <ShoppingCart strokeWidth={1.5} />
          <span className="-top-1 -right-1 bg-primary absolute flex items-center justify-center w-5 h-5 text-xs text-white rounded-full">
            {count}
          </span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <CartContent />
      </SheetContent>
    </Sheet>
  );
}
