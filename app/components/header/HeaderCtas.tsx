import {Await, NavLink} from '@remix-run/react';
import {HeaderMenuMobileToggle} from './HeaderMenuMobileToggle';
import {HeaderProps} from './types/HeaderProps';
import {activeLinkStyle} from './functions/activeLinkStyle';
import {Suspense} from 'react';
import {SearchToggle} from './SearchToggle';
import {CartToggle} from './CartToggle';

export function HeaderCtas({
  isLoggedIn,
  cart,
}: Pick<HeaderProps, 'isLoggedIn' | 'cart'>) {
  return (
    <nav className="header-ctas" role="navigation">
      <HeaderMenuMobileToggle />
      <NavLink prefetch="intent" to="/account" style={activeLinkStyle}>
        <Suspense fallback="Sign in">
          <Await resolve={isLoggedIn} errorElement="Sign in">
            {(isLoggedIn) => (isLoggedIn ? 'Account' : 'Sign in')}
          </Await>
        </Suspense>
      </NavLink>
      <SearchToggle />
      <CartToggle cart={cart} />
    </nav>
  );
}
