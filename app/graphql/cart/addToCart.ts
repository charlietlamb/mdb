// utils/shopify.ts

import {shopifyClient} from '@shopify/hydrogen';

const ADD_TO_CART_MUTATION = `
  mutation addToCart($input: CartInput!) {
    cartCreate(input: $input) {
      cart {
        id
      }
    }
  }
`;

interface AddToCartResponse {
  cartCreate: {
    cart: {
      id: string;
    };
  };
}

export async function addToCart(
  variantId: string,
  quantity: number,
): Promise<string> {
  const response = await shopifyClient.mutate<AddToCartResponse>({
    mutation: ADD_TO_CART_MUTATION,
    variables: {
      input: {
        lines: [
          {
            merchandiseId: variantId,
            quantity: quantity,
          },
        ],
      },
    },
  });

  return response.data.cartCreate.cart.id;
}
