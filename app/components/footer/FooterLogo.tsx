import {Link} from '@remix-run/react';

export default function FooterLogo() {
  return (
    <Link to="/" className="text-xl font-bold">
      Your Own Melody
    </Link>
  );
}
