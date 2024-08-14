import {cn} from '~/lib/utils';
import {useHeaderContext} from './context/headerContext';

export default function HeaderNavLinkMobile({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  const {headerKey, setHeaderKey} = useHeaderContext();

  return (
    <div
      className={cn(
        'whitespace-nowrap cursor-pointer text-start font-normal uppercase flex justify-between items-center w-full',
        className,
      )}
      onClick={() => {
        if (headerKey !== href) setHeaderKey(href);
      }}
    >
      {children}
    </div>
  );
}
