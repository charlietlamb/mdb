import {Menu, MicVocal} from 'lucide-react';
import {Sheet, SheetContent, SheetTrigger} from '../ui/sheet';
import CreateSongButton from './CreateSongButton';
import {Button} from '../ui/button';
import {HeaderMenu} from './HeaderMenu';
import {useMediaQuery} from 'react-responsive';
import {useState} from 'react';

export function HeaderMenuMobileToggle() {
  const isSmallScreen = useMediaQuery({query: '(max-width: 768px)'});
  const [open, setOpen] = useState(false);
  if (!isSmallScreen) return null;
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Menu className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col items-center gap-4">
        <p className="w-full text-2xl font-bold text-center">Your Own Melody</p>
        <HeaderMenu mobile />
        <CreateSongButton hidden={false}>
          <Button className="flex items-center gap-2 font-bold uppercase">
            Start your song <MicVocal />
          </Button>
        </CreateSongButton>
      </SheetContent>
    </Sheet>
  );
}
