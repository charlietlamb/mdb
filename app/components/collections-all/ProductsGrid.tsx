import {ProductItemFragment} from 'storefrontapi.generated';
import {ProductItem} from './ProductItem';

export function ProductsGrid({products}: {products: ProductItemFragment[]}) {
  return (
    <div className="lg:grid-cols-4 grid w-full grid-cols-2 gap-4">
      {products.map((product, index) => {
        return (
          <ProductItem
            key={product.id}
            product={product}
            loading={index < 8 ? 'eager' : undefined}
          />
        );
      })}
    </div>
  );
}
