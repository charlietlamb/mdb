import {create} from 'zustand';

export type State = {
  funnel: string;
  setFunnel: (funnel: string) => void;
};

export const useFunnelStore = create<State>((set) => ({
  funnel: 'home',
  setFunnel: (funnel) => set({funnel}),
}));
