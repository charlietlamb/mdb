import {defer, type LoaderFunctionArgs} from '@shopify/remix-oxygen';
import {useLoaderData, type MetaFunction} from '@remix-run/react';
import Home from '~/components/home/Home';
import {FEATURED_PRODUCTS_QUERY} from '~/components/home/FeaturedProductQuery';
import {ProductFragment} from 'storefrontapi.generated';
import {Collection, Product} from '@shopify/hydrogen/storefront-api-types';
import {COLLECTION_QUERY} from '~/components/collection/graphql/collectionQuery';
import {getPaginationVariables} from '@shopify/hydrogen';

export const meta: MetaFunction = () => {
  return [{title: 'MBD Cosmetics'}];
};

const collectionIds = [
  'deodorants',
  'gift-sets',
  'masks',
  'soap',
  'lips',
  'hair',
  'body-scrub',
  'body-butter',
];

export async function loader({request, params, context}: LoaderFunctionArgs) {
  const {storefront} = context;

  const {collection} = await storefront.query(FEATURED_PRODUCTS_QUERY, {
    variables: {
      collectionId: 'gid://shopify/Collection/626912854361',
      country: context.storefront.i18n.country,
      language: context.storefront.i18n.language,
    },
  });
  const paginationVariables = getPaginationVariables(request, {
    pageBy: 8,
  });

  const collections: Collection[] = [];
  await Promise.all(
    collectionIds.map(async (id) => {
      const {collection} = await storefront.query(COLLECTION_QUERY, {
        variables: {handle: id, ...paginationVariables},
      });
      collections.push(collection as Collection);
    }),
  );
  return defer({collection, collections});
}

export default function Homepage() {
  const data = useLoaderData<typeof loader>();
  const products = data.collection?.products.nodes as Product[] | undefined;
  const collections = data.collections as Collection[] | undefined;
  return <Home featuredProducts={products} collections={collections} />;
}
