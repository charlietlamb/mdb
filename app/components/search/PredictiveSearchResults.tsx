import {Link} from '@remix-run/react';
import {NoPredictiveSearchResults} from './NoPredictiveSearchResults';
import {PredictiveSearchResult} from './PredictiveSearchResult';
import {usePredictiveSearch} from './functions/usePredictiveSearch';

export function PredictiveSearchResults() {
  const {results, totalResults, searchInputRef, searchTerm, state} =
    usePredictiveSearch();

  function goToSearchResult(event: React.MouseEvent<HTMLAnchorElement>) {
    if (!searchInputRef.current) return;
    searchInputRef.current.blur();
    searchInputRef.current.value = '';
    // close the aside
    window.location.href = event.currentTarget.href;
  }

  if (state === 'loading') {
    return <div>Loading...</div>;
  }

  if (!totalResults) {
    return <NoPredictiveSearchResults searchTerm={searchTerm} />;
  }

  return (
    <div className="predictive-search-results">
      <div>
        {results.map(({type, items}) => (
          <PredictiveSearchResult
            goToSearchResult={goToSearchResult}
            items={items}
            key={type}
            searchTerm={searchTerm}
            type={type}
          />
        ))}
      </div>
      {searchTerm.current && (
        <Link onClick={goToSearchResult} to={`/search?q=${searchTerm.current}`}>
          <p>
            View all results for <q>{searchTerm.current}</q>
            &nbsp; →
          </p>
        </Link>
      )}
    </div>
  );
}
