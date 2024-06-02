import {Image} from '@shopify/hydrogen';
import {ProductVariantFragment} from 'storefrontapi.generated';

export function ProductImage({
  image,
}: {
  image: ProductVariantFragment['image'];
}) {
  if (!image) {
    return null;
  }
  return (
    <Image
      alt={image.altText || 'Product Image'}
      aspectRatio="1/1"
      data={image}
      key={image.id}
      sizes="(min-width: 45em) 50vw, 100vw"
    />
  );
}
