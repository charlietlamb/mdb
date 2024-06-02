import {Link} from '@remix-run/react';
import {Image, Money} from '@shopify/hydrogen';
import {ProductItemFragment} from 'storefrontapi.generated';
import {useVariantUrl} from '~/lib/variants';

export function ProductItem({
  product,
  loading,
}: {
  product: ProductItemFragment;
  loading?: 'eager' | 'lazy';
}) {
  const variant = product.variants.nodes[0];
  const variantUrl = useVariantUrl(product.handle, variant.selectedOptions);
  return (
    <Link
      className="flex flex-col w-full gap-2"
      key={product.id}
      prefetch="intent"
      to={variantUrl}
    >
      {product.featuredImage && (
        <Image
          alt={product.featuredImage.altText || product.title}
          aspectRatio="1/1"
          data={product.featuredImage}
          loading={loading}
          sizes="(min-width: 45em) 400px, 100vw"
          className="rounded-md"
        />
      )}
      <div className="flex flex-col">
        <h4 className="font-medium leading-none">{product.title}</h4>
        <Money data={product.priceRange.minVariantPrice} className="text-sm" />
      </div>
    </Link>
  );
}
