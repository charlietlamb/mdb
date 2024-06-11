import {useEffect, useRef} from 'react';
import Loading from './Loading';
import NextPage from './NextPage';
import {PaginationButton} from './types/PaginationButton';

export default function AutoLoad({
  isLoading,
  NextLink,
}: {
  isLoading: boolean;
  NextLink: PaginationButton;
}) {
  const nextLinkRef = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // If the NextLink is in view and we're not currently loading, click it
        if (entries[0].isIntersecting && !isLoading) {
          nextLinkRef.current?.click();
        }
      },
      {
        threshold: 1.0, // Trigger the callback when the NextLink is fully in view
      },
    );

    if (nextLinkRef.current) {
      observer.observe(nextLinkRef.current);
    }

    return () => {
      if (nextLinkRef.current) {
        observer.unobserve(nextLinkRef.current);
      }
    };
  }, [isLoading]);
  return (
    <div className="flex w-full gap-2">
      <NextLink className="w-full" ref={nextLinkRef}>
        {isLoading ? <Loading /> : <NextPage className="w-full" />}
      </NextLink>
    </div>
  );
}
