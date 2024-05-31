import {CartLine} from '@shopify/hydrogen/storefront-api-types';
import {CartMainProps} from './types/CartMainProps';
import {useVariantUrl} from '~/lib/variants';
import {Image} from '@shopify/hydrogen';
import {Link} from '@remix-run/react';
import {CartLinePrice} from './CartLinePrice';
import {CartLineQuantity} from './CartLineQuantity';
import {CartLineRemoveButton} from './CartLineRemoveButton';

export function CartLineItem({
  layout,
  line,
}: {
  layout: CartMainProps['layout'];
  line: CartLine;
}) {
  const {id, merchandise} = line;
  const {product, title, image, selectedOptions} = merchandise;
  const lineItemUrl = useVariantUrl(product.handle, selectedOptions);

  return (
    <li key={id} className="flex w-full gap-2">
      {image && (
        <div className="relative w-32">
          <Image
            alt={title}
            aspectRatio="1/1"
            data={image}
            loading="lazy"
            className="aspect-square rounded-md"
            width={128}
            height={128}
          />
          <CartLineRemoveButton lineIds={[id]} />
        </div>
      )}

      <div className="flex-grow">
        <div className="flex items-center justify-between gap-1">
          <Link
            prefetch="intent"
            to={lineItemUrl}
            onClick={() => {
              if (layout === 'aside') {
                // close the drawer
                window.location.href = lineItemUrl;
              }
            }}
          >
            <p className="font-bold">{product.title}</p>
          </Link>
          <CartLinePrice line={line} as="span" />
        </div>
        <ul>
          {selectedOptions.map((option) => (
            <li key={option.name} className="text-sm">
              {option.name}: {option.value}
            </li>
          ))}
        </ul>
        <CartLineQuantity line={line} />
      </div>
    </li>
  );
}
