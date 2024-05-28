import {SearchQuery} from 'storefrontapi.generated';
import {SearchResultPageGrid} from './SearchResultPageGrid';
import {FetchSearchResultsReturn} from './types/FetchSearchResultsReturn';
import {SearchResultsProductsGrid} from './SearchResultsProductsGrid';
import {SearchResultArticleGrid} from './SearchResultArticleGrid';

export function SearchResults({
  results,
  searchTerm,
}: Pick<FetchSearchResultsReturn['searchResults'], 'results'> & {
  searchTerm: string;
}) {
  if (!results) {
    return null;
  }
  const keys = Object.keys(results) as Array<keyof typeof results>;
  return (
    <div>
      {results &&
        keys.map((type) => {
          const resourceResults = results[type];

          if (resourceResults.nodes[0]?.__typename === 'Page') {
            const pageResults = resourceResults as SearchQuery['pages'];
            return resourceResults.nodes.length ? (
              <SearchResultPageGrid key="pages" pages={pageResults} />
            ) : null;
          }

          if (resourceResults.nodes[0]?.__typename === 'Product') {
            const productResults = resourceResults as SearchQuery['products'];
            return resourceResults.nodes.length ? (
              <SearchResultsProductsGrid
                key="products"
                products={productResults}
                searchTerm={searchTerm}
              />
            ) : null;
          }

          if (resourceResults.nodes[0]?.__typename === 'Article') {
            const articleResults = resourceResults as SearchQuery['articles'];
            return resourceResults.nodes.length ? (
              <SearchResultArticleGrid
                key="articles"
                articles={articleResults}
              />
            ) : null;
          }

          return null;
        })}
    </div>
  );
}
