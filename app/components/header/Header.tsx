import {HeaderCtas} from './HeaderCtas';
import {HeaderProps} from './types/HeaderProps';
import HeaderAccount from './HeaderAccount';
import {useEffect, useState} from 'react';
import {HeaderContext} from './context/headerContext';
import HeaderPopup from './HeaderPopup';
import {motion} from 'framer-motion';
import {cn} from '~/lib/utils';
import HeaderLogo from './HeaderLogo';
import {HeaderMenu} from './HeaderMenu';
import {Button} from '~/components/ui/button';
import {HeaderMenuMobileToggle} from './HeaderMenuMobileToggle';
import {useMediaQuery} from 'react-responsive';
import {Disc} from 'lucide-react';
import Search from '../search/Search';
import {usePopupStore} from '~/lib/state/popup/store';

export function Header({header, isLoggedIn, cart}: HeaderProps) {
  const {shop, menu} = header;
  const isSmallScreen = useMediaQuery({query: '(max-width: 768px)'});
  const [headerKey, setHeaderKey] = useState<string | null>(null);
  const [hideShadow, setHideShadow] = useState(false);
  const {mobileOpen} = usePopupStore();
  useEffect(() => {
    if (headerKey === null) {
      setTimeout(() => {
        setHideShadow(false);
      }, 610);
    } else {
      setHideShadow(true);
    }
  }, [headerKey]);

  return (
    <HeaderContext.Provider value={{headerKey, setHeaderKey}}>
      <motion.header
        className={cn(
          'bg-white shadow-black/10 flex flex-col font-main border-b border-primary  sticky top-0 z-40',
          hideShadow && 'shadow-none',
        )}
        onMouseLeave={() => !mobileOpen && setHeaderKey(null)}
      >
        <div
          className={cn(
            'flex items-center bg-white relative z-40 rounded-b-lg p-4 padding-main duration-600 py-2 transition-all',
            !!headerKey &&
              !isSmallScreen &&
              'rounded-none transition duration-500',
          )}
        >
          <div className="grid items-center w-full grid-cols-5 gap-8">
            <div className="flex items-center gap-2">
              <HeaderMenuMobileToggle isLoggedIn={isLoggedIn} />
              <Search />
            </div>
            <div className="flex flex-col items-center col-span-3 gap-2">
              <HeaderLogo />
              <HeaderMenu />
            </div>
            <div className="ml-auto">
              <HeaderCtas isLoggedIn={isLoggedIn} cart={cart} />
            </div>
          </div>
        </div>
        <HeaderPopup />
      </motion.header>
    </HeaderContext.Provider>
  );
}
