import {defer, type LoaderFunctionArgs} from '@shopify/remix-oxygen';
import {useLoaderData, type MetaFunction} from '@remix-run/react';
import Home from '~/components/home/Home';
import {GET_PRODUCT_BY_ID_QUERY} from '~/graphql/products/GetProductById';
import {Product} from '@shopify/hydrogen/storefront-api-types';

export const meta: MetaFunction = () => {
  return [{title: 'MDB Cosmetics'}];
};

export async function loader({context}: LoaderFunctionArgs) {
  const {storefront} = context;

  // return defer();
  return null;
}

export default function Homepage() {
  const Product = useLoaderData<typeof loader>();

  return <Home />;
}
