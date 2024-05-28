import {HeaderQuery} from 'storefrontapi.generated';
import {HeaderMenu} from './HeaderMenu';
import {HeaderProps} from './types/HeaderProps';
import {Viewport} from './types/Viewport';
import HeaderLogo from './HeaderLogo';

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
    <div className="flex flex-col items-center flex-grow">
      <HeaderLogo />
      <HeaderMenu
        menu={menu}
        primaryDomainUrl={primaryDomainUrl}
        viewport={viewport}
      />
    </div>
  );
}
