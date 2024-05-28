import {HeaderCtas} from './HeaderCtas';
import {HeaderProps} from './types/HeaderProps';
import HeaderAccount from './HeaderAccount';
import HeaderMiddle from './HeaderMiddle';

export function Header({header, isLoggedIn, cart}: HeaderProps) {
  const {shop, menu} = header;
  return (
    <header className="border-primary-800 sticky top-0 z-10 flex items-center p-4 py-2 bg-white border-b">
      <HeaderAccount isLoggedIn={isLoggedIn} />
      <HeaderMiddle
        menu={menu}
        viewport="desktop"
        primaryDomainUrl={header.shop.primaryDomain.url}
      />
      <HeaderCtas isLoggedIn={isLoggedIn} cart={cart} />
    </header>
  );
}
