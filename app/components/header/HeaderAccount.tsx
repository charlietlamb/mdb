import {Await, NavLink} from '@remix-run/react';
import {Suspense} from 'react';
import {CircleUser, UserPlus} from 'lucide-react';
import {Button} from '../ui/button';
import {cn} from '~/lib/utils';

export default function HeaderAccount({
  isLoggedIn,
  mobile = false,
}: {
  isLoggedIn: Promise<boolean>;
  mobile?: boolean;
}) {
  return (
    <NavLink
      prefetch="intent"
      to="/account"
      className={cn('md:flex hidden', mobile && 'flex')}
    >
      <Suspense fallback="Sign in">
        <Await resolve={isLoggedIn} errorElement="Sign in">
          {(isLoggedIn) => (
            <Button variant="link" className="flex items-center gap-2 p-0">
              {mobile && <p className="text-lg font-bold uppercase">Account</p>}
              {isLoggedIn ? (
                <CircleUser strokeWidth={mobile ? 2 : 1.5} />
              ) : (
                <UserPlus strokeWidth={mobile ? 2 : 1.5} />
              )}
            </Button>
          )}
        </Await>
      </Suspense>
    </NavLink>
  );
}
