import {cn} from '~/lib/utils';
import {useHeaderContext} from './context/headerContext';

export default function HeaderNavLink({
  href,
  onClick,
  className,
  children,
}: {
  href: string;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}) {
  const {headerKey, setHeaderKey} = useHeaderContext();

  return (
    <div
      className={cn('flex items-center justify-center', className)}
      onMouseEnter={() => {
        if (headerKey !== href) setHeaderKey(href);
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
