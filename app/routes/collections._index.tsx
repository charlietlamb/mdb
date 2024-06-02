import {useLoaderData} from '@remix-run/react';
import {json, type LoaderFunctionArgs} from '@shopify/remix-oxygen';
import {Pagination, getPaginationVariables, Image} from '@shopify/hydrogen';
import {COLLECTIONS_QUERY} from '~/components/collections/graphql/collectionsQuery';
import {CollectionsGrid} from '~/components/collections/CollectionsGrid';
import Loading from '~/components/general/Loading';
import PreviousPage from '~/components/general/PreviousPage';
import NextPage from '~/components/general/NextPage';
import PaginationButtons from '~/components/general/PaginationButtons';

export async function loader({context, request}: LoaderFunctionArgs) {
  const paginationVariables = getPaginationVariables(request, {
    pageBy: 4,
  });

  const {collections} = await context.storefront.query(COLLECTIONS_QUERY, {
    variables: paginationVariables,
  });

  return json({collections});
}

export default function Collections() {
  const {collections} = useLoaderData<typeof loader>();

  return (
    <div className="flex flex-col items-center w-full gap-4 p-4">
      <h1 className="text-4xl font-bold">Collections</h1>
      <Pagination connection={collections}>
        {({nodes, isLoading, PreviousLink, NextLink}) => (
          <div className="flex flex-col gap-4">
            <CollectionsGrid collections={nodes} />
            <PaginationButtons
              isLoading={isLoading}
              PreviousLink={PreviousLink}
              NextLink={NextLink}
            />
          </div>
        )}
      </Pagination>
    </div>
  );
}
