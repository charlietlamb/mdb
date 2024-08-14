import {VariantSelector} from '@shopify/hydrogen';
import {ProductFragment, ProductVariantFragment} from 'storefrontapi.generated';
import {ProductOptions} from './ProductOptions';
import {AddToCartButton} from './AddToCartButton';
import {Button} from '~/components/ui/button';
import {useOpenStore} from '~/lib/state/open/store';
import {useState} from 'react';

export function ProductForm({
  product,
  selectedVariant,
  variants,
}: {
  product: ProductFragment;
  selectedVariant: ProductFragment['selectedVariant'];
  variants: Array<ProductVariantFragment>;
}) {
  const {setCart} = useOpenStore();
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="flex flex-col gap-4">
      <VariantSelector
        handle={product.handle}
        options={product.options}
        variants={variants}
      >
        {({option}) => <ProductOptions key={option.name} option={option} />}
      </VariantSelector>
      <div className="flex items-center gap-2">
        <div className="bg-accent-100 flex items-center gap-1">
          <Button
            disabled={quantity <= 1}
            onClick={() => setQuantity(quantity - 1)}
            variant="ghost"
          >
            -
          </Button>
          <p className="text-primary text-lg font-bold">{quantity}</p>
          <Button
            disabled={quantity >= 10}
            onClick={() => setQuantity(quantity + 1)}
            variant="ghost"
          >
            +
          </Button>
        </div>
        <AddToCartButton
          disabled={!selectedVariant || !selectedVariant.availableForSale}
          onClick={() => {
            setCart(true);
          }}
          lines={
            selectedVariant
              ? [
                  {
                    merchandiseId: selectedVariant.id,
                    quantity,
                  },
                ]
              : []
          }
        >
          <Button
            disabled={!selectedVariant?.availableForSale}
            className="w-full font-bold uppercase"
          >
            {selectedVariant?.availableForSale ? 'Add to cart' : 'Sold out'}
          </Button>
        </AddToCartButton>
      </div>
    </div>
  );
}
