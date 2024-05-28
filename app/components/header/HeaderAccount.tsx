import {Await, NavLink} from '@remix-run/react';
import {Suspense} from 'react';
import {activeLinkStyle} from './functions/activeLinkStyle';

export default function HeaderAccount({
  isLoggedIn,
}: {
  isLoggedIn: Promise<boolean>;
}) {
  return (
    <NavLink prefetch="intent" to="/account" style={activeLinkStyle}>
      <Suspense fallback="Sign in">
        <Await resolve={isLoggedIn} errorElement="Sign in">
          {(isLoggedIn) => (isLoggedIn ? 'Account' : 'Sign in')}
        </Await>
      </Suspense>
    </NavLink>
  );
}
