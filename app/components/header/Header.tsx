import {HeaderCtas} from './HeaderCtas';
import {HeaderProps} from './types/HeaderProps';
import HeaderAccount from './HeaderAccount';
import HeaderMiddle from './HeaderMiddle';
import {useState} from 'react';
import {HeaderContext} from './context/headerContext';
import HeaderPopup from './HeaderPopup';
import {motion} from 'framer-motion';
import {cn} from '~/lib/utils';

export function Header({header, isLoggedIn, cart}: HeaderProps) {
  const {shop, menu} = header;
  const [headerKey, setHeaderKey] = useState<string | null>(null);
  return (
    <HeaderContext.Provider value={{headerKey, setHeaderKey}}>
      <motion.header
        className="border-primary-800 shadow-primary-950/10 sticky top-0 z-10 border-b rounded-b-lg shadow-md"
        onMouseLeave={() => setHeaderKey(null)}
        layout
      >
        <div
          className={cn(
            'flex items-center p-4 py-2 bg-white relative z-10 rounded-b-lg',
            !!headerKey &&
              'border-b border-primary-800 rounded-none transition duration-500',
          )}
        >
          <HeaderAccount isLoggedIn={isLoggedIn} />
          <HeaderMiddle
            menu={menu}
            viewport="desktop"
            primaryDomainUrl={header.shop.primaryDomain.url}
          />
          <HeaderCtas isLoggedIn={isLoggedIn} cart={cart} />
        </div>
        <HeaderPopup />
      </motion.header>
    </HeaderContext.Provider>
  );
}
