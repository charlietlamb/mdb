import {HeaderQuery} from 'storefrontapi.generated';
import {HeaderProps} from './types/HeaderProps';
import {useRootLoaderData} from '~/lib/root-data';
import {NavLink} from '@remix-run/react';
import {activeLinkStyle} from './functions/activeLinkStyle';
import {FALLBACK_HEADER_MENU} from './graphql/fallbackHeaderMenu';
import HeaderNavLink from './HeaderNavLink';
import {useHeaderContext} from './context/headerContext';
import {cn} from '~/lib/utils';
import {email} from '~/data/email/email';

export function HeaderMenu({mobile = false}: {mobile?: boolean}) {
  return (
    <nav
      className={cn(
        'md:flex w-full justify-center hidden gap-8',
        mobile && 'flex-col gap-1 flex items-center text-lg',
      )}
      role="navigation"
    >
      <HeaderNavLink href={'all'}>
        <NavLink
          className="whitespace-nowrap w-full font-bold text-center uppercase"
          end
          prefetch="intent"
          // style={activeLinkStyle}
          to="/all"
        >
          Shop All
        </NavLink>
      </HeaderNavLink>
      <HeaderNavLink href={'best-sellers'}>
        <NavLink
          className="whitespace-nowrap font-bold uppercase"
          end
          prefetch="intent"
          // style={activeLinkStyle}
          to="/best-sellers"
        >
          Best Sellers
        </NavLink>
      </HeaderNavLink>
      <HeaderNavLink href={'story'}>
        <NavLink
          className="whitespace-nowrap font-bold uppercase"
          end
          prefetch="intent"
          // style={activeLinkStyle}
          to="/story"
        >
          Our Story
        </NavLink>
      </HeaderNavLink>
      <HeaderNavLink href={'offers'}>
        <NavLink
          className="text-accent-600 whitespace-nowrap font-bold uppercase"
          end
          prefetch="intent"
          // style={activeLinkStyle}
          to="/offers"
        >
          Offers
        </NavLink>
      </HeaderNavLink>
    </nav>
  );
}
