import {NavLink} from '@remix-run/react';
import {activeLinkStyle} from './functions/activeLinkStyle';
import {Image} from '@shopify/hydrogen';

export default function HeaderLogo({className}: {className?: string}) {
  return (
    <NavLink
      prefetch="intent"
      to="/"
      style={activeLinkStyle}
      end
      className={className}
    >
      <img
        width={1024}
        height={1024}
        className="h-7 w-20"
        src="/images/logo.png"
        alt="MDB Logo"
      />
      {/* <strong>MDB</strong> */}
    </NavLink>
  );
}
