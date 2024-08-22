import {Link} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';
import {Product} from '@shopify/hydrogen/storefront-api-types';

export default function RecommendedProducts({
  products,
}: {
  products: Product[] | undefined;
}) {
  if (!products) return null;
  return (
    <div className="flex flex-col items-center w-full gap-8 py-8">
      <div className="gap flex flex-col items-center">
        <h3 className="text h2-size text-primary font-larken font-bold text-center">
          Recommended Products
        </h3>
        <p className="text-accent h3-size">We think you'll love these</p>
      </div>
      <div className="md:flex-row flex flex-col items-stretch w-full gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            className="flex flex-col mx-auto flex-grow items-stretch h-full min-h-full md:w-full w-[70%] gap-6"
            to={`/products/${product.handle}`}
          >
            {product.images.nodes[0] && (
              <div className="aspect-square ring-primary ring-2 ring-offset-white ring-offset-2 relative flex items-center justify-center w-full overflow-hidden">
                <Image data={product.images.nodes[0]} sizes="100vw" />
              </div>
            )}
            <div className="ring-primary ring-2 ring-offset-white ring-offset-2 border-primary flex flex-col items-center flex-grow w-full h-full p-4 bg-white border">
              <h3 className="font-larken h25-size font-primary w-full font-bold text-center">
                {product.title}
              </h3>
              <p className="font-larken font-light">
                £{product.priceRange.minVariantPrice.amount}0
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
