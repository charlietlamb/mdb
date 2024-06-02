import {Link} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';
import {ArticleItemFragment} from 'storefrontapi.generated';

export function ArticleItem({
  article,
  loading,
}: {
  article: ArticleItemFragment;
  loading?: HTMLImageElement['loading'];
}) {
  const publishedAt = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(article.publishedAt!));
  return (
    <div className="flex flex-col" key={article.id}>
      <Link to={`/blogs/${article.blog.handle}/${article.handle}`}>
        {article.image && (
          <div className="aspect-video block">
            <Image
              alt={article.image.altText || article.title}
              aspectRatio="3/2"
              data={article.image}
              loading={loading}
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        )}
        <h3 className="font-semibold">{article.title}</h3>
        <p className="text-sm">{publishedAt}</p>
      </Link>
    </div>
  );
}
