import {defer, type LoaderFunctionArgs} from '@shopify/remix-oxygen';
import {useLoaderData, type MetaFunction} from '@remix-run/react';
import {RecommendedProducts} from '~/components/home/RecommendedProducts';
import {FeaturedCollection} from '~/components/home/FeaturedCollection';
import {FEATURED_COLLECTION_QUERY} from '~/components/home/FeaturedCollectionQuery';
import {RECOMMENDED_PRODUCTS_QUERY} from '~/components/home/RecommendedProductsQuery';
import Home from '~/components/home/Home';

export const meta: MetaFunction = () => {
  return [{title: 'Your Own Melody'}];
};

export async function loader({context}: LoaderFunctionArgs) {
  const {storefront} = context;
  const {collections} = await storefront.query(FEATURED_COLLECTION_QUERY);
  const featuredCollection = collections.nodes[0];
  const recommendedProducts = storefront.query(RECOMMENDED_PRODUCTS_QUERY);

  return defer({featuredCollection, recommendedProducts});
}

export default function Homepage() {
  const data = useLoaderData<typeof loader>();
  return <Home />;
}
