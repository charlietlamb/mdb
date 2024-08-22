import {json, redirect, type LoaderFunctionArgs} from '@shopify/remix-oxygen';
import {useLoaderData, Link, type MetaFunction} from '@remix-run/react';
import {Pagination, getPaginationVariables} from '@shopify/hydrogen';
import type {ProductItemFragment} from 'storefrontapi.generated';
import {ProductsGrid} from '~/components/collections-all/ProductsGrid';
import {COLLECTION_QUERY} from '~/components/collection/graphql/collectionQuery';
import AutoLoad from '~/components/general/AutoLoad';
import LoadPrevious from '~/components/general/LoadPrevious';
import {Separator} from '~/components/ui/separator';

export const meta: MetaFunction<typeof loader> = ({data}) => {
  return [{title: `Hydrogen | ${data?.collection.title ?? ''} Collection`}];
};

export async function loader({request, params, context}: LoaderFunctionArgs) {
  const {handle} = params;
  const {storefront} = context;
  const paginationVariables = getPaginationVariables(request, {
    pageBy: 8,
  });

  if (!handle) {
    return redirect('/collections');
  }

  const {collection} = await storefront.query(COLLECTION_QUERY, {
    variables: {handle, ...paginationVariables},
  });

  if (!collection) {
    throw new Response(`Collection ${handle} not found`, {
      status: 404,
    });
  }
  return json({collection});
}

export default function Collection() {
  const {collection} = useLoaderData<typeof loader>();
  console.log(collection);
  return (
    <div className="padding-main flex flex-col items-center w-full gap-4 p-4">
      <div className="flex flex-col items-center gap-1">
        <h1 className="font-larken text-4xl font-bold uppercase">
          {collection.title}
        </h1>
        <Separator className="bg-accent-950 w-20 h-[2px] px-4 " />
        <p className="">{collection.description}</p>
      </div>
      <Pagination connection={collection.products}>
        {({nodes, isLoading, PreviousLink, NextLink}) => (
          <>
            <LoadPrevious PreviousLink={PreviousLink} />
            <ProductsGrid products={nodes as ProductItemFragment[]} />
            <AutoLoad isLoading={isLoading} NextLink={NextLink} />
          </>
        )}
      </Pagination>
    </div>
  );
}
