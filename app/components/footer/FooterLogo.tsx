import {Link} from '@remix-run/react';

export default function FooterLogo() {
  return (
    <Link to="/" className="border-primary border-spacing-1">
      <img
        width={1024}
        height={1024}
        className="w-36"
        src="/images/logoFull.jpg"
        alt="MDB Logo"
      />
    </Link>
  );
}
