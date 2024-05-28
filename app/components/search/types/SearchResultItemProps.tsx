import {NormalizedPredictiveSearchResultItem} from './NormalizedPredictiveSearchResultItem';
import {SearchResultTypeProps} from './SearchResultTypeProps';

export type SearchResultItemProps = Pick<
  SearchResultTypeProps,
  'goToSearchResult'
> & {
  item: NormalizedPredictiveSearchResultItem;
};
