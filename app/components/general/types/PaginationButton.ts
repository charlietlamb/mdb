import {RemixLinkProps} from '@remix-run/react/dist/components';

export type PaginationButton = React.FC<
  Omit<RemixLinkProps, 'to'> & {
    ref?: React.Ref<HTMLAnchorElement> | undefined;
  }
>;
