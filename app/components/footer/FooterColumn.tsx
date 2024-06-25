import {Link} from '@remix-run/react';

export default function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: {
    title: string;
    url: string;
  }[];
}) {
  return (
    <div className="flex flex-col gap-2">
      <h5 className="text-xl font-bold uppercase">{title}</h5>
      <div className="flex flex-col gap-1">
        {links.map((link) => (
          <Link key={link.url} to={link.url} className="text-primary-300 ">
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
