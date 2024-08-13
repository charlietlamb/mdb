import {defer, type LoaderFunctionArgs} from '@shopify/remix-oxygen';
import {useLoaderData, type MetaFunction} from '@remix-run/react';
import Home from '~/components/home/Home';
import {FEATURED_PRODUCTS_QUERY} from '~/components/home/FeaturedProductQuery';
import {ProductFragment} from 'storefrontapi.generated';
import {Product} from '@shopify/hydrogen/storefront-api-types';

export const meta: MetaFunction = () => {
  return [{title: 'MBD Cosmetics'}];
};

export async function loader({context}: LoaderFunctionArgs) {
  const {storefront} = context;

  const {collection} = await storefront.query(FEATURED_PRODUCTS_QUERY, {
    variables: {
      collectionId: 'gid://shopify/Collection/626912854361',
      country: context.storefront.i18n.country,
      language: context.storefront.i18n.language,
    },
  });
  return defer({collection});
}

export default function Homepage() {
  const data = useLoaderData<typeof loader>();
  const products = data.collection?.products.nodes as Product[] | undefined;
  return <Home featuredProducts={products} />;
}
