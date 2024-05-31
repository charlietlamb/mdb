import {Link} from '@remix-run/react';
import {SearchResultItemProps} from './types/SearchResultItemProps';
import {Image, Money} from '@shopify/hydrogen';

export function SearchResultItem({
  goToSearchResult,
  item,
}: SearchResultItemProps) {
  return (
    <li className="flex gap-1" key={item.id}>
      <Link onClick={goToSearchResult} to={item.url} className="flex gap-2">
        {item.image?.url && (
          <Image
            alt={item.image.altText ?? ''}
            src={item.image.url}
            width={50}
            height={50}
            className="rounded-md"
          />
        )}
        <div className="flex flex-col">
          {item.styledTitle ? (
            <div
              dangerouslySetInnerHTML={{
                __html: item.styledTitle,
              }}
            />
          ) : (
            <span className="font-medium">{item.title}</span>
          )}
          {item?.price && (
            <small>
              <Money data={item.price} />
            </small>
          )}
        </div>
      </Link>
    </li>
  );
}
