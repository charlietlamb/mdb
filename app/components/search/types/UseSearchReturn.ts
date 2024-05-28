import {useFetcher} from '@remix-run/react';
import {NormalizedPredictiveSearch} from './NormalizedPredictiveSearch';

export type UseSearchReturn = NormalizedPredictiveSearch & {
  searchInputRef: React.MutableRefObject<HTMLInputElement | null>;
  searchTerm: React.MutableRefObject<string>;
  state: ReturnType<typeof useFetcher>['state'];
};
