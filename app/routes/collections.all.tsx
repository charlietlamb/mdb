import {json, type LoaderFunctionArgs} from '@shopify/remix-oxygen';
import {useLoaderData, Link, type MetaFunction} from '@remix-run/react';
import {Pagination, getPaginationVariables} from '@shopify/hydrogen';
import {ProductsGrid} from '~/components/collections-all/ProductsGrid';
import {CATALOG_QUERY} from '~/components/collections-all/graphql/catalogQuery';
import AutoLoad from '~/components/general/AutoLoad';
import LoadPrevious from '~/components/general/LoadPrevious';
import {Separator} from '~/components/ui/separator';

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
    <div className="padding-main flex flex-col items-center w-full gap-4 p-4">
      <div className="flex flex-col items-center gap-1">
        <h1 className="font-larken text-4xl font-bold uppercase">Products</h1>
        <Separator className="bg-accent-950 w-20 h-[2px] px-4" />
        <p className="">A collection of all our products.</p>
      </div>
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
