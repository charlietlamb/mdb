import {create} from 'zustand';

export type State = {
  cart: boolean;
  setCart: (open: boolean) => void;
};

export const useOpenStore = create<State>((set) => ({
  cart: false,
  setCart: (cart) => set({cart}),
}));
