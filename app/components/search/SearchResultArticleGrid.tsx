import {Link} from '@remix-run/react';
import {SearchQuery} from 'storefrontapi.generated';

export function SearchResultArticleGrid({
  articles,
}: Pick<SearchQuery, 'articles'>) {
  return (
    <div className="search-result">
      <h2>Articles</h2>
      <div>
        {articles?.nodes?.map((article) => (
          <div className="search-results-item" key={article.id}>
            <Link prefetch="intent" to={`/blogs/${article.handle}`}>
              {article.title}
            </Link>
          </div>
        ))}
      </div>
      <br />
    </div>
  );
}
