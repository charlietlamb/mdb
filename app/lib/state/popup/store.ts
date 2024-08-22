import {Product} from '@shopify/hydrogen/storefront-api-types';
import {create} from 'zustand';

export type State = {
  mobileOpen: boolean;
  setMobileOpen: (mobileOpen: boolean) => void;
  products: Product[];
  setProducts: (products: Product[]) => void;
  bestSellers: Product[];
  setBestSellers: (bestSellers: Product[]) => void;
};

export const usePopupStore = create<State>((set) => ({
  mobileOpen: false,
  setMobileOpen: (mobileOpen) => set({mobileOpen}),
  products: [],
  setProducts: (products) => set({products}),
  bestSellers: [],
  setBestSellers: (bestSellers) => set({bestSellers}),
}));
