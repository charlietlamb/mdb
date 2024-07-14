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
      {/* <Image
        width={1024}
        height={1024}
        src="/images/logo.png"
        alt="Your Own Melody Logo"
      /> */}
      <strong>Your Own Melody</strong>
    </NavLink>
  );
}
