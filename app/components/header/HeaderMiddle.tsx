import {HeaderQuery} from 'storefrontapi.generated';
import {HeaderMenu} from './HeaderMenu';
import {HeaderProps} from './types/HeaderProps';
import {Viewport} from './types/Viewport';

export default function HeaderMiddle({
  menu,
  primaryDomainUrl,
  viewport,
}: {
  menu: HeaderProps['header']['menu'];
  primaryDomainUrl: HeaderQuery['shop']['primaryDomain']['url'];
  viewport: Viewport;
}) {
  return (
   
  );
}
