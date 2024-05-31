import type {FooterQuery, HeaderQuery} from 'storefrontapi.generated';
import {FooterMenu} from './FooterMenu';

export function Footer({
  menu,
  shop,
}: FooterQuery & {shop: HeaderQuery['shop']}) {
  return (
    <footer>
      {menu && shop?.primaryDomain?.url && (
        <FooterMenu menu={menu} primaryDomainUrl={shop.primaryDomain.url} />
      )}
    </footer>
  );
}
