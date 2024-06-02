import {Suspense} from 'react';
import {RecommendedProductsQuery} from 'storefrontapi.generated';
import Loading from '~/components/general/Loading';
import {Await, Link} from '@remix-run/react';
import {Image, Money} from '@shopify/hydrogen';

export function RecommendedProducts({
  products,
}: {
  products: Promise<RecommendedProductsQuery>;
}) {
  return (
    <div className="flex flex-col gap-2 p-4">
      <h2 className="text-2xl font-semibold">Recommended Products</h2>
      <Suspense fallback={<Loading />}>
        <Await resolve={products}>
          {({products}) => (
            <div className="lg:grid-cols-4 grid grid-cols-2 gap-4">
              {products.nodes.map((product) => (
                <Link
                  key={product.id}
                  to={`/products/${product.handle}`}
                  className="flex flex-col gap-2"
                >
                  <Image
                    data={product.images.nodes[0]}
                    aspectRatio="1/1"
                    sizes="(min-width: 45em) 20vw, 50vw"
                    className="rounded-md"
                  />
                  <div className="flex flex-col">
                    <h4 className="text-lg font-medium leading-none">
                      {product.title}
                    </h4>
                    <Money
                      data={product.priceRange.minVariantPrice}
                      className="text-sm"
                    />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </Await>
      </Suspense>
    </div>
  );
}
