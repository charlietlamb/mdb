import {Link} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';
import {Product} from '@shopify/hydrogen/storefront-api-types';
import {cn} from '~/lib/utils';
import {useHeaderContext} from '../context/headerContext';

export default function HeaderPopupItem({product}: {product: Product}) {
  const {setHeaderKey} = useHeaderContext();
  return (
    <Link
      key={product.id}
      className="flex flex-col cursor-pointer items-center h-full min-h-full md:w-full w-[70%] gap-6"
      to={`/products/${product.handle}`}
      onClick={() => setHeaderKey(null)}
    >
      <div className="flex flex-col items-center w-full gap-2">
        <div className="ring-primary ring-2 ring-offset-white ring-offset-2 h-52 flex items-center justify-center w-full overflow-hidden cursor-pointer">
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
