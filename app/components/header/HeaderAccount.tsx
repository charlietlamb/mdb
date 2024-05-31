import {Await, NavLink} from '@remix-run/react';
import {Suspense} from 'react';
import {CircleUser, UserPlus} from 'lucide-react';
import {Button} from '../ui/button';

export default function HeaderAccount({
  isLoggedIn,
}: {
  isLoggedIn: Promise<boolean>;
}) {
  return (
    <NavLink prefetch="intent" to="/account">
      <Suspense fallback="Sign in">
        <Await resolve={isLoggedIn} errorElement="Sign in">
          {(isLoggedIn) =>
            isLoggedIn ? (
              <Button variant="link" className="p-0">
                <CircleUser />
              </Button>
            ) : (
              <Button variant="link" className="p-0">
                <UserPlus />
              </Button>
            )
          }
        </Await>
      </Suspense>
    </NavLink>
  );
}
