import {HeaderCtas} from './HeaderCtas';
import {HeaderProps} from './types/HeaderProps';
import HeaderAccount from './HeaderAccount';
import HeaderMiddle from './HeaderMiddle';

export function Header({header, isLoggedIn, cart}: HeaderProps) {
  const {shop, menu} = header;
  return (
    <header className="border-primary-800 shadow-primary-950/10 sticky top-0 z-10 flex items-center p-4 py-2 bg-white border-b rounded-lg rounded-b shadow-md">
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
