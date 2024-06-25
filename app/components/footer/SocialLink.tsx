import {Link} from '@remix-run/react';

export default function SocialLink({
  url,
  children,
}: {
  url: string;
  children: React.ReactNode;
}) {
  return <Link to={url}>{children}</Link>;
}
