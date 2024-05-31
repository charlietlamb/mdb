import {NavLink} from '@remix-run/react';
import {activeLinkStyle} from './functions/activeLinkStyle';

export default function HeaderLogo() {
  return (
    <NavLink prefetch="intent" to="/" style={activeLinkStyle} end>
      <strong>Hydrogen Tailwind</strong>
    </NavLink>
  );
}
