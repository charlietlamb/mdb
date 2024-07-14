import {createSlice} from '@reduxjs/toolkit';
import {Product} from '@shopify/hydrogen/storefront-api-types';
import {WhoTypeHome} from '~/data/who/types/WhoType';

export interface ProductState {
  product: Product | null;
  who: WhoTypeHome;
}

const initialState: ProductState = {
  product: null,
  who: 'home',
};

const ProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.product = action.payload;
    },
    setWho: (state, action) => {
      state.who = action.payload;
    },
  },
});

export const {setProduct, setWho} = ProductSlice.actions;

export default ProductSlice.reducer;
