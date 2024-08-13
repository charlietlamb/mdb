import type {Product} from '@shopify/hydrogen-react/storefront-api-types';
import {AddToCartButton} from '../product/AddToCartButton';

export default function ProductAddToCartButton({
  product,
  onClick,
  children,
}: {
  product: Product;
  onClick: () => void;
  children: React.ReactNode;
}) {
  const variantId = product.variants.edges[0].node.id;

  if (!variantId) {
    return null;
  }

  return (
    <AddToCartButton
      lines={[
        {
          merchandiseId: variantId,
          quantity: 1,
        },
      ]}
      onClick={onClick}
    >
      {children}
    </AddToCartButton>
  );
}
