import {useHeaderContext} from './context/headerContext';

export default function HeaderNavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const {headerKey, setHeaderKey} = useHeaderContext();

  return (
    <div
      onMouseEnter={() => {
        if (headerKey !== href) setHeaderKey(href);
      }}
    >
      {children}
    </div>
  );
}
