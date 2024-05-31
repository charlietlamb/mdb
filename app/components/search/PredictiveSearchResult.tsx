import {Link} from '@remix-run/react';
import {pluralToSingularSearchType} from './functions/pluralToSingularSearchType';
import {SearchResultTypeProps} from './types/SearchResultTypeProps';
import {SearchResultItem} from './SearchResultItem';
import {NormalizedPredictiveSearchResultItem} from './types/NormalizedPredictiveSearchResultItem';

export function PredictiveSearchResult({
  goToSearchResult,
  items,
  searchTerm,
  type,
}: SearchResultTypeProps) {
  const isSuggestions = type === 'queries';
  const categoryUrl = `/search?q=${
    searchTerm.current
  }&type=${pluralToSingularSearchType(type)}`;

  return (
    <div key={type} className="flex flex-col gap-2">
      <Link prefetch="intent" to={categoryUrl} onClick={goToSearchResult}>
        <h5 className="text-xl font-semibold capitalize">
          {isSuggestions ? 'Suggestions' : type}
        </h5>
      </Link>
      <ul className="flex flex-col gap-2">
        {items.map((item: NormalizedPredictiveSearchResultItem) => (
          <SearchResultItem
            goToSearchResult={goToSearchResult}
            item={item}
            key={item.id}
          />
        ))}
      </ul>
    </div>
  );
}
