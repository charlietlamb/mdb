import {Menu, Disc} from 'lucide-react';
import {Sheet, SheetContent, SheetTrigger} from '../ui/sheet';
import {Button} from '../ui/button';
import {HeaderMenu} from './HeaderMenu';
import {useMediaQuery} from 'react-responsive';
import {useState} from 'react';
import {Separator} from '../ui/separator';
import {HeaderMenuMobile} from './HeaderMenuMobile';
import {usePopupStore} from '~/lib/state/popup/store';

export function HeaderMenuMobileToggle({
  isLoggedIn,
}: {
  isLoggedIn: Promise<boolean>;
}) {
  const isSmallScreen = useMediaQuery({query: '(max-width: 768px)'});
  const {mobileOpen, setMobileOpen} = usePopupStore();
  if (!isSmallScreen) return null;
  return (
    <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
      <SheetTrigger asChild>
        <Menu className="min-w-6 min-h-6 cursor-pointer" strokeWidth={1.5} />
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col items-center">
        <p className="font-larken w-full text-2xl font-bold text-center">
          MBD Cosmetics
        </p>
        <Separator className="bg-accent-950 h-[2px] px-4 mb-1" />
        <HeaderMenuMobile />
      </SheetContent>
    </Sheet>
  );
}
