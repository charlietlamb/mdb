import {Link} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';
import {FeaturedCollectionFragment} from 'storefrontapi.generated';

export function FeaturedCollection({
  collection,
}: {
  collection: FeaturedCollectionFragment;
}) {
  if (!collection) return null;
  const image = collection?.image;
  return (
    <Link
      className="flex flex-col items-center gap-2"
      to={`/collections/${collection.handle}`}
    >
      {image && <Image data={image} sizes="100vw" className="w-full" />}
      <h1 className="w-full text-4xl font-bold text-center">
        {collection.title}
      </h1>
    </Link>
  );
}
