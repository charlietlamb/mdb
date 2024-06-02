import {Link} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';
import {CollectionFragment} from 'storefrontapi.generated';

export function CollectionItem({
  collection,
  index,
}: {
  collection: CollectionFragment;
  index: number;
}) {
  return (
    <Link
      className="flex flex-col w-full gap-2"
      key={collection.id}
      to={`/collections/${collection.handle}`}
      prefetch="intent"
    >
      {collection?.image && (
        <Image
          alt={collection.image.altText || collection.title}
          aspectRatio="1/1"
          data={collection.image}
          loading={index < 3 ? 'eager' : undefined}
          className="rounded-md"
        />
      )}
      <h5 className="font-medium">{collection.title}</h5>
    </Link>
  );
}
