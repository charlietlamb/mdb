import {Link} from '@remix-run/react';
import {SearchQuery} from 'storefrontapi.generated';
import {Button} from '~/components/ui/button';

export function SearchResultArticleGrid({
  articles,
}: Pick<SearchQuery, 'articles'>) {
  return (
    <div>
      <h2 className="text-2xl font-semibold">Articles</h2>
      <div className="flex flex-col">
        {articles?.nodes?.map((article) => (
          <div className="search-results-item" key={article.id}>
            <Link prefetch="intent" to={`/blogs/${article.handle}`}>
              <Button className="p-0" variant="link">
                {article.title}
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
