import {createSlice} from '@reduxjs/toolkit';
import {Product} from '@shopify/hydrogen/storefront-api-types';

export interface ProductState {
  product: Product | null;
}

const initialState: ProductState = {
  product: null,
};

const ProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.product = action.payload;
    },
  },
});

export const {setProduct} = ProductSlice.actions;

export default ProductSlice.reducer;
