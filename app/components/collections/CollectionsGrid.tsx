import {CollectionFragment} from 'storefrontapi.generated';
import {CollectionItem} from './CollectionItem';

export function CollectionsGrid({
  collections,
}: {
  collections: CollectionFragment[];
}) {
  return (
    <div className="lg:grid-cols-4 grid grid-cols-2 gap-4">
      {collections.map((collection, index) => (
        <CollectionItem
          key={collection.id}
          collection={collection}
          index={index}
        />
      ))}
    </div>
  );
}
