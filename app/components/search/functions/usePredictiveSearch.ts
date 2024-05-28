import {useEffect, useRef} from 'react';
import {UseSearchReturn} from '../types/UseSearchReturn';
import {useFetcher} from '@remix-run/react';
import {FetchSearchResultsReturn} from '../types/FetchSearchResultsReturn';
import {NO_PREDICTIVE_SEARCH_RESULTS} from '../graphql/noPredictiveSearchResults';
import {NormalizedPredictiveSearch} from '../types/NormalizedPredictiveSearch';

export function usePredictiveSearch(): UseSearchReturn {
  const searchFetcher = useFetcher<FetchSearchResultsReturn>({key: 'search'});
  const searchTerm = useRef<string>('');
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  if (searchFetcher?.state === 'loading') {
    searchTerm.current = (searchFetcher.formData?.get('q') || '') as string;
  }

  const search = (searchFetcher?.data?.searchResults || {
    results: NO_PREDICTIVE_SEARCH_RESULTS,
    totalResults: 0,
  }) as NormalizedPredictiveSearch;

  // capture the search input element as a ref
  useEffect(() => {
    if (searchInputRef.current) return;
    searchInputRef.current = document.querySelector('input[type="search"]');
  }, []);

  return {...search, searchInputRef, searchTerm, state: searchFetcher.state};
}
