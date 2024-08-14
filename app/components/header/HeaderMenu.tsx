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
import {ChevronRight} from 'lucide-react';

export function HeaderMenu({mobile = false}: {mobile?: boolean}) {
  const {setHeaderKey} = useHeaderContext();
  return (
    <nav
      className={cn(
        'md:flex w-full justify-center hidden gap-8',
        mobile && 'flex-col gap-1 flex w-full items-center text-lg',
      )}
      role="navigation"
    >
      <HeaderNavLink
        href={'all'}
        className={cn('', mobile && 'w-full')}
        onClick={() => setHeaderKey(null)}
      >
        <NavLink
          className={cn(
            'whitespace-nowrap w-full font-bold text-center uppercase flex justify-between items-center',
            mobile && 'text-start font-normal',
          )}
          end
          prefetch="intent"
          // style={activeLinkStyle}
          to="/collections/all"
        >
          Shop All
          {mobile && <ChevronRight className="w-4 h-4 ml-2" />}
        </NavLink>
      </HeaderNavLink>
      <HeaderNavLink href={'best-sellers'} onClick={() => setHeaderKey(null)}>
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
      <HeaderNavLink href={'story'} onClick={() => setHeaderKey(null)}>
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
      <HeaderNavLink href={'offers'} onClick={() => setHeaderKey(null)}>
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
