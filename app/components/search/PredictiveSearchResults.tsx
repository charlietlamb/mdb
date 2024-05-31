import {Link} from '@remix-run/react';
import {NoPredictiveSearchResults} from './NoPredictiveSearchResults';
import {PredictiveSearchResult} from './PredictiveSearchResult';
import {usePredictiveSearch} from './functions/usePredictiveSearch';
import Loading from '~/components/general/Loading';
import {Button} from '~/components/ui/button';
import {ArrowRight} from 'lucide-react';
import GoButton from '../general/GoButton';

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
    return <Loading />;
  }

  if (!totalResults) {
    return <NoPredictiveSearchResults searchTerm={searchTerm} />;
  }

  return (
    <div className="flex flex-col gap-4 overflow-y-auto rounded-md">
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
          <GoButton>
            View all results for {' "' + searchTerm.current + '"'}
          </GoButton>
        </Link>
      )}
    </div>
  );
}
