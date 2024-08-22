import {Link} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';
import {Product} from '@shopify/hydrogen/storefront-api-types';
import {usePopupStore} from '~/lib/state/popup/store';
import {cn} from '~/lib/utils';

export default function HeaderPopupItemMobile({product}: {product: Product}) {
  const {setMobileOpen} = usePopupStore();
  return (
    <Link
      key={product.id}
      to={`/products/${product.handle}`}
      onClick={() => setMobileOpen(false)}
    >
      <div
        className="flex flex-col items-center w-full gap-2"
        onClick={() => {
          //TODO: route to product/collection
        }}
      >
        <div className="ring-primary ring-2 ring-offset-white ring-offset-2 flex items-center justify-center w-full h-40 overflow-hidden cursor-pointer">
          <Image
            data={product.images.nodes[0]}
            alt={product.title}
            className={cn('object-cover')}
          />
        </div>
        <h5 className="font-semibold text-center capitalize">
          {product.title}
        </h5>
      </div>
    </Link>
  );
}
