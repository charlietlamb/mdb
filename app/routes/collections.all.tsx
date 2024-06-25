import {json, type LoaderFunctionArgs} from '@shopify/remix-oxygen';
import {useLoaderData, Link, type MetaFunction} from '@remix-run/react';
import {Pagination, getPaginationVariables} from '@shopify/hydrogen';
import {ProductsGrid} from '~/components/collections-all/ProductsGrid';
import {CATALOG_QUERY} from '~/components/collections-all/graphql/catalogQuery';
import AutoLoad from '~/components/general/AutoLoad';
import LoadPrevious from '~/components/general/LoadPrevious';

export const meta: MetaFunction<typeof loader> = () => {
  return [{title: `Hydrogen | Products`}];
};

export async function loader({request, context}: LoaderFunctionArgs) {
  const {storefront} = context;
  const paginationVariables = getPaginationVariables(request, {
    pageBy: 8,
  });

  const {products} = await storefront.query(CATALOG_QUERY, {
    variables: {...paginationVariables},
  });

  return json({products});
}

export default function Collection() {
  const {products} = useLoaderData<typeof loader>();

  return (
    <div className="flex flex-col items-center w-full gap-4 p-4">
      <h1 className="text-4xl font-bold">Products</h1>
      <Pagination connection={products}>
        {({nodes, isLoading, PreviousLink, NextLink}) => (
          <>
            <LoadPrevious PreviousLink={PreviousLink} />
            <ProductsGrid products={nodes} />
            <AutoLoad isLoading={isLoading} NextLink={NextLink} />
          </>
        )}
      </Pagination>
    </div>
  );
}
