import {NormalizedPredictiveSearchResultItem} from './NormalizedPredictiveSearchResultItem';
import {NormalizedPredictiveSearchResults} from './NormalizedPredictiveSearchResults';
import {UseSearchReturn} from './UseSearchReturn';

export type SearchResultTypeProps = {
  goToSearchResult: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  items: NormalizedPredictiveSearchResultItem[];
  searchTerm: UseSearchReturn['searchTerm'];
  type: NormalizedPredictiveSearchResults[number]['type'];
};
