import {SearchQuery} from 'storefrontapi.generated';

export type FetchSearchResultsReturn = {
  searchResults: {
    results: SearchQuery | null;
    totalResults: number;
  };
  searchTerm: string;
};
