import {ProductFragment, ProductVariantsQuery} from 'storefrontapi.generated';
import {ProductPrice} from './ProductPrice';
import {Dispatch, SetStateAction, Suspense, useEffect, useRef} from 'react';
import {ProductForm} from './ProductForm';
import {Await} from '@remix-run/react';

export function ProductMain({
  selectedVariant,
  product,
  variants,
  setShowSticky,
}: {
  product: ProductFragment;
  selectedVariant: ProductFragment['selectedVariant'];
  variants: Promise<ProductVariantsQuery>;
  setShowSticky: Dispatch<SetStateAction<boolean>>;
}) {
  const {title, descriptionHtml} = product;
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowSticky(false);
        } else {
          setShowSticky(true);
        }
      },
      {threshold: 1}, // Adjust the threshold as needed
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [elementRef, setShowSticky]);
  return (
    <div className="md:py-0 md:px-4 lg:col-span-2 flex flex-col w-full gap-4 px-0 py-4">
      <div className="flex flex-col">
        <h1 className="text-primary text-4xl font-medium uppercase">{title}</h1>
        <ProductPrice selectedVariant={selectedVariant} />
      </div>
      <div ref={elementRef}>
        <Suspense
          fallback={
            <ProductForm
              product={product}
              selectedVariant={selectedVariant}
              variants={[]}
            />
          }
        >
          <Await
            errorElement="There was a problem loading product variants"
            resolve={variants}
          >
            {(data) => (
              <ProductForm
                product={product}
                selectedVariant={selectedVariant}
                variants={data.product?.variants.nodes || []}
              />
            )}
          </Await>
        </Suspense>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-xl font-semibold">Description</p>
        <div
          className="text-primary leading-6"
          dangerouslySetInnerHTML={{__html: descriptionHtml}}
        />
      </div>
    </div>
  );
}
