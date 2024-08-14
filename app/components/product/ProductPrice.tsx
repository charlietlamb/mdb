import {Money} from '@shopify/hydrogen';
import {ProductFragment} from 'storefrontapi.generated';

export function ProductPrice({
  selectedVariant,
}: {
  selectedVariant: ProductFragment['selectedVariant'];
}) {
  return (
    <div className="text-primary text-lg font-bold">
      {selectedVariant?.compareAtPrice ? (
        <>
          <p>Sale</p>
          <div className="product-price-on-sale">
            {selectedVariant ? <Money data={selectedVariant.price} /> : null}
            <s>
              <Money data={selectedVariant.compareAtPrice} />
            </s>
          </div>
        </>
      ) : (
        selectedVariant?.price && (
          <div className="flex items-center gap-1">
            From <Money data={selectedVariant?.price} />
          </div>
        )
      )}
    </div>
  );
}
