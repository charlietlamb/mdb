import {defer, redirect, type LoaderFunctionArgs} from '@shopify/remix-oxygen';
import {useLoaderData, type MetaFunction} from '@remix-run/react';
import type {ProductFragment} from 'storefrontapi.generated';
import {getSelectedProductOptions} from '@shopify/hydrogen';
import type {
  Product,
  SelectedOption,
} from '@shopify/hydrogen/storefront-api-types';
import {getVariantUrl} from '~/lib/variants';
import {VARIANTS_QUERY} from '~/components/product/graphql/varientsQuery';
import {PRODUCT_QUERY} from '~/components/product/graphql/productQuery';
import {ProductImage} from '~/components/product/ProductImage';
import {ProductMain} from '~/components/product/ProductMain';
import {AliReview, ReviewFetch} from '~/components/product/reviews/Review';
import {useState} from 'react';
import StickyAddToCart from '~/components/product/StickyAddToCart';
import {reviews} from '~/data/reviews/reviews';
import ReviewList from '~/components/product/reviews/ReviewList';
import {FEATURED_PRODUCTS_QUERY} from '~/components/home/FeaturedProductQuery';
import RecommendedProducts from '~/components/product/RecommendedProducts';

export const meta: MetaFunction<typeof loader> = ({data}) => {
  return [{title: `Hydrogen | ${data?.product.title ?? ''}`}];
};

export async function loader({params, request, context}: LoaderFunctionArgs) {
  const {handle} = params;
  const {storefront} = context;

  if (!handle) {
    throw new Error('Expected product handle to be defined');
  }

  // await the query for the critical product data
  const {product} = await storefront.query(PRODUCT_QUERY, {
    variables: {handle, selectedOptions: getSelectedProductOptions(request)},
  });

  if (!product?.id) {
    throw new Response(null, {status: 404});
  }

  const firstVariant = product.variants.nodes[0];
  const firstVariantIsDefault = Boolean(
    firstVariant.selectedOptions.find(
      (option: SelectedOption) =>
        option.name === 'Title' && option.value === 'Default Title',
    ),
  );

  if (firstVariantIsDefault) {
    product.selectedVariant = firstVariant;
  } else {
    // if no selected variant was returned from the selected options,
    // we redirect to the first variant's url with it's selected options applied
    if (!product.selectedVariant) {
      throw redirectToFirstVariant({product, request});
    }
  }

  // In order to show which variants are available in the UI, we need to query
  // all of them. But there might be a *lot*, so instead separate the variants
  // into it's own separate query that is deferred. So there's a brief moment
  // where variant options might show as available when they're not, but after
  // this deffered query resolves, the UI will update.
  const variants = storefront.query(VARIANTS_QUERY, {
    variables: {handle},
  });

  let res = (await fetch(
    'https://widget-hub-api.alireviews.io/api/public/reviews',
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer 43aad528abab14f50c7fe48a85e0757d`,
        'Content-Type': 'application/json',
      },
    },
  )
    .then((res) => res.json())
    .catch((err) => {
      console.log(err?.message);
      return {data: {reviews: [], cursor: ''}, message: '', status: 0};
    })) as Promise<ReviewFetch>;

  //Other products to buy
  const {collection} = await storefront.query(FEATURED_PRODUCTS_QUERY, {
    variables: {
      collectionId: 'gid://shopify/Collection/626912854361',
      country: context.storefront.i18n.country,
      language: context.storefront.i18n.language,
    },
  });

  return defer({
    product,
    variants,
    res:
      'data' in res
        ? (res.data as {reviews: AliReview[]; cursor: string})
        : null,
    collection,
  });
}

function redirectToFirstVariant({
  product,
  request,
}: {
  product: ProductFragment;
  request: Request;
}) {
  const url = new URL(request.url);
  const firstVariant = product.variants.nodes[0];

  return redirect(
    getVariantUrl({
      pathname: url.pathname,
      handle: product.handle,
      selectedOptions: firstVariant.selectedOptions,
      searchParams: new URLSearchParams(url.search),
    }),
    {
      status: 302,
    },
  );
}

export default function Product() {
  const {product, variants, res, collection} = useLoaderData<typeof loader>();
  const {selectedVariant} = product;
  let reviews: AliReview[] = [];
  if (res && 'reviews' in res) reviews = res.reviews as AliReview[];
  const productId = product.id.split('/').pop();
  const filteredReviews = reviews.filter(
    (r) => r.product_id === parseInt(productId || ''),
  );

  const products = collection?.products.nodes as Product[] | undefined;
  const filteredProducts = products?.filter((p) => p.id !== product.id);
  const [showSticky, setShowSticky] = useState(false);
  return (
    <div className="relative">
      <div className="padding-main flex flex-col">
        <div className="md:grid-cols-2 lg:grid-cols-3 grid grid-cols-1 p-4">
          <ProductImage image={selectedVariant?.image} />
          <ProductMain
            selectedVariant={selectedVariant}
            product={product}
            variants={variants}
            setShowSticky={setShowSticky}
          />
        </div>
        <ReviewList allReviews={filteredReviews} />
        <RecommendedProducts products={filteredProducts} />
      </div>
      <StickyAddToCart
        product={product}
        selectedVariant={selectedVariant}
        show={showSticky}
      />
    </div>
  );
}
