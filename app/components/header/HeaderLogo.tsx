import {NavLink} from '@remix-run/react';
import {activeLinkStyle} from './functions/activeLinkStyle';

export default function HeaderLogo({className}: {className?: string}) {
  return (
    <NavLink
      prefetch="intent"
      to="/"
      style={activeLinkStyle}
      end
      className={className}
    >
      <strong>Your Own Melody</strong>
    </NavLink>
  );
}
