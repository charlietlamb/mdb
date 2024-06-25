import {Button} from '~/components/ui/button';
import {Sheet, SheetContent, SheetTrigger} from '~/components/ui/sheet';
import {Search as SearchIcon} from 'lucide-react';
import SearchContent from './SearchContent';
import {useState} from 'react';

export default function Search() {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button onClick={() => setOpen(true)} variant="ghost" className="p-2">
          <SearchIcon />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SearchContent />
      </SheetContent>
    </Sheet>
  );
}
