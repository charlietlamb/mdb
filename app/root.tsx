import {getPaginationVariables, useNonce} from '@shopify/hydrogen';
import {defer, type LoaderFunctionArgs} from '@shopify/remix-oxygen';
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  useRouteError,
  useLoaderData,
  ScrollRestoration,
  isRouteErrorResponse,
  type ShouldRevalidateFunction,
} from '@remix-run/react';
import favicon from './assets/favicon.svg';
import mbdLogo from '/images/logoFull.jpg';
import appStyles from './styles/app.css?url';
import tailwindStyles from './styles/tailwind.css?url';
import tailwindMinStyles from './styles/tailwind.min.css?url';
import {Layout} from '~/components/Layout';
import {FEATURED_PRODUCTS_QUERY} from './components/home/FeaturedProductQuery';
import {Collection, Product} from '@shopify/hydrogen/storefront-api-types';
import PopupProvider from './components/providers/PopupProvider';
import {COLLECTION_QUERY} from './components/collection/graphql/collectionQuery';

/**
 * This is important to avoid re-fetching root queries on sub-navigations
 */
export const shouldRevalidate: ShouldRevalidateFunction = ({
  formMethod,
  currentUrl,
  nextUrl,
}) => {
  // revalidate when a mutation is performed e.g add to cart, login...
  if (formMethod && formMethod !== 'GET') {
    return true;
  }

  // revalidate when manually revalidating via useRevalidator
  if (currentUrl.toString() === nextUrl.toString()) {
    return true;
  }

  return false;
};

export function links() {
  return [
    {rel: 'stylesheet', href: appStyles},
    {rel: 'stylesheet', href: tailwindStyles},
    {rel: 'stylesheet', href: tailwindMinStyles},
    {
      rel: 'preconnect',
      href: 'https://cdn.shopify.com',
    },
    {
      rel: 'preconnect',
      href: 'https://shop.app',
    },
    {rel: 'icon', type: 'image/svg+xml', href: mbdLogo},
  ];
}

export async function loader({context, request}: LoaderFunctionArgs) {
  const {storefront, customerAccount, cart} = context;
  const publicStoreDomain = context.env.PUBLIC_STORE_DOMAIN;

  const isLoggedInPromise = customerAccount.isLoggedIn();
  const cartPromise = cart.get();

  // defer the footer query (below the fold)
  const footerPromise = storefront.query(FOOTER_QUERY, {
    cache: storefront.CacheLong(),
    variables: {
      footerMenuHandle: 'footer', // Adjust to your footer menu handle
    },
  });

  // await the header query (above the fold)
  const headerPromise = storefront.query(HEADER_QUERY, {
    cache: storefront.CacheLong(),
    variables: {
      headerMenuHandle: 'main-menu', // Adjust to your header menu handle
    },
  });

  const {collection} = await storefront.query(FEATURED_PRODUCTS_QUERY, {
    variables: {
      collectionId: 'gid://shopify/Collection/627716981081',
      country: context.storefront.i18n.country,
      language: context.storefront.i18n.language,
    },
  });

  const {collection: bestSellers} = await storefront.query(
    FEATURED_PRODUCTS_QUERY,
    {
      variables: {
        collectionId: 'gid://shopify/Collection/626912854361',
        country: context.storefront.i18n.country,
        language: context.storefront.i18n.language,
      },
    },
  );
  // const collectionIds = [
  //   'gid://shopify/Collection/627717538137',
  //   'gid://shopify/Collection/627717472601',
  //   'gid://shopify/Collection/627717439833',
  //   'gid://shopify/Collection/627717407065',
  //   'gid://shopify/Collection/627717341529',
  //   'gid://shopify/Collection/627717275993',
  //   'gid://shopify/Collection/627717210457',
  //   'gid://shopify/Collection/627717177689',
  // ];
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

  const paginationVariables = getPaginationVariables(request, {
    pageBy: 8,
  });
  const collections = await Promise.all(
    collectionIds.map(async (collectionId) => {
      const res = await storefront.query(COLLECTION_QUERY, {
        variables: {
          handle: collectionId,
          ...paginationVariables,
        },
      });
      return res.collection;
    }),
  );

  return defer(
    {
      cart: cartPromise,
      footer: footerPromise,
      header: await headerPromise,
      isLoggedIn: isLoggedInPromise,
      publicStoreDomain,
      headerData: {collection, bestSellers, collections},
    },
    {
      headers: {
        'Set-Cookie': await context.session.commit(),
      },
    },
  );
}

export default function App() {
  const nonce = useNonce();
  const {headerData, ...data} = useLoaderData<typeof loader>();
  const products = headerData
    ? (headerData.collection?.products.nodes as Product[])
    : [];
  const bestSellers = headerData.bestSellers?.products.nodes as Product[];
  const collections = headerData.collections as Collection[];
  return (
    <html lang="en" className="font-effra">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="flex flex-col min-h-screen overflow-x-hidden">
        <PopupProvider
          products={products}
          bestSellers={bestSellers}
          collections={collections}
        >
          <Layout {...data}>
            <Outlet />
          </Layout>
          <ScrollRestoration nonce={nonce} />
          <Scripts nonce={nonce} />
        </PopupProvider>
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  const rootData = useLoaderData<typeof loader>();
  const nonce = useNonce();
  let errorMessage = 'Unknown error';
  let errorStatus = 500;

  if (isRouteErrorResponse(error)) {
    errorMessage = error?.data?.message ?? error.data;
    errorStatus = error.status;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  }

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Layout {...rootData}>
          <div className="route-error">
            <h1>Oops</h1>
            <h2>{errorStatus}</h2>
            {errorMessage && (
              <fieldset>
                <pre>{errorMessage}</pre>
              </fieldset>
            )}
          </div>
        </Layout>
        <ScrollRestoration nonce={nonce} />
        <Scripts nonce={nonce} />
      </body>
    </html>
  );
}

const MENU_FRAGMENT = `#graphql
  fragment MenuItem on MenuItem {
    id
    resourceId
    tags
    title
    type
    url
  }
  fragment ChildMenuItem on MenuItem {
    ...MenuItem
  }
  fragment ParentMenuItem on MenuItem {
    ...MenuItem
    items {
      ...ChildMenuItem
    }
  }
  fragment Menu on Menu {
    id
    items {
      ...ParentMenuItem
    }
  }
` as const;

const HEADER_QUERY = `#graphql
  fragment Shop on Shop {
    id
    name
    description
    primaryDomain {
      url
    }
    brand {
      logo {
        image {
          url
        }
      }
    }
  }
  query Header(
    $country: CountryCode
    $headerMenuHandle: String!
    $language: LanguageCode
  ) @inContext(language: $language, country: $country) {
    shop {
      ...Shop
    }
    menu(handle: $headerMenuHandle) {
      ...Menu
    }
  }
  ${MENU_FRAGMENT}
` as const;

const FOOTER_QUERY = `#graphql
  query Footer(
    $country: CountryCode
    $footerMenuHandle: String!
    $language: LanguageCode
  ) @inContext(language: $language, country: $country) {
    menu(handle: $footerMenuHandle) {
      ...Menu
    }
  }
  ${MENU_FRAGMENT}
` as const;
