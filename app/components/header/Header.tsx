import {NavLink} from '@remix-run/react';
import {activeLinkStyle} from './functions/activeLinkStyle';
import {HeaderMenu} from './HeaderMenu';
import {HeaderCtas} from './HeaderCtas';
import {HeaderProps} from './types/HeaderProps';

export function Header({header, isLoggedIn, cart}: HeaderProps) {
  const {shop, menu} = header;
  return (
    <header className="header">
      <NavLink prefetch="intent" to="/" style={activeLinkStyle} end>
        <strong>{shop.name}</strong>
      </NavLink>
      <HeaderMenu
        menu={menu}
        viewport="desktop"
        primaryDomainUrl={header.shop.primaryDomain.url}
      />
      <HeaderCtas isLoggedIn={isLoggedIn} cart={cart} />
    </header>
  );
}
