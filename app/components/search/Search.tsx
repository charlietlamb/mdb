import {Button} from '~/components/ui/button';
import {Sheet, SheetContent, SheetTrigger} from '~/components/ui/sheet';
import {Menu} from 'lucide-react';
import SearchContent from './SearchContent';
import {useEffect, useState} from 'react';

export default function Search() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log('OPEN: ', open);
  }, [open]);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button onClick={() => setOpen(true)} variant="ghost">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SearchContent />
      </SheetContent>
    </Sheet>
  );
}
