import {useEffect, useRef} from 'react';
import {Link} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';
import {Product} from '@shopify/hydrogen/storefront-api-types';

export function FeaturedCollection({
  products,
}: {
  products: Product[] | undefined;
}) {
  const linkRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (linkRefs.current.length > 0) {
      const maxHeight = Math.max(
        ...linkRefs.current.map((link) => link?.clientHeight || 0),
      );
      linkRefs.current.forEach((link) => {
        if (link) {
          link.style.height = `${maxHeight}px`;
        }
      });
    }
  }, [products, linkRefs]);

  if (!products) return null;
  return (
    <div className="padding-main flex flex-col items-center gap-8 p-8">
      <div className="gap flex flex-col items-center">
        <h3 className="text h1-size text-primary font-larken font-bold uppercase">
          Our best sellers
        </h3>
        <p className="text-accent h3-size">We think you'll love these</p>
      </div>
      <div className="md:flex-row flex flex-col items-stretch w-full gap-6">
        {products.map((product, index) => (
          <Link
            key={product.id}
            className="flex flex-col mx-auto flex-grow items-stretch h-full min-h-full md:w-full w-[70%] gap-6"
            to={`/products/${product.handle}`}
          >
            {product.images.nodes[0] && (
              <div className="!aspect-square ring-primary ring-2 ring-offset-white ring-offset-2 relative flex items-center justify-center w-full overflow-hidden">
                <Image data={product.images.nodes[0]} sizes="100vw" />
              </div>
            )}
            <div
              className="ring-primary ring-2 ring-offset-white ring-offset-2 border-primary flex flex-col items-center w-full h-full p-4 bg-white border"
              ref={(el) => (linkRefs.current[index] = el)}
            >
              <h3 className="font-larken h25-size font-primary flex-grow w-full my-auto font-bold text-center">
                {product.title}
              </h3>
              <p className="font-larken flex-shrink-0 font-light">
                £{product.priceRange.minVariantPrice.amount}0
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
