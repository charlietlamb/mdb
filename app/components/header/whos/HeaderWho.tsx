import {Link} from '@remix-run/react';

export default function Who({
  data,
}: {
  data: {title: string; url: string; image: string};
}) {
  const {title, url, image} = data;
  return (
    <Link className="flex flex-col items-center gap-2" to={url}>
      <h5 className="font-semibold text-center uppercase">{title}</h5>
      {/* <Image src={image} alt={title} /> */}
    </Link>
  );
}
