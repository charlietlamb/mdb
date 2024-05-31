import {FooterQuery, HeaderQuery} from 'storefrontapi.generated';
import {FALLBACK_FOOTER_MENU} from './graphql/fallbackFooterMenu';
import {useRootLoaderData} from '~/lib/root-data';
import {NavLink} from '@remix-run/react';

export function FooterMenu({
  menu,
  primaryDomainUrl,
}: {
  menu: FooterQuery['menu'];
  primaryDomainUrl: HeaderQuery['shop']['primaryDomain']['url'];
}) {
  const {publicStoreDomain} = useRootLoaderData();

  return (
    <nav
      className="bg-primary-100 flex justify-around w-full p-4"
      role="navigation"
    >
      {(menu || FALLBACK_FOOTER_MENU).items.map((item) => {
        if (!item.url) return null;
        // if the url is internal, we strip the domain
        const url =
          item.url.includes('myshopify.com') ||
          item.url.includes(publicStoreDomain) ||
          item.url.includes(primaryDomainUrl)
            ? new URL(item.url).pathname
            : item.url;
        const isExternal = !url.startsWith('/');
        return isExternal ? (
          <a href={url} key={item.id} rel="noopener noreferrer" target="_blank">
            {item.title}
          </a>
        ) : (
          <NavLink
            end
            key={item.id}
            prefetch="intent"
            to={url}
            className="text-primary-900"
          >
            {item.title}
          </NavLink>
        );
      })}
    </nav>
  );
}
