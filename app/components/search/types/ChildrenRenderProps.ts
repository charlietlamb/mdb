import {useFetcher} from '@remix-run/react';
import {NormalizedPredictiveSearchResults} from './NormalizedPredictiveSearchResults';

export type ChildrenRenderProps = {
  fetchResults: (event: React.ChangeEvent<HTMLInputElement>) => void;
  fetcher: ReturnType<typeof useFetcher<NormalizedPredictiveSearchResults>>;
  inputRef: React.MutableRefObject<HTMLInputElement | null>;
};
