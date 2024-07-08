import {HeaderQuery} from 'storefrontapi.generated';
import {HeaderProps} from './types/HeaderProps';
import {useRootLoaderData} from '~/lib/root-data';
import {NavLink} from '@remix-run/react';
import {activeLinkStyle} from './functions/activeLinkStyle';
import {FALLBACK_HEADER_MENU} from './graphql/fallbackHeaderMenu';
import HeaderNavLink from './HeaderNavLink';
import {useHeaderContext} from './context/headerContext';
import {cn} from '~/lib/utils';

export function HeaderMenu({mobile = false}: {mobile?: boolean}) {
  return (
    <nav
      className={cn(
        'md:flex justify-center hidden gap-4',
        mobile && 'flex-col gap-1 flex items-center text-lg',
      )}
      role="navigation"
    >
      <HeaderNavLink href={'occasions'}>
        <NavLink
          className="font-semibold"
          end
          prefetch="intent"
          // style={activeLinkStyle}
          to="/occasions"
        >
          Occasions
        </NavLink>
      </HeaderNavLink>
      <HeaderNavLink href={'contact'}>
        <NavLink
          className="font-semibold"
          end
          prefetch="intent"
          // style={activeLinkStyle}
          to="/contact"
        >
          Contact
        </NavLink>
      </HeaderNavLink>
    </nav>
  );
}
