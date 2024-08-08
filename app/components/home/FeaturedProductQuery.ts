export const FEATURED_PRODUCTS_QUERY = `#graphql
  fragment FeaturedProducts on Product {
    id
    title
    handle
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    images(first: 1) {
      nodes {
        id
        url
        altText
        width
        height
      }
    }
  }
  query FeaturedProducts ($country: CountryCode, $language: LanguageCode, $collectionId: ID!)
    @inContext(country: $country, language: $language) {
    collection(id: $collectionId) {
      products(first: 4, sortKey: BEST_SELLING, reverse: true) {
        nodes {
          ...FeaturedProducts
        }
      }
    }
  }
` as const;
