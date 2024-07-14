import {defer, type LoaderFunctionArgs} from '@shopify/remix-oxygen';
import {useLoaderData, type MetaFunction} from '@remix-run/react';
import Home from '~/components/home/Home';
import {GET_PRODUCT_BY_ID_QUERY} from '~/graphql/products/GetProductById';
import {Product} from '@shopify/hydrogen/storefront-api-types';
export const meta: MetaFunction = () => {
  return [{title: 'Your Own Melody'}];
};

export async function loader({context}: LoaderFunctionArgs) {
  const {storefront} = context;
  const songProduct = await storefront.query(GET_PRODUCT_BY_ID_QUERY, {
    variables: {
      id: 'gid://shopify/Product/8916347060562',
    },
  });

  return defer(songProduct.product as Product);
}

export default function Homepage() {
  const song: Product = useLoaderData<typeof loader>();

  return <Home song={song} who={'girlfriend'} />;
}
