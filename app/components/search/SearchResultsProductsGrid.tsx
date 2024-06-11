import {Link} from '@remix-run/react';
import {Image, Money, Pagination} from '@shopify/hydrogen';
import {SearchQuery} from 'storefrontapi.generated';
import {applyTrackingParams} from '~/lib/search';
import AutoLoad from '../general/AutoLoad';
import LoadPrevious from '../general/LoadPrevious';

export function SearchResultsProductsGrid({
  products,
  searchTerm,
}: Pick<SearchQuery, 'products'> & {searchTerm: string}) {
  return (
    <div>
      <h2 className="text-2xl font-semibold">Products</h2>
      <Pagination connection={products}>
        {({nodes, isLoading, NextLink, PreviousLink}) => {
          const ItemsMarkup = nodes.map((product) => {
            const trackingParams = applyTrackingParams(
              product,
              `q=${encodeURIComponent(searchTerm)}`,
            );

            return (
              <div className="flex items-center mb-2" key={product.id}>
                <Link
                  prefetch="intent"
                  to={`/products/${product.handle}${trackingParams}`}
                  className="flex items-center gap-2"
                >
                  {product.variants.nodes[0].image && (
                    <Image
                      data={product.variants.nodes[0].image}
                      alt={product.title}
                      width={50}
                      className="aspect-square rounded-md"
                    />
                  )}
                  <div>
                    <p className="font-medium">{product.title}</p>
                    <small>
                      <Money data={product.variants.nodes[0].price} />
                    </small>
                  </div>
                </Link>
              </div>
            );
          });
          return (
            <div>
              <LoadPrevious PreviousLink={PreviousLink} />
              <div>{ItemsMarkup}</div>
              <AutoLoad isLoading={isLoading} NextLink={NextLink} />
            </div>
          );
        }}
      </Pagination>
    </div>
  );
}
