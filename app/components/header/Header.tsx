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
import CreateSongButton from './CreateSongButton';
import {Button} from '~/components/ui/button';

export function Header({header, isLoggedIn, cart}: HeaderProps) {
  const {shop, menu} = header;
  const [headerKey, setHeaderKey] = useState<string | null>(null);
  const [hideShadow, setHideShadow] = useState(false);
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
          'bg-primary-200 shadow-black/10 sticky top-0 z-40 flex flex-col shadow-md',
          hideShadow && 'shadow-none',
        )}
        onMouseLeave={() => setHeaderKey(null)}
      >
        <div
          className={cn(
            'flex items-center bg-primary-200 relative z-20 rounded-b-lg p-4 padding-main duration-600 transition-all',
            !!headerKey && 'rounded-none transition duration-500',
          )}
        >
          <HeaderLogo className="flex-grow" />
          <div className="flex items-center gap-8">
            <HeaderMenu
              menu={menu}
              viewport="desktop"
              primaryDomainUrl={header.shop.primaryDomain.url}
            />
            <div className="flex items-center gap-2">
              <HeaderAccount isLoggedIn={isLoggedIn} />
              <HeaderCtas isLoggedIn={isLoggedIn} cart={cart} />
            </div>
            <CreateSongButton>
              <Button className="font-bold uppercase">Start your song</Button>
            </CreateSongButton>
          </div>
        </div>
        <HeaderPopup />
      </motion.header>
    </HeaderContext.Provider>
  );
}
