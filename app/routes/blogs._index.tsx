import {json, type LoaderFunctionArgs} from '@shopify/remix-oxygen';
import {Link, useLoaderData, type MetaFunction} from '@remix-run/react';
import {Pagination, getPaginationVariables} from '@shopify/hydrogen';
import PaginationButtons from '~/components/general/PaginationButtons';
import {BLOGS_QUERY} from '~/components/blogs-all/graphql/blogsQuery';

export const meta: MetaFunction = () => {
  return [{title: `Hydrogen | Blogs`}];
};

export const loader = async ({
  request,
  context: {storefront},
}: LoaderFunctionArgs) => {
  const paginationVariables = getPaginationVariables(request, {
    pageBy: 10,
  });

  const {blogs} = await storefront.query(BLOGS_QUERY, {
    variables: {
      ...paginationVariables,
    },
  });

  return json({blogs});
};

export default function Blogs() {
  const {blogs} = useLoaderData<typeof loader>();

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <h1 className="text-4xl font-bold">Blogs</h1>
      <div className="lg:grid-cols-4 grid w-full grid-cols-2 gap-4">
        <Pagination connection={blogs}>
          {({nodes, isLoading, PreviousLink, NextLink}) => {
            return (
              <>
                {nodes.map((blog) => {
                  return (
                    <Link
                      key={blog.handle}
                      prefetch="intent"
                      to={`/blogs/${blog.handle}`}
                    >
                      <h2 className="text-2xl font-semibold">{blog.title}</h2>
                    </Link>
                  );
                })}
                <PaginationButtons
                  isLoading={isLoading}
                  NextLink={NextLink}
                  PreviousLink={PreviousLink}
                />
              </>
            );
          }}
        </Pagination>
      </div>
    </div>
  );
}
