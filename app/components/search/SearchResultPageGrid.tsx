import {Link} from '@remix-run/react';
import {SearchQuery} from 'storefrontapi.generated';
import {Button} from '../ui/button';

export function SearchResultPageGrid({pages}: Pick<SearchQuery, 'pages'>) {
  return (
    <div>
      <h2 className="text-2xl font-semibold">Pages</h2>
      <div className="flex flex-col gap-1">
        {pages?.nodes?.map((page) => (
          <Link prefetch="intent" to={`/pages/${page.handle}`} key={page.id}>
            <Button variant="link" className="p-0">
              {page.title}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
}
