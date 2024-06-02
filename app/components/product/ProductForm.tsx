import {VariantSelector} from '@shopify/hydrogen';
import {ProductFragment, ProductVariantFragment} from 'storefrontapi.generated';
import {ProductOptions} from './ProductOptions';
import {AddToCartButton} from './AddToCartButton';
import {Button} from '~/components/ui/button';

export function ProductForm({
  product,
  selectedVariant,
  variants,
}: {
  product: ProductFragment;
  selectedVariant: ProductFragment['selectedVariant'];
  variants: Array<ProductVariantFragment>;
}) {
  return (
    <div className="flex flex-col gap-4">
      <VariantSelector
        handle={product.handle}
        options={product.options}
        variants={variants}
      >
        {({option}) => <ProductOptions key={option.name} option={option} />}
      </VariantSelector>
      <AddToCartButton
        disabled={!selectedVariant || !selectedVariant.availableForSale}
        onClick={() => {
          window.location.href = window.location.href + '#cart-aside';
        }}
        lines={
          selectedVariant
            ? [
                {
                  merchandiseId: selectedVariant.id,
                  quantity: 1,
                },
              ]
            : []
        }
      >
        <Button
          variant="add_to_cart"
          disabled={!selectedVariant?.availableForSale}
        >
          {selectedVariant?.availableForSale ? 'Add to cart' : 'Sold out'}
        </Button>
      </AddToCartButton>
    </div>
  );
}
