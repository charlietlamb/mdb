export const GET_PRODUCT_BY_ID_QUERY = `#graphql
  query GetProductById($id: ID!) {
    product(id: $id) {
      id
      title
      description
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
      }
      images(first: 5) {
        edges {
          node {
            src
            altText
          }
        }
      }
      variants(first: 5) {
        edges {
          node {
            id
            title
            price {
              amount
              currencyCode
            }
          }
        }
      }
    }
  }
`;
