import {HeaderMenuMobileToggle} from './HeaderMenuMobileToggle';
import {HeaderProps} from './types/HeaderProps';
import {CartToggle} from './CartToggle';
import Search from '../search/Search';

export function HeaderCtas({
  isLoggedIn,
  cart,
}: Pick<HeaderProps, 'isLoggedIn' | 'cart'>) {
  return (
    <nav className="flex items-center gap-2">
      <CartToggle cart={cart} />
      <Search />
    </nav>
  );
}
