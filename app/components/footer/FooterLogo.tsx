import {Link} from '@remix-run/react';

export default function FooterLogo() {
  return (
    <Link to="/" className="bg-primary-200 p-2 text-xl font-bold rounded-lg">
      {/* <img
        width={1024}
        height={1024}
        className="w-36"
        src="/images/logo.png"
        alt="Your Own Melody Logo"
      /> */}
      MDB
    </Link>
  );
}
